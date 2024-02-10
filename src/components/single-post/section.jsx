import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { renderHTML } from '@/utils/renderHtml';

function Post() {
    const [singlePost, setSinglePost] = useState(null);
    const { postId } = useParams();

    useEffect(() => {
        axios
            .get(`https://www.googleapis.com/blogger/v3/blogs/8843549498875885847/posts/${postId}?key=AIzaSyDKlUF9eOK_ybiaNuvqMYBSxCyT-UCSSwI`)
            .then((res) => {
                setSinglePost(res.data);
            })
            .catch((error) => console.error(error));
    }, [postId]);

    return (
        <div>
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
