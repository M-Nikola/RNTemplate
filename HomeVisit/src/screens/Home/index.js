import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { inject, observer } from 'mobx-react';
import ImageView from '../../components/ImageView';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
`;
const TextInput = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: pink;
`;
const Button = styled.Button`
  width: 50%;
  height: 40px;
  background-color: blue;
`;
const FlatList = styled.FlatList`
  width: 100%;
  padding: 20px;
`;

// components receive Store values as props which we will inject while exporting
const Home = ({ store }) => {
  const { text, updateText, data, searchImages } = store;

  return (
    <Container>
      <TextInput placeholder="Search for something" value={text} onChangeText={updateText} />

      <Button title="Search" onPress={searchImages} />

      <FlatList
        data={data}
        keyExtractor={item => item}
        renderItem={({ item }) => <ImageView source={item} />}
      />
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired,
  store: PropTypes.shape({
    text: PropTypes.string.isRequired,
    updateText: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.string),
    searchImages: PropTypes.func.isRequired
  }).isRequired
};

// inject Store as props to ImageList and make it observe changes in Store
export default inject('store')(observer(Home));
