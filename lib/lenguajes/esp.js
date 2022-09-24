/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
//Lenguaje por defecto
const Lengua = () => {
  return 'es' //Prefijo español
}
const Habla = () => {
	return 'Lenguaje Español' //:v
}

//Límite/Nivel
const AdLimite = (usedPrefix) => {
  return `[ ! ] Te quedaste sin límites para usar algunas funciones T_T\nPuede comprar mas límites usando este comando:\n\n${usedPrefix}comprar\n`
}
const AdNivel = (plugin, _user) => {
  return `[ ! ] Necesitas tener el nivel *${plugin.level}* para comenzar a usar este comando\n\nTu nivel actual es ${_user.level}\n`
}

//Refrescar
const SpamerNot = () => {
  return `_Espere unos segundos antes de usar otro comando..._ ✓`
}

//Mensaje de error
const ErrorMsj = (m, usedPrefix, command, args, text) => {
  return `*[ ! ] Se detecto un error en el bot:*\n\n📜 Plugin: ${m.plugin}\n😵 Cliente: wa.me/${m.sender.split("@")[0]}\n🤳 Chat: ${m.chat}\n🧩 Comando: ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\` \n`
}

//Restringido desactivado
const RestriN = () => {
  return `[ ! ] No se pudo eliminar al participante nuevo, por favor active el modo restringido!`
}

//Textos de bienvenida
const WlcAdd = (num, groupMetadata, fesha, gpdesc) => {
  return `⚡ *Bienvenid@ @${num.split("@")[0]} a este grandioso grupo* ${groupMetadata.subject}\n📆 *Fecha de ingreso | ${fesha}*\n🍷 _*Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas*_ ;)\n\n📜 *Normas del grupo actualmente :* \n${String.fromCharCode(8206).repeat(850)}\n${gpdesc}`
}
const WlcRemove = (num, fesha) => {
  return `\`\`\`[!] C fue alv : @${num.split("@")[0]}\`\`\`\n_- Fecha de salida | ${fesha}_`
}
const Gbay = () => {
  return `Adios... 🤧`
}
const WlcPromot = (num, groupMetadata) => {
	return `*Felicidades @${num.split('@')[0]}! ahora eres admin del grupo* : _${groupMetadata.subject}_`
}
const WlcDemot = (num, groupMetadata) => {
	return `*@${num.split('@')[0]} ya no es administrador del grupo* : _${groupMetadata.subject}_`
}

//Ajustes de grupo
const GpUp1 = () => {
  return `🔒 *[ GRUPO CERRADO ]* 🔒\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_`
}
const GpUp2 = () => {
  return `🔓 *[ GRUPO ABIERTO ]* 🔓\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_`
}
const GpUp3 = () => {
  return `🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_`
}
const GpUp4 = () => {
  return `🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ ᵉˢᵗᵃʳ ᵃᵗᵉⁿᵗᵒˢ ᵃ ᵖᵉʳˢᵒⁿᵃˢ ᶜᵒⁿ ʳᵉᵗʳᵃˢᵒ ᵐᵉⁿᵗᵃˡ~`
}
const GpUp5 = (groupUpdate) => {
  return `✍️ *[ ASUNTO DEL GRUPO CAMBIADO ]* 🤳\n\nAsunto nuevo: _${groupUpdate.subject}_\n`
}

//Mensajes eliminados
const DelMsj = (mtype, participant, moment, feccha) => {
  return `*[X] Mensaje ~eliminado~ [X]*\n\n*🧬 Tipo De Mensaje :* _${mtype}_\n*🚮 Usuario* : _@${participant.split`@`[0]}_\n*📆 Fecha :* _${feccha}_\n`
}

//No llamadas
const CallNot = (call) => {
  return `\n*[ ! ] @${call.from.split('@')[0]} Seras bloqueado*\n_Razon : por realizar una ${call.isVideo ? 'videollamada' : 'llamada'} a este numero sin autorizacion!_\n`
}

//Mensaje de advertencia
const MsjRowner = () => {
  return `*[ ! ]* Este comando solo puede ser utilizado por el *dueño*!`
}
const MsjOwner = () => {
  return `*[ ! ]* Este comando solo puede ser utilizado por el *propietario del bot*!`
}
const MsjMods = () => {
  return `*[ ! ]* Este comando solo puede ser utilizado por un *moderador*!`
}
const MsjPremium = () => {
  return `*[ ! ]* Esta solicitud es solo para usuarios *premium*!`
}
const MsjGroup = () => {
  return `*[ ! ]* Este comando solo se puede usar en *grupos*!`
}
const MsjPrivate = () => {
  return `*[ ! ]* Este comando solo se puede usar por *chat privado*!`
}
const MsjAdmin = () => {
  return `*[ ! ]* Este comando solo puede ser usado por los *administradores del grupo*!`
}
const MsjBotAdmin = () => {
  return `*[ ! ]* El bot necesita *ser administrador* para usar este comando!`
}
const MsjUnreg = () => {
  return `*[ ! ]* Regístrese para comenzar a usar esta función escribiendo:\n\nrg nombre.edad\n\nEjemplo: ${Prefijo}rg Juanito.15*`
}
const MsjRestrict = () => {
  return `*[ ! ]* Esta función está desactivada!`
}

//Mensaje inicial
const Proces = (name) => {
  return `_Procesando, ${name} por favor espere..._`
}
const Bsqd = (name) => {
  return `_Buscando, ${name} por favor espere..._`
}

//Mensaje de error
const Error0 = () => { 
	return `[ ! ] Error, vuelva a intentarlo mas tarde...`
}
const Error1 = () => {
	return `[ ! ] Ocurrio un error inesperado u.u [ ! ]`
}

export default { Lengua, Habla, AdLimite, AdNivel, SpamerNot, ErrorMsj, RestriN, WlcAdd, WlcRemove, Gbay, WlcPromot, WlcDemot, GpUp1, GpUp2, GpUp3, GpUp4, GpUp5, DelMsj, CallNot, MsjRowner, MsjOwner, MsjMods, MsjPremium, MsjGroup, MsjPrivate, MsjAdmin, MsjBotAdmin, MsjUnreg, MsjRestrict, Proces, Bsqd, Error0, Error1 };

/*
⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹
⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀
⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀
⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀
⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀
⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
*/
