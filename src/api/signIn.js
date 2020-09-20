import { firebaseApp } from '../firebase';

export default (email, password) => {
    firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
            return true;
        })
        .catch((err) => {
            console.log(err.message);
            console.log('User not signed in!');
            return err;
        });
};
