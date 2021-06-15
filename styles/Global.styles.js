import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #e796c9;
  padding: 10px;
`;
export const Text = styled.Text`
  color: ${(props) => (props.dark ? 'black' : '#A9A9A9')};
  ${({ title, large, small }) => {
    switch (true) {
      case title:
        return `font-size: 32px`;
      case large:
        return `font-size:20px`;
      case small:
        return `font-size:16px`;
    }
  }}
  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return `font-weight:600`;
      case heavy:
        return `font-weight:700`;
    }
  }}
`;
