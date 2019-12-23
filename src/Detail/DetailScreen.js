import React from 'react';
import { Text } from 'react-native';

class DetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Detail',
    };
    render() {
        const { navigation } = this.props;
        const text = navigation.getParam('text');
        return (
            <Text>Where you from: {text}</Text>
        );
    }
}

export default DetailScreen;