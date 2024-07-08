import React, { useState } from 'react';
import { FormContainer, ImageInputContainer, ImageInputLabel, ImageInputIcon, ImageInput, RemoveImageButton } from '../styles/PostFormStyles';

interface FormProps {
    onAddPost: (name: string, message: string, photo: File | null) => void;
    removeAllPosts: () => void;
}

const PostForm: React.FC<FormProps> = ({ onAddPost, removeAllPosts }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);
    
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setPhoto(e.target.files[0]);
        }
    };

    const handleRemoveImage = () => {
        setPhoto(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && message) {
            onAddPost(name, message, photo);
            setName('');
            setMessage('');
            setPhoto(null);
        }
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <ImageInputContainer>
                    <ImageInputLabel htmlFor="image-input">
                        {photo ? <img src={URL.createObjectURL(photo)} alt="post" /> : <ImageInputIcon />}
                    </ImageInputLabel>
                    <ImageInput id="image-input" type="file" accept="image/*" onChange={handleImageChange} />
                    {photo && <RemoveImageButton onClick={handleRemoveImage} />}
                </ImageInputContainer>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={removeAllPosts}>Remover Todos</button>
                <button type="submit">Publicar</button>
            </form>
        </FormContainer>
    );
};

export default PostForm;
