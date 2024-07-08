import React from 'react';
import PostItem from './PostItem';

interface Post {
    id: number;
    name: string;
    message: string;
    photo: any;
}

interface ListProps {
    posts: Post[];
    onRemovePost: (id: number) => void;
}

const PostList: React.FC<ListProps> = ({ posts, onRemovePost }) => {
    return (
        <div>
            {posts.map((post) => (
                <PostItem
                    key={post.id}
                    name={post.name}
                    message={post.message}
                    photo={post.photo}
                    onRemove={() => onRemovePost(post.id)}
                />
            ))}
        </div>
    );
};

export default PostList;
