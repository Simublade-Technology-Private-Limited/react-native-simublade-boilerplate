import auth from '@react-native-firebase/auth';
import {STRING_CONSTANTS} from '../utils/constants/stringConstants';
import {logOnConsole} from '../utils/globalFunctions';

// Make sure to follow steps at firebase official doc to add google services json and google info plist files and other setup (Other setup is done but chec for confirmation)
// CREATE USER WITH EMAIL AND PASSWORD
export const createUser = async (
  email: string,
  password: string,
  name: string,
  onSuccess: () => void,
  onError: (error: string) => void,
) => {
  // Call method to show loading indicator here

  try {
    // Attempt to create a user account using Firebase Authentication
    const response = await auth()?.createUserWithEmailAndPassword(
      email.trim(),
      password,
    );
    const user: any = auth()?.currentUser;
    const idTokenResult = await user.getIdTokenResult();

    logOnConsole(idTokenResult);

    // If success
    if (response && response.user) {
      // Save idTokenResult to redux here
      // Call the api of backend to create new user after hitting backend api and getting success here
    }
  } catch (error: any) {
    // Handle authentication errors and show corresponding toast messages
    if (error.code === 'auth/email-already-in-use') {
      onError(STRING_CONSTANTS.already_in_use_email);
    } else if (error.code === 'auth/invalid-email') {
      onError(STRING_CONSTANTS.invalid_email);
    } else if (error.code === 'auth/weak-password') {
      onError(STRING_CONSTANTS.weak_password);
    }
  } finally {
    // Call method to hide loading indicator here
  }
};

// SEND PASSWORD EMAIL
export const recoverPassword = async (
  email: string,
  onSuccess: () => void,
  onError: (error: string) => void,
) => {
  // Call method to show loading indicator here

  try {
    // Attempt to create a user account using Firebase Authentication
    await auth().sendPasswordResetEmail(email.trim());
    onSuccess();
  } catch (error: any) {
    // Handle authentication errors and show corresponding toast messages
    if (error.code === 'auth/invalid-email') {
      onError(STRING_CONSTANTS.invalid_email);
    } else {
      onError(error?.message);
    }
  } finally {
    // Call method to hide loading indicator here
  }
};

// LOGIN
export const loginUser = async (
  email: string,
  password: string,
  onSuccess: () => void,
  onError: (error: string) => void,
) => {
  // Call method to show loading indicator here

  try {
    // Attempt to login user account using Firebase Authentication
    const response = await auth().signInWithEmailAndPassword(
      email.trim(),
      password,
    );
    const user: any = auth()?.currentUser;
    const idTokenResult = await user.getIdTokenResult();

    logOnConsole(idTokenResult);

    // If success
    if (response && response.user) {
      // Save idTokenResult to redux here
      // Call the api of backend to get user details and save to redux
    }
  } catch (error: any) {
    // Handle authentication errors and show corresponding toast messages
    if (error.code === 'auth/invalid-email') {
      onError(STRING_CONSTANTS.invalid_email);
    } else if (error.code === 'auth/wrong-password') {
      onError(STRING_CONSTANTS.invalid_pass);
    } else if (error.code === 'auth/too-many-requests') {
      onError(STRING_CONSTANTS.try_after_some_time);
    } else if (error.code === 'auth/user-not-found') {
      onError(STRING_CONSTANTS.not_found_email);
    }
  } finally {
    // Call method to hide loading indicator here
  }
};

// LOGOUT
export const logOut = async () => {
  // Call method to show loading indicator here

  try {
    // Calling logout method
    await auth().signOut();

    // Call method to clear user data from redux here

    // Showing toast on success here

    // Redirect to signup page
    // navigationRef.reset({
    //   index: 0,
    //   routes: [{name: 'Signup'}],
    // });
  } catch (error: any) {
    // Showing toast on error here
  } finally {
    // Call method to hide loading indicator here
  }
};
