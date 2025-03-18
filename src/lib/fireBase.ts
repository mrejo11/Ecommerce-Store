import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

console.log("Firebase Config:", firebaseConfig);

let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase App initialized:", app.name);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Register Error:", error.message);
  } else {
    console.error("An unknown error occurred");
  }
  throw error
}


export const auth = getAuth(app);

export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", userCredential.user);
    return userCredential;
  } catch (error: unknown) {
    if(error instanceof Error){
      console.error("Register Error:", error.message);
    }else{
      console.log("An unknow error occured")
    }
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    return userCredential;
  } catch (error: unknown) {
    if(error instanceof Error){
      console.log("Login Error",error.message)
    }else{
      console.log("An unknow error occured")
    }
    throw error;
  }
};