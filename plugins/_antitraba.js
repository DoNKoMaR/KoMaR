/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import * as fs from 'fs'
import db from '../lib/database.js'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = db.data.chats[m.chat]
    let bot = db.data.settings[this.user.jid] || {}
    let prt = m.key.participant
    let yid = m.key.id
    let name = await conn.getName(m.sender)
    let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "79773452127-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": NombreDelBot, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/mylogo.jpg')}}}
    if (chat.antiTraba && m.text.length > 1200) {
    	if (isAdmin) return conn.sendMessage(m.chat, { text: `El administrador @${m.sender.split("@")[0]} acaba de enviar un texto que contiene muchos caracteres -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, NombreDelBot, ['[ DESACTIVAR ANTI TRABAS ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin && bot.restrict) {
        	conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: yid, participant: prt }})
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 500)
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `Marcar el chat como leido ✓\n${"\n".repeat(400)}\n=> El número : wa.me/${m.sender.split("@")[0]}\n=> Alias : ${name}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`, mentions: [m.sender] }, { quoted: fakemek })
        }, 1000)
        } else if (!bot.restrict) return m.reply('[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!')
    }
    return !0
}
