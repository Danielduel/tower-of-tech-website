import Image from "next/image";
import { Adep, Acc, Mid, Fas, Sonic, type Playlist } from "./playlists";
import { FC } from "react";

// const kebabs = [
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.unicornsinthekitchen.com%2Fwp-content%2Fuploads%2F2022%2F11%2FDoner-kebab-sq.jpg&f=1&nofb=1&ipt=4c0a3fdb5cbb8769436fbd5fc3568bcf0f7b64ead2d135049b95db5dc9f72289&ipo=images",
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpekis.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fsocial_share_1200%2Fpublic%2F2025-04%2Fdoner_kebab_wrap.webp%3Fitok%3D1pIbTwCE&f=1&nofb=1&ipt=f6988163c122053e2720d6b34ac4be5b378eb03d6c25ea92248ed6868172b712&ipo=images",
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flabelrecipes.com%2Fwp-content%2Fuploads%2F2025%2F04%2Fu6966556431_Persian_Chicken_Kebabs_Joojeh_Kabab_-v_6.1_c2e6b96d-a51b-4855-b7e1-fd19fde17db1_0.webp&f=1&nofb=1&ipt=d0cad9222d2718a54373fde07b06e0f58c8f12be55bf8cb3d2624390dc00ab67&ipo=images",
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.livingnorth.com%2Fimages%2Fmedia%2Farticles%2Ffood-and-drink%2Frecipes%2FSpicy%2520Lamb%2520Kebabs%2FSpicy%2520Lamb%2520Kebabs.png%3Ffm%3Dpjpg%26w%3D1000%26q%3D95&f=1&nofb=1&ipt=e21095325124f21fecc10ed897beb0689a346778fa67b6bba8182718752fa6eb&ipo=images",
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ohmysimplemeals.com%2Fwp-content%2Fuploads%2F2025%2F07%2Ftoconverted.com_houda_57841_httpss.mj_.runDaFUNMkkYEY_A_stack_of_grilled_torti_11ebcd4d-7978-4a90-a17f-db5088ab54b9_3-675x675.webp&f=1&nofb=1&ipt=05ad8b22417417899e98c8863803af05d4998a40186b9711b4850b04c41a4f8b&ipo=images"
// ]


const Playlist: FC<{ playlist: Playlist }> = ({
  playlist
}) => {
  const image = playlist.rawGithubCoverUrl;
  // (playlist.displayComplexity === "Easy" && kebabs[0]) ||
  // (playlist.displayComplexity === "Normal" && kebabs[1]) ||
  // (playlist.displayComplexity === "Hard" && kebabs[2]) ||
  // (playlist.displayComplexity === "Expert" && kebabs[3]) ||
  // (playlist.displayComplexity === "Insane" && kebabs[4]);
  return (
    <section className="relative flex container border-white border hover:border-l-32 transition-all overflow-hidden">
      <div className="w-full flex-1 flex flex-col">
        <div className="ml-4 pt-4 h-auto flex-1">
          <h2 className="text-xl">{playlist.playlist.playlistTitle}</h2>
          <span className="block">Songs count:&nbsp;{playlist.songsCount}</span>
          <span className="block">Speed:&nbsp;{playlist.displaySpeed}</span>
          <span className="block">Tech:&nbsp;{playlist.displayComplexity}</span>
        </div>
        <hr className="mx-4 my-4 mb-auto" />
        <div className="flex flex-row text-right ml-4 justify-end">
          <a className="underline block p-4" href={`/playlist/${encodeURI(playlist.playlist.playlistTitle)}`}>Details</a>
          <a className="underline block p-4" href={`https://raw.githubusercontent.com/Danielduel/tower-of-tech/refs/heads/main/migrated/playlists/${playlist.mapping.fileName}`} download>Download</a>
        </div>
      </div>
      <Image src={image} width="200" height="200" className="h-52 w-52" alt={`Cover image for ${playlist.playlist.playlistTitle}`} />
    </section>
  )
}

const PlaylistGroup: FC<{ playlists: Playlist[], title: string }> = ({
  playlists,
  title
}) => {
  return (
    <section className="pl-4 border-l py-4">
      <h3 className="text-2xl mb-3">{title}</h3>
      {playlists.map(x => <Playlist key={x.playlist.playlistTitle} playlist={x} />)}
    </section>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="w-full max-w-3xl flex-col items-center justify-between sm:items-start">
        <section className="my-6">
        <h2>Project</h2>
        <a className="underline w-max block" href="https://github.com/Danielduel/tower-of-tech-website">Website repository (GitHub)</a>
        <a className="underline w-max block" href="https://github.com/Danielduel/tower-of-tech">Playlist repository (GitHub)</a>
        <a className="underline w-max block" href="https://github.com/Danielduel/tower-of-tech/releases/latest">Latest release link (GitHub)</a>
        </section>

        <h2 className="text-2xl border-l-32 pl-4 block w-min">Listing</h2>
        <PlaylistGroup playlists={Adep} title="Slower maps" />
        <PlaylistGroup playlists={Acc} title="Average pacing" />
        <PlaylistGroup playlists={Mid} title="Quite fast" />
        <PlaylistGroup playlists={Fas} title="Fast maps" />
        <PlaylistGroup playlists={Sonic} title="Super fast maps" />
      </main>
    </div>
  );
}
