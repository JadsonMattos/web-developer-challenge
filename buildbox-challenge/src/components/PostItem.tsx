import React from 'react';
import { PostContainer, PostHeader, PostImage, PostContent, PostMessage, PostAuthor  } from '../styles/PostItemStyles';;

interface ItemProps {
    name: string;
    message: string;
    photo: any;
    onRemove: () => void;
}

const PostItem: React.FC<ItemProps> = ({ name, message, photo, onRemove }) => {
    return (
        <PostContainer>
            <PostHeader>
                <PostImage src={URL.createObjectURL(photo)} alt="post" />
                <PostContent>
                    <PostMessage>{message}</PostMessage>
                    <PostAuthor>Enviado por {name}</PostAuthor>
                </PostContent>
            </PostHeader>
            <button onClick={onRemove}>Remover</button>
        </PostContainer>
    );
};

export default PostItem;
