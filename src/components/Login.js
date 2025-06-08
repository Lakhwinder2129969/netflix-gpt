import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
//import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACK_URL } from '../utils/constants';

const Login = () => {

    const [isSignInForm , setIsSignInForm] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage , setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    } 

    const handleButtonClick = () => {

        //console.log(email.current.value);
        //console.log(password.current.value);

        const message = checkValidData(email.current.value , password.current.value)
        setErrorMessage(message);
        if(message) return;

        //SignIn/SignUp logic

        if(!isSignInForm){
            //sign up form 
            
            createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                const auth = getAuth();
updateProfile(user, {
  displayName: "name.current.value", photoURL: "https://avatars.githubusercontent.com/u/178575962?v=4&size=64"
}).then(() => {
  const {uid , email , displayName , photoURL} = auth.currentUser;
      dispatch(addUser({uid: uid , email: email , displayName: displayName , photURL:photoURL}));
  // Profile updated!
  // ...
}).catch((error) => {
  setErrorMessage(error.message);
  // An error occurred 
  // ...
});
                //console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
                // .... 
            });



        } else{
            //sign in form
            signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

        }
    }

  return (
    <div className=''>
      <Header />
        <div className="absolute">
        <img  
        src={BACK_URL}
        alt='background'
        />
        </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700 opacity-80' />
                )}
                <input ref={email} type='email' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 opacity-80' />
                <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 opacity-80'/>
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer'onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up Now": "Alerdy Registered? Sign In Now"}</p>
            </form> 
    </div>
  )
}

export default Login;
