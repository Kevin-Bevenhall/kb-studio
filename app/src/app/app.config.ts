import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyAqZIUDr5ZpF91a37LsblwDZ-DQfnoW5GI",
  authDomain: "kb-studio-d71e2.firebaseapp.com",
  projectId: "kb-studio-d71e2",
  storageBucket: "kb-studio-d71e2.firebasestorage.app",
  messagingSenderId: "337069822430",
  appId: "1:337069822430:web:3aac66af23ff54ed5acd4f",
  measurementId: "G-3Q44QVD1BC"
};

const app = initializeApp(firebaseConfig);

export const AUTH = new InjectionToken('Firebase auth', {
  providedIn: 'root',
  factory: () => getAuth()
});

export const FIRESTORE = new InjectionToken('Firebase firestore', {
  providedIn: 'root',
  factory: () => getFirestore()
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withViewTransitions(), withComponentInputBinding())
  ]
};
