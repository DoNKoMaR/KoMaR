import fetch from 'node-fetch'
import { format } from 'util'

let handler = async (m, { text, conn }) => {
	if (!/^https?:\/\//.test(text)) return m.reply('El parámetro *URL* debe comenzar con http:// ó https:// -.-')
	let name = await conn.getName(m.sender)
	let mcarga = m.reply(MultiNK.Proces(name))
	await mcarga
	let { href: url, origin } = new URL(text)
	let res = await fetch(url, { headers: { 'referer': origin }})
	if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) throw `Content-Length: ${res.headers.get('content-length')}`
	if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, url, 'file', text, m)
	let txt = await res.buffer()
	try {
		txt = format(JSON.parse(txt + ''))
	} catch (e) {
		txt = txt + ''
	} finally {
		m.reply(txt.slice(0, 65536) + '')
	}
}
handler.help = ['fetch']
handler.tags = ['herramienta']
handler.command = /^(fetch)$/i
handler.limit = true

export default handler
