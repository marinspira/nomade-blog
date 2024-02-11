import { PostsContext } from "@/context/allPosts";
import styles from './section.module.css'
import { useContext, useEffect, useState } from "react";
import { extractFirstImage } from "@/utils/extractImg";

function Topo({ params }) {
    const { posts } = useContext(PostsContext);
    
    const [firstImage, setFirstImage] = useState("");

    useEffect(() => {
        if (posts.length > 0) {
            const image = extractFirstImage(posts[0].content);
            setFirstImage(image || "");
        }
    }, [posts]);

    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <img className={styles.firstImage} src={firstImage} alt=""/>
            </div>
            <div className={styles.column}>
                {posts.map((post) => (
                    <a href={`/post/${post.id}`} key={post.id}>
                    <label>{post.labels}</label>
                    <img src={firstImage} alt={post.title}/>
                    <h2>{post.title}</h2>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Topo;
