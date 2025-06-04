import useNowPlayingMovie from '../hooks/useNowPlayingMovie';
import usePopularMovie from '../hooks/usePopularMovie';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {
  useNowPlayingMovie(); 
  usePopularMovie();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}



export default Browser;
