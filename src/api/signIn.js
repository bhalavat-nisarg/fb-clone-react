import { firebaseApp, userRef } from '../firebase';

export default (email, password) => {
    firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
            userRef.child(data.user.uid).once('value', (snapshot) => {
                return snapshot.val();
            });
        })
        .catch((err) => {
            console.log(err.message);
            console.log('User not signed in!');
            return err;
        });
};
