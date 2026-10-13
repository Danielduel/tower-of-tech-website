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
      <section className="relative flex container border-white border hover:rounded-2xl lg:hover:scale-105 hover:z-10 backdrop-blur-2xl transition-all overflow-hidden">
        <div className="w-full flex-1 flex flex-col">
          <div className="flex-1 p-4">
            <span className="text-lg">{song.beatsaver?.metadata.songName ?? song.song.songName}</span><br />
            {song.beatsaver?.metadata.songSubName}<br />
            {song.beatsaver?.metadata.levelAuthorName ?? song.song.levelAuthorName}
          </div>
          <div className="text-right">
            {song.song.difficulties.map(x => (
              <div className="pr-4">
                {x.characteristic} {x.name}
              </div>
            ))}
          </div>
          <hr className="mx-4 my-4 mb-auto" />
          <div className="min-w-32 text-right flex flex-col ml-4 justify-end">
            {song.key ?
              <label>
                <input type="checkbox" id={song.hash} className="hidden peer" />
                <span className="transition-all opacity-0 peer-checked:opacity-100 mr-0 peer-checked:mr-4">
                  (copied)
                </span>
                <span className="inline-block p-4 cursor-pointer peer-checked:text-red-400" onClick={
                  // todo: callback ssg bundleside?
                  () => {
                    document.querySelectorAll('input[type=checkbox]').forEach(el => (el as HTMLInputElement).checked = false);
                    navigator.clipboard.writeText(`!bsr ${song.key}`)
                  }
                }>
                  <pre className="inline-block underline">
                    !bsr {song.key}
                  </pre>
                </span>
              </label> : (
                <span className="p-4">
                  Missing on BeatSaver
                </span>
              )
            }
          </div>
        </div>
        <Image
          src={`https://cfcdn.beatsaver.com/${song.hash}.jpg`}
          alt=""
          width="200" height="200" className="h-52 w-52"
        />
      </section>
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

        <div className="flex flex-col w-full">
          {playlist.resolvedSongs.map(song => (<SongItem song={song} />))}
        </div>

      </div>
    </RootLayout >
  );
}

