import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { shuffle } from "lodash";
import { useRecoilValue, useRecoilState } from "recoil";

import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";
import Songs from "./Songs";
import Songsdisplay from "./Songsdisplay"

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

const Center = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlayList] = useRecoilState(playlistState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlayList(data.body);
      })
      .catch((err) => console.log("Somthing wen wrong!", err));
  }, [spotifyApi, playlistId]);

  /*   console.log(playlist); */

  return (
   <Songsdisplay />
  );
};

export default Center;
