#!/bin/zsh

cd "$(dirname "$0")" || exit 1

python3 -m http.server 4173 &
SERVER_PID=$!

trap 'kill "$SERVER_PID" 2>/dev/null' EXIT INT TERM

sleep 1
open "http://localhost:4173"

echo "Mark demo is running at http://localhost:4173"
echo "Keep this window open while presenting. Press Control-C to stop."

wait "$SERVER_PID"
