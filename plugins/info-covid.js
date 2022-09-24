/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, args }) => {
try {
let dtcov = await fetchJson(`https://latam-api.vercel.app/api/covid19?apikey=${MyApiKey}&q=${args[0] ? args[0] : "world"}`)
if (!dtcov.casos) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat, { text: `[ COVID-19 ]

🌁 Lugar: ${args[0] ? args[0] : "Mundo"}
🫁 Casos positivos: ${dtcov.casos}
🤧 Casos de hoy: ${dtcov.casosDehoy}
💀 Fallecidos: ${dtcov.muertes}
⚰️ Fallecidos de hoy: ${dtcov.muertesDehoy}
🤒 Recuperados: ${dtcov.recuperados}
😷 En recuperacion: ${dtcov.activo}
😵 Casos criticos: ${dtcov.critico}
🫂 Casos por millon: ${dtcov.casosPorMillon}
☠️ Fallecidos por millon: ${dtcov.muertesPorMillon}
💉 Total de pruebas: ${dtcov.pruebas}
🔬 Pruebas por millon: ${dtcov.pruebasPorMillon}`}, {quoted: m })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['covid'].map(v => v + ' <pais>')
handler.tags = ['busqueda']
handler.command = /^(covid|covid19)$/i
handler.limit = true

export default handler
