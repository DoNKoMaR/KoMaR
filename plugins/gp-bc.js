// :D
import Connection from '../lib/connection.js'

let handler = async (m, { conn, command, text }) => {
	if (!text) return m.reply(`[ ! ] Y el mensaje?`)
  let gmap = Object.entries(Connection.store.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let quoted = m.quoted ? m.quoted : m
  let mime = (quoted.msg || quoted).mimetype || ''
  let isMedia = /image|video|sticker|audio/.test(mime)
  m.reply(`Enviando transmisión a ${gmap.length} grupo(s), en aproximadamente ${gmap.length * 1.5} segundo(s)`)
if (isMedia) {
var mediax = await quoted.download?.()
for (let i of gmap){
conn.sendMessage(i, { image: mediax, caption: text } ) 
}
m.reply(`Finalizando transmisión a ${gmap.length} grupo(s) ✓`)
}else {
for (let i of gmap){
conn.sendMessage(i, { text: text } )
}
m.reply(`Finalizando transmisión a ${gmap.length} grupo(s) ✓`)
}
}

handler.help = ['bcgc'].map(v => v + ' <mensaje>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

export default handler
