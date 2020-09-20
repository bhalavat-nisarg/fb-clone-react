import firebase from 'firebase';

var firebaseConfig = {
    apiKey: 'AIzaSyDhCUX-n3YIVJ8-WUIOfEt1hHKPVTyiMZ0',
    authDomain: 'fb-clone-nb.firebaseapp.com',
    databaseURL: 'https://fb-clone-nb.firebaseio.com',
    projectId: 'fb-clone-nb',
    storageBucket: 'fb-clone-nb.appspot.com',
    messagingSenderId: '1025783828677',
    appId: '1:1025783828677:web:f24fd2694cfba66e5aa0ac',
    measurementId: 'G-JC5ETRWXRK',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const userRef = firebase.database().ref('users');
