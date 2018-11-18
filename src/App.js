import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Card, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'app_key',
      authDomain: 'yourapp.firebaseapp.com',
      databaseURL: 'https://ayourapp.firebaseio.com',
      projectId: 'yourapp',
      storageBucket: 'yourapp.appspot.com',
      messagingSenderId: 'sender_id'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPressHandler={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default: 
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header text="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
