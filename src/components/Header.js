import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { getAuth , signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid , email , displayName , photoURL} = user;
    dispatch(addUser({uid: uid , email: email , displayName: displayName , photURL:photoURL}));
    navigate("/browser")
    
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate("/")
    
  }
});
  return () => unsubscribe();
  },[]);

  const handleSignOut = () => {
    
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/")
    // Sign-out successful.
  }).catch((error) => {
    navigate("/error")
      // An error happened.
});

  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
      src={LOGO}
      alt='logo'/>

      {user && (<div className='flex p-2'>
        <img className='w-12 h-12 rounded-lg'
        alt='user-icon'
        src={user?.photoURL}
        />
        <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
      </div>)}
    </div>
  )
}

export default Header;
