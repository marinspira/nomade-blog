import { PostsContext } from "@/context/allPosts";
import styles from './section.module.css'
import { useContext, useEffect, useState } from "react";
import { extractFirstImage } from "@/utils/extractImg";
import map from '@/assets/map5.svg'

function Topo({ params }) {
    const { posts } = useContext(PostsContext);
    
    const [firstImages, setFirstImages] = useState([]);

    const [dragging, setDragging] = useState(false);

    const handleDragStart = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const dropX = e.clientX;
        const dropY = e.clientY;
        // Aqui você pode adicionar a lógica para manipular a posição da imagem
    };

    useEffect(() => {
        if (posts.length > 0) {
            const images = posts.map(post => {
                const { imageUrl } = extractFirstImage(post.content);
                return imageUrl || "";
            });
            setFirstImages(images);
        }
    }, [posts]);

    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <img className={styles.firstImage} src={firstImages[0]} alt=""/>
                <h1>{posts.title}</h1>
            </div>
            <div className={styles.column2}>
                <div className={styles.map}
                    draggable
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <img src={map.src} alt="map" />
                </div>
                <div className={styles.posts}>
                    {posts.map((post, index) => (
                        <div className={styles.post}>
                            <a href={`/post/${post.id}`} key={post.id}>
                                <label>{post.labels}</label>
                                <img src={firstImages[index]} alt={post.title}/>
                                <h2>{post.title}</h2>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Topo;
