import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, Modal } from 'react-native';
import { CardSection } from './card-section';
import { Button } from './button';

const Confirm = props => (
  <Modal
    animationType='slide'
    onRequestClose={() => {}}
    transparent
    visible={props.visible}
  >
    <View style={styles.container}>
      <CardSection style={styles.cardSection}>
        <Text style={styles.text}>{props.children}</Text>
      </CardSection>
      <CardSection>
        <Button onPress={props.onAccept}>Yes</Button>
        <Button onPress={props.onDecline}>No</Button>
      </CardSection>
    </View>
  </Modal>
);

Confirm.propTypes = {
  children: PropTypes.node,
  onDecline: PropTypes.func,
  onAccept: PropTypes.func,
  visible: PropTypes.bool,
};

const styles = {
  cardSection: {
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
};

export { Confirm };
