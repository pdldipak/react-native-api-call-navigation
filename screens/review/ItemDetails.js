import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text } from '../../styles/Global.styles';
import {
  Cover,
  ReviewContainer,
  Image,
  MainHeading,
  Content,
  Detail,
} from './ItemDetails.styles';

const ReviewDetails = () => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <ReviewContainer>
      <Cover>
        <Image source={{ uri: `${item.image}` }} resizeMode="cover" />
      </Cover>

      <MainHeading>{item.title}</MainHeading>

      <Content>
        <Detail>
          <Text dark title bold>
            {item.category}
          </Text>
        </Detail>
        <Detail>
          <Text dark large heavy>
            ${item.price}
          </Text>
        </Detail>
        <Detail>
          <Text small> {item.description}</Text>
        </Detail>
      </Content>
    </ReviewContainer>
  );
};

export default ReviewDetails;
