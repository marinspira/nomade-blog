'use client';

import { PostsProvider } from "@/context/allPosts";

export function Providers({ children }) {
    return (
        <PostsProvider>
            {children}
        </PostsProvider>
    );
}