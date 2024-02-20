import { matchWords } from "../helpers/matcher";
export const interactions = {
  "S1 Swizzle Inn": {
    response: `
    If you want to change the language, [url=https://www.paragamix.com/en-us/start-mission]enter the code again and choose the language first[/url]
::next-2::
[img]https://www.paragamix.com/images/Bermudas/px_bermuda_crazydude.gif[/img]
Hello - I am the Crazy Dude.
::next-3::
[audio]https://www.paragamix.com/images/Bermudas/audioe/bb1.mp3[/audio]
::next-4::
Click on background music for a musical accompaniment.
What is my first name? Please enter it here in the chat.
[button=https://soundcloud.com/dancersincrime/dancers-in-crime-b2b-estray-ibiza-rooftop-sessions-1]background music[/button]
[button=https://goo.gl/maps/yMXc2TVC19G3fF1z9]Swizzle Inn[/button]
`,
    interaction: (message) => {
      if (
        matchWords(message, [
          `Lösung`,
          `solución`,
          `solution`,
          `Bill`,
          `Bil`,
          `Krauss`,
        ])
      )
        return `S2 Bills Blog`;
      if (matchWords(message, [`Hilfe`, `Hinweis`, `ayuda`, `help`, `aide`]))
        return `Hilfe1`;

      return `Klammer1`;
    },
  },
  "S2 Bills Blog": {
    response: `That's right. I'm Bil Krauss, a popular entertainer in Bermuda. 
    ::next-2::
    Please choose your individual level of difficulty.
    [button=interaction-S2 Level easy]medium[/button]
    [button=interaction-S2 Level hard]tricky[/button]
    `,
    interaction: (message) => {
      if (message === "S2LevelEasy") return "S2LevelEasy";
      if (message === "S2LevelHard") return "S2LevelHard";

      if (matchWords(message, [`hilfe`, `hinweis`, `ayuda`, `help`, `aide`]))
        return `Hilfe2 Aufloesung`;

      if (
        matchWords(message, [
          `Auflösung`,
          `Resolution`,
          `Résolution`,
          `Resolucion`,
          `Resolución`,
          `Aufloesung`,
        ])
      )
        return `Schritt 13 Finale`;

      return "Klammer2";
    },
  },

  "Schritt 13 Finale": {
    response: `[b]Congratulations.[/b] You found the rifle - the second artifact that can be clearly attributed to the Sea Venture - and solved all the mysteries surrounding the Sea Venture. 

    We should now call in Josef as an art theft expert. I remembered his first name. Please e-mail him at [b]josef.yyyyyABC@gmail.com[/b] using your e-mail program. He will clear up the matter for you. The mission is finished.
    
    If you do not receive an email from Josef, type HELP.
    ::next-3::
    Follow us on [url=https://www.facebook.com/Paragamix/]Facebook[/url] or [url=https://www.instagram.com/paragamix/]Instagram[/url]. We regularly give away codes among all followers.`,
    interaction: (message) => {
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "Hilfe13 Aufloesung";
      return "Klammer2";
    },
  },

  "S2 Level easy": {
    response: `You have chosen the moderate version.
    ::next-1::
    Besides music, the wrecks of Bermuda are my second passion.
    Take a look at my blog. Each blog post provides a puzzle piece to solving the mystery of one of Bermuda's oldest wrecks: the Sea Venture.
    ::next-2::
    [b]Multiple players: [/b]Split the blog posts and exchange via WhatsApp etc. Jump directly to the blog by entering the blog number (e.g. BLOG1 for the 1st blog).
    ::next-3::
    [b]Mission solution: [/b]When you have solved all the puzzles, send an email to the art expert.
    ::next-4::
    [b]If things get stuck: [/b]Start again with RESTART. Then simply enter the number of the blog (e.g. BLOG1 for the first blog) and you start where you left off. 
    ::next-5::
    Enter "Blog x" here for the next task, so for example Blog 1 for the 1st blog or start the 1st task via the button.
    [button=https://parablog.wixsite.com/wrecks]Bils blog[/button]
    [button=interaction-S3 B1 Rätsel]first task (blog1)[/button]`,
    interaction: (message) => {
      if (matchWords(message, [`hilfe`, `hinweis`, `ayuda`, `help`, `aide`]))
        return `Hilfe2 Aufloesung`;

      if (
        matchWords(message, [
          `Auflösung`,
          `Resolution`,
          `Résolution`,
          `Resolucion`,
          `Resolución`,
          `Aufloesung`,
        ])
      )
        return `Schritt 13 Finale`;
      return "Klammer2";
    },
  },
  "S2 Level hard": {
    response: `You have chosen the tricky version.
    ::next-1::
    Besides music, the wrecks of Bermuda are my second passion.
    Take a look at my blog. Each blog post provides a puzzle piece to solving the mystery of one of Bermuda's oldest wrecks: the Sea Venture.
    ::next-2::
    [b]Multiple players: [/b]Split the blog posts and exchange via WhatsApp etc. Jump directly to the blog by entering the blog number (e.g. BLOG1 for the 1st blog).
    ::next-3::
    [b]Mission solution: [/b]When you have solved all the puzzles, send an email to the art expert.
    ::next-4::
    [[b]If things get stuck: [/b]Start again with RESTART. Then simply enter the number of the blog (e.g. BLOG1 for the first blog) and you start where you left off. 
    ::next-5::
    Enter "Blog x" here for the next task, so for example Blog 1 for the 1st blog or start the 1st task via the button.
    [button=https://parablog.wixsite.com/bermudaswrecks]Bils blog[/button]
    [button=interaction-S3 B1 Rätsel]first task (blog1)[/button]`,
    interaction: (message) => {
      if (matchWords(message, [`hilfe`, `hinweis`, `ayuda`, `help`, `aide`]))
        return `Hilfe2 Aufloesung`;

      if (
        matchWords(message, [
          `Auflösung`,
          `Resolution`,
          `Résolution`,
          `Resolucion`,
          `Resolución`,
          `Aufloesung`,
        ])
      )
        return `Schritt 13 Finale`;
      return "Klammer2";
    },
  },
  "S3 B1 Rätsel": {
    response: `[b]Please click on "Bil's Blog" above if you haven't already. [/b]

    To get in the mood for your mission, check out the puzzle of the week on my blog. 
    The final letters of the ships in the order RED, GREEN, YELLOW, BLUE result in the solution word. What is it ?`,
    interaction: (message) => {
      if (matchWords(message, ["solución", "KRET", "K R E T"]))
        return `S3 B1 Zusatz`;
      if (matchWords(message, ["Hilfe", "Help", "aide", "ayuda", "Hinweis"]))
        return `Hilfe3`;
      if (matchWords(message, ["solution"])) return `L3 B1`;
      return "Klammer3";
    },
  },

  "S3 B1 Zusatz": {
    response: `Well done! KRET is right. 
    ::next-2::
    At my last gig at the Swizzle Inn, I struck up a conversation with an art expert after a few beers. He left me his email. I tore up the note and forgot his name. Now I found part of it again at the bar. An art expert could be useful for our mission.
    ::next-3::
    [img]https://www.paragamix.com/images/Bermudas/px_bermuda_kartea.jpeg[/img]
    ::next-4::
    This completes this task.
    [button=interaction-S4 B2 Tauchen]next task[/button]
    `,
    interaction: (message) => {},
  },
  "S4 B2 Tauchen": {
    response: `[b]Blog2 (diving)[/b]
    ::next-2::
    I will call the diving instructor if you give me his number. He will surely plan a great day for you on or in the sea. `,
    interaction: (message) => {
      if (
        matchWords(message, [
          "2937310",
          "2932915",
          "293-7310",
          "293 7310",
          "293-2915",
          "293 2915",
          "293 7319",
          "2937319",
          "14412932915",
        ])
      )
        return `S5 B2 Anruf`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe4`;
      if (matchWords(message, ["solution"])) return `L4 B2`;
      return "Klammer4";
    },
  },

  "S5 B2 Anruf": {
    response: `[audio]https://www.paragamix.com/images/Bermudas/audioe/bb2.mp3[/audio]
    ::next-1::
    [img]https://dvgpba5hywmpo.cloudfront.net/media/image/NRDKa7BJSQJ4bUwuaExzv1bp3[/img]
    ::next-2::
    Are you interested in when the ship sank that I found these cannonballs on? Explore the wreck map, type in the name of the wreck or type in the year if you know it.
    [button=https://www.google.com/maps/d/edit?mid=1ynEeHbhS90y2wgUNo86dctrTSOw1c33B&usp=sharing]wreck map[/button]
    `,
    interaction: (message) => {
      if (matchWords(message, ["1619"])) return `S5 B2 Zusatz`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe5`;
      if (matchWords(message, ["Caesar", "Cäsar"])) return `Tauchen Caesar`;
      if (matchWords(message, ["Pedro", "Sanpedro"]))
        return `Tauchen San Pedro`;
      if (matchWords(message, ["venture", "Seaventure"]))
        return `Tauchen Sea Venture`;
      if (matchWords(message, ["L'herminie", "herminie", "Lherminie"]))
        return `Tauchen Herminie`;
      if (matchWords(message, ["Constellation"]))
        return `Tauchen Constellation`;
      if (matchWords(message, ["Cristobal", "CristobalColon", "Colon"]))
        return `Tauchen Cristobal`;
      if (matchWords(message, ["Lartington"])) return `Tauchen Lartinton`;
      if (matchWords(message, ["Montana"])) return `Tauchen Montana`;
      if (
        matchWords(message, [
          "ship3, ship3, schiff3, Schiff 3, nave3, nave 3, Bateau3, Bateau 3",
        ])
      )
        return `Tauchen Ship3`;
      if (matchWords(message, ["Warwick"])) return `Tauchen Warwick`;
      if (matchWords(message, ["solution"])) return `L5 B2`;
      return "Klammer5";
    },
  },
  "Bewertung schlecht": {
    response: `Thank you for trying our online escape game. 
    ::next-1::
    It's a pity that you didn't like it. We would like to adapt the game even better to your requirements and would be very pleased to receive your feedback. Please send an email to <a href= "mailto:feedback@paragamix.com">feedback@paragamix.com</a>.
    For beginners we recommend [url=https://www.paragamix.com/en-us/escape_adele_e]Adele[/url] or the [url=https://www.paragamix.com/en-us/escape_jerez_e]Sherry adventure[/url].
    `,
    interaction: (message) => {},
  },
  "Bewertung gut": {
    response: `Thank you for playing our online escape game. We put a lot of effort into it and we are very happy that you liked it. Please be so kind and give us a [b]short [url=https://g.page/Paragamix/review?gm]review on Google[/url][/b]. This will help us to become better known and develop more games. `,
    interaction: (message) => {},
  },
  "L3 B1": {
    response: `[b]Solution to Blog 1: [/b]

    You can find the names of the ships and info, like the "wrecked" date in the blog post about the wrecks. Based on the date you will find out the name of the ship.

    Red stamp: Warwi(K) 1619
    Green stamp: Caesa(R) 1818
    Blue stamp: Lord Amhers(T) 1778
    The yellow stamp is the L'Hermini(E). Here the date is missing, but you can find a photo of the L'Herminie in the blog post "Why so many wrecks". 
    ::next-1::
    Solution: KRET
    [button]next[/button]
    `,
    interaction: (message) => {},
  },
  "L4 B2": {
    response: `[b]Solution to Blog 2: [/b]

    Follow the beach to the end. There you will find the diving school of Michael Williams. There are two phone numbers on the building. 
    ::next-1::
    Solution: 2932915 or 2937310
    [button=interaction-S5 B2 Anruf]next[/button]
    `,
    interaction: (message) => {},
  },
  "L5 B2": {
    response: `
    [b]Solution to Blog 2: [/b]

The diving trip you are looking for goes to Warwick. So type in Warwick. At the end of the video you will discover the cannonballs you are looking for. The Warwick sank in 1619. If you type in Sea Venture, you'll get a clue that makes Michael suspicious.
    ::next-1::
    Solution: 1619
    [button=interaction-S5 B2 Zusatz]next[/button]
    `,
    interaction: (message) => {},
  },

  // klammers
  Klammer1: {
    response: `This is unfortunately not correct. With HELP you get a tip. `,
    interaction: (message) => {
      if (
        matchWords(message, [
          `lösung`,
          `Solución`,
          `Solution`,
          `loesung`,
          `Bill`,
          `Bil`,
          `Krauss`,
          `Kraus`,
        ])
      )
        return `S2 Bills Blog`;

      if (matchWords(message, [`Hilfe`, `Ayuda`, `help`, `Aide`]))
        return `Hilfe1`;

      return "Falsch1";
    },
  },

  Klammer2: {
    response: `If this is your answer, unfortunately it is wrong. If this should be the solution for a blog puzzle, please enter the corresponding blog first, e.g. BLOG 1 for the 1st blog.`,
    interaction: (message) => {
      if (matchWords(message, [`Hilfe`, `Ayuda`, `help`, `aide`]))
        return `Hilfe2 Aufloesung`;
      if (
        matchWords(message, [
          `Auflösung`,
          `Resolution`,
          `Résolution`,
          `Resolucion`,
          `Resolución`,
          `Aufloesung`,
        ])
      )
        return `Schritt 13 Finale`;
      return "Falsch2";
    },
  },

  Klammer3: {
    response: `If this is your answer, it is unfortunately wrong.`,
    interaction: (message) => {
      if (matchWords(message, [`Hilfe`, `Ayuda`, `help`, `aide`]))
        return `Hilfe3`;
      if (matchWords(message, [`KRET`, `K R E T`])) return `S3 B1 Zusatz`;
      if (matchWords(message, [`solution`])) return `L3 B1`;
      return "Falsch3";
    },
  },

  Klammer4: {
    response: `If this is your answer, unfortunately it is wrong.`,
    interaction: (message) => {
      if (
        matchWords(message, [
          "2937310",
          "2932915",
          "293-7310",
          "293 7310",
          "293-2915",
          "293 2915",
          "293 7319",
          "2937319",
          "14412932915",
        ])
      )
        return `S5 B2 Anruf`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe4`;
      if (matchWords(message, ["solution"])) return `L4 B2`;
      return "Falsch4";
    },
  },

  Klammer5: {
    response: `If this is your answer for blog 2, unfortunately it is wrong.`,
    interaction: (message) => {
      if (matchWords(message, ["1619"])) return `S5 B2 Zusatz`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe5`;
      if (matchWords(message, ["Caesar", "Cäsar"])) return `Tauchen Caesar`;
      if (matchWords(message, ["Pedro", "Sanpedro"]))
        return `Tauchen San Pedro`;
      if (matchWords(message, ["venture", "Seaventure"]))
        return `Tauchen Sea Venture`;
      if (matchWords(message, ["L'herminie", "herminie", "Lherminie"]))
        return `Tauchen Herminie`;
      if (matchWords(message, ["Constellation"]))
        return `Tauchen Constellation`;
      if (matchWords(message, ["Cristobal", "CristobalColon", "Colon"]))
        return `Tauchen Cristobal`;
      if (matchWords(message, ["Lartington"])) return `Tauchen Lartinton`;
      if (matchWords(message, ["Montana"])) return `Tauchen Montana`;
      if (
        matchWords(message, [
          "ship3, ship3, schiff3, Schiff 3, nave3, nave 3, Bateau3, Bateau 3",
        ])
      )
        return `Tauchen Ship3`;
      if (matchWords(message, ["Warwick"])) return `Tauchen Warwick`;
      if (matchWords(message, ["solution"])) return `L5 B2`;
      return "Falsch5";
    },
  },

  Klammer6: {
    response: `If this is your answer, unfortunately it is wrong.`,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe6`;
      if (
        matchWords(message, [
          "dish",
          "platter",
          "teller",
          "plate",
          "Geschirr",
          "Servierplatte",
          "Servierteller",
          "Tablett",
          "Teller",
          "collection plate",
          "crustal plate",
          "dental plate",
          "denture",
          "home",
          "home base",
          "home plate",
          "photographic plate",
          "plateful",
          "scale",
          "shell",
        ])
      )
        return `S7 B3 Teller`;
      if (matchWords(message, ["solution"])) return `L6 B3`;
      return "Falsch6";
    },
  },

  Klammer7: {
    response: `If this is your answer, unfortunately it is wrong.`,
    interaction: (message) => {
      if (
        matchWords(message, [
          "Hilfe",
          "Ayuda",
          "Aide",
          "Help",
          "schiff3",
          "Schiff 3",
          "ship3",
          "ship 3",
          "Bateau3",
          "Bateau 3",
          "nave3",
          "nave 3",
        ])
      )
        return `Hilfe7`;

      if (
        matchWords(message, [
          "nave3",
          "nave 3",
          "ship3",
          "ship 3",
          "schiff3",
          "Schiff 3",
          "Bateau3",
          "Bateau 3",
        ])
      )
        return `S7 B3 Zusatz`;

      if (matchWords(message, [`solution`])) return `L7 B3`;

      return "Falsch7";
    },
  },

  Klammer10: {
    response: `If that's your answer to Blog 6, I'm afraid it's wrong. You need the letters on the map in Ocean Discovery Center in the correct order for the URL you are looking for. Who bought the gold ducats?`,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Ayuda", "Aide", "Help"]))
        return `Hilfe10`;

      if (matchWords(message, ["christian", "lueder", "lüder"]))
        return `S11 B7 Buch`;

      if (matchWords(message, [`solution`])) return `L10 B6`;

      return "Falsch10";
    },
  },

  Klammer11: {
    response: `If that's your answer to Blog 6, I'm afraid it's wrong. You need the letters on the map in Ocean Discovery Center in the correct order for the URL you are looking for. Who bought the gold ducats?`,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Ayuda", "Aide", "Help"]))
        return `Hilfe11`;

      if (
        matchWords(message, ["Sommers", "Somers", "somersbuch", "somersbook"])
      )
        return `S12 B7 Gewehr`;

      if (matchWords(message, [`solution`])) return `L11 B7`;

      return "L11 B7 Buch";
    },
  },

  Klammer13: {
    response: `If this is your answer, unfortunately it is wrong.`,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Ayuda", "Aide", "Help"]))
        return `Hilfe13 Aufloesung`;

      return "Falsch13";
    },
  },

  // hilfes
  Hilfe1: {
    response: `[b]Help: [/b]Look around the bar. You will find a Crazy Dude notice on the pinboard. You are looking for his first name. With SOLUTION you skip this riddle. `,
    interaction: (message) => {
      if (
        matchWords(message, [
          `lösung`,
          `Solución`,
          `Solution`,
          `loesung`,
          `Bill`,
          `Bil`,
          `Krauss`,
        ])
      )
        return `S2 Bills Blog`;

      return "Klammer1";
    },
  },

  "Hilfe2 Aufloesung": {
    response: `[b]Help: [/b]Every blog is connected to a puzzle. Enter the blog number (e.g. Blog 1) to call up the puzzle. 
    To solve the mission, send an e-mail to the art expert xxxxx.yyyyyABC@gmail.com. 
    The individual puzzles provide the values for x,y,A,B,C. Keep an eye out for them.
    With RESOLUTION you get the solution for this mission.`,
    interaction: (message) => {
      if (
        matchWords(message, [
          `Auflösung`,
          `Resolution`,
          `Résolution`,
          `Resolucion`,
          `Resolución`,
          `Aufloesung`,
        ])
      )
        return "Schritt 13 Finale";
      return "Klammer2";
    },
  },

  Hilfe3: {
    response: `[b]Help: [/b]You can find the names of the ships and additional information, such as the wrecked date, in the 
    [url=https://parablog.wixsite.com/bermudaswrecks/post/r%C3%A4tsel-der-woche]blog post about the wrecks.[/url]
    With SOLUTION you can skip this riddle.
    `,
    interaction: (message) => {
      if (matchWords(message, ["KRET", "K R E T"])) return `S3 B1 Zusatz`;
      if (matchWords(message, ["solution"])) return `L3 B1`;
      return "Klammer3";
    },
  },

  Hilfe4: {
    response: `[b]Help: [/b]Follow the beach to the end. There you will find the diving school of Michael Williams. On the building you will find the phone number. Type it in. 
    With SOLUTION you skip this riddle.
    `,
    interaction: (message) => {
      if (
        matchWords(message, [
          "2937310",
          "2932915",
          "293-7310",
          "293 7310",
          "293-2915",
          "293 2915",
          "293 7319",
          "2937319",
          "14412932915",
        ])
      )
        return `S5 B2 Anruf`;
      if (matchWords(message, ["solution"])) return `L4 B2`;
      return "Klammer4";
    },
  },

  Hilfe5: {
    response: `[b]Help: [/b]Make some diving trips to the wrecks by typing the name of the shipwreck, for example Sea Venture or Ship 3. You can find the names of the ships on the [url=https://tinyurl.com/mapofwrecks]Wreck Map[/url].
    On one of the videos you will discover the cannonballs you are looking for. When did this ship sink?
    With SOLUTION you will skip this puzzle.
    `,
    interaction: (message) => {
      if (matchWords(message, ["loesung"])) return `S5 B2 Zusatz`;
      if (matchWords(message, ["Caesar", "Cäsar"])) return `Tauchen Caesar`;
      if (
        matchWords(message, [
          "ship3",
          "ship3",
          "schiff3",
          "Schiff 3",
          "nave3",
          "nave 3",
          "Bateau3",
          "Bateau 3",
        ])
      )
        return `Tauchen Ship3`;
      if (matchWords(message, ["L'Warwick"])) return `Tauchen Warwick`;
      if (matchWords(message, ["L'herminie", "Lherminie"]))
        return `Tauchen Herminie`;
      if (matchWords(message, ["Constellation"]))
        return `Tauchen Constellation`;
      if (matchWords(message, ["Cristobal", "CristobalColon", "Colon"]))
        return `Tauchen Cristobal`;
      if (matchWords(message, ["venture", "Seaventure"]))
        return `Tauchen Sea Venture`;
      if (matchWords(message, ["Montana"])) return `Tauchen Montana`;
      if (matchWords(message, ["Lartington"])) return `Tauchen Lartinton`;
      if (matchWords(message, ["Pedro", "Sanpedro"]))
        return `Tauchen San Pedro`;
      if (matchWords(message, ["solution"])) return `L5 B2`;
      return "Klammer5";
    },
  },

  Hilfe6: {
    response: `[b]Help: [/b]Take a good look around Carter's house. Compare the photo in Blog 3 with what you see on Google Maps. Which item is missing? Enter the item so that al9010 can research it on the internet. With SOLUTION you can skip this puzzle.`,
    interaction: (message) => {
      if (
        matchWords(message, [
          "Platter",
          "dish",
          "teller",
          "Geschirr",
          "Servierplatte",
          "Servierteller",
          "Tablett",
          "Teller",
          "Plate",
          "collection plate",
          "crustal plate",
          "dental plate",
          "denture",
          "home",
          "home base",
          "home plate",
          "photographic plate",
          "plateful",
          "scale",
          "shell",
        ])
      )
        return `S7 B3 Teller`;
      if (matchWords(message, ["solution"])) return `L6 B3`;
      return "Klammer6";
    },
  },

  Hilfe7: {
    response: `[b]Help: [/b]The plate obviously shows a part of a card. The X could indicate the place where the Sea Venture sank. Can you match the map section on the plate to the big map and can you find the name of the ship on the map? With SOLUTION you skip this puzzle. 
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/Bermuda_Wrecks_english.gif[/img]
    [url=https://www.paragamix.com/images/Bermudas/Bermuda_Wrecks_english.gif]enlarge[/url]`,
    interaction: (message) => {
      if (
        matchWords(message, [
          "Bateau3",
          "Bateau 3",
          "ship3",
          "ship 3",
          "schiff3",
          "Schiff 3",
          "nave3",
          "nave 3",
        ])
      )
        return `S7 B3 Zusatz`;
      if (matchWords(message, ["solution"])) return `L7 B3`;
      return "Klammer7";
    },
  },

  Hilfe10: {
    response: `[b]Help with Blog 6: [/b]Read through blog post #6. First, take a good look around the Ocean Discovery Center. Look for the items on the packing list. What ships were they found on? The 4-digit solution word forms the x for the URL. You will find out y quickly. Then put x and y into the URL http://bit.ly/yxy. Then enter the URL into your browser. If you find out who bought the gold coins, you have solved this puzzle ;-)
    With SOLUTION you can skip this riddle.`,
    interaction: (message) => {
      if (matchWords(message, ["christian", "lueder", "lüder"]))
        return `S11 B7 Buch`;
      if (matchWords(message, ["solution"])) return `L10 B6`;
      return "Klammer10";
    },
  },

  Hilfe11: {
    response: `[b]Help: [/b]
    EXODUS - the digits indicate the position of the searched letter in the given word. So 2. for the 2nd letter in that word, which was omitted in the text. With SOLUTION you skip this puzzle. 
    With SOLVE you will skip this puzzle. `,
    interaction: (message) => {
      if (
        matchWords(message, ["sommers", "somers", "somersbuch", "somersbook"])
      )
        return `S12 B7 Gewehr`;
      if (matchWords(message, ["solution"])) return `L11 B7`;
      return "Klammer11";
    },
  },

  "Hilfe13 Aufloesung": {
    response: `[b]Mission solved![/b]
    The email josef.moore110@gmail.com is correct. If you sent an email to Josef, you will receive the following answer:
    ::next-1::
    Congratulations, 
    
    you found out that Michael recovered the gold coins and auctioned them through an auction house. You also located the wreck of the Sea Venture. In fact, Teddy Tucker had already suspected the ship to be at this location and some cannons were recovered from the wreck as early as 1626, which were used to secure the fort. However, the proof that it is the Sea Venture has not been found until today. A treasure has not been found either. Only this part of the story is fiction. 
    You have earned a time out at the [url=https://goo.gl/maps/WZQbFRPkUbiEa9dt7]spa grotto in Bermuda [/url]
    
    At [url=www.paragamix.com]www.paragamix.com[/url] you can book further reality escape games or as a company you can also commission your own games.
    
    Follow us on [url=https://www.facebook.com/Paragamix/]https://www.facebook.com/Paragamix/[/url]
    We regularly distribute mission codes among all followers.
    
    See you soon, 
    Your team from Paragamix
    ::next-2::
    Did you like the game?
    [button=interaction-Bewertung gut]yes[/button]
    [button=interaction-Bewertung schlecht]no[/button]`,
    interaction: (message) => {
      return "Klammer13";
    },
  },

  // falschs
  Falsch1: {
    response: `This is unfortunately not correct. With HELP you get a tip.`,
    interaction: (message) => {
      if (
        matchWords(message, [
          `lösung`,
          `Solución`,
          `Solution`,
          `Bill`,
          `Bil`,
          `Krauss`,
          `kraus`,
        ])
      )
        return `S2 Bills Blog`;

      if (matchWords(message, [`Hilfe`, `ayuda`, `help`, `aide`]))
        return `Hilfe1`;

      return "Klammer1";
    },
  },

  Falsch2: {
    response: `This is unfortunately not correct. With HELP you get a tip.`,
    interaction: (message) => {
      if (
        matchWords(message, [
          `Auflösung`,
          `Resolution`,
          `Résolution`,
          `Resolucion`,
          `Resolución`,
          `Aufloesung`,
        ])
      )
        return `Schritt 13 Finale`;

      if (matchWords(message, [`Hilfe`, `ayuda`, `help`, `aide`]))
        return `Hilfe2 Aufleosung`;
      return "Klammer2";
    },
  },

  Falsch3: {
    response: `This is unfortunately not correct. To solve the puzzle you need the final letters of the ships in the order RED, GREEN, YELLOW, BLUE. They result in the solution word. With HELP you get a hint. 
    You are in Blog1. If you want to change the blog, please type in the corresponding blog (e.g. Blog2).`,
    interaction: (message) => {
      if (matchWords(message, [`KRET`, `K R E T`])) return `S3 B1 Zusatz`;

      if (matchWords(message, [`Hilfe`, `ayuda`, `help`, `aide`]))
        return `Hilfe3`;
      if (matchWords(message, [`solution`])) return `L3 B1`;
      return "Klammer3";
    },
  },

  Falsch4: {
    response: `This is unfortunately not correct. You will find the instructor at the end of Grotto Bay. You can find the link in the blog. With HELP you get a tip. `,
    interaction: (message) => {
      if (
        matchWords(message, [
          "2937310",
          "2932915",
          "293-7310",
          "293 7310",
          "293-2915",
          "293 2915",
          "293 7319",
          "2937319",
          "14412932915",
        ])
      )
        return `S5 B2 Anruf`;

      if (matchWords(message, [`Hilfe`, `ayuda`, `help`, `aide`]))
        return `Hilfe4`;
      if (matchWords(message, [`solution`])) return `L4 B1`;
      return "Klammer4";
    },
  },

  Falsch5: {
    response: `We do not offer diving trips on this ship. Take some dive trips to the wrecks. With HELP you get a tip.`,
    interaction: (message) => {
      if (matchWords(message, ["1619"])) return `S5 B2 Zusatz`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe5`;
      if (matchWords(message, ["Caesar", "Cäsar"])) return `Tauchen Caesar`;
      if (matchWords(message, ["Pedro", "Sanpedro"]))
        return `Tauchen San Pedro`;
      if (matchWords(message, ["venture", "Seaventure"]))
        return `Tauchen Sea Venture`;
      if (matchWords(message, ["L'herminie", "herminie", "Lherminie"]))
        return `Tauchen Herminie`;
      if (matchWords(message, ["Constellation"]))
        return `Tauchen Constellation`;
      if (matchWords(message, ["Cristobal", "CristobalColon", "Colon"]))
        return `Tauchen Cristobal`;
      if (matchWords(message, ["Lartington"])) return `Tauchen Lartinton`;
      if (matchWords(message, ["Montana"])) return `Tauchen Montana`;
      if (
        matchWords(message, [
          "ship3, ship3, schiff3, Schiff 3, nave3, nave 3, Bateau3, Bateau 3",
        ])
      )
        return `Tauchen Ship3`;
      if (matchWords(message, ["Warwick"])) return `Tauchen Warwick`;
      if (matchWords(message, [`solution`])) return `L5 B2`;
      return "Klammer5";
    },
  },

  Falsch6: {
    response: `This is unfortunately not correct. Take a good look around once again. With HELP you get a tip. `,
    interaction: (message) => {
      if (
        matchWords(message, [
          "dish",
          "platter",
          "teller",
          "plate",
          "Geschirr",
          "Servierplatte",
          "Servierteller",
          "Tablett",
          "Teller",
        ])
      )
        return `S7 B3 Teller`;
      if (matchWords(message, [`Hilfe`, `ayuda`, `help`, `aide`]))
        return `Hilfe6`;
      if (matchWords(message, [`solution`])) return `L6 B3`;
      return "Klammer6";
    },
  },

  Falsch7: {
    response: `This is unfortunately not correct. What does it look like? Maybe Carter marked something here. Carter was one of the survivors of the Sea Venture and could have identified the Sea Venture on the map for sure. With HELP you get a tip. `,
    interaction: (message) => {
      if (
        matchWords(message, [
          "shiff3",
          "ship3",
          "Schiff 3",
          "ship3",
          "Bateau3",
          "Bateau 3",
          "nave 3",
          "nave3",
          "Schiff3",
        ])
      )
        return `S7 B3 Zusatz`;
      if (matchWords(message, [`Hilfe`, `ayuda`, `help`, `aide`]))
        return `Hilfe7`;
      if (matchWords(message, [`solution`])) return `L7 B3`;
      return "Klammer7";
    },
  },

  Falsch10: {
    response: `Unfortunately, this is not correct. Please complete the web address and enter it into your browser.
    With HELP you will get a hint.`,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Ayuda", "help", "Aide"]))
        return "Hilfe10";
      if (matchWords(message, ["christian", "lueder", "lüder"]))
        return `S11 B7 Buch`;
      if (matchWords(message, ["solution"])) return "L10 B6";
      return "Klammer10";
    },
  },

  Falsch13: {
    response: `This is unfortunately not correct. With HELP you get a tip. `,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Ayuda", "help", "Aide"]))
        return "Hilfe13 Aufloesung";
      return "Klammer13";
    },
  },
};
