'use client'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { renderHTML } from '@/utils/renderHtml';

function Post({ slug }) {
    const [singlePost, setSinglePost] = useState(null);

    useEffect(() => {
        axios
            .get(`https://www.googleapis.com/blogger/v3/blogs/8843549498875885847/posts/${slug}?key=AIzaSyDKlUF9eOK_ybiaNuvqMYBSxCyT-UCSSwI`)
            .then((res) => {
                setSinglePost(res.data);
            })
            .catch((error) => console.error(error));
    }, [slug]);

    return (
        <div>
            <h1>este post é um deus</h1>
            {singlePost ? (
                <div>
                    <h2>{singlePost.title}</h2>
                    <div dangerouslySetInnerHTML={renderHTML(singlePost.content)} />
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default Post;
