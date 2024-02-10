'use client'
import { PostsContext } from "@/context/allPosts";
import { useContext } from "react";

function Topo() {

  const { posts } = useContext(PostsContext)

    return (
        <>
            <div>
            </div>
            <div>
                <img src="" alt=""/>
                {posts.map((post) => (
                    <a href={`/blog/${post.id}`} key={post.id}>
                    <label>{post.labels}</label>
                    <h2>{post.title}</h2>
                    </a>
                ))}
            </div>
        </>
    )
}

export default Topo