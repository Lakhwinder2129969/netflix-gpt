import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store )=> store.movies?.nowPlayingMovie);
     
    if(!movies) return;
    const mainMovie = movies[7];
    //console.log(mainMovie);

    const original_title = mainMovie?.original_title;
    const overview = mainMovie?.overview;
    const id = mainMovie?.id;
    //console.log(original_title);
    //console.log(id)
    

    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
            
        </div>
    )
};
export default MainContainer;