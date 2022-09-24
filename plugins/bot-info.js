/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import Connection from '../lib/connection.js'
import { plugins } from '../lib/plugins.js'
import { cpus as _cpus, totalmem, freemem, platform, type, arch, hostname } from 'os'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import now from 'performance-now'
const { generateWAMessageFromContent } = (await import('@adiwajshing/baileys')).default
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {
  const chats = Object.entries(Connection.store.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  const mcarga = m.reply('_Obteniendo información..._')
  await mcarga
  let old = performance.now()
  let neww = performance.now()
  let speed = neww - old
  let timestamp = now()
  let latensi = now() - timestamp
  let _uptime = process.uptime() * 1000
  let uptime = timeString(process.uptime())
  let more = String.fromCharCode(8206)
  let masss = more.repeat(850)
try {
    let wimg = await fetch('https://pastebin.com/raw/Bu8esjPA')
    let imgw = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => './multimedia/imagenes/avatar_contact.png')
    var wjson = await wimg.json()
    var pweb = wjson.nk_media || imgw
    } catch (e) {
    var pweb = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => './multimedia/imagenes/avatar_contact.png')
    }
  let infotext = `
❮INFORMACIÓN DE NEKOSMICBOT-MD❯ 
${masss}
╭━━━━━━━━━━━━━━━━━━━ঐ
┃ 🪫 Bot : (activo)
┃ 👩🏻‍💻 Dueño actual : ${Propietario}
┃ 🕰️ Tiempo de ejecucion : ${uptime}.
┃ 📍 Apodo en Whatsapp : ${conn.user.name}.
┃ 🪀 Grupos con mayor actividad : ${groupsIn.length}
┃ 🏓 Grupos nuevos : ${groupsIn.length}
┃ ⚰️ Grupos abandonados : ${groupsIn.length - groupsIn.length}
┃ 🕵🏻‍♀️ Chats personales : ${chats.length - groupsIn.length}
┃ 💬 Total de chats : ${chats.length}
┃ 📟 Hits de hoy : ${global.hitcmd.length}
┃ 📡 Version del bot : ${BotVersion}
┃ ⚖️ Wa-web Api : https://github.com/adiwajshing/Baileys
┃ 🐈 Sc - Github : https://github.com/Yesenia57/NekosmicBot-MD
┃ 🧬 Total de plugins : ${Object.keys(plugins).length}
┃ 🌪️ Velocidad de procesamiento : ${speed} s...
┃ 🚄 Velocidad de conexion : ${latensi.toFixed(4)}ms...
┃ 🪫 RAM: ${format(totalmem() - freemem())} Restantes De ${format(totalmem())}
┃ 🗃️ Plataforma : ${platform()}
┃ 🩻 Base OS : ${type()}
┃ 🪨 Arquitectura : ${arch()}
┃ 🐕‍🦺 Host : ${hostname()}
╰━━━━━━━━━━━━━━━━━━━ঐ

╭━━━━━━━━━━━━━━━━━ঐ
➫ Consumó de memoria :
${'' + Object.keys(used).map((key, , arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + ''}
➫ ${cpus[0] ? `Uso total de CPU
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
CPU Core(s) Usado (${cpus.length} Core CPU)
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
╰━━━━━━━━━━━━━━━━━━━ঐ`.trim()
const prep=generateWAMessageFromContent(m.chat,{orderMessage:{orderId:'5352482274766633',thumbnail:await getBuffer(pweb),itemCount:-369,status:1,surface:1,message:infotext,orderTitle:NombreDelBot+` 🔥`,sellerJid:'79773452127@s.whatsapp.net',token:'1655878716',priceAmount:'666000',totalAmount1000:'9999999999',totalCurrencyCode:'PEN',contextInfo:null,}},{quoted:m})
await conn.relayMessage(m.chat, prep.message,  { messageId: prep.key.id })
reacMoji(m.chat, conn, '🤖', m)
}

handler.help = ['informacion']
handler.tags = ['casual']
handler.command = /^(informacion|infobot|ping|speed|info|alive|perfil)$/i

export default handler
