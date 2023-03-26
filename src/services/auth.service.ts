import { firebaseAuth } from "@/utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

/**
 * Login service with Google signInWithPopup
 */
export const loginWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(
      firebaseAuth,
      new GoogleAuthProvider()
    );
    return user;
  } catch (err) {
    console.log(err);
    return {
      error: {
        message: "Algo salió mal, intente nuevamente",
      },
    };
  }
};
