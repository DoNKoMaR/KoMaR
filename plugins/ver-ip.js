/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, args }) => {
	if (!args[0]) return m.reply('*[ ! ] Introduzca una dirección IP*') 
	if (!args[0].includes('19')) return m.reply('*[ ! ] Use una dirección IP valida de clase "C" !*')
	let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let name = await conn.getName(m.sender)
	let mcarga = m.reply(MultiNK.Bsqd(name))
	await mcarga
try {
	let dataip = await fetchJson(`https://latam-api.vercel.app/api/verip?apikey=${MyApiKey}&q=${args[0]}`)
	if (!dataip.continente.nombre) return m.reply('No pude encontrar ninguna información para esta dirección IP ;-;') 
	conn.sendMessage(m.chat, { caption: `🗺️ INFO DE DIRECCION IP
🔖 Solicitado por : @${etiqueta.replace(/@.+/, '')}`, footer: `${NombreDelBot} 🔥`, location: {"degreesLatitude": dataip.latitud, "degreesLongitude": dataip.longitud}, buttons: [{buttonId: `</bromita>`, buttonText: {displayText: `[ INFORMACIÓN ]
\`\`\`
➢ Dirección IP : ${dataip.ip}
➢ Dispositivo mobil : ${dataip.mobil ? "[✓]" : "[X]"}
➢ Continente : ${dataip.continente.nombre}
➢ Codigo de continente : ${dataip.continente.codigo}
➢ Pais : ${dataip.pais.nombre}
➢ Codigo de pais : ${dataip.pais.codigo}
➢ Nombre de región : ${dataip.region.nombre}
➢ Código de Region : ${dataip.region.codigo}
➢ Ciudad : ${dataip.ciudad}
➢ Distrito : ${dataip.distrito ? dataip.distrito : 'No encontrado u.u'}
➢ Codigo postal : ${dataip.ZIP ? dataip.ZIP : 'No encontrado u.u'}
➢ Latitud : ${dataip.latitud}
➢ Longitud : ${dataip.longitud}
➢ Zona horaria : ${dataip.zonaHoraria}
➢ Offset : ${dataip.offset}
➢ Moneda local : ${dataip.divisa}
➢ Proveedor de internet : ${dataip.isp}
➢ Organización : ${dataip.organizacion}
➢ Sociedad : ${dataip.as} 
➢ DNS : ${dataip.reverse ? dataip.reverse : 'No encontrado u.u'}
➢ Servidor proxy : ${dataip.proxy ? "[✓]" : "[X]"}
➢ Alojamiento web : ${dataip.hosting ? "[✓]" : "[X]"}
\`\`\``}, type: 1}], headerType: 'LOCATION', mentions: [m.sender] })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['verip'].map(v => v + ' <IP>')
handler.tags = ['busqueda']
handler.command = /^(verip)$/i
handler.limit = true

export default handler
