while true; do
if ! screen -list | grep -q "DiscordBot"; then
   ./DiscordBot.sh
fi
if ! screen -list | grep -q "ServerMonitor"; then
   ./ServerMonitor.sh
fi
if ! screen -list | grep -q "LocalTunnel"; then
   ./LocalTunnel.sh
fi
if ! screen -list | grep -q "FacebookBot"; then
   ./FacebookBot.sh
fi
sleep 30;
done;
