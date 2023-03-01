import Head from "next/head";
import React from "react";
import { getSession, getProviders, useSession } from "next-auth/react";
import { useRecoilValue } from "recoil";
import Song from "./Song";

const Songs = () => {
  const playlist = useRecoilValue(playlistState);
  const { data: session, status } = useSession();
  return (
    <div className="px-8 flex flex-col space-y-1 pb-28 text-white">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  );
};

export default Songs;
