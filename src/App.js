import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Card, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBT-SxlJ8irMN-DNrIB6LgpFKgAzr_kjyQ',
      authDomain: 'auth-47093.firebaseapp.com',
      databaseURL: 'https://auth-47093.firebaseio.com',
      projectId: 'auth-47093',
      storageBucket: 'auth-47093.appspot.com',
      messagingSenderId: '617715850385'
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
