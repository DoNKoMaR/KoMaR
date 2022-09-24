/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import db from '../lib/database.js'

export async function all(m) {
	let { antiPrivado } = db.data.settings[this.user.jid]
	let uptime = timeString(process.uptime())
	let info_p = `<[ ${NombreDelBot} ]>\nTiempo activo : ${uptime}${antiPrivado ? "|| No chats privados" : ""}`
	let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
    	await this.updateProfileStatus(info_p).catch((_) => _)
    settingstatus = new Date() * 1
    }
}
