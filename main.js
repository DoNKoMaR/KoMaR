// TODO: reduce global variabel usage
/**
[ https://github.com/DoNKoMaR/ ]
**/
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
process.on('uncaughtException', console.error)

import './config.js'

import {
  spawn
} from 'child_process'
import {
  protoType,
  serialize
} from './lib/simple.js'
import {
  plugins,
  filesInit,
  reload,
  pluginFolder,
  pluginFilter
} from './lib/plugins.js'
import Connection from './lib/connection.js'
import Helper from './lib/helper.js'
import db, { loadDatabase } from './lib/database.js'
import clearTmp from './lib/clearTmp.js';
import chalk from 'chalk';

const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()
if (db.data == null) loadDatabase()

<<<<<<< HEAD
Object.assign(global, Helper)
// global.Fn = function functionCallBack(fn, ...args) { return fn.call(Connection.conn, ...args) }
global.timestamp = {
  start: new Date
=======
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

global.timestamp = { start: new Date }

const __dirname = global.__dirname(import.meta.url)

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = new RegExp('^[' + (opts['prefix'] || 'xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-HhhHBb.aA').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb(\+srv)?:\/\//i.test(opts['db']) ?
(opts['mongodbv2'] ? new mongoDBV2(opts['db']) : new mongoDB(opts['db'])) :
new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`))

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(async function () {
if (!global.db.READ) {
clearInterval(this)
resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
}
}, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read().catch(console.error)
global.db.READ = null
global.db.data = {
users: {},
chats: {},
stats: {},
msgs: {},
sticker: {},
settings: {},
...(global.db.data || {})
}
global.db.chain = chain(global.db.data)
}
loadDatabase()

global.authFile = `${opts._[0] || 'session'}.data.json`
const { state, saveState } = useSingleFileAuthState(global.authFile)

const connectionOptions = {
printQRInTerminal: true,
auth: state,
browser: ['☣ⒹⓞⓃ ⓀⓞⓂⓐⓇ☣','Edge','1.0.0'],
>>>>>>> 18380ce5119f66cbea1d7e8abbc1a9d1c75c347d
}

// global.opts['db'] = process.env['db']

const conn = Object.defineProperty(Connection, 'conn', {
  value: await Connection.conn,
  enumerable: true,
  configurable: true,
  writable: true
}).conn

// load plugins
filesInit(pluginFolder, pluginFilter, conn).then(_ => console.log(chalk.rgb(255,131,0).underline('\n[...] Se encontraron '+Object.keys(plugins).length+' plugins\n'))).catch(console.error)
global.plugins = {}

Object.freeze(reload)


if (!opts['test']) {
  setInterval(async () => {
    await Promise.allSettled([
      db.data ? db.write() : Promise.reject('db.data es nulo'),
      (opts['autocleartmp'] || opts['cleartmp']) ? clearTmp() : Promise.resolve()
    ])
    /*Connection.store.writeToFile(Connection.storeFile)*/
  }, 60 * 1000)
}
if (opts['server']) (await import('./server.js')).default(conn, PORT)


// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    spawn('ffmpeg'),
    spawn('ffprobe'),
    spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    spawn('convert'),
    spawn('magick'),
    spawn('gm'),
    spawn('find', ['--version'])
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
  //console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find
  }
  // require('./lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) (conn?.logger || console).warn('\n\n[ IMPORTANTE ] : Por favor instalé el paquete ffmpeg para el envío de archivos multimedia\n[_>] (pkg install ffmpeg)\n\n')
  if (s.ffmpeg && !s.ffmpegWebp) (conn?.logger || console).warn('\n\n[ IMPORTANTE ] : Es posible que los stickers no estén animadas sin libwebp en ffmpeg\n[_>] (pkg install libwebp) ó (--enable-ibwebp while compiling ffmpeg)\n\n')
  if (!s.convert && !s.magick && !s.gm) (conn?.logger || console).warn('\n\n[ IMPORTANTE ] : Es posible que los stickers no funcionen sin imagemagick si libwebp y ffmpeg no esten instalados\n[_>] (pkg install imagemagick)\n\n')
}

_quickTest()
  .then(() => (conn?.logger.info || console.log)('\n\n[_>] Prueba rápida realizada ✓\n'))
  .catch(console.error)
