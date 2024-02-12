'use client'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { renderHTML } from '@/utils/renderHtml';
import { extractFirstImage } from "@/utils/extractImg";
import styles from './secton.module.css'

function Post({ id }) {
    const [singlePost, setSinglePost] = useState(null);

    useEffect(() => {
        axios
            .get(`https://www.googleapis.com/blogger/v3/blogs/8843549498875885847/posts/${id}?key=AIzaSyDKlUF9eOK_ybiaNuvqMYBSxCyT-UCSSwI`)
            .then((res) => {
                const post = res.data
                const { imageUrl, html } = extractFirstImage(post.content);
                setSinglePost({ html, imageUrl, post });
            })
            .catch((error) => {
                console.log('catch', id)
                console.error(error)
            });
    }, [id]);
    
    return (
        <div>
            {singlePost ? (
                <div className={styles.row}>
                    <div className={styles.imgContent}>
                        <img src={singlePost.imageUrl} alt=''/>
                    </div>
                    <div className={styles.contentContent}>
                        <h2>{singlePost.post.title}</h2>
                        <div dangerouslySetInnerHTML={renderHTML(singlePost.html)} />
                    </div>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default Post;
