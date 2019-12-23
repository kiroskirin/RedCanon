import React from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { apiWithPath } from '../config';

class HomeScreen extends React.Component {

  state = {
    email: '',
    password: '',
    isLoggingIn: false
  }

  static navigationOptions = {
    title: 'Home',
  };

  _onListItemPress = (item) => {
    this.props.navigation.navigate('Detail', { postId: item.id });
  };

  _onLogin = () => {
    this.setState(prevState => (
      {
        ...prevState,
        isLoggingIn: true
      }
    ));

    axios.get(apiWithPath('/users/1'))
      .then(response => response.data)
      .then(data => {
        this.props.setUserData(data);
        this.setState(prevState => (
          {
            ...prevState,
            isLoggingIn: false
          }
        ));
      })
      .catch(function (error) {
        console.log(error);
      });


  };

  _onEmailChange = (value) => {
    this.setState(prevState => (
      {
        ...prevState,
        email: value
      }
    ));
  };

  _onPasswordChange = (value) => {
    this.setState(prevState => (
      {
        ...prevState,
        password: value
      }
    ));
  };

  componentDidMount = () => {
    axios.get(apiWithPath('/posts'))
      .then(response => response.data)
      .then(data => {
        this.props.setPostData(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;

    let posts = <ActivityIndicator size="small" color="#00ff00" />
    if (this.props.post.data != null) {
      posts = <FlatList
        data={this.props.post.data}
        renderItem={({ item, index, separators }) => (
          <TouchableOpacity style={styles.item}
          onPress={() => this._onListItemPress(item)}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}>
            <View>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    }

    let form = null;
    if (this.props.user.data == null) {
      form = <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Email :</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} onChangeText={value => this._onEmailChange(value)} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Password :</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} onChangeText={value => this._onPasswordChange(value)} />
        {this.state.isLoggingIn ? <ActivityIndicator size="small" color="#00ff00" /> : null}
        <Button onPress={this._onLogin} title="Login" />
      </View>;
    } else {
      form = <Text style={{ padding: 20 }}>Welcome, {this.props.user.data.name}</Text>;
    }

    return (
      <>
        {form}
        <Text style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 20, paddingRight: 20 }}>Post</Text>
        {posts}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


const mapStateToProps = state => {
  return {
    post: state.post,
    user: state.user
  }
}

const mapActionToProps = dispacth => {
  return {
    setPostData: (data) => { dispacth({ type: 'SET_POST_DATA', data: data }) },
    setUserData: (data) => { dispacth({ type: 'SET_USER_DATA', data: data }) }
  }
}

export default connect(mapStateToProps, mapActionToProps)(HomeScreen);