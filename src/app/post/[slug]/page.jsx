import Post from "@/components/single-post/section";
import axios from "axios";

export default function Page({ params }) {
  return (
    <Post id={params}/>
  )
}

export async function generateStaticParams() {
  const response = await axios.get(
    `https://www.googleapis.com/blogger/v3/blogs/8843549498875885847/posts?key=AIzaSyDKlUF9eOK_ybiaNuvqMYBSxCyT-UCSSwI`
  );

  const posts = response.data.items

  console.log(posts[0].id);
  
  return posts.map((post) => ({
    slug: post.id,
  }))
}