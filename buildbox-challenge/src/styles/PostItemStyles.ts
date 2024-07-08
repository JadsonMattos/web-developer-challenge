import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #333;
    padding: 20px;
    border-radius: 8px;
    margin: 20px auto;
    max-width: 500px;
    color: #fff;

    button {
        background-color: #444;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #555;
        }
    }
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const PostImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const PostContent = styled.div`
  flex: 1;
`;

export const PostMessage = styled.p`
  margin: 0;
`;

export const PostAuthor = styled.span`
  color: #bbb;
  font-size: 0.9em;
`;
