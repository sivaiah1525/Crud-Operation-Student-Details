importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyCcO7bkuNcjr8xnXnYvN7EPR5WyXNpeqPE",
    authDomain: "fir-a8e60.firebaseapp.com",
    databaseURL: "https://fir-a8e60.firebaseio.com",
    projectId: "fir-a8e60",
    storageBucket: "fir-a8e60.appspot.com",
    messagingSenderId: "105763550654",
    appId: "1:105763550654:web:37b9606e61842c7ef275ef",
    measurementId: "G-H0LSLL9G5D"
});
const messaging = firebase.messaging();