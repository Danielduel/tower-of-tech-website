import Image from "next/image";
import { Adep, Acc, Mid, Fas, Sonic, type Playlist } from "./playlists";
import { FC } from "react";

const Playlist: FC<{ playlist: Playlist }> = ({
  playlist
}) => {
  return (
    <section className="flex container mb-6">
      <Image src={playlist.rawGithubCoverUrl} width="150" height="150" alt={`Cover image for ${playlist.playlist.playlistTitle}`} />
      <div className="ml-6 w-full">
        <h2 className="text-xl">{playlist.playlist.playlistTitle}</h2>
        <span className="block">Songs count:&nbsp;{playlist.songsCount}</span>
        <span className="block">Speed:&nbsp;{playlist.displaySpeed}</span>
        <span className="block">Tech:&nbsp;{playlist.displayComplexity}</span>
      </div>
      <div className="flex flex-col">
        <a className="underline block" href={`/playlist/${encodeURI(playlist.playlist.playlistTitle)}`}>Details</a>
        <a className="underline block" href={`https://raw.githubusercontent.com/Danielduel/tower-of-tech/refs/heads/main/migrated/playlists/${playlist.mapping.fileName}`} download>Download</a>
      </div>
    </section>
  )
}

const PlaylistGroup: FC<{ playlists: Playlist[], title: string }> = ({
  playlists,
  title
}) => {
  return (
    <section>
      <h3 className="text-2xl mt-12 mb-3">{title}</h3>
      {playlists.map(x => <Playlist key={x.playlist.playlistTitle} playlist={x} />)}
    </section>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <a className="underline" href="https://github.com/Danielduel/tower-of-tech/releases/latest">Latest release link</a>

        <PlaylistGroup playlists={Adep} title="Adep" />
        <PlaylistGroup playlists={Acc} title="Acc" />
        <PlaylistGroup playlists={Mid} title="Mid" />
        <PlaylistGroup playlists={Fas} title="Fas" />
        <PlaylistGroup playlists={Sonic} title="Sonic" />
      </main>
    </div>
  );
}
