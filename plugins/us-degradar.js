let handler = async (m, { conn, text, command }) => { 
	if(!text) return m.reply(`*A que administrador desea quitarle su puesto?*`)
	if(!text.match(/@/g)) return m.reply(`Ejemplo de uso:\n\n${Prefijo + command} @+51957xxx\n`)
	let user = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' 
	await conn.groupParticipantsUpdate(m.chat, [user], 'demote').catch(e => {console.log(e)})
	reacMoji(m.chat, conn, '⚔️', m)
}

handler.help = ['darpoder @usuario']
handler.tags = ['grupos', 'admins']
handler.command = /^(quitarpoder|degradar|demote|quitaradmin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler