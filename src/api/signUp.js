import { firebaseApp } from '../firebase';

export default (email, password) => {
    firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('User added to DB');
            console.log(user);
            return true;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};
