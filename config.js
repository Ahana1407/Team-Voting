import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCFosLy284CX5Fx4Fr7conxK5usYmnur2A",
        authDomain: "class-test-dc2b4.firebaseapp.com",
        projectId: "class-test-dc2b4",
        storageBucket: "class-test-dc2b4.appspot.com",
        messagingSenderId: "643581542336",
        appId: "1:643581542336:web:8cfa4b8f8c6605409a9225"
    
};
// Initialize Firebase
if(!firebase.apps.lenght)
firebase.initializeApp(firebaseConfig);

export default firebase.database();