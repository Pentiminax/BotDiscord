const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('youtube')
        .setDescription('Donne le lien de ma chaîne YouTube'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(new MessageButton()
                .setLabel('YouTube')
                .setStyle('LINK')
                .setURL('https://youtube.com/c/Pentiminax')
            );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour voir ma chaîne YouTube', components: [row] });
    }
}