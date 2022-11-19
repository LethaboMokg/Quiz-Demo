import React, { useState } from 'react'
import { getAuth } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import { Navigate} from "react-router-dom";
import firebase from './firebase'

function GoToNext() {

    const [goToHome, setGoToHome] = React.useState(false);
    let formInfo = {}



    if(goToHome) {
        return <Navigate to="/Home" />;
    }

    function handleChange(e) {
        const { name, value } = e.target

        formInfo[name] = value;

        // this.setState(
        //     {
        //         [name]: value
        //     }
        // )
    }
    function configureCaptcha() {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                //this.onSignInSubmit();
                console.log('Recaptcha varified')
            },
            defaultCountry: "IN"
        }, getAuth());
    }
    function onSignInSubmit (e) {

        e.preventDefault()

        
        configureCaptcha()
        // const phoneNumber = "+27" + this.state.mobile
        const phoneNumber = "+27" + formInfo['mobile']

        console.log(phoneNumber)
        const appVerifier = window.recaptchaVerifier;
        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log('OTP has been sent.')
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                console.log('SMS not sent')
                console.log(error)
            });
    }
    function onSubmitOTP (e){
        (e).preventDefault()

        console.log(formInfo['otp'])

        setGoToHome(true);

        // const code = this.state.otp
        const code = formInfo['otp']
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(JSON.stringify(user))
            alert('User is verified')
            setGoToHome(true);
            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
        });
    }
     
    return (
            <div>
                <h2>LOGIN</h2>
                <form onSubmit={onSignInSubmit}>
                    <div id='sign-in-button'></div>

                    <input type='number' name='mobile' placeholder='Mobile number' required onChange={handleChange} />
                    <button type='submit'>Submit</button>
                </form>


                <h2>Enter OTP</h2>
                <form onSubmit={onSubmitOTP}>

                    <input type='number' name='otp' placeholder='OTP Number' required onChange={handleChange} />
                    <button type='submit' >Submit</button>
                </form>
            </div>
        );
    

}

// class App extends React.Component {
//     auth = getAuth();

//     handleChange = (e) => {
//         const { name, value } = e.target
//         this.setState(
//             {
//                 [name]: value
//             }
//         )
//     }
//     configureCaptcha = () => {
//         window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//             'size': 'invisible',
//             'callback': (response) => {
//                 // reCAPTCHA solved, allow signInWithPhoneNumber.
//                 //this.onSignInSubmit();
//                 console.log('Recaptcha varified')
//             },
//             defaultCountry: "IN"
//         }, getAuth());
//     }
//     onSignInSubmit = (e) => {

//         e.preventDefault()

//         this.configureCaptcha()
//         const phoneNumber = "+27" + this.state.mobile
//         console.log(phoneNumber)
//         const appVerifier = window.recaptchaVerifier;
//         const auth = getAuth();
//         signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//             .then((confirmationResult) => {
//                 // SMS sent. Prompt user to type the code from the message, then sign the
//                 // user in with confirmationResult.confirm(code).
//                 window.confirmationResult = confirmationResult;
//                 console.log('OTP has been sent.')
//                 // ...
//             }).catch((error) => {
//                 // Error; SMS not sent
//                 // ...
//                 console.log('SMS not sent')
//                 console.log(error)
//             });
//     }
//     onSubmitOTP = (e) => {
//         (e).preventDefault()
        
//         GoToNext()

//         return <Navigate to="/Home"/>;

//         const code = this.state.otp
//         console.log(code)
//         window.confirmationResult.confirm(code).then((result) => {
//             // User signed in successfully.
//             const user = result.user;
//             console.log(JSON.stringify(user))
//             alert('User is verified')
//             // ...
//         }).catch((error) => {
//             // User couldn't sign in (bad verification code?)
//             // ...
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <h2>LOGIN</h2>
//                 <form onSubmit={this.onSignInSubmit}>
//                     <div id='sign-in-button'></div>

//                     <input type='number' name='mobile' placeholder='Mobile number' required onChange={this.handleChange} />
//                     <button type='submit'>Submit</button>
//                 </form>


//                 <h2>Enter OTP</h2>
//                 <form onSubmit={this.onSubmitOTP}>

//                     <input type='number' name='otp' placeholder='OTP Number' required onChange={this.handleChange} />
//                     <button type='submit' >Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

export default GoToNext