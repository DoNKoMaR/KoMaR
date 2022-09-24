import * as fs from 'fs'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	if (command == "cgpen") {
if (args[1]=="segundos") {var timer = args[0]+"000"
} else if (args[1]=="minutos") {var timer = args[0]+"0000"
} else if (args[1]=="horas") {var timer = args[0]+"00000"
} else {return m.reply(`*En que tiempo desea cerrar el grupo?*\n\n_Ejemplo de uso_ : \n${usedPrefix + command} 10 segundos`)
}
conn.sendMessage(m.chat, { text: `*El grupo se cerrará en ${text}*\n_Accion ejecutada por : @${etiqueta.replace(/@.+/, '')}_`, mentions: [etiqueta] } )
setTimeout( () => {
conn.groupSettingUpdate(m.chat, 'announcement')
}, timer)
} else if (command == "agp") {
conn.groupSettingUpdate(m.chat, 'not_announcement')
} else { }
}

handler.help = ['cgpen <tiempo>', 'agp']
handler.tags = ['grupos', 'admins']
handler.command = /^(cgpen)|(agp)$/i

handler.admin = true
handler.botAdmin = true

export default handler
