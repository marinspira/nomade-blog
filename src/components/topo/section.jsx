import { PostsContext } from "@/context/allPosts";
import styles from './section.module.css'
import { useContext, useEffect, useState } from "react";
import { extractFirstImage } from "@/utils/extractImg";
import map from '@/assets/map4.png'

function Topo({ params }) {
    const { posts } = useContext(PostsContext);
    
    const [firstImages, setFirstImages] = useState([]);

    useEffect(() => {
        if (posts.length > 0) {
            const images = posts.map(post => {
                const { imageUrl } = extractFirstImage(post.content);
                return imageUrl || "";
            });
            setFirstImages(images);
        }
    }, [posts]);

    console.log(posts[0])

    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <img className={styles.firstImage} src={firstImages[0]} alt=""/>
                <h1>{posts.title}</h1>
            </div>
            <div className={styles.column2}>
                <div className={styles.map}>
                    <img src={map.src} alt="map"/>
                </div>
                <div className={styles.posts}>
                    {posts.map((post, index) => (
                        <a className={styles.post} href={`/post/${post.id}`} key={post.id}>
                            <label>{post.labels}</label>
                            <img src={firstImages[index]} alt={post.title}/>
                            <h2>{post.title}</h2>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Topo;
