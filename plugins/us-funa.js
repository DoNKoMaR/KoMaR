/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
	let data = global.owner.filter(([id, isCreator]) => id && isCreator)
	let bot = db.data.settings[conn.user.jid] || {}
	let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let tname = await conn.getName(m.sender)
	if (!bot.restrict) return m.reply('[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!')
for (let [number] of data) {
	let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	if (users.startsWith('79773452127')) return m.reply(`\nª\n`) 
	if (users.startsWith(number)) return m.reply(`\nª\n`)
	if (users.startsWith(conn.user.id.split(':')[0])) return m.reply(`Me odias? :,c`)
	if(isNaN(users.slice(0, -15) && m.mentionedJid[0] && text)) { 
		await conn.groupParticipantsUpdate(m.chat, [users], 'remove') 
		await delay(1 * 1000)
		m.reply(`*El participante @${users.slice(0, -15)} fue eliminado del grupo ✓*\n_Accion ejecutada por ${tname}_`, null, {mentions: [etiqueta] })
		} else {
			m.reply(`A que usuario desea eliminar!?\nPor favor etiqueta a uno`)
		}
}
}

handler.help = ['ban @usuario']
handler.tags = ['propietario', 'grupos']
handler.command = /^(ban|kick|funar|sacar|echar)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))