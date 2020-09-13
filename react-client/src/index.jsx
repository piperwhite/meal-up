import React from 'react';
import ReactDOM from 'react-dom';
const firebaseui = require('firebaseui');
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import "firebase/auth";
import "firebase/firestore";
import $ from 'jquery';
import firebase from './firebaseConfig';
import MainPage from './components/MainPage.jsx';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: undefined,
    };

    // Configure FirebaseUI.
    this.uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false,
      },
    };
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      this.setState({isSignedIn: !!user});
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render () {
    return (<div>
        {this.state.isSignedIn !== undefined && !this.state.isSignedIn &&
          <div>
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
          </div>
        }
        {this.state.isSignedIn &&
          <MainPage user={firebase.auth().currentUser} handleSignOut={() => firebase.auth().signOut()} />
          // <div>
          //   Hello {firebase.auth().currentUser.displayName}. You are now signed In!
          //   <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
          // </div>
        }
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));