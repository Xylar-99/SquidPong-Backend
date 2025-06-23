pkg update && pkg upgrade
pkg install wget unzip
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm64.zip
unzip ngrok-stable-linux-arm64.zip
chmod +x ngrok
./ngrok config add-authtoken 2yuvPNbpLMclFZvt4fM5iD872YZ_3nEiw65Tc69CSfQQgouxL
