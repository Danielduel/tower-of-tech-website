rm -rf imports
mkdir imports
mkdir -p imports/src/tools/

BASE=https://raw.githubusercontent.com/Danielduel/tower-of-tech/refs/heads/main/migrated/playlists-ts

wget -P ./imports/ $BASE/AccAnglehell.ts
wget -P ./imports/ $BASE/AccComfy.ts
wget -P ./imports/ $BASE/AccHitech.ts
wget -P ./imports/ $BASE/AccTech.ts
wget -P ./imports/ $BASE/AccTempo.ts

wget -P ./imports/ $BASE/AdepAnglehell.ts
wget -P ./imports/ $BASE/AdepComfy.ts
wget -P ./imports/ $BASE/AdepHitech.ts
wget -P ./imports/ $BASE/AdepTech.ts
wget -P ./imports/ $BASE/AdepTempo.ts

wget -P ./imports/ $BASE/FasAnglehell.ts
wget -P ./imports/ $BASE/FasComfy.ts
wget -P ./imports/ $BASE/FasHitech.ts
wget -P ./imports/ $BASE/FasTech.ts
wget -P ./imports/ $BASE/FasTempo.ts

wget -P ./imports/ $BASE/MidAnglehell.ts
wget -P ./imports/ $BASE/MidComfy.ts
wget -P ./imports/ $BASE/MidHitech.ts
wget -P ./imports/ $BASE/MidTech.ts
wget -P ./imports/ $BASE/MidTempo.ts

wget -P ./imports/ $BASE/SonicComfy.ts
wget -P ./imports/ $BASE/SonicHitech.ts
wget -P ./imports/ $BASE/SonicTech.ts

