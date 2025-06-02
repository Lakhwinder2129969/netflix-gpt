import React from "react";
import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
    
    useMovieTrailer(movieId);

  return (
    <div>
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/VWqJifMMgZE?si=YVNEV-xrmQQko_0b"+ movieTrailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {
//   "id": 552524,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Global Phenomenon",
//       "key": "cq0gV2X7zYs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-05-30T18:15:11.000Z",
//       "id": "683c040e6d5809b1fb288a18"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"Record Player\" Official Clip",
//       "key": "9IzTDnxaeDk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-05-28T16:00:15.000Z",
//       "id": "6838605efca5da67032b860c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "#1 Movie in the World",
//       "key": "a0CW2lY-178",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-24T18:57:35.000Z",
//       "id": "6834816b184eb7fe46a87052"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "D23 Inside Disney - Lilo & Stitch",
//       "key": "5cdmfinUTCQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-05-22T19:30:40.000Z",
//       "id": "68304e7839e3007850eb237d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Chris Sanders is Stitch - Booth to Screen",
//       "key": "D7gpoCaYcT4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-05-19T17:00:25.000Z",
//       "id": "682bc1a4a91b6791f7648fd7"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"I Like You As a Mom Too\" Official Clip",
//       "key": "-Sk-RriOtpU",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-05-19T15:00:01.000Z",
//       "id": "682bc3053bf1467c07db3059"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "he always knows how to make an entrance",
//       "key": "rL2gY-qNPL0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-05-17T17:01:04.000Z",
//       "id": "682a818189abd112419e365d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "stitch meets… stitch!",
//       "key": "nnYBZK-TmEQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-05-17T00:07:59.000Z",
//       "id": "682a8116da43493afddb2938"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "the calm before the Stitch. One week left",
//       "key": "nQnxltCfXEo",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-16T16:01:30.000Z",
//       "id": "682a80d5781f6f2b9d5b58c8"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"Back\"",
//       "key": "89fRHlRJBtU",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-16T04:19:41.000Z",
//       "id": "682a7caf832e03ca62e248bc"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Working with Stitch",
//       "key": "NeYHF26IpFU",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2025-05-15T22:00:20.000Z",
//       "id": "6826c1f7e8ab2ec38b4b59cd"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Stitch is Back!",
//       "key": "1FO4m-HN3jo",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-15T16:48:20.000Z",
//       "id": "6826c2107a4d275bb56efc9b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "🫣🫣🫣",
//       "key": "lqo1VH1LKMo",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-14T16:09:11.000Z",
//       "id": "682a809c917f9501805b582e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "'ohana means never getting your phone back",
//       "key": "EPPXO2E-tgU",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-05-13T17:00:31.000Z",
//       "id": "682a8042da70b514d6f55a4f"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "we can think of 626 reasons to go see #LiloAndStitch",
//       "key": "Mlh6wtgJyj0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-13T16:32:26.000Z",
//       "id": "682a7fcd43d7e0c0bc2f70c9"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Anyone know a good dog trainer?",
//       "key": "lSE0NCnDLf0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-12T17:01:03.000Z",
//       "id": "682a7f995613abdd990bd66c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Oof",
//       "key": "0KJS8QwI5lI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-12T16:00:04.000Z",
//       "id": "682a7f2fadf57ca709f55b18"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "day in the life of an alien posing as a puppy",
//       "key": "evUQLR5bHdg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-10T17:00:56.000Z",
//       "id": "682a7eed010214cda59e3603"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "we come to this place for...mayhem",
//       "key": "D-zG4fAFkKE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-05-09T17:30:02.000Z",
//       "id": "682a7e4abdd07163dd2f7274"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "The Music of Lilo & Stitch",
//       "key": "qO2DujeSq0M",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2025-05-08T22:10:18.000Z",
//       "id": "681d8c6f740cf97b1dc1df04"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"Hawaiian Roller Coaster\" Official Clip",
//       "key": "oFgqVhFYtjo",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-05-08T18:00:43.000Z",
//       "id": "681cf745d61d1e862e0b2b4d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "they were meant to find each other",
//       "key": "dWXm_VGYOkg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-08T17:00:47.000Z",
//       "id": "682a7decf7bf2e09def55a6c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "'Ohana means family",
//       "key": "bwnDk7Q-kTc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-07T17:30:10.000Z",
//       "id": "682a7daee1b02296f58c04c6"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"Dogs Can't Talk\"",
//       "key": "mVatLd27pn8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-05-06T18:00:51.000Z",
//       "id": "681cf74ef12ffbb1c163ba3a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "mood.",
//       "key": "PLTQE0QhcyY",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-06T17:00:38.000Z",
//       "id": "682a7d691aa70e5c389e359c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "😜✌️",
//       "key": "rHEeew-HsZ8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-06T16:01:20.000Z",
//       "id": "682a7d2cf5a4f4eac80bd76b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Caught on camera",
//       "key": "n_vynrZpoqw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-01T17:01:02.000Z",
//       "id": "681584e346c5e0c804907e8d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Agent Cobra Bubbles",
//       "key": "CKnSPRMn5A0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-04-30T16:00:05.000Z",
//       "id": "68129460aa7c659c5b567ced"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Place your thumbs here...",
//       "key": "vNRn_aDRPGk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-04-28T16:01:32.000Z",
//       "id": "6811173d2ce920d0bd80cb10"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "we'll be right back, can you watch Stitch for us?",
//       "key": "xDM6fzBB6wc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-04-25T16:01:38.000Z",
//       "id": "681118a62ce920d0bd80cb5a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Beware: Dangerous \"Dog\"",
//       "key": "xzN9XZYu9Dw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-04-24T16:15:05.000Z",
//       "id": "680ab0e7f3cf6d66d79d2632"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In ONE MONTH, Stitch arrives in theaters!",
//       "key": "H4B4nS8yXjE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-04-23T16:00:33.000Z",
//       "id": "681117a12ce920d0bd80cb23"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Mayhem Unleashed",
//       "key": "E7YOD1DimBc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-04-04T18:00:12.000Z",
//       "id": "67f0347f66d70142b69954d6"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"Water Fight\" Official Clip",
//       "key": "Ep2HAT1K3bs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-04-03T21:58:41.000Z",
//       "id": "67ef0d72aa77e08af7991eab"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "VWqJifMMgZE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2025-03-12T16:00:13.000Z",
//       "id": "67d1b5f666892bad6281735b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Stitch Runs Loose At The Big Game",
//       "key": "gqxwX1ZYg58",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-02-09T23:37:31.000Z",
//       "id": "67a9436bb01153d6f4936e50"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Teaser",
//       "key": "KurP5wvFq70",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-12-18T17:00:19.000Z",
//       "id": "67630c75cc2b6d9fccab0acd"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Teaser",
//       "key": "m5fMyIImwEY",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-11-25T17:00:07.000Z",
//       "id": "6744d375a7d2393708d7fe8d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Things in Hawaii That Just Make Sense",
//       "key": "1j1RrravDiw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-11-22T17:00:08.000Z",
//       "id": "6744b9bbcc1d69986bd9e196"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Coming to theaters on May 23, 2025!",
//       "key": "O90Fb0wcecs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-10-11T17:04:35.000Z",
//       "id": "672e982c72ba92c1087a0596"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Coming Summer 2025",
//       "key": "1iEE5E3xx8c",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-08-10T04:33:52.000Z",
//       "id": "672e982272ba92c1087a0590"
//     }
//   ]
// }
