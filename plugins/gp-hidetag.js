/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import * as fs from 'fs'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => conn.decodeJid(u.id))
  let quoted = m.quoted ? m.quoted : m
  let mime = (quoted.msg || quoted).mimetype || ''
  let isMedia = /image|video|sticker|audio/.test(mime)
  let redes = ['https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1', 'https://vm.tiktok.com/ZMLjP4RBS/', 'https://fb.watch/b7LOc9_LU2/', 'https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA']
  let more = String.fromCharCode(8206)
  let masss = more.repeat(850)
  let htextos = `${text ? text : "ˢᵉˣʸ ᴱˡ ᑫᵘᵉ ᴸᵒ ᴸᵉᵃ ⁷ʷ⁷"}`
if ((isMedia && quoted.mtype === 'imageMessage') && htextos) {
var mediax = await quoted.download?.()
conn.sendMessage(m.chat, { image: mediax, caption: htextos ,...{contextInfo:{mentionedJid:users,externalAdReply:{thumbnail:fs.readFileSync('./multimedia/imagenes/logo.jpg'),sourceUrl:redes[Math.floor(Math.random() * redes.length)]}}}}, {quoted: m })
} else if ((isMedia && quoted.mtype === 'videoMessage') && htextos) {
var mediax = await quoted.download?.()
conn.sendMessage(m.chat, { video: mediax, mentions: users, mimetype: 'video/mp4', caption: htextos })
} else if ((isMedia && quoted.mtype === 'audioMessage') && htextos) {
var mediax = await quoted.download?.()
conn.sendMessage(m.chat, { audio: mediax, ...{ contextInfo: { mentionedJid: users, externalAdReply: { body: htextos, thumbnail: fs.readFileSync('./multimedia/imagenes/logo.jpg'), sourceUrl: redes[Math.floor(Math.random() * redes.length)] }}}, mimetype: 'audio/mp4', fileName: `Hidetag.mp3` })
} else if ((isMedia && quoted.mtype === 'stickerMessage') && htextos) {
var mediax = await quoted.download?.()
conn.sendMessage(m.chat, {sticker: mediax, ...{ contextInfo: { mentionedJid: users, externalAdReply: { body: htextos, thumbnail: fs.readFileSync('./multimedia/imagenes/logo.jpg'), sourceUrl: redes[Math.floor(Math.random() * redes.length)] }}} })
} else {
await conn.relayMessage(m.chat, {extendedTextMessage:{text: `${masss}\n${htextos}\n`, ...{ contextInfo: { mentionedJid: users, externalAdReply: { thumbnail: fs.readFileSync('./multimedia/imagenes/logo.jpg'), sourceUrl: redes[Math.floor(Math.random() * redes.length)] }}}
}}, {})
}
}

handler.help = ['hidetag'].map(v => v + ' [mensaje]')
handler.tags = ['grupos', 'admins']
handler.command = /^(totag|hidetag)$/i

handler.group = true
handler.admin = true

export default handler

