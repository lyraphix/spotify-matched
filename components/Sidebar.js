import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useSpotify from "../hooks/useSpotify";
import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import useSongInfo from "../hooks/useSongInfo"

import { playlistIdState } from "../atoms/playlistAtom";
import Songs from "./Songs";
import Center from "./Center";
import Songdisplay from "./Songsdisplay";



const Sidebar = () => {
  const songInfo = useSongInfo();
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlayList] = useState([]);


  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);



  return (
    <div className="bg-white space-x-4 space-y-8">
      <h1 className="text-2xl font-bol space-x-8"> Session Info </h1>
      <div>
        {JSON.stringify(session)}
      </div>

      <br></br>
      <h1 className="text-2xl font-bol space-x-8"> First Song Info </h1>
      <div className="">
        <Center />
      </div>
      
      <br></br>
      <h1 className="text-2xl font-bol space-x-8"> First Playlist Info </h1>
      <div className="">
        {JSON.stringify(playlists[1])}
      </div>
    </div>
  );
};

export default Sidebar;
