module.exports = async(client) => {
    console.log(`Connecté au client ${client.user.username}\n-> activation ok ${client.guilds.cache.size} pour un total de ${client.users.cache.size} users`);

    client.user.setActivity(client.config.app.playing);
};