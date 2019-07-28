import firebase from 'firebase/app';
import 'firebase/firestore';
import { DB_CONFIG } from './config/config';

firebase.initializeApp(DB_CONFIG);

export default firebase;