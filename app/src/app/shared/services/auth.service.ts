import { inject, Injectable } from '@angular/core';
import { AUTH, FIRESTORE } from '../../app.config';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(AUTH);
  private firestore = inject(FIRESTORE);

  user$ = authState(this.auth);
  user = toSignal(this.user$);

  async signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  async signOut() {
    signOut(this.auth);
  }
}
