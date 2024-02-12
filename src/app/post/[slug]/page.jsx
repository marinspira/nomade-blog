import Post from "@/components/single-post/section";
import axios from "axios";

export default function Page({ params }) {

  const id = params.slug

  return (
    <Post id={id}/>
  )
}

export async function generateStaticParams() {
  const response = await axios.get(
    `https://www.googleapis.com/blogger/v3/blogs/8843549498875885847/posts?key=AIzaSyDKlUF9eOK_ybiaNuvqMYBSxCyT-UCSSwI`
  );

  const posts = response.data.items
  
  return posts.map((post) => ({
    slug: post.id,
  }))
}