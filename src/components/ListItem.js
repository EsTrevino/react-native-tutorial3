import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common/CardSection';
import * as actions from './actions';

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription = () => {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text>{this.props.library.item.description}</Text>
        </CardSection>
      );
    }
  };

  render() {
    const { item } = this.props.library;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(item.id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{item.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
