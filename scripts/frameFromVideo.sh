# Use directory as argument
cd "$1"

i=1
for avi in *.mp4; do
    ext='.png'
    name=`echo ${avi%.*}$ext`

    echo "$i": extracting the first frame of the video "$avi" into "$name"
    ffmpeg -y -loglevel error -i "$avi" -vf "scale=iw*sar:ih,setsar=1" -vframes 1 "$name"
    i=$((i+1))
 done