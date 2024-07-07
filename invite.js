const { Collection, Client } = require("discord.js");
const ayarlar = require('./ayarlar.json');
const Database = require("./Helpers/Database");
const client = new Client;
////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
const Invites = new Collection();////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser v
client.on("ready", () => {////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
    client.guilds.cache.forEach(guild => {////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser vvvv
        guild.fetchInvites().then(_invites => {////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
            Invites.set(guild.id, _invites);////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser v
        }).catch(err => { });////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser v////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser vvv
    });
  ////Roisser 
  ///Elminstêr /Elminstêr Elminstêr 
});
client.on("inviteCreate", (invite) => {
    var gi = Invites.get(invite.guild.id);
    gi.set(invite.code, invite);
    Invites.set(invite.guild.id, gi);
});
client.on("inviteDelete", (invite) => {
    var gi = Invites.get(invite.guild.id);
    gi.delete(invite.code);
    Invites.set(invite.guild.id, gi);
});


client.on("guildCreate", (guild) => {
	guild.fetchInvites().then(invites => {
		Invites.set(guild.id, invites);
	}).catch(e => {})
});

//
client.on("guildMemberAdd", (member) => {
    //const gi = new Collection().concat(Invites.get(member.guild.id));
    const db = new Database("./Servers/" + member.guild.id, "Invites"), gi = (Invites.get(member.guild.id) || new Collection()).clone(), settings = new Database("./Servers/" + member.guild.id, "Settings").get("settings") || {};
    var guild = member.guild, fake = (Date.now() - member.createdAt) / (1000 * 60 * 60 * 24) <= 3 ? true : false, channel = guild.channels.cache.get(settings.Channel);
    guild.fetchInvites().then(invites => {
        // var invite = invites.find(_i => gi.has(_i.code) && gi.get(_i.code).maxUses != 1 && gi.get(_i.code).uses < _i.uses) || gi.find(_i => !invites.has(_i.code)) || guild.vanityURLCode;
        var invite = invites.find(_i => gi.has(_i.code) && gi.get(_i.code).uses < _i.uses) || gi.find(_i => !invites.has(_i.code)) || guild.vanityURLCode;
        Invites.set(member.guild.id, invites);
        var content = ``, total = 0, regular = 0, _fake = 0, bonus = 0;
        if(invite == guild.vanityURLCode) content = settings.defaultMessage ? settings.defaultMessage : `-member- is joined the server! But don't know that invitation he came up with. :tada:`;
        else content = settings.welcomeMessage ? settings.welcomeMessage : `◥ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ #𝙶𝚒𝚛𝚒ş ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ◤

╰┈➤  <:yildiz:990418884135907398>〔𝙶𝚒𝚛𝚒ş 𝚈𝚊𝚙𝚝ı〕-member-

╰┈➤  <:yildiz:990418884135907398>〔𝙳𝚊𝚟𝚎𝚝 𝙴𝚍𝚎𝚗〕-target-  〔-total-〕 〔**𝙾𝚕𝚍𝚞**〕

◥ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ #𝙶𝚒𝚛𝚒ş ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ◤`; 

        if (invite.inviter) { 
            db.set(`invites.${member.id}.inviter`, invite.inviter.id); 
            if(fake){
                total = db.add(`invites.${invite.inviter.id}.total`, 1);
                _fake = db.add(`invites.${invite.inviter.id}.fake`, 1);
            }
            else{
                total = db.add(`invites.${invite.inviter.id}.total`, 1);
                regular = db.add(`invites.${invite.inviter.id}.regular`, 1);
            }
            var im = guild.member(invite.inviter.id);
            bonus = db.get(`invites.${invite.inviter.id}.bonus`) || 0;
            if(im) global.onUpdateInvite(im, guild.id, Number(total + Number(bonus)));
            
        }
  ////Roisser 

        db.set(`invites.${member.id}.isfake`, fake);

        if(channel){
       //channel.send(`${member} Adlı Kişi Sunucuya Katıldı **Davet Eden Şahıs:** ${invite.inviter.tag} (**${total + bonus}** Davet! :white_check_mark:)`)
          // gİRİŞ MESAJLARI İÇİN 
          ////Roisser 
          content = content
////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
            .replace("-member-", `${member}`)////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
            .replace("-target-", `${invite.inviter}`)////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
            .replace("-total-", `${total + bonus}`)////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
            .replace("-regular-", `${regular}`)////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
            .replace("-fakecount-", `${_fake}`)////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
            .replace("-invite-", `${invite && invite.code != undefined ? invite.code : "what is that?"}`)////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
            .replace("-fake-", `${fake}`);////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
            channel.send(content);////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
        }  ////Roisser ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
    }).catch();////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
});////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
////Roisser 
client.on("guildMemberRemove", (member) => {
    const db = new Database("./Servers/" + member.guild.id, "Invites"), settings = new Database("./Servers/" + member.guild.id, "Settings").get("settings") || {};
    var total = 0, bonus = 0, regular = 0, fakecount = 0, channel = member.guild.channels.cache.get(settings.Channel), content = settings.leaveMessage ? settings.leaveMessage : `◥ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ #Çı𝚔ış ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ◤

╰┈➤  <:yildiz:990418884135907398> 〔Çı𝚔ış 𝚈𝚊𝚙𝚝ı〕 -member-

╰┈➤  <:yildiz:990418884135907398>〔𝙳𝚊𝚟𝚎𝚝 𝙴𝚍𝚎𝚗〕 -target-  〔-total-〕 〔**𝙺𝚊𝚕𝚍ı**〕

◥ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ #Çı𝚔ış ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ◤`, data = db.get(`invites.${member.id}`);
    if(!data){
        return;
    }////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
        if(data === null) data = "Bulunamadı"
    if(data.isfake && data.inviter){
        fakecount = db.sub(`invites.${data.inviter}.fake`, 1);////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
        total = db.sub(`invites.${data.inviter}.total`, 1);////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
    }////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
    else if(data.inviter){////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
        regular = db.sub(`invites.${data.inviter}.regular`, 1);////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
        total = db.sub(`invites.${data.inviter}.total`, 1);////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
    }////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
    if(data.inviter) bonus = db.get(`invites.${data.inviter}.bonus`) || 0;////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 
    
    var im = member.guild.member(data.inviter)
    if(im) global.onUpdateInvite(im, member.guild.id, Number(total) + Number(bonus));

    db.add(`invites.${data.inviter}.leave`, 1);
       if(channel){  ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 

        content = content

        .replace("-member-", `${member}`)////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
        .replace("-target-", `${im ? im : data.inviter}`)////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
        .replace("-total-", `${Number(total) + Number(bonus)}`)////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
        .replace("-regular-", `${regular}`)////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
        .replace("-fakecount-", `${fakecount}`)////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
        .replace("-fake-", `${data.isfake}`);////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
        channel.send(content);////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
     //   let user = client.users.cache.get(data.inviter)
         /// mesaj ayarlamaları için yapıldı
     //	channel.send(`${member.user.tag} Sunucudan Ayrıldı **Şahsı Davet Eden:** ${user.tag} (**${Number(total) + Number(bonus)}** Davet! :x:)`)
     }
});
  ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 

global.onUpdateInvite = (guildMember, guild, total) => {////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
    if(!guildMember.manageable) return;////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
    const rewards = new Database("./Servers/" + guild, "Rewards").get("rewards") || [];////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
    if(rewards.length <= 0) return;////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
    var taken = rewards.filter(reward => reward.Invite > total && guildMember.roles.cache.has(reward.Id));////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
    taken.forEach(take => {////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
        guildMember.roles.remove(take.Id);////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
    });////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
    var possible = rewards.filter(reward => reward.Invite <= total && !guildMember.roles.cache.has(reward.Id));////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
    possible.forEach(pos =>{////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
        guildMember.roles.add(pos.Id);////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
    });////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser 
}////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser ////Roisser v
client.login(ayarlar.token)  ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser   ////Roisser 