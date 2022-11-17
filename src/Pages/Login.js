import { getAuth } from "firebase/auth";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";


const auth = getAuth();
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
    }
}, auth);

const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;

const auth = getAuth();
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
    }).catch((error) => {
        // Error; SMS not sent
        // ...
    });

grecaptcha.reset(window.recaptchaWidgetId);

// Or, if you haven't stored the widget ID:
window.recaptchaVerifier.render().then(function (widgetId) {
    grecaptcha.reset(widgetId);
});

const code = getCodeFromUserInput();
confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    // ...
}).catch((error) => {
    // User couldn't sign in (bad verification code?)
    // ...
});

var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);

firebase.auth().signInWithCredential(credential);