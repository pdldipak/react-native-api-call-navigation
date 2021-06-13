import React, { useState, useEffect } from 'react';
import { Container, Text, UserCard } from './App.styles';
import axios from 'axios';
import { FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [apiData, setApiData] = useState([]);

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
    <Container>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={apiData}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <UserCard>
              <MaterialIcons
                name="delete"
                size={30}
                color="red"
                onPress={() => pressHandler(item.id)}
              />
              <Text>{item.category}</Text>
            </UserCard>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}
