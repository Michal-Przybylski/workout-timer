import React, { FC, useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { User } from 'firebase';
import * as dotenv from 'dotenv';
import { bodyStyle, StyledModal } from './SignInScreen.sc';
import { Props } from './SignInScreen.types';

dotenv.config();

const {
  REACT_APP_API_KEY,
  REACT_APP_PROJECT_ID,
  REACT_APP_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_G_MEASUREMENT_ID,
} = process.env;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseAppConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: `${REACT_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${REACT_APP_PROJECT_ID}.firebaseio.com`,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: `${REACT_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: REACT_APP_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_G_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseAppConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: '/signedIn',
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    },
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: 'image', // 'audio'
        size: 'normal', // 'invisible' or 'compact'
        badge: 'bottomleft', //' bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: 'PL',
    },
  ],
};

const SignInScreen: FC<Props> = ({ onCancel, visible, setVisible }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
        setCurrentUser(user);
      });

    return () => {
      unregisterAuthObserver();
      console.log('Sdd');
    };
  }, []); // Important, pass an empty array so to execute useEffect hook only once

  useEffect(() => {
    if (isSignedIn) {
      setVisible(false);
    }
  }, [isSignedIn, setVisible]);

  return (
    <StyledModal
      title="Please sign-in:"
      bodyStyle={bodyStyle}
      centered
      // closable={false}
      destroyOnClose={true}
      footer={null}
      width="40%"
      visible={visible}
      onCancel={onCancel}
    >
      {!isSignedIn ? (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : (
        <>
          <p>
            Welcome {firebase.auth().currentUser?.displayName}! You are now
            signed-in!
          </p>
          <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
          {console.log(currentUser)}
          {console.dir(currentUser)}
        </>
      )}
    </StyledModal>
  );
};

export default SignInScreen;
