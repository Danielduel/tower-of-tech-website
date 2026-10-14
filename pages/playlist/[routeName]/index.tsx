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
      <section className="relative flex container border-white border hover:rounded sm:hover:rounded-2xl lg:hover:scale-105 hover:z-10 backdrop-blur-2xl transition-all overflow-hidden m-auto">
        <div className="w-full flex-1 flex flex-col border-r">
          <div className="flex-1 p-2 sm:p-4 flex flex-col">
            {
              song.beatsaver
                ? (
                  <>
                    <span className="text-sm sm:text-base md:text-lg">{song.beatsaver.metadata.songName}</span>
                    <span className="text-sm sm:text-base md:text-lg">{song.beatsaver.metadata.songSubName}</span>
                    <span className="text-xs sm:text-sm md:text-base">{song.beatsaver.metadata.songAuthorName}</span>
                    <span className="text-xs sm:text-sm md:text-base">{song.beatsaver.metadata.levelAuthorName}</span>
                  </>
                )
                : (
                  <>
                    <span className="text-lg">{song.song.songName}</span>
                    <span>{song.song.levelAuthorName}</span>
                  </>
                )
            }
          </div>
          <div className="text-right">
            {song.song.difficulties.map(x => {
              if (song.beatsaver) {
                const diffExtraInfo = song.beatsaver.versions[0].diffs.find(diff => diff.characteristic === x.characteristic && diff.difficulty === x.name);
                if (diffExtraInfo) {
                  return (
                    <div className="px-2 sm:px-4 flex justify-end gap-2 sm:gap-5 text-xs sm:text-sm md:text-base">
                      <span className="cursor-help" title="Difficulty selected for this playlist">
                      {diffExtraInfo.characteristic} {diffExtraInfo.difficulty}
                      </span>
                      <span className="cursor-help" title="Notes per second">
                        {diffExtraInfo.nps.toFixed(2)}
                      </span> 
                      <span className="cursor-help" title="Note jump speed">
                        {diffExtraInfo.njs.toFixed(0)}
                      </span>
                      <span className="cursor-help" title="Note count">
                        {diffExtraInfo.notes}
                      </span>
                    </div>
                  );
                }
              }
              return (
                <div className="pr-2 sm:pr-4">
                  {x.characteristic} {x.name}
                </div>
              )
            })}
          </div>
          <hr className="mx-2 mt-2 mb-0 sm:mx-4 sm:mt-4 " />
          <div className="min-w-32 text-right flex flex-col ml-2 sm:ml-4 justify-end">
            {song.key ?
              <label>
                <input type="checkbox" id={song.hash} className="hidden peer" />
                <span className="transition-all opacity-0 peer-checked:opacity-100 mr-0 peer-checked:mr-4">
                  (copied)
                </span>
                <span className="inline-block p-2 sm:p-4 cursor-pointer peer-checked:text-red-400" onClick={
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
          width="400" height="400" className="h-38 w-38 sm:h-60 sm:w-60 md:h-64 md:w-64"
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

