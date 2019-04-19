import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common/CardSection';

class ListItem extends Component {
  render() {
    const { item } = this.props.library;
    return (
      <CardSection>
        <Text style={styles.titleStyle}>{item.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
