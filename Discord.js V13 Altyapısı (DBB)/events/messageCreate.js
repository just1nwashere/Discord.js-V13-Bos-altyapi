export default client => {

          client.on("messageCreate", message => {
                    if (message.content === "ping") {
                       message.reply(`Botun Pingi: ${ping}`)
                    }
          })
}