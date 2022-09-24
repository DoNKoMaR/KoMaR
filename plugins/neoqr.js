/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import { exec } from 'child_process'

let handler = async (m, { conn, args, command }) => {
if (args[0] === 'continuar'){
exec(`bash neoqr.sh`, (err, stdout) => { 
    if (err) return m.reply(String(err))
    if (stdout) m.reply('_Archivo eliminado..._')
m.reply(`\n_La sesión actual del bot fue eliminada correctamente, ahora podras generar un nuevo código QR desde la consola para escanear._\n`) 
    })
    reacMoji(m.chat, conn, '♻️', m)
} else if (!args[0]) {
m.reply(`\n_Desea generar un nuevo código QR?, para generar un nuevo código QR use el comando_\n\n${Prefijo + command} continuar\n`)
}
}

handler.help = ['neoqr']
handler.tags = ['propietario']
handler.command = /^(neoqr|newqr|nuevoqr)$/i
handler.rowner = true

export default handler