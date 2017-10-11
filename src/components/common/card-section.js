import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CardSection = props => (
  <View style={[styles.containerStyle, props.style]}>
    {props.children}
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#dddddd',
    position: 'relative',
  },
};

export { CardSection };
