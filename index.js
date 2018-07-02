const proc = require('child_process')

ldd.sync = lddSync
module.exports = ldd

function lddSync (path) {
  const buf = proc.execSync('ldd ' + JSON.stringify(path))
  return parse(buf.toString())
}

function ldd (path, cb) {
  proc.exec('ldd ' + JSON.stringify(path), function (err, stdout, stderr) {
    if (err) return cb(err)
    if (stderr) return cb(new Error(stderr))
    cb(null, parse(stdout))
  })
}

function parse (output) {
  return output
    .split('\n')
    .map(line => line.trim())
    .map(parseEntry)
    .filter(line => line)
}

function parseEntry (line) {
  if (!line) return null
  const m = line.match(/^([^ ]+) (?:=> (.+) )?\((.+)\)$/)
  if (!m) return null
  return {
    name: m[1],
    path: m[2] || null,
    address: m[3]
  }
}
