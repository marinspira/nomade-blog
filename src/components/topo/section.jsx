import { PostsContext } from "@/context/allPosts";
import styles from './section.module.css'
import { useContext, useEffect, useState } from "react";
import { extractFirstImage } from "@/utils/extractImg";
import map from '@/assets/map5.svg'
import Link from "next/link";
import formatDate from "@/utils/formatDate";

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

            console.log(posts)

            const texto = posts[0].title;
            const id = posts[0].id
            const author = posts[0].author.displayName
            const authorImg = posts[0].author.image.url
            const date = formatDate(posts[0].published) 
            setFirstPost({ texto, id, author, authorImg, date })
        }
    }, [posts]);

    return (
        <div className={styles.row}>
            <Link className={styles.column} href={`/post/${firstPost.id}`}>
                <div className={styles.content}>
                    <span>Último post</span>
                    <h1>{firstPost.texto}</h1>
                    <div className={styles.details}>
                        <div className={styles.itens}>
                            <div className={styles.author}>
                                <img src={firstPost.authorImg} alt={firstPost.author}/>
                                <p><span>Autor:</span><br/>{firstPost.author}</p>
                            </div>
                            <div className={styles.date}>
                                <span>Postado:</span>
                                <p>{firstPost.date}</p>
                            </div>
                        </div>
                        <button>Ler post</button>
                    </div>
                </div>
                <div className={styles.gradientOverlay}></div>
                <img className={styles.firstImage} src={firstImages[0]} alt=""/>
            </Link>
            <div className={styles.column2}>
                <div className={styles.map}>
                    <img src={map.src} alt="map" />
                </div>
                <div className={styles.posts}>
                    {posts.map((post, index) => (
                        <div key={index} className={styles.post}>
                            <Link href={`/post/${post.id}`} key={post.id}>
                                <label>{post.labels}</label>
                                <h2 className={styles.title}>{post.title}</h2>
                                <div className={styles.gradientOverlay}></div>
                                <img src={firstImages[index]} alt={post.title}/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Topo;
