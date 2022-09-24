/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
//Default language 
const Lengua = () => {
  return 'en' //English prefix
}
const Habla = () => {
	return 'English language' //:v
}

//Límite/Nivel
const AdLimite = (usedPrefix) => {
  return `[ ! ] You ran out of limits to use some features T_T\nYou can buy more limits using this command:\n\n${usedPrefix}comprar\n`
}
const AdNivel = (plugin, _user) => {
  return `[ ! ] You need to have the level *${plugin.level}* to start use this command\n\nYour current level is ${_user.level}\n`
}

//Refresh
const SpamerNot = () => {
  return `_Wait a few seconds before using another command..._ ✓`
}

//Error message
const ErrorMsj = (m, usedPrefix, command, args, text) => {
  return `*[ ! ] An error was detected in the bot:*\n\n📜 Plugin: ${m.plugin}\n😵 Client: wa.me/${m.sender.split("@")[0]}\n🤳 Chat: ${m.chat}\n🧩 Command: ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\` \n`
}

//Restricted off
const RestriN = () => {
  return `[ ! ] Failed to remove new participant, please enable restricted mode!`
}

//Welcome texts
const WlcAdd = (num, groupMetadata, fesha, gpdesc) => {
  return `⚡ *Welcome @${num.split("@")[0]} to this great group:* ${groupMetadata.subject}\n📆 *Date of admission | ${fesha}*\n🍷 _*I hope and you like your stay here, do not forget to respect the participants and the rules*_ ;)\n\n📜 *Group norms currently :* \n${String.fromCharCode(8206).repeat(850)}\n${gpdesc}`
}
const WlcRemove = (num, fesha) => {
  return `\`\`\`[!] Gus bay : @${num.split("@")[0]}\`\`\`\n_- Retirement date | ${fesha}_`
}
const Gbay = () => {
  return `Goodbye... 🤧`
}
const WlcPromot = (num, groupMetadata) => {
	return `*Congratulations @${num.split('@')[0]}! you are now admin of the group* : _${groupMetadata.subject}_`
}
const WlcDemot = (num, groupMetadata) => {
	return `*@${num.split('@')[0]} is no longer a group admin* : _${groupMetadata.subject}_`
}

//Group Settings
const GpUp1 = () => {
  return `🔒 *[ CLOSED GROUP ]* 🔒\n_Now only admins can send messages_`
}
const GpUp2 = () => {
  return `🔓 *[ OPEN GROUP ]* 🔓\n_Now all participants can send_`
}
const GpUp3 = () => {
  return `🧰 *[SETTINGS MADE IN GROUP]* ⚙️\n_Now only admins can edit group settings_`
}
const GpUp4 = () => {
  return `🧰 *[SETTINGS MADE IN GROUP]* ⚙️\n_All participants can now edit group settings_`
}
const GpUp5 = (groupUpdate) => {
  return `✍️ *[ CHANGED GROUP ISSUE ]* 🤳\n\nNew tema: _${groupUpdate.subject}_\n`
}

//Deleted messages
const DelMsj = (mtype, participant, moment, feccha) => {
  return `*[X] Message ~deleted~ [X]*\n\n*🧬 Type of message :* _${mtype}_\n*🚮 User* : _@${participant.split`@`[0]}_\n*📆 Date :* _${feccha}_\n`
}

//No calls
const CallNot = (call) => {
  return `\n*[ ! ] @${call.from.split('@')[0]} you will be blocked*\n_Reason : for making a ${call.isVideo ? 'videocall' : 'call'} to this number without authorization!_\n`
}

//Mensaje de advertencia
const MsjRowner = () => {
  return `*[ ! ]* This command can only be used by the *owner*!`
}
const MsjOwner = () => {
  return `*[ ! ]* This command can only be used by the *bot owner*!`
}
const MsjMods = () => {
  return `*[ ! ]* This command can only be used by a *moderator*!`
}
const MsjPremium = () => {
  return `*[ ! ]* This request is for *premium* users only!`
}
const MsjGroup = () => {
  return `*[ ! ]* This command can only be used on *groups*!`
}
const MsjPrivate = () => {
  return `*[ ! ]* This command can only be used for *private chat*!`
}
const MsjAdmin = () => {
  return `*[ ! ]* This command can only be used by *group administrators*!`
}
const MsjBotAdmin = () => {
  return `*[ ! ]* The bot needs to *be an administrator* to use this command!`
}
const MsjUnreg = () => {
  return `*[ ! ]* Sign up to start using this feature by typing:\n\nrg name.age\n\nExample: ${Prefijo}rg Juanito.15*`
}
const MsjRestrict = () => {
  return `*[ ! ]* This feature is disabled!`
}

//Initial message
const Proces = (name) => {
  return `_Processing, ${name} please wait..._`
}
const Bsqd = (name) => {
  return `_Searching, ${name} please wait..._`
}

//Error message
const Error0 = () => { 
	return `[ ! ] Error, please try again later...`
}
const Error1 = () => {
	return `[ ! ] An unexpected error occurred u.u [ ! ]`
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
