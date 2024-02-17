import { PostsContext } from "@/context/allPosts";
import styles from './section.module.css'
import { useContext, useEffect, useState } from "react";
import { extractFirstImage } from "@/utils/extractImg";
import map from '@/assets/map5.svg'

function Topo({ params }) {
    const { posts } = useContext(PostsContext);
    
    const [firstImages, setFirstImages] = useState([]);
    const [firstPost, setFirstPost] = useState({})
    
    useEffect(() => {
        if (posts.length > 0) {
            const images = posts.map(post => {
                const { imageUrl } = extractFirstImage(post.content);
                return imageUrl || "";
            });
            setFirstImages(images);

            const texto = posts[0].title;
            const id = posts[0].id
            const autor = ''
            setFirstPost({ texto, id, autor })
        }
    }, [posts]);

    return (
        <div className={styles.row}>
            <a className={styles.column} href={`/post/${firstPost.id}`}>
                <div className={styles.content}>
                    <span>Último post</span>
                    <h1>{firstPost.texto}</h1>
                </div>
                <div className={styles.gradientOverlay}></div>
                <img className={styles.firstImage} src={firstImages[0]} alt=""/>
            </a>
            <div className={styles.column2}>
                <div className={styles.map}>
                    <img src={map.src} alt="map" />
                </div>
                <div className={styles.posts}>
                    {posts.map((post, index) => (
                        <div key={index} className={styles.post}>
                            <a href={`/post/${post.id}`} key={post.id}>
                                <label>{post.labels}</label>
                                <h2 className={styles.title}>{post.title}</h2>
                                <div className={styles.gradientOverlay}></div>
                                <img src={firstImages[index]} alt={post.title}/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Topo;
