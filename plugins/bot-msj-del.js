let handler = function (m, { conn, isAdmin, isBotAdmin }) {
    if (!m.quoted) throw false 
    let { isBaileys } = m.quoted
    let prt = m.message.extendedTextMessage.contextInfo.participant
    let yid = m.message.extendedTextMessage.contextInfo.stanzaId
if (isBotAdmin && isAdmin) {
    	conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: yid, participant: prt }})
    } else if (isAdmin) {
    	if (!isBaileys) throw false 
    	conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
    } else {
    	if (!isBaileys) throw false 
    	conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
    m.limit = 1
    }
}

handler.help = ['suprimir']
handler.tags = ['grupos', 'admins']
handler.command = /^(suprimir|del)$/i

export default handler