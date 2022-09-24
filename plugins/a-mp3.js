import { toAudio } from '../lib/converter.js'
import * as fs from 'fs'

let handler = async (m, { conn, usedPrefix, command, text }) => {
	let redes = ['https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1', 'https://vm.tiktok.com/ZMLjP4RBS/', 'https://fb.watch/b7LOc9_LU2/', 'https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA']
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) return m.reply(`Envie ó Responda un (video/grabación) con el comando:\n\n${usedPrefix + command}`)
    let media = await q.download?.()
    if (!media) throw 'No se pudo descargar el archivo'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) return m.reply('No se pudo convertir a audio')
    await conn.sendMessage(m.chat, { audio: audio.data, contextInfo: {externalAdReply:{title: `🎞️ Convertido a audio 🎶`,"body": `.mp3 ✓`,"previewType":"PHOTO","thumbnail": fs.readFileSync('./multimedia/imagenes/logo.jpg'),"sourceUrl": redes[Math.floor(Math.random() * redes.length)]}}, mimetype: 'audio/mp4', fileName: `${text ? text : 'audio'}.mp3` }, { quoted: m })
    reacMoji(m.chat, conn, '⚙️', m)
}

handler.help = ['amp3']
handler.tags = ['conversor']
handler.command = /^(amp3|aaudio|tomp3)$/i

export default handler