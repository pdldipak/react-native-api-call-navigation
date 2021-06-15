import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ImageCover = styled.View`
  height: 50px;
  width: 50px;
  overflow: hidden;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

export const ProductCard = styled.View`
  background-color: #90ee90;
  border-radius: 5px;
  padding: 20px;
  margin-top: 30px;
  min-width: 320px;
  font-size: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;
