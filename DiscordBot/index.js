// Nødvendige moduler
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const config = require("./config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	const Guilds = client.guilds.cache.map(guild => guild.id);

	console.log('Sapex Bot er online!');

	CheckRole();
});

client.login(token);

// Tilføjer nye brugere som medlem
client.on('guildMemberAdd', member => {
	console.log(member + 'Medlem tilsluttet sig Discord');

        const role = member.guild.roles.cache.find(role => role.name === 'Medlem');

        member.roles.add(role);
   
});

function CheckRole() {
	const guild = client.guilds.cache.get('893889313295712308');

	guild.members.fetch().then(members => {

		members.forEach(member=> {

		const role = member.guild.roles.cache.find(role => role.name === 'Medlem');

			if (member.guild.roles.cache.find(r => r.name != 'Medlem')) {
				console.log('Tilføjer ' + member + ' som medlem!');
				member.roles.add(role);
			}

		});

	});

}

client.on('message', message => {
	if(config.filter_list.some(word => message.content.toLowerCase().includes(word))){
	message.delete()
}})