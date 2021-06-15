import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { HomeContainer, ImageCover, ProductCard, Image } from './Home.styles';
import { Text } from '../../styles/Global.styles';

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const navigation = useNavigation();

  const URL = 'https://fakestoreapi.com/products?limit=10';

  const fetchData = () => {
    axios
      .get(URL)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const pressHandler = (id) => {
    setApiData((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };
  return (
    <HomeContainer>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={apiData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', { item })}
          >
            <ProductCard>
              <MaterialIcons
                name="delete"
                size={30}
                color="red"
                onPress={() => pressHandler(item.id)}
              />

              <ImageCover>
                <Image source={{ uri: `${item.image}` }} resizeMode="cover" />
              </ImageCover>
              <Text dark large heavy>
                {item.category}
              </Text>
            </ProductCard>
          </TouchableOpacity>
        )}
      />
    </HomeContainer>
  );
};

export default Home;
