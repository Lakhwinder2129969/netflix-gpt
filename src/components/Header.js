import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { getAuth , signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptSearcheView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGPTSearchClick = () => {
    //toggle GPT Search
    dispatch(toggleGptSearcheView());

  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
      src={LOGO}
      alt='logo'/>

      {user && (<div className='flex p-2'>
       {showGptSearch && 
       (<select className='p-2 m-2 bg-gray-900 text-white ' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGE.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          ))}
        </select>)}
        <button className='rounded-lg py-2 px-4 mx-4 my-2 bg-purple-800 text-white'
        onClick={handleGPTSearchClick}
        >{showGptSearch ? "Home Page" : "GPT Search"}</button>
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
