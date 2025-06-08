import { useSelector } from 'react-redux';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie';
import usePopularMovie from '../hooks/usePopularMovie';
import GPTSearch from './GPTSearch';


import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovie(); 
  usePopularMovie();

  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GPTSearch />) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
      
      
    </div>
  )
}



export default Browser;
