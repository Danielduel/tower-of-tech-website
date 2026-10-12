"use server";

import RootLayout from "@/app/layout";
import { All, Playlist } from "@/app/playlists";
import Image from "next/image";
import { FC } from "react";

export async function getStaticPaths() {
  return {
    paths: All.map(x => `/playlist/${encodeURI(x.playlist.playlistTitle)}`),
    fallback: false
  }
}

// export async function generateStaticParams() {
//   const staticParams = All.map((x, i) => {
//     return {
//       // "/playlist/[routeName]": `/playlist/${x.playlist.playlistTitle}`,
//       routeName: encodeURI(x.playlist.playlistTitle), // x.playlist.playlistTitle,
//       props: x
//     };
//   });
//
//   console.log(staticParams);
//
//   return staticParams;
// }

export async function getStaticProps({ params: { routeName } }: { params: { routeName: string } }) {
  const playlist = All.find(x => x.playlist.playlistTitle === routeName);

  return {
    props: { playlist }
  }
}

const SongItem: FC<{
  song: Playlist["resolvedSongs"][number]
}> = ({
  song
}) => {
    return (
      <div className="flex gap-4">
        <Image
          src={`https://cfcdn.beatsaver.com/${song.hash}.jpg`}
          alt=""
          width="100"
          height="100"
        />
        <div className="flex-1">
          <span className="text-lg">{song.beatsaver?.metadata.songName ?? song.song.songName}</span><br />
          {song.beatsaver?.metadata.songSubName}<br />
          {song.beatsaver?.metadata.levelAuthorName ?? song.song.levelAuthorName}
        </div>
        <div className="min-w-32 text-right">
          {song.key ? (
            <pre>
              !bsr {song.key}
            </pre>
          ) : `Missing on BeatSaver: ${song.hash}`
          }
          {song.song.difficulties.map(x => (
            <div>
              {x.characteristic} {x.name}
            </div>
          ))}
        </div>
      </div>
    )
  }

export default function Page(props: { playlist: Playlist }) {
  const { playlist } = props;
  return (
    <RootLayout params={Promise.resolve({})}>
      <div className="container max-w-3xl m-auto">
        <div className="text-2xl my-4">
          <h1>{playlist.playlist.playlistTitle}</h1>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {playlist.resolvedSongs.map(song => (<SongItem song={song} />))}
        </div>

      </div>
    </RootLayout>
  );
}

