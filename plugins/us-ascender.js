let handler = async (m, { conn, text, command }) => { 
	if(!text) return m.reply(`*A que participante desea convertirlo en administrador?*`)
	if(!text.match(/@/g)) return m.reply(`Ejemplo de uso:\n\n${Prefijo + command} @+51995...\n`)
	let user = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' 
	await conn.groupParticipantsUpdate(m.chat, [user], 'promote').catch(e => {console.log(e)})
	reacMoji(m.chat, conn, '⚔️', m)
}

handler.help = ['darpoder @usuario']
handler.tags = ['grupos', 'admins']
handler.command = /^(darpoder|ascender|promote|daradmin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler