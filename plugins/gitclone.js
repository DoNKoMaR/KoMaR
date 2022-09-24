import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => { 
	let regex = /(?:https?|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
	if (!args[0]) return m.reply(`Por favor use una URL de github, ejemplo:\n${prefix + command} https://github.com/Yesenia57/NekosmicBot-MD`)
	if (!regex.test(args[0])) return reply('[ ! ] URL inválido')
	let name = await conn.getName(m.sender)
	const msj = m.reply(MultiNK.Proces(name))
	await msj 
	let [, user, repo] = args[0].match(regex) || []
	repo = repo.replace(/.git$/, '')
	let url = `https://api.github.com/repos/${user}/${repo}/zipball`
	let res = await fetch(url, { method: 'head' })
	if (res.status !== 200) throw res.statusText
	let fileName = res.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
	let mimetype = res.headers.get('content-type')
	await conn.sendMessage(m.chat, { document: { url }, fileName, mimetype }, { quoted: m }).catch(e => {m.reply(MultiNK.Error0())})
}

handler.help = ['gitclone <Link>']
handler.tags = ['servicio']
handler.command = /^(gitclone)$/i

export default handler