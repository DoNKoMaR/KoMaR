/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata, isBotAdmin }) => {
	let { isBanned, welcome, detect, antiLink, antiLink2, delete: del, estranjerosnot, antifake1, antifake2, antiTraba, simi } = db.data.chats[m.chat]
	let { restrict, antiPrivado } = db.data.settings[conn.user.jid]
	let botNumber = conn.user.id.split(':')[0] + "@s.whatsapp.net"
	let botNumber2 = "@"+conn.user.id.split(':')[0]
    let more = String.fromCharCode(8206)
    let masss = more.repeat(850)
    let prep = generateWAMessageFromContent(m.chat,{liveLocationMessage:{degreesLatitude:-4.4764769,degreesLongitude:142.4871568,caption:`
*Grupo* : _[ ${groupMetadata.subject} ]_

*Grupo baneado* : _${isBanned ? "[✓]" : "[X]"}_

*Bot participante* : ${NombreDelBot}
_${botNumber2}_

*Bot admin* : _${isBotAdmin ? "[✓]" : "[X]"}_

*Bot* : _${opts['self'] ? "MODO-PRIVADO [ ! ]" : "MODO-PUBLICO [✓]"}_

*Modo restringido* : _${restrict ? "ACTIVADO [✓]" : "DESACTIVADO [X]"}_

*Anti-Privado* : _${antiPrivado ? "ACTIVADO [✓]" : "DESACTIVADO [X]"}_

*Bienvenida* : _${welcome ? "Activo [✓]" : "Inactivo [X]"}_

*Antilink* : _${antiLink ? "Activo [✓]" : "Inactivo [X]"}_

*Antilink 2* : _${antiLink2 ? "Activo [✓]" : "Inactivo [X]"}_

*Anti extranjeros* : _${estranjerosnot ? "Activo [✓]" : "Inactivo [X]"}_

*No falsos* : _${antifake1 ? "Activo [✓]" : "Inactivo [X]"}_

*No falsos 2* : _${antifake2 ? "Activo [✓]" : "Inactivo [X]"}_

*Detección* : _${detect ? "Activo [✓]" : "Inactivo [X]"}_

*Anti eliminar* : _${del ? "Inactivo [X]" : "Activo [✓]"}_

*Antitraba* : _${antiTraba ? "Activo [✓]" : "Inactivo [X]"}_

*Chat bot* : _${simi ? "Activo [✓]" : "Inactivo [X]"}_
`,sequenceNumber:1656662972682001,timeOffset:8600,jpegThumbnail:null, ...{contextInfo:{mentionedJid:[botNumber]}} }},{quoted:m})
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })
reacMoji(m.chat, conn, '🪀', m)
}

handler.help = ['estadobot']
handler.tags = ['casual']
handler.command = /^(estadobot)$/i

handler.group = true

export default handler
