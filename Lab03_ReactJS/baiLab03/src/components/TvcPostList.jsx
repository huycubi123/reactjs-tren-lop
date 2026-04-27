import React, { useState, useEffect } from 'react';

const TvcPostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.slice(0, 5))) 
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="mt-3">
            <ul className="list-group">
                {posts.map(post => (
                    <li key={post.id} className="list-group-item">{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TvcPostList;