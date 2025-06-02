import useNowPlayingMovie from '../hooks/useNowPlayingMovie';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {
  useNowPlayingMovie(); 

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}



export default Browser;
