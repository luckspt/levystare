# Use directory as argument
cd "$1"

i=1
for picture in *.png; do
    new=$(printf "%03d" "$i") #03 pad to length of 3
    mv -i -- "$picture" "$new.png"

    i=$((i+1))
 done