/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, args }) => {
	let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './multimedia/imagenes/avatar_contact.png'
	let name = await conn.getName(m.sender)
try {
	let media = '.../logo.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
Holi amigo o amiga te invito a mis grupos ofc
╭━━━━━━━━━━━━━━━━━━━━━━━━❐
┃ Grupos oficiales de NekosmicBot-MD
╰━━━━━━━━━━━━━━━━━━━━━━━━━❐
╭━━━━━━━━━━━━━━━━━━━━━━━━━━━❐
│1️⃣https://chat.whatsapp.com/KwAVjLAkgCIBEzTdY3RwIg
│
│2️⃣https://chat.whatsapp.com/KkLE1VmVvP5L29k7qVaZ4t
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━❐
╭━━━━━━━━━━━━━━━━━━━━━━━━❐
┃ GRUPOS DE APOYO PARA USUARIOS
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━❐
╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━❐
┃ NO HAY A UN 
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━❐
`.trim(), wm, media, [['Menu del bot ', '.menu']], m)
handler.command = /^wagrupos$/i
export default handler
	
