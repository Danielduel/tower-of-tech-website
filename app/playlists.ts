
import AdepTech from "../imports/AdepTech";
import AdepComfy from "../imports/AdepComfy";
import AdepTempo from "../imports/AdepTempo";
import AdepHitech from "../imports/AdepHitech";
import AdepAnglehell from "../imports/AdepAnglehell";

import AccComfy from "../imports/AccComfy";
import AccTech from "../imports/AccTech";
import AccAnglehell from "../imports/AccAnglehell";
import AccTempo from "../imports/AccTempo";
import AccHitech from "../imports/AccHitech";

import MidTech from "../imports/MidTech";
import MidHitech from "../imports/MidHitech";
import MidAnglehell from "../imports/MidAnglehell";
import MidTempo from "../imports/MidTempo";
import MidComfy from "../imports/MidComfy";

import FasComfy from "../imports/FasComfy";
import FasTech from "../imports/FasTech";
import FasHitech from "../imports/FasHitech";
import FasAnglehell from "../imports/FasAnglehell";
import FasTempo from "../imports/FasTempo";

import SonicComfy from "../imports/SonicComfy";
import SonicTech from "../imports/SonicTech";
import SonicHitech from "../imports/SonicHitech";

export type Playlist = typeof AdepComfy;

export const Adep: Playlist[] = [
  AdepComfy as unknown as Playlist,
  AdepTech as unknown as Playlist,
  AdepHitech as unknown as Playlist,
  AdepAnglehell as unknown as Playlist,
  AdepTempo as unknown as Playlist,
];

export const Acc: Playlist[] = [
  AccComfy as unknown as Playlist,
  AccTech as unknown as Playlist,
  AccHitech as unknown as Playlist,
  AccAnglehell as unknown as Playlist,
  AccTempo as unknown as Playlist
];

export const Mid: Playlist[] = [
  MidComfy as unknown as Playlist,
  MidTech as unknown as Playlist,
  MidHitech as unknown as Playlist,
  MidAnglehell as unknown as Playlist,
  MidTempo as unknown as Playlist
];

export const Fas: Playlist[] = [
  FasComfy as unknown as Playlist,
  FasTech as unknown as Playlist,
  FasHitech as unknown as Playlist,
  FasAnglehell as unknown as Playlist,
  FasTempo as unknown as Playlist
];

export const Sonic: Playlist[] = [
  SonicComfy as unknown as Playlist,
  SonicTech as unknown as Playlist,
  SonicHitech as unknown as Playlist
];

export const All: Playlist[] = [
  ...Adep,
  ...Acc,
  ...Mid,
  ...Fas,
  ...Sonic
];

