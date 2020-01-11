import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
`;
const Text = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: red;
`;
const Button = styled.Button`
  color: blue;
`;

class Boarding extends PureComponent {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Text>Boarding</Text>

        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Register" onPress={() => navigation.navigate('Registration')} />
      </Container>
    );
  }
}

Boarding.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default Boarding;
