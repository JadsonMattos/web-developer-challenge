import styled from 'styled-components';
import { FaTrash, FaImage } from 'react-icons/fa';

export const FormContainer = styled.div`
    background-color: #333;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    margin: 20px auto;
    text-align: center;

    input[type="text"],
    textarea {
        width: 90%;
        padding: 10px;
        margin-bottom: 10px;
        border: none;
        border-radius: 4px;
        background-color: #444;
        color: #fff;
    }

    input[type="file"] {
        margin-bottom: 10px;
        color: #fff;
    }

    button {
        background-color: #444;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #218838;
        }
    }
`;

export const ImageInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 10px;
`;

export const ImageInputLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: #444;
    border-radius: 50%;
    cursor: pointer;

    img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
`;

export const ImageInputIcon = styled(FaImage)`
    color: #bbb;
    font-size: 48px;
`;

export const ImageInput = styled.input`
    display: none;
`;

export const RemoveImageButton = styled(FaTrash)`
    position: absolute;
    top: 0;
    right: 0;
    color: #dc3545;
    cursor: pointer;
`;
