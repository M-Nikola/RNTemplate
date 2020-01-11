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

class Registration extends PureComponent {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Text>Registration</Text>

        <Button title="Registration" onPress={() => navigation.navigate('Tabs')} />
      </Container>
    );
  }
}

Registration.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default Registration;
