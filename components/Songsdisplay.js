import React from "react";
import { useRecoilValue } from "recoil";

import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

const Songsdisplay = () => {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="px-8 flex flex-col space-y-1 pb-28">
      Here&apos;s the name: {JSON.stringify(playlist?.tracks.items[0].track.name)}
      <br></br>
      Here&apos;s the artist: {JSON.stringify(playlist?.tracks.items[0].track.artists[0].name)}
      <br></br>
      And here&apos;s everything else: {JSON.stringify(playlist?.tracks.items[0])}
      <br></br>
    </div>
    
  );
};

export default Songsdisplay;
