import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext()

export function PostsProvider({ children }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/blogger/v3/blogs/8843549498875885847/posts?key=AIzaSyDKlUF9eOK_ybiaNuvqMYBSxCyT-UCSSwI`
                );
                setPosts(response.data.items);
            } catch (error) {
                console.error('Erro ao buscar posts do Blogger:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <PostsContext.Provider value={{ posts }}>
            {children}
        </PostsContext.Provider>
    )
}