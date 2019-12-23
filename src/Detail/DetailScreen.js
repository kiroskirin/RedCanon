import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

class DetailScreen extends React.Component {

    state = {
        data: null
    }

    static navigationOptions = {
        title: 'Detail',
    };

    componentDidMount = () => {
        const postId = this.props.navigation.getParam('postId', null);
        if (postId != null) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
                .then(response => response.data)
                .then(data => {
                    this.setState({ data: data });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    render() {
        const { navigation } = this.props;
        const text = navigation.getParam('text');

        let post = <ActivityIndicator size="small" color="#00ff00" />;
        if (this.state.data != null) {
            post = <>
                <Text style={{ marginBottom: 10, padding: 5 }}>Id: {this.state.data.id}</Text>
                <Text style={{ marginBottom: 10, padding: 5 }}>Title: {this.state.data.title}</Text>
                <Text style={{ marginBottom: 10, padding: 5 }}>Body: {this.state.data.body}</Text>
            </>;
        }

        return (
            <View style={{padding:10}}>
                {post}
            </View>
        );
    }
}

export default DetailScreen;