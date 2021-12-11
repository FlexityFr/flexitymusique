const { MessageEmbed } = require('discord.js');

module.exports = {
        name: 'help',
        aliases: ['h'],
        showHelp: false,
        utilisation: '{prefix}help',

        execute(client, message, args) {
            const embed = new MessageEmbed();

            embed.setColor('RED');
            embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

            const commands = client.commands.filter(x => x.showHelp !== false);

            embed.setDescription('Ce bot a été fait par Flexity [Flexity/FlexityMusique](https://discord.com/api/oauth2/authorize?client_id=897843599805394965&permissions=8&scope=bot).');
            embed.addField(`Enabled - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('La musique d\'abord - Fait avec coeur par Flexity ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};