import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 20px;
  height: 200px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const ImageView = ({ source, onPress }) => (
  <TouchableOpacity disabled={!onPress} onPress={onPress}>
    <Image source={{ uri: source }} />
  </TouchableOpacity>
);

ImageView.propTypes = {
  source: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

ImageView.defaultProps = {
  onPress: null
};

export default ImageView;
