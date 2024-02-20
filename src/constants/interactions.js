import { matchWords } from "../helpers/matcher";
export const interactions = {
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
          "ship 3, ship3, schiff3, Schiff 3, nave3, nave 3, Bateau3, Bateau 3",
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
          "ship 3",
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
          "ship 3, ship3, schiff3, Schiff 3, nave3, nave 3, Bateau3, Bateau 3",
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
          "ship 3",
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

  // S1
  "S1 Swizzle Inn": {
    response: `If you want to change the language, [url=https://www.paragamix.com/en-us/start-mission]enter the code again and choose the language first[/url].
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

  // S2
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

  // S3
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
    [button=interaction-S4 B2 Tauchen]next task[/button]`,
    interaction: (message) => {},
  },

  // S4
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

  // S5
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
          "ship 3, ship3, schiff3, Schiff 3, nave3, nave 3, Bateau3, Bateau 3",
        ])
      )
        return `Tauchen Ship3`;
      if (matchWords(message, ["Warwick"])) return `Tauchen Warwick`;
      if (matchWords(message, ["solution"])) return `L5 B2`;
      return "Klammer5";
    },
  },

  "S5 B2 Zusatz": {
    response: `You recognized it. Michael recovered the cannonballs from the wreck of the Warwick. 
    I'm not sure if Michael or Teddy had anything to do with the Sea Venture's gold ducats.
    ::next-1::
    [img]https://dvgpba5hywmpo.cloudfront.net/media/image/ayI63K7jnyKYexy9oPJUImRHw[/img]
    ::next-2::
    I found another scrap of paper in the bar.
    [button=interaction-S6 B3 Diebesgut]next task[/button]
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
          "ship 3, ship3, schiff3, Schiff 3, nave3, nave 3, Bateau3, Bateau 3",
        ])
      )
        return `Tauchen Ship3`;
      if (matchWords(message, ["Warwick"])) return `Tauchen Warwick`;
      if (matchWords(message, ["solution"])) return `L5 B2`;
      return "Klammer5";
    },
  },
  // S6
  "S6 B3 Diebesgut": {
    response: `[b]Blog3 (stolen goods)[/b]
  ::next-2::
  Apparently, Carter's house was broken into. But what would be of interest to a thief there?
  [button=https://goo.gl/maps/kHiaKScGn6rcCaBZ9]what is missing?[/button]`,
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
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe6`;
      if (matchWords(message, ["solution"])) return `L6 B3`;
      return "Klammer6";
    },
  },

  // S7
  "S7 B3 Teller": {
    response: `[img]http://www.paragamix.com/images/Bermudas/bermuda_zinnteller.gif[/img]
    [url=http://www.paragamix.com/images/Bermudas/bermuda_zinnteller.gif]enlarge[/url]
    ::next-2::
    [audio]https://www.paragamix.com/images/Bermudas/audioe/bb3.mp3[/audio]`,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe7`;
      if (
        matchWords(message, [
          "ship 3, ship3, schiff3, Schiff 3, nave3, nave 3, Bateau3, Bateau 3",
        ])
      )
        return `S7 B3 Zusatz`;
      if (matchWords(message, ["solution"])) return `L7 B3`;
      return "Klammer7";
    },
  },

  "S7 B3 Zusatz": {
    response: `The marking seems to be the unknown ship 3, which sank off Bermuda.
    ::next-1::
    [img]https://dvgpba5hywmpo.cloudfront.net/media/image/iCYcfjdqncitDXGjcNt3kHt82[/img]
    ::next-2::
    I found another scrap of paper at the Swizzle Inn.
    [button=interaction-S8 B4 Grotto]next task[/button]
    `,
    interaction: (message) => {},
  },

  // S8
  "S8 B4 Grotto": {
    response: `[b]Blog4 Tucker's house[/b]
    The bust from the Sea Venture must still be on the island. We should take a closer look at Henry Tucker's house, now a museum.
    I have lent an employee of the museum my infrared camera, she will go in search of clues for us ...
    ::next-1::
    Can you find out the location of the hiding place? 
What is it?
    [button=https://www.paragamix.com/dsinga/tucker1/app-files/index.html]Tucker house[/button]
    `,
    interaction: (message) => {
      if (matchWords(message, ["Cathedral", "Cave", "Palm", "grotto"]))
        return `S8a B4 Bueste`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `H8 B4 Grotto`;
      if (matchWords(message, ["solution"])) return `L8 B4 Grotto`;
      return "K8 B4 Grotto";
    },
  },

  "S8a B4 Bueste": {
    response: `Excellent. You have found the secret place. 
    ::next-1::
    Can you find the bust and identify the name of the roman god it represents?
    [button=https://www.paragamix.com/dsinga/grotto/app-files/index.html]Cathedral Cave[/button]
    `,
    interaction: (message) => {
      if (matchWords(message, ["Baccus", "Bacchus"])) return `S8b B4 Spa`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `H8a B4 Bueste`;
      if (matchWords(message, ["solution"])) return `L8a B4 Bueste`;
      return "K8a B4 Bueste";
    },
  },

  "S8b B4 Spa": {
    response: `You have indeed found the bust of the roman god Bacchus. Carter had recovered it from the Sea Venture and hidden it in the cave. Today it is the spa area of a hotel. Apparently it was found during construction work and installed in the cave. Apparently no one has noticed this before. 
    ::next-1::
    You're making good progress. You found the bust of the Sea Venture. I'm sure you'll also find the gold ducats of the Sea Venture.
    [button=interaction-S9a B5 Tucker]next task[/button]`,
    interaction: (message) => {
      return "K8 B4 Grotto";
    },
  },

  // S9
  "S9a B5 Tucker": {
    response: `[b]Blog 5 Teddy Tucker[/b]
    The wine bottle is a typical artifact of its time. What is the inventory number?`,
    interaction: (message) => {
      if (
        matchWords(message, [
          "L.97.665",
          "L97665",
          "L.97.608",
          "L97608",
          "solución",
        ])
      )
        return `S9b B5 Flaschen`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `H9a B5 Tucker`;
      if (matchWords(message, ["solution"])) return `L9a B5`;
      return "K9a B5 Tucker";
    },
  },

  "S9b B5 Flaschen": {
    response: `[img]https://www.paragamix.com/images/Bermudas/px_bermuda_flaschen.jpg[/img]
    [url=https://www.paragamix.com/images/Bermudas/px_bermuda_flaschen.jpg]enlarge[/url]
    ::next-2::
    At least 2 groups of bottles are said to be from the Sea Venture. But which ones are they?
    ::next-3::
    Maybe my glass mark collection will help you ...
    [button=https://www.instagram.com/bilkrauss/]glas mark collection[/button]`,
    interaction: (message) => {
      if (
        matchWords(message, [
          "B2E3",
          `E3B2`,
          `E3,B2`,
          `B2,E3`,
          "B2 E3",
          "E3 B2",
          "e3 and b2",
          "b2 and e3",
          "B2, E3",
          "E3, B2",
        ])
      )
        return `S9 B5 Mustererkennung`;
      if (matchWords(message, ["Hilfe", "help"])) return `H9b B5 Flashchen`;
      if (matchWords(message, ["solution"])) return `L9b B5`;
      return "K9b B5 Flaschen";
    },
  },

  "S9 B5 Mustererkennung": {
    response: `[audio]https://www.paragamix.com/images/Bermudas/audioe/bb8.mp3[/audio]
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/bermudas_flaschen.gif[/img]
    [url=https://www.paragamix.com/images/Bermudas/bermudas_flaschen.gif]enlarge[/url]
    ::next-3::
    I came up with the last name of the art expert. We should get Moore involved. Write him an email later at xxxxx.mooreABC@gmail.com when you have found out the first name xxxxx and und A,B,C.
    [button=interaction-S10 B6 Goldkreuz]next task[/button]`,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `H9a B5 Tucker`;
      return "K9a B5 Tucker";
    },
  },

  // S10
  "S10 B6 Goldkreuz": {
    response: `[b]Blog 6 gold cross[/b]
    ::next-2::
    [audio]https://www.paragamix.com/images/Bermudas/audioe/bb5.mp3[/audio]`,
    interaction: (message) => {
      if (matchWords(message, ["Christian", "Lueder", "Lüder"]))
        return `S11 B7 Buch`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe10`;
      if (matchWords(message, ["solution"])) return `L10 B6`;
      return "Klammer10";
    },
  },

  "S10b B6 Goldkreuz": {
    response: `Correct. The URL is [url=http://bit.ly/7gold7]http://bit.ly/7gold7[/url].
    But who bought the gold ducats?`,
    interaction: (message) => {
      if (matchWords(message, ["Christian", "Lueder", "Lüder"]))
        return `S11 B7 Buch`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe10`;
      if (matchWords(message, ["solution"])) return `L10 B6`;
      return "Klammer10";
    },
  },

  // S11
  "S11 B7 Buch": {
    response: `Well done so far.
    ::next-2::
    [b]Blog 7 Sea Venture[/b]
    Can you solve the riddle?`,
    interaction: (message) => {
      if (
        matchWords(message, ["Somers", "Sommers", "somersbuch", "somersbook"])
      )
        return `S12 B7 Gewehr`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe11`;
      if (matchWords(message, ["solution"])) return `L11 B7`;
      return "Klammer11";
    },
  },

  // S12
  "S12 B7 Gewehr": {
    response: `[b]Blog 7 Sea Venture[/b]
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/chat_DiscoveryBuch_englisch.gif[/img]
    [url=https://www.paragamix.com/images/Bermudas/chat_DiscoveryBuch_englisch.gif]enlarge[/url]
    ::next-2::
    [audio]https://www.paragamix.com/images/Bermudas/audioe/bb6.mp3[/audio]
    ::next-1::
    [img]https://www.paragamix.com/images/Bermudas/px_bermuda_picos.jpg[/img]
    [url=https://www.paragamix.com/images/Bermudas/px_bermuda_picos.jpg]enlarge[/url]`,
    interaction: (message) => {
      if (matchWords(message, ["Fort", "Fort!"])) return `S12 B7 Fort`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `H12 B7 Gewehr`;
      if (matchWords(message, ["solution"])) return `L12 B7 Gewehr`;
      return "K12 B7 Gewehr";
    },
  },

  "S12 B7 Fort": {
    response: `Fort is correct. But I'm looking for the age of the cannon that is inside the fort. Look around there and try to open the combination lock first.
    ::next-2::
    [audio]https://www.paragamix.com/images/Bermudas/px_bermuda_maze_sound.mp3[/audio]`,
    interaction: (message) => {
      if (matchWords(message, ["3512"])) return `S12 B7 Door`;
      if (matchWords(message, ["Hilfe", "help"])) return `H12 B7 Fort`;
      if (matchWords(message, ["solution", "Loesung", "Lösung"]))
        return `L12 B7 Fort`;
      return "K12 B7 Fort";
    },
  },

  "S12 B7 Door": {
    response: `The code was correct and the combination lock is open.
    The cannon is another artifact from the Sea Venture. When was it made?
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/px_bermuda_tuer.jpg[/img]
    [url=https://www.paragamix.com/dsinga/gun/app-files/index.html]Open door[/url].`,
    interaction: (message) => {
      if (matchWords(message, ["1605"])) return `Schritt 13 Finale`;
      if (matchWords(message, ["Hilfe", "help"])) return `H12 B7 Door`;
      if (matchWords(message, ["solution"])) return `L12 B7 Door`;
      return "K12 B7 Door";
    },
  },

  // S13
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

  // F8
  "F8 B4 Grotto": {
    response: `Unfortunately, this is not correct. Put the two grids on top of each other. With HELP you get a tip.`,
    interaction: (message) => {
      if (matchWords(message, [`Cathedral`, `Cave`, `Palm`, `grotto`]))
        return "S8a B4 Bueste";
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H8 B4 Grotto";
      if (matchWords(message, ["solution"])) return "L8 B4 Grotto";
      return "K8 B4 Grotto";
    },
  },

  "F8a B4 Bueste": {
    response: `This is unfortunately not correct. Look around in the cave. With HELP you get a tip.`,
    interaction: (message) => {
      if (matchWords(message, [`Baccus`, `Bacchus`])) return "S8b B4 Spa";
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H8a B4 Bueste";
      if (matchWords(message, ["solution"])) return "L8a B4 Bueste";
      return "K8a B4 Bueste";
    },
  },

  // F9
  "F9a B5 Tucker": {
    response: `This is unfortunately not correct. With HELP you get a tip. `,
    interaction: (message) => {
      if (matchWords(message, [`L.97.665`, `L97665`, `L.97.608`, `L97608`]))
        return "S9b B5 Flaschen";
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H9a B5 Tucker";
      if (matchWords(message, ["solution"])) return "L9a B5";
      return "K9a B5 Tucker";
    },
  },

  "F9b B5 Flaschen": {
    response: `This is unfortunately not correct. With HELP you get a tip. `,
    interaction: (message) => {
      if (
        matchWords(message, [
          "B2E3",
          `E3B2`,
          `E3,B2`,
          `B2,E3`,
          "B2 E3",
          "E3 B2",
          "e3 and b2",
          "b2 and e3",
          "B2, E3",
          "E3, B2",
        ])
      )
        return `S9 B5 Mustererkennung`;
      if (matchWords(message, [`hilfe`, `Help`])) return "H9b B5 Flaschen";
      if (matchWords(message, ["solution"])) return "L9b B5";
      return "K9b B5 Flaschen";
    },
  },

  // F11
  "F11 B7 Buch": {
    response: `This is unfortunately not correct. With HELP you get a tip. `,
    interaction: (message) => {
      if (
        matchWords(message, ["Sommers", "Somers", "somersbuch", "somersbook"])
      )
        return `S12 B7 Gewehr`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "Hilfe11";
      if (matchWords(message, ["solution"])) return "L11 B7";
      return "Klammer11";
    },
  },

  // F12
  "F12 B7 Gewehr": {
    response: `This is unfortunately not correct. With HELP you get a tip. `,
    interaction: (message) => {
      if (matchWords(message, ["Fort", "Fort!"])) return `S12 B7 Fort`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Gewehr";
      if (matchWords(message, ["solution"])) return "L12 B7 Gewehr";
      return "K12 B7 Gewehr";
    },
  },

  "F12 B7 Fort": {
    response: `This is unfortunately not correct. With HELP you get a tip. `,
    interaction: (message) => {
      if (matchWords(message, ["3512"])) return `S12 B7 Door`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Fort";
      if (matchWords(message, ["solution"])) return "L12 B7 Fort";
      return "K12 B7 Fort";
    },
  },

  "F12 B7 Door": {
    response: `This is unfortunately not correct. With HELP you get a tip. `,
    interaction: (message) => {
      if (matchWords(message, ["1605"])) return `Schritt 13 Finale`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Door";
      if (matchWords(message, ["solution"])) return "L12 B7 Door";
      return "K12 B7 Door";
    },
  },

  // L3
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

  // L4
  "L4 B2": {
    response: `[b]Solution to Blog 2: [/b]

    Follow the beach to the end. There you will find the diving school of Michael Williams. There are two phone numbers on the building. 
    ::next-1::
    Solution: 2932915 or 2937310
    [button=interaction-S5 B2 Anruf]next[/button]
    `,
    interaction: (message) => {},
  },

  // L5
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

  // L6
  "L6 B3": {
    response: `
    [b]Solution to Blog 3: [/b]
Take a good look around Carter's house. Compare the photo in Blog 3 with what you see on Google Maps. The plate is missing from the blog photo, which was taken shortly after the burglary.
    ::next-1::
    Solution: Plate
    [button=interaction-S7 B3 Teller]next[/button]
    `,
    interaction: (message) => {},
  },

  // L7
  "L7 B3": {
    response: `
    [b]Solution to Blog 3: [/b]
The plate obviously shows part of a map. The X indicates the place where the Sea Venture sank. Now find the marked spot on the map of shipwrecks based on the coastline. Ship3 sank in front of the marked section of coastline. So according to the map Carter made, Ship3 is the Sea Venture.
    ::next-1::
    Solution: Ship3
    [button=interaction-S7 B3 Zusatz]next[/button]
    `,
    interaction: (message) => {},
  },

  // L8
  "L8 B4 Grotto": {
    response: `
    [b]Solution:[/b]

    1. First press the light switch in Henry Tucker's house so that the infrared camera can detect what is hidden. Look around, you will find two grids on which Henry has marked numbers. Put the two grids on top of each other and fill in the empty spaces with the numbers from 1 to 9, each only once, so that in each row, each column and each diagonal the sum is 34:
    
    3-12-13-6
    14-7-2-11
    1-10-15-8
    16-5-4-9
    
    2. Look at the interactive map of Bermuda. There you will find a grid similar to the one in Henry Tucker's house. In blog post 4, the number 2 is mentioned. You will find the 2 in row 2 in column 3. This place marks "Cathedral Cave" on the map. This is the place you are looking for.
    ::next-1::
    Solution: Cathedral cave
    [button=interaction-S8a B4 Bueste]next[/button]
    `,
    interaction: (message) => {},
  },

  "L8a B4 Bueste": {
    response: `
    [b]Solution to Blog 4:[/b]
Follow the arrows and look around the cave. At the very end you will find the bust of the roman god that Carter once hid in the cave. 
    ::next-1::
    Solution: Bacchus
    [button=interaction-S8b B4 Spa]next[/button]
    `,
    interaction: (message) => {},
  },

  // L9
  "L9a B5": {
    response: `
    [b]Solution to Blog 5: [/b]
    The bottle was found on the L'Herminie. In Blog 1 "Why so many wrecks" you can find the Flickr photos about the wreck.
    ::next-1::
    Solution: L.97.665 or L.97.608
    [button=interaction-S9b B5 Flaschen]next[/button]
    `,
    interaction: (message) => {},
  },

  "L9b B5": {
    response: `
    [b]Solution to Blog 5: [/b]
    First, take a look at Bil's Instagram profile to see which glass tokens are from the Sea Venture. Then look for those brands in the black and white photo and enter the letter/number combination in the chat in the form X1 Y1, i.e. F1 A2 for example.
    ::next-1::
    Solution: B2 E3 or E3 B2
    [button=interaction-S10 B6 Goldkreuz]next[/button]
    `,
    interaction: (message) => {},
  },

  // L10
  "L10 B6": {
    response: `
    [b][b]Solution to Blog 6: [/b]
This puzzle has it all. Look for the items on the packing list at the Ocean Discovery Center (pictured right). You will find the items in the showcases. Now you have to find the 4 ships on the wreck map and arrange the letters in the order of the packing list:
Navigation circle -  in the showcase of the Warwick - G
Medical ampoule - in the Constellation's showcase at the bottom right - O
Ship's bell - not to be missed in the Frenchman's showcase - L
Millstone - not to be missed in the showcase of the Caesar - D
The word you are looking for is GOLD.

You can find out the y by counting the stones on the gold cross (also on display at the Ocean Discovery Center). There are SEVEN.
So the URL is: https://tinyurl.com/GOLDSEVEN

Type this URL into your browser. In the article with the number 364215375135191 you can read who bought the gold ducats. [/b]
    ::next-1::
    Solution: Christian Lueder
    [button=interaction-S11 B7 Buch]next[/button]
    `,
    interaction: (message) => {},
  },

  // L11
  "L11 B7": {
    response: `
    [b]Solution to Blog 7:[/b]
EXODUS - The numbers indicate the position of the searched letter in the respective word. So 2nd for the 2nd letter in the word that was omitted in the text.
    ::next-1::
    Solution: Somersbook
    [button=interaction-S12 B7 Gewehr]next[/button]
    `,
    interaction: (message) => {},
  },

  // L12
  "L12 B7 Gewehr": {
    response: `
    [b]Solution to Blog 7:[/b]
Somer's book mentions the cove where the castaways were stranded. To decipher the building that is nearby, you need the text from Somer's book and the table with the pictograms. Each sentence stands for a certain pictogram, whose letter you should find out. The solution is FORT! So the cannon was brought to the fort. 
    ::next-1::
    Solution: Fort!
    [button=interaction-S12 B7 Fort]next[/button]
    `,
    interaction: (message) => {},
  },

  "L12 B7 Fort": {
    response: `
    [b]Solution to Blog 7:[/b]
In Bil's blog about Fort St. Catherine you will find a link that leads inside the fort. There you will find a locked door. You can find out the number of the combination lock by following the sounds. First you'll hear a bell, then a chain, then a clock and then a saw. On the wall there is a symbol for each object. This is the mirrored digit of the code for the combination lock. 
    ::next-1::
    Solution: 3512
    [button=interaction-S12 B7 Door]next[/button]
    `,
    interaction: (message) => {},
  },

  "L12 B7 Door": {
    response: `
    [b]Solution to Blog 7:[/b]
Once you open the door, after a few steps you will find the cannon of a board on which there are 4 colored Xs. You can find out the numbers by looking at the rows of numbers on the wall opposite. On the wall to the left of the cannon, you will find three tools to load the cannon with. On the wall opposite you will find the same tools again. Using the three colors red, green, and blue, you identify the correct rows of numbers and must now add the X's to the row of numbers. The X's in the correct order give the date (anno) mentioned on the sign under the cannon.
    ::next-1::
    Solution: 1605
    [button=interaction-Schritt 13 Finale]next[/button]
    `,
    interaction: (message) => {},
  },

  // H8
  "H8 B4 Grotto": {
    response: `[b]Help: [/b]

    1. First press the light switch in Henry Tucker's house so that the infrared camera can detect what is hidden. Look around, you will find two grids on which Henry has marked numbers. Place the two grids on top of each other and fill in the empty spaces with the numbers from 1 to 9, each only once, so that in each row, each column and each diagonal the sum is 34. 
    
    2. Look at the interactive map of Bermuda. There you will find a grid similar to the one in Henry Tucker's house. In blog post 4, the number 2 is mentioned. 
    
    With SOLUTION you can skip this mystery.`,
    interaction: (message) => {
      if (matchWords(message, [`Cathedral`, `Cave`, `Palm`, `grotto`]))
        return "S8a B4 Bueste";
      if (matchWords(message, ["solution"])) return "L8 B4 Grotto";
      return "K8 B4 Grotto";
    },
  },

  "H8a B4 Bueste": {
    response: `[b]Help: [/b]
    Follow the arrows to the end and look around the cave.
    With SOLUTION you can skip this mystery.`,
    interaction: (message) => {
      if (matchWords(message, [`Baccus`, `Bacchus`])) return "S8b B4 Spa";
      if (matchWords(message, ["solution"])) return "L8a B4 Bueste";
      return "K8a B4 Bueste";
    },
  },

  // F9
  "H9a B5 Tucker": {
    response: `[b]Help: [/b]
    The bottle was found on L'Herminie. Take a closer look at the Flickr photos (blog 1) of this wreck. 
    With SOLUTION you can skip this riddle. `,
    interaction: (message) => {
      if (matchWords(message, [`L.97.665`, `L97665`, `L.97.608`, `L97608`]))
        return "S9b B5 Flaschen";
      if (matchWords(message, ["solution"])) return "L9a B5";
      return "K9a B5 Tucker";
    },
  },

  "H9b B5 Flaschen": {
    response: `[b]Help:[/b]
    First, check out Bil's Instagram profile to see which glass tokens are from the Sea Venture. Then find those marks in the black and white photo and enter the letter/number combination in the chat.
    With SOLUTION you can skip this riddle. `,
    interaction: (message) => {
      if (
        matchWords(message, [
          "B2E3",
          `E3B2`,
          `E3,B2`,
          `B2,E3`,
          "B2 E3",
          "E3 B2",
          "e3 and b2",
          "b2 and e3",
          "B2, E3",
          "E3, B2",
        ])
      )
        return `S9 B5 Mustererkennung`;
      if (matchWords(message, ["solution"])) return "L9b B5";
      return "K9b B5 Flaschen";
    },
  },

  // F12
  "H12 B7 Gewehr": {
    response: `[b]Help:[/b] Somer's book mentions the bay where the castaways were stranded. To decipher the building that is nearby, you need the text from Somer's book and the table with the pictograms. Each sentence stands for a certain pictogram, whose letter you should find out. What is the name of the building?
    With SOLUTION you will skip this puzzle.`,
    interaction: (message) => {
      if (matchWords(message, ["Fort", "Fort!"])) return `Schritt 13 Finale`;
      if (matchWords(message, ["solution"])) return "L12 B7 Gewehr";
      return "K12 B7 Gewehr";
    },
  },

  "H12 B7 Fort": {
    response: `[b]Help: [/b]In Bil's blog about Fort St. Catherine you will find a link that leads inside the fort. There you will find a locked door. You can find out the number of the combination lock by following the sounds. 
    With SOLUTION you will skip this puzzle. `,
    interaction: (message) => {
      if (matchWords(message, ["3512"])) return `S12 B7 Door`;
      if (matchWords(message, ["solution"])) return "L12 B7 Fort";
      return "K12 B7 Fort";
    },
  },

  "H12 B7 Door": {
    response: `[b]Help:[/b] When you have opened the door, after a few steps you will find the cannon of a board on which there are 4 colored Xs. You can find out the numbers by looking at the rows of numbers on the wall opposite. On the wall to the left of the cannon, you will find three tools to load the cannon with. On the wall opposite you will find the same tools again. Using the three colors red, green, and blue, you identify the correct rows of numbers and must now add the X's to the row of numbers. The X's in the correct order give the date (anno) mentioned on the sign under the cannon.
    With SOLUTION you skip this puzzle. `,
    interaction: (message) => {
      if (matchWords(message, ["1605"])) return `Schritt 13 Finale`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Door";
      if (matchWords(message, ["solution"])) return "L12 B7 Door";
      return "K12 B7 Door";
    },
  },

  // K8
  "K8 B4 Grotto": {
    response: `If this is your answer, unfortunately it is wrong. `,
    interaction: (message) => {
      if (matchWords(message, [`Cathedral`, `Cave`, `Palm`, `grotto`]))
        return "S8a B4 Bueste";
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H8 B4 Grotto";
      if (matchWords(message, ["solution"])) return "L8 B4 Grotto";
      return "F8 B4 Grotto";
    },
  },

  "K8a B4 Bueste": {
    response: `If this is your answer, unfortunately it is wrong. `,
    interaction: (message) => {
      if (matchWords(message, [`Baccus`, `Bacchus`])) return "S8b B4 Spa";
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H8a B4 Bueste";
      if (matchWords(message, ["solution"])) return "L8a B4 Bueste";
      return "F8a B4 Bueste";
    },
  },

  // K9
  "K9a B5 Tucker": {
    response: `If this is your answer, unfortunately it is wrong.`,
    interaction: (message) => {
      if (matchWords(message, [`L.97.665`, `L97665`, `L.97.608`, `L97608`]))
        return "S9b B5 Flaschen";
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H9a B5 Tucker";
      if (matchWords(message, ["solution"])) return "L9a B5";
      return "F9a B5 Tucker";
    },
  },

  "K9b B5 Flaschen": {
    response: `If this is your answer, unfortunately it is wrong. Two groups of bottles are attributed to the Sea Venture.`,
    interaction: (message) => {
      if (
        matchWords(message, [
          "B2E3",
          `E3B2`,
          `E3,B2`,
          `B2,E3`,
          "B2 E3",
          "E3 B2",
          "e3 and b2",
          "b2 and e3",
          "B2, E3",
          "E3, B2",
        ])
      )
        return `S9 B5 Mustererkennung`;
      if (matchWords(message, [`hilfe`, `Help`])) return "H9b B5 Flaschen";
      if (matchWords(message, ["solution"])) return "L9b B5";
      return "F9b B5 Flaschen";
    },
  },

  // K12
  "K12 B7 Gewehr": {
    response: `If that's your answer, I'm afraid it's wrong. What is the word that results from the pictograms?`,
    interaction: (message) => {
      if (matchWords(message, ["Fort", "Fort!"])) return `S12 B7 Fort`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Gewehr";
      if (matchWords(message, ["solution"])) return "L12 B7 Gewehr";
      return "F12 B7 Gewehr";
    },
  },

  "K12 B7 Fort": {
    response: `If that's your answer, I'm afraid it's wrong. What is the code for the combination lock?`,
    interaction: (message) => {
      if (matchWords(message, ["3512"])) return `S12 B7 Door`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Fort";
      if (matchWords(message, ["solution"])) return "L12 B7 Fort";
      return "F12 B7 Fort";
    },
  },

  "K12 B7 Door": {
    response: `If this is your answer, I'm afraid it's wrong. When was the rifle manufactured? I am looking for the year. `,
    interaction: (message) => {
      if (matchWords(message, ["1605"])) return `Schritt 13 Finale`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Door";
      if (matchWords(message, ["solution"])) return "L12 B7 Door";
      return "F12 B7 Door";
    },
  },

  //
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

  // Ship names
  Warwick: {
    response: `The English merchant ship Warwick was owned by the Earl of Warwick and sank in 1619 during a strong storm in Castle Harbor [url=https://www.flickr.com/photos/154021822@N07/albums/72157663437450738]Photos[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  Caesar: {
    response: `The English brig Caesar suffered shipwreck on a Bermuda reef on her way from Shields to Baltimore. She had loaded millstones, medicine bottles, parts of grandfather clocks, glassware, lead oxide and a marble ledge for a church in Baltimore.  [url=https://www.flickr.com/photos/154021822@N07/albums/72157690658730635]Fotos[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  "San Pedro": {
    response: `The San Pedro and the Warwick look very similar. The Spanish San Pedro was on a voyage from Cartagena to Cádiz and was shipwrecked in 1594. [url=https://www.flickr.com/photos/154021822@N07/albums/72157661363800127]Have a look[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  "Lord Amherst": {
    response: `Der mit 24 Kanonen bestückte englische Waffentransporter Lord Amherst ist 1778 auf dem Weg von Jamaika nach London gekentert. Es wurde als Lazarettschiff eingesetzt, um verletzte Seeleute aus dem Revolutionskrieg zurück nach England zu bringen. [url=https://www.flickr.com/photos/154021822@N07/albums/72157688137290692]Fotos[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  "The Frenchman": {
    response: `Dieses nicht identifizierte Schiffswrack wurde Ende des 20. Jahrhunderts gefunden. In den letzten Jahren hat der Schatzsucher Teddy Tucker an dem Fundort gearbeitet und eine Vielzahl von Artefakten aus der Zeit des Revolutionskrieges geborgen.[url=https://www.flickr.com/photos/154021822@N07/albums/72157689310294251]Fotos[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  "l'herminie": {
    response: `Die 60 Geschütze starke französische Fregatte L'Herminie ist 1839 gesunken. Sie gehörte zu einem Geschwader in mexikanischen Gewässern, das zur Durchsetzung französischer Ansprüche gegen Mexiko entsandt worden war. Aufgrund des rauen Wetters begab sich das Schiff in den Schutz der Bermudas. Als das Land gesichtet wurde, war es zu spät.[url=https://www.flickr.com/photos/154021822@N07/albums/72157690662407525]Fotos[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  Constellation: {
    response: `This American four-masted schooner sank in 1943. During the Second World War it was put into service and used as a cargo ship. Today its hull lies broken on a coral and sand bottom and reveals petrified bags of cement, building material and glassware. [url=https://www.flickr.com/photos/154021822@N07/albums/72157663404710038]Schau mal...[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  "Cristobal Colon": {
    response: `This huge Spanish cruise ship sank in 1946. It sailed between New York and Central America. The Cristobal Colon was one of the most luxurious cruise ships of her time and crashed into the coral reefs off the north coast of Bermuda because the captain misinterpreted an offshore communication tower as the Gibbs Hill Lighthouse.
    [url=https://www.flickr.com/photos/154021822@N07/albums/72157663404919348]Schau mal...[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  "Tauchen Sea Venture": {
    response: `To most ships I offer diving trips, but not to Sea Venture. Everyone knows that the wreck of the Sea Venture has not yet been discovered. What makes you think that I have found the gold ducats? Carter must have found the gold treasure shortly after the sinking of the Sea Venture. Teddy must have looted the rest. Why don't you ask him? Choose another ship for a dive.
    [audio]https://www.paragamix.com/images/Bermudas/audioe/bb9.mp3[/audio]
    ::next-1::
    Find another wreck.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Montana": {
    response: `Welcome to our virtual dive trip. On to the Montana.
    [video]https://youtu.be/E9Awv0bANhc[/video]
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Lartinton": {
    response: `Welcome to our virtual dive trip. On to Lartington.
    [video]https://youtu.be/JdskrvJUA1M[/video]
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Caesar": {
    response: `Welcome to our virtual dive trip. On to Caesar.
    [video]https://vimeo.com/60489114[/video]
    
    The English brig Caesar suffered shipwreck on a Bermuda reef on her way from Shields to Baltimore.
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Herminie": {
    response: `Welcome to our virtual dive trip. On to L'Herminie.
    [/b][video]https://youtu.be/rfCbndOflwg[/video]
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Constellation": {
    response: `Welcome to our virtual dive trip. On to Constellation.
    [video]https://youtu.be/E9Awv0bANhc[/video]
    This American four-masted schooner sank in 1943. During the Second World War it was put into service and used as a cargo ship.
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Warwick": {
    response: `Welcome to our virtual dive trip. On to Warwick.
    [video]https://youtu.be/LGnEd08vsD0[/video]
    The English merchant ship Warwick was owned by the Earl of Warwick and sank in 1619 during a strong storm in Castle Harbor 
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Christobal": {
    response: `Welcome to our virtual dive trip. On to Christobal Colon.
    [video]https://youtu.be/7khZxnGze4c[/video]
    This huge Spanish cruise ship sank in 1946. It sailed between New York and Central America.
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen San Pedro": {
    response: `Unfortunately we do not offer diving trips to San Pedro. Instead we recommend the Warwick, which is just as old.[video]https://youtu.be/LGnEd08vsD0[/video]
    The English merchant ship Warwick was owned by the Earl of Warwick and sank in 1619 during a strong storm in Castle Harbor.
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Ship3": {
    response: `I can assure you that it is not worth diving there. I have visited this wreck several times and there is nothing to see there except some wooden planks. Everything I found I have given to the [url=https://goo.gl/maps/u8j8VPb5z8QYJ4b9A]Ocean Discovery Center[/url]. That is all I have. Please choose another wreck.

    [audio]https://www.paragamix.com/images/Bermudas/audioe/bb10.mp3[/audio]
    
    But we can take a [url=https://goo.gl/maps/2ebb159HBbKr7zeQ6]tour with the jet ski[/url] to the approximate position of ship3. 
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Ship sonstige": {
    response: `This wreck has not yet been identified. I have been there several times. With pleasure we can make an excursion there.
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },
};
