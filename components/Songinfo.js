import React from "react";
import { useRecoilState } from "recoil";

import useSpotify from "../hooks/useSpotify";
import { millisToMinutesAndSeconds } from "../lib/time";
import { currentTrackIdState, isPlaingState } from "../atoms/songAtom";

const Song = ({ order, track }) => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlaingState);

  return (
    <div>{JSON.stringify(track)}</div>
  );
};

export default Song;
