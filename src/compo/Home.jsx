import OnePlaylist from "./OnePlaylist";
import AllPlaylists from "./AllPlaylists";
import { HashRouter, Navigate, Routes, Route, Link } from "react-router-dom";
import Iframe from "./Iframe";

import Single from "./Single";
import data from "../assets/data";

function Home() {
  return (
    <HashRouter>
      <Iframe />

      <Routes>
        <Route path="/" element={<Navigate to="/allplaylists" />} />
        <Route path="/allplaylists" element={<AllPlaylists />} />
        {data.playlists.map((item, index) => {
          return (
            <Route
              key={index}
              path={"/playlist/" + index}
              element={<OnePlaylist playlistData={item} />}
            />
          );
        })}

        <Route path="/single" element={<Single />} />
      </Routes>
    </HashRouter>
  );
}

export default Home;
