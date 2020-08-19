
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');
 // eslint-disable-next-line no-undef
firebase.initializeApp({
  apiKey: "AIzaSyDfjgYqq0x-dWPv9zNM3TGT1Rzs4tufRPo",
    authDomain: "expense-tracker-ced2e.firebaseapp.com",
    databaseURL: "https://expense-tracker-ced2e.firebaseio.com",
    projectId: "expense-tracker-ced2e",
    storageBucket: "expense-tracker-ced2e.appspot.com",
    messagingSenderId: "410591102877",
    appId: "1:410591102877:web:580105d0eee1f5eab89174"
  });
  // Initialize Firebase
 
// eslint-disable-next-line no-undef
firebase.messaging();