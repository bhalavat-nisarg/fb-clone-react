import { firebaseApp, userRef, postRef } from '../firebase';

export default (uid, content) => {
    postRef.push({
        createdBy: uid,
        content,
    });
};
