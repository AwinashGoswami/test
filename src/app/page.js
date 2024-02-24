"use client"
import { useEffect, useState } from "react";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                } else {
                    console.error(`Error: Unable to fetch data. Status code: ${response.status}`);
                }
            } catch (error) {
                console.error(`Error: ${error.message}`);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <a href={`/Posts/${post.id}`}>
                            {post.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;
