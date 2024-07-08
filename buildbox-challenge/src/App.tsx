import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import GlobalStyles from './styles/GlobalStyles';

interface Post {
    id: number;
    name: string;
    message: string;
    photo: File | null;
}

const App: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const addPost = (name: string, message: string, photo: File | null) => {
        const newPost: Post = {
            id: Date.now(),
            name,
            message,
            photo,
        };
        setPosts([...posts, newPost]);
    };

    const removePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    const removeAllPosts = () => {
        setPosts([]);
    };

    return (
        <>
          <GlobalStyles />
          <div>
            <PostForm onAddPost={addPost} removeAllPosts={removeAllPosts} />
            <PostList posts={posts} onRemovePost={removePost} />
          </div>
        </>
    );
};

export default App;
