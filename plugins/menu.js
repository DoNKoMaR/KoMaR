import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import { plugins } from '../lib/plugins.js'
import fetch from 'node-fetch';
import { generateWAMessage } from "@adiwajshing/baileys"
import * as fs from 'fs'
let tags = {
  //'contenido': 'Principal',
  'conversor': '_CONVERSORES :_',
  'animeuwu': '_ANIME :_',
  'casual': '_CMDS-CASUAL :_',
  'propietario': '_CMDS DUEΓO :_',
  'herramienta': '_HERRAMIENTAS :_',
  'premium': '_PREMIUM :_',
  'esclabot': '_SER SUB-BOT :_',
  'avanzado': '_AVANZADO :_',
  'admins': '_CMDS ADMINS :_',
  'grupos': '_CMDS GRUPOS :_',
  'fabricar': '_ARTE Y DISEΓO :_',
  'busqueda': '_BUSQUEDA :_',
  'servicio': '_SERVICIOS :_',
  'xp': '_XP & LIMITE :_',
  'game': '_RPG, JUEGOS :_',
  'random': '_PASATIEMPO :_',
  '': '_OTROS :_'
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, command }) => {
	try {
    let wimg = await fetch('https://pastebin.com/raw/GZ8d1qcT')
    let imgw = await conn.profilePictureUrl(m.sender, 'image').catch(_ => './multimedia/imagenes/avatar_contact.png')
    var wjson = await wimg.json()
    var pweb = wjson.nk_media || imgw
    var textweb = wjson.nk_txt
    } catch (e) {
    var pweb = await conn.profilePictureUrl(conn.user.jid).catch(_ => './multimedia/imagenes/avatar_contact.png')
    var textweb = ''
    }
    const message = m.reply(` ```CARGANDO MENU DEL BOTπ``` ${textweb}`)
    await message
    /**try {
    let datcov = await fetch('https://latam-api.vercel.app/api/covid19?apikey=nekosmic&q=world');
	let CovidApi = await datcov.json();
	var cotext = `βγ DATOS - COVID19 γβ
ββ² Casos positivos : ${CovidApi.casos}
ββ― Recuperados : ${CovidApi.recuperados}
ββ₯ Tratados : ${CovidApi.activo}
ββ Fallecidos : ${CovidApi.muertes}
βββββγ π γβββββ\n\n`
    } catch (e) {
    var cotext = ''
    }**/
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role } = db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let uptime = timeString(process.uptime())
    let totalreg = Object.keys(db.data.users).length
    let rtotalreg = Object.values(db.data.users).filter(user => user.registered == true).length
    let help = Object.values(plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `By https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limitado)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      prop: global.Propietario,
      pref: ' '+global.Prefijo+' ',
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[ URL de github invΓ‘lido ]',
      level, limit, name, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    await conn.sendMessage(m.chat, {
image: {url: pweb },
caption: text.trim(),
footer: `\nββ± ${NombreDelBot}\nβββ± ${MultiNK.Habla()} β`,
buttons: [{buttonId: Prefijo+`apoyo`, buttonText: {displayText: "[ APOYO ]"}, type: 1}, {buttonId: Prefijo+`creador`, buttonText: {displayText: "[ CREADORA ]",}, type: 1}, {buttonId: Prefijo+`informacion`, buttonText: {displayText: "[ INFORMACION ]"}, type: 1}],
headerType: 4,
...{ contextInfo: { mentionedJid: [m.sender], externalAdReply: { thumbnail: fs.readFileSync('./multimedia/imagenes/logo.jpg'), sourceUrl: 'https://github.com/Yesenia57/NekosmicBot-MD/fork?rgh-fork=true' }}}
}, { quoted: m }) 
reacMoji(m.chat, conn, 'π', m)
  } catch (e) {
    conn.reply(m.chat, '[ ! ] Ocurrio un error en el menΓΊ :/ ', m)
    throw e
  }
}
const defaultMenu = {
  before: `\n
*β­ββββ?* \`\`\`%npmname\`\`\` *β―βββΰ¦*
*βποΈ Base de datos:* %rtotalreg a %totalreg
*βπ°οΈ Tiempo activo:* %uptime
*βπ§¬ Version del bot:* %version
*βπ©π»βπ» DueΓ±a:* %prop
*βπͺ« Prefijo ΓΊnico:* γ %pref γ
*βπ©» Cliente:* %name
*βπ§― Limite restante:* %limit
*βπ Nivel:* %level (%exp / %maxexp)
*βποΈ Rol:* %role
*βπ§΄ XP:* %totalexp
*β°βββββββββββββββββββββΰ¦*
%readmore
β­ββββββββββββββββ
ββ [>] _COMANDOS  β·
β°ββββββββββββββββ\n`.trimStart(),
  header: 'β­βββββ? %category β―ββββ\nββ­βββββββββββ',
  body: 'ββ  %cmd %islimit %isPremium',
  footer: 'ββ°ββββββββββββ\n*β°βββββββββββββββ*\n',
  after: ``,
}
handler.help = ['menu']
//handler.tags = ['contenido']
handler.command = /^(menu|comandos|menΓΊ|help)$/i

handler.exp = 5

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(850)
