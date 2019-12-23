import React from 'react';
import { Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Show Dtail"
        onPress={() => navigate('Detail', { text: 'This value is from Home' })}
      />
    );
  }
}

export default HomeScreen;