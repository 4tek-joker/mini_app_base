const qrcode = require('qrcode-terminal')
const { appId } = require('../app.json')

const argv = (() => {
  const argument = {}
  process.argv.slice(2).forEach(element => {
    const matches = element.match('--([a-zA-Z0-9]+)=(.*)')
    if (matches) {
      argument[matches[1]] = matches[2]
        .replace(/^['"]/, '')
        .replace(/['"]$/, '')
    }
  })
  return argument
})()

const port = argv.port || 8182
const host = argv.host || 'localhost'

const args = {
  config: {
    host: host,
    port: port,
    development: true,
  },
  appId: appId,
}
qrcode.generate(`${JSON.stringify(args)}`, {
  small: true,
})
