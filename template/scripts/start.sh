if [[ $1 == '--port' ]]; then
  host=$(ipconfig getifaddr en0)
  node ./scripts/qrcode.js --host=$host --port=$2
  react-native webpack-start --port=$2 --host=$host
else 
  host=$(ipconfig getifaddr en0)
  node ./scripts/qrcode.js --host=$host --port=8181
  react-native webpack-start --port=8181 --host=$host
fi