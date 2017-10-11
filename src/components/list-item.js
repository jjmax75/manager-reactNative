import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
  constructor(props){
    super(props);

    this.onRowPress = this.onRowPress.bind(this);
  }

  onRowPress() {
    Actions.employeeEdit({ employee: this.props.item });
  }

  render(){
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.list}>{this.props.item.name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object,
};

const styles = {
  list: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default ListItem;
