/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, args }) => {
try {
let dtGithub = await fetchJson(`https://latam-api.vercel.app/api/github?apikey=${MyApiKey}&q=${args[0] ? args[0] : "NeKosmic"}`)
let usuario = dtGithub.nick
let dataGit = `[ USUARIO-GITHUB-🐱 ]

🧿 ID: ${dtGithub.id}
⚡ Usuario: < ${dtGithub.nick} />
🔥 Nombre: ${dtGithub.nombre}
🫂 Seguidores: ${dtGithub.seguidores}
🤝 Siguiendo: ${dtGithub.siguiendo}
🧰 Repositorios: ${dtGithub.repositorios}
🏗️ Compañía: ${dtGithub.empresa}
🧑‍💻 Blog: ${dtGithub.blog}
🌎 Ubicación: no encontrado u.u
📈 Fecha de creacion: ${dtGithub.fechaDeCreacion}
📉 Ultima actualizacion: ${dtGithub.ultimaActualizacion}
📜 Biografia: ${dtGithub.biografia}`
if (usuario.includes("NeKosmic")) { conn.sendMessage(m.chat, { image: {url: dtGithub.imagen}, caption: dataGit}, {quoted: m })
await conn.sendMessage(m.chat, {audio: {url: 'https://github.com/NeKosmic/Quantum-Bot/blob/main/multimedia/sonidos/audiouwu/OP.m4a?raw=true'}, fileName: `Wowner.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
} else {
     return await conn.sendMessage(m.chat, { image: {url: dtGithub.imagen}, caption: dataGit}, {quoted: m })
}
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['github'].map(v => v + ' <usuario>')
handler.tags = ['busqueda']
handler.command = /^(github|githubuser)$/i
handler.limit = true

export default handler