import { firebaseApp, userRef, postRef } from '../firebase';

export default (limit) => {
    postRef.limitToLast(10).once('value', (snap) => {
        return snap.val();
    });
};
