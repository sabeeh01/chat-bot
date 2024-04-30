import { matchWords } from "../helpers/matcher";
export const interactions = {
  // klammers
  Klammer1: {
    en: `This is unfortunately not correct. With HELP you get a tip. `,
    de: `Das ist leider nicht richtig. Mit HELP erhalten Sie einen Tipp. `,
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
    en: `If this is your answer, unfortunately it is wrong. If this should be the solution for a blog puzzle, please enter the corresponding blog first, e.g. BLOG 1 for the 1st blog.`,
    de: `Wenn dies Ihre Antwort ist, ist sie leider falsch. Wenn dies die Lösung für ein Blog-Rätsel sein soll, geben Sie bitte zuerst den entsprechenden Blog ein, z.B. BLOG 1 für den 1.`,
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
    en: `If this is your answer, it is unfortunately wrong.`,
    de: `Wenn dies Ihre Antwort ist, dann ist sie leider falsch.`,
    interaction: (message) => {
      if (matchWords(message, [`Hilfe`, `Ayuda`, `help`, `aide`]))
        return `Hilfe3`;
      if (matchWords(message, [`KRET`, `K R E T`])) return `S3 B1 Zusatz`;
      if (matchWords(message, [`solution`])) return `L3 B1`;
      return "Falsch3";
    },
  },

  Klammer4: {
    en: `If this is your answer, unfortunately it is wrong.`,
    de: `Wenn das Ihre Antwort ist, dann ist sie leider falsch.`,
    interaction: (message) => {
      if (
        matchWords(message, [
          "2937319",
          "293-2915",
          "293-7319",
          "293-7310",
          "2937310",
          "294-7319",
          "2932915",
          "293 7310",
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
    en: `If this is your answer for blog 2, unfortunately it is wrong.`,
    de: `Wenn dies Ihre Antwort für Blog 2 ist, ist sie leider falsch.`,
    interaction: (message) => {
      if (matchWords(message, ["1619"])) return `S5 B2 Zusatz`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe5`;
      if (matchWords(message, ["Caesar", "Dive Caesar", "go caesar", "Cäsar", 'Geh, Cäsar', 'Tauch Cäsar'])) return `Tauchen Caesar`;
      if (matchWords(message, ["Pedro", "Sanpedro"]))
        return `Tauchen San Pedro`;
      if (matchWords(message, ["venture", "Seaventure"]))
        return `Tauchen Sea Venture`;
      if (matchWords(message, ["L'herminie", "herminie", "Lherminie"]))
        return `Tauchen Herminie`;
      if (matchWords(message, ["Constellation"]))
        return `Tauchen Constellation`;
      if (matchWords(message, ["Cristobal", "CristobalColon", "Colon"]))
        return `Tauchen Christobal`;
      if (matchWords(message, ["Lartington"])) return `Tauchen Lartinton`;
      if (matchWords(message, ["Montana"])) return `Tauchen Montana`;
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
      if (matchWords(message, ["Warwick"])) return `Tauchen Warwick`;
      if (matchWords(message, ["solution"])) return `L5 B2`;
      return "Falsch5";
    },
  },

  Klammer6: {
    en: `If this is your answer, unfortunately it is wrong.`,
    de: `Wenn das Ihre Antwort ist, dann ist sie leider falsch.`,
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
    en: `If this is your answer, unfortunately it is wrong.`,
    de: `Wenn das Ihre Antwort ist, dann ist sie leider falsch.`,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Ayuda", "Aide", "Help"]))
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

  "K8 B4 Grotto": {
    en: `If this is your answer, unfortunately it is wrong. `,
    de: `Wenn das Ihre Antwort ist, dann ist sie leider falsch. `,
    interaction: (message) => {
      if (
        matchWords(message, [
          `Cathedral`,
          `Cave`,
          `Palm`,
          `grotto`,
          "Kathedrale",
          "Katedrale",
          "Grotte",
          "Höhle",
        ])
      )
        return "S8a B4 Bueste";
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H8 B4 Grotto";
      if (matchWords(message, ["solution"])) return "L8 B4 Grotto";
      return "F8 B4 Grotto";
    },
  },

  "K8a B4 Bueste": {
    en: `If this is your answer, unfortunately it is wrong. `,
    de: `Wenn das Ihre Antwort ist, dann ist sie leider falsch. `,
    interaction: (message) => {
      if (matchWords(message, [`Baccus`, `Bacchus`])) return "S8b B4 Spa";
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H8a B4 Bueste";
      if (matchWords(message, ["solution"])) return "L8a B4 Bueste";
      return "F8a B4 Bueste";
    },
  },

  "K9a B5 Tucker": {
    en: `If this is your answer, unfortunately it is wrong.`,
    de: `Wenn das Ihre Antwort ist, dann ist sie leider falsch. `,
    interaction: (message) => {
      if (matchWords(message, [`L.97.665`, `L97665`, `L.97.608`, `L97608`]))
        return "S9b B5 Flaschen";
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H9a B5 Tucker";
      if (matchWords(message, ["solution", "lösung"])) return "L9a B5";
      return "F9a B5 Tucker";
    },
  },

  "K9b B5 Flaschen": {
    en: `If this is your answer, unfortunately it is wrong. Two groups of bottles are attributed to the Sea Venture.`,
    de: `Wenn dies Ihre Antwort ist, ist sie leider falsch. Zwei Gruppen von Flaschen werden der Sea Venture zugeschrieben.`,
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

  Klammer10: {
    en: `If that's your answer to Blog 6, I'm afraid it's wrong. You need the letters on the map in Ocean Discovery Center in the correct order for the URL you are looking for. Who bought the gold ducats?`,
    de: `Wenn das Ihre Antwort auf Blog 6 ist, dann ist sie leider falsch. Sie benötigen die Buchstaben auf der Karte im Ocean Discovery Center in der richtigen Reihenfolge für die gesuchte URL. Wer hat die Golddukaten gekauft?`,
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
    en: `If this is your answer, unfortunately it is wrong.`,
    de: `Wenn das Ihre Antwort ist, dann ist sie leider falsch.`,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Ayuda", "Aide", "Help"]))
        return `Hilfe11`;

      if (
        matchWords(message, ["Sommers", "Somers", "somersbuch", "somersbook"])
      )
        return `S12 B7 Gewehr`;

      if (matchWords(message, [`solution`])) return `L11 B7`;

      return "F11 B7 Buch";
    },
  },

  "K12 B7 Gewehr": {
    en: `If that's your answer, I'm afraid it's wrong. What is the word that results from the pictograms?`,
    de: `Wenn das Ihre Antwort ist, dann ist sie leider falsch. Wie lautet das Wort, das sich aus den Piktogrammen ergibt?`,
    interaction: (message) => {
      if (matchWords(message, ["Fort", "Fort!"])) return `S12 B7 Fort`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Gewehr";
      if (matchWords(message, ["solution"])) return "L12 B7 Gewehr";
      return "F12 B7 Gewehr";
    },
  },

  "K12 B7 Fort": {
    en: `If that's your answer, I'm afraid it's wrong. What is the code for the combination lock?`,
    de: `Wenn das Ihre Antwort ist, dann ist sie leider falsch. Wie lautet der Code für das Zahlenschloss?`,
    interaction: (message) => {
      if (matchWords(message, ["3512"])) return `S12 B7 Door`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Fort";
      if (matchWords(message, ["solution"])) return "L12 B7 Fort";
      return "F12 B7 Fort";
    },
  },

  "K12 B7 Door": {
    en: `If this is your answer, I'm afraid it's wrong. When was the rifle manufactured? I am looking for the year. `,
    de: `Wenn das Ihre Antwort ist, dann ist sie leider falsch. In welchem Jahr wurde das Gewehr hergestellt? `,
    interaction: (message) => {
      if (matchWords(message, ["1605"])) return `Schritt 13 Finale`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Door";
      if (matchWords(message, ["solution"])) return "L12 B7 Door";
      return "F12 B7 Door";
    },
  },

  Klammer13: {
    en: `If this is your answer, unfortunately it is wrong.`,
    de: `Wenn das Ihre Antwort ist, dann ist sie leider falsch.`,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Ayuda", "Aide", "Help"]))
        return `Hilfe13 Aufloesung`;

      return "Falsch13";
    },
  },

  // hilfes
  Hilfe1: {
    en: `[b]Help: [/b]Look around the bar. You will find a Crazy Dude notice on the pinboard. You are looking for his first name. With SOLUTION you skip this riddle. `,
    de: `[b]Hilfe: [/b]Schau dich in der Bar um. An der Pinnwand findest du einen Zettel mit einem Crazy Dude. Du suchst nach seinem Vornamen. Mit LÖSUNG überspringst du dieses Rätsel. `,
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
    en: `[b]Help: [/b]Every blog is connected to a puzzle. Enter the blog number (e.g. Blog 1) to call up the puzzle. 
    To solve the mission, send an e-mail to the art expert xxxxx.yyyyyABC@gmail.com. 
    The individual puzzles provide the values for x,y,A,B,C. Keep an eye out for them.
    With RESOLUTION you get the solution for this mission.`,
    de: `[b]Hilfe: [/b]Jeder Blog ist mit einem Rätsel verbunden. Geben Sie die Blognummer ein (z. B. Blog 1), um das Rätsel aufzurufen. 
    Um die Aufgabe zu lösen, senden Sie eine E-Mail an den Kunstexperten xxxxx.yyyyyABC@gmail.com. 
    Die einzelnen Rätsel liefern die Werte für x,y,A,B,C. Halten Sie Ausschau nach ihnen.
    Mit RESOLUTION erhalten Sie die Lösung für diese Aufgabe.`,
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
    en: `[b]Help: [/b]You can find the names of the ships and additional information, such as the wrecked date, in the 
    [url=https://parablog.wixsite.com/bermudaswrecks/post/r%C3%A4tsel-der-woche]blog post about the wrecks.[/url]
    With SOLUTION you can skip this riddle.`,
    de: `[b]Hilfe: [/b]Die Namen der Schiffe und zusätzliche Informationen, wie z.B. das Datum des Untergangs, finden Sie in der 
    [url=https://parablog.wixsite.com/wracks/post/r%C3%A4tsel-der-woche]Blogbeitrag über die Wracks.[/url]
    Mit SOLUTION können Sie dieses Rätsel überspringen.`,
    interaction: (message) => {
      if (matchWords(message, ["KRET", "K R E T"])) return `S3 B1 Zusatz`;
      if (matchWords(message, ["solution"])) return `L3 B1`;
      return "Klammer3";
    },
  },

  Hilfe4: {
    en: `[b]Help: [/b]Follow the beach to the end. There you will find the diving school of Michael Williams. On the building you will find the phone number. Type it in. 
    With SOLUTION you skip this riddle.`,
    de: `[b]Hilfe: [/b]Folgen Sie dem Strand bis zum Ende. Dort finden Sie die Tauchschule von Michael Williams. Auf dem Gebäude finden Sie die Telefonnummer. Tippen Sie diese ein. 
    Mit SOLUTION überspringen Sie dieses Rätsel.`,
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
    en: `[b]Help: [/b]Make some diving trips to the wrecks by typing the name of the shipwreck, for example Sea Venture or Ship 3. You can find the names of the ships on the [url=https://www.google.com/maps/d/edit?mid=1-_X23wraPdPggojHiQv7TrDGsCmgEthz&usp=sharing]Wreck Map[/url].
    On one of the videos you will discover the cannonballs you are looking for. When did this ship sink?
    With SOLUTION you will skip this puzzle.`,
    de: `[b]Hilfe: [/b]Machen Sie Tauchausflüge zu den Wracks, indem Sie den Namen des Schiffswracks eingeben, zum Beispiel Sea Venture oder Ship 3. Die Namen der Schiffe finden Sie auf der [url=https://www.google.com/maps/d/edit?mid=1-_X23wraPdPggojHiQv7TrDGsCmgEthz&usp=sharing]Wrackkarte[/url].
    Auf einem der Videos werden Sie die gesuchten Kanonenkugeln entdecken. Wann ist dieses Schiff gesunken?
    Mit SOLUTION können Sie dieses Rätsel überspringen.`,
    interaction: (message) => {
      if (matchWords(message, ["loesung"])) return `S5 B2 Zusatz`;
      if (matchWords(message, ["Caesar", "Dive Caesar", "go caesar", "Cäsar", 'Geh, Cäsar', 'Tauch Cäsar'])) return `Tauchen Caesar`;
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
        return `Tauchen Christobal`;
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
    en: `[b]Help: [/b]Take a good look around Carter's house. Compare the photo in Blog 3 with what you see on Google Maps. Which item is missing? Enter the item so that al9010 can research it on the internet. With SOLUTION you can skip this puzzle.`,
    de: `[b]Hilfe: [/b]Sehen Sie sich in Carters Haus genau um. Vergleichen Sie das Foto in Blog 3 mit dem, was Sie auf Google Maps sehen. Welcher Gegenstand fehlt? Gib den Gegenstand ein, damit al9010 ihn im Internet recherchieren kann. Mit SOLUTION kannst du dieses Rätsel überspringen.`,
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
    en: `[b]Help: [/b]The plate obviously shows a part of a card. The X could indicate the place where the Sea Venture sank. Can you match the map section on the plate to the big map and can you find the name of the ship on the map? With SOLUTION you skip this puzzle. 
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/Bermuda_Wrecks_english.gif[/img]
    [url=https://www.paragamix.com/images/Bermudas/Bermuda_Wrecks_english.gif]enlarge[/url]`,
    de: `[b]Hilfe: [/b]Das Schild zeigt offensichtlich einen Teil einer Karte. Das X könnte den Ort anzeigen, an dem die Sea Venture gesunken ist. Können Sie den Kartenausschnitt auf dem Schild der großen Karte zuordnen und den Namen des Schiffes auf der Karte finden? Mit SOLUTION überspringen Sie dieses Rätsel. 
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/Bermuda_Wrecks_english.gif[/img]
    [url=https://www.paragamix.com/images/Bermudas/Bermuda_Wrecks_english.gif]vergrößern[/url]`,

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
    en: `[b]Help with Blog 6: [/b]Read through blog post #6. First, take a good look around the Ocean Discovery Center. Look for the items on the packing list. What ships were they found on? The 4-digit solution word forms the x for the URL. You will find out y quickly. Then put x and y into the URL http://bit.ly/yxy. Then enter the URL into your browser. If you find out who bought the gold coins, you have solved this puzzle ;-)
    With SOLUTION you can skip this riddle.`,
    de: `[b]Hilfe zu Blog 6: [/b]Lesen Sie den Blogbeitrag #6 durch und besuchen Sie dann das Ocean Discovery Center. Suchen Sie die Gegenstände auf der Packliste und finden Sie heraus, auf welchen Schiffen sie gefunden wurden. Das 4-stellige Lösungswort wird das "x" in der URL sein. Das "y" werden Sie schnell herausfinden. Setzen Sie dann "x" und "y" in die URL http://bit.ly/yxy ein und geben Sie die URL in Ihren Browser ein. Sobald Sie herausgefunden haben, wer die Goldmünzen gekauft hat, haben Sie dieses Rätsel gelöst ;-)
    Mit SOLUTION können Sie dieses Rätsel überspringen.`,
    interaction: (message) => {
      if (matchWords(message, ["christian", "lueder", "lüder"]))
        return `S11 B7 Buch`;
      if (matchWords(message, ["solution"])) return `L10 B6`;
      return "Klammer10";
    },
  },

  Hilfe11: {
    en: `[b]Help: [/b]
    EXODUS - the digits indicate the position of the searched letter in the given word. So 2. for the 2nd letter in that word, which was omitted in the text. With SOLUTION you skip this puzzle. 
    With SOLVE you will skip this puzzle. `,
    de: `[b]Hilfe: [/b]
    EXODUS - die Ziffern geben die Position des gesuchten Buchstabens im angegebenen Wort an. Zum Beispiel steht "2." für den 2. Buchstaben in diesem Wort, der im Text weggelassen wurde. Mit  SOLUTION können Sie dieses Rätsel überspringen.`,
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
    en: `[b]Help: [/b]Every blog is connected to a puzzle. Enter the blog number (e.g. Blog 1) to call up the puzzle. 
    To solve the mission, send an e-mail to the art expert xxxxx.yyyyyABC@gmail.com. 
    The individual puzzles provide the values for x,y,A,B,C. Keep an eye out for them.
    With RESOLUTION you get the solution for this mission.    
    ::next-1::
    Did you like the game?
    [button=interaction-Bewertung gut]yes[/button]
    [button=interaction-Bewertung schlecht]no[/button]`,
    de: `[b]Hilfe: [/b]Jeder Blog ist mit einem Rätsel verbunden. Geben Sie die Blognummer ein (z. B. Blog 1), um das Rätsel aufzurufen. 
    Um die Aufgabe zu lösen, senden Sie eine E-Mail an den Kunstexperten xxxxx.yyyyyABC@gmail.com. 
    Die einzelnen Rätsel liefern die Werte für x,y,A,B,C. Halten Sie Ausschau nach ihnen.
    Mit RESOLUTION erhalten Sie die Lösung für diese Aufgabe.
    ::next-1::
    Hat Ihnen das Spiel gefallen?
    [button=interaction-Bewertung gut]Ja[/button]
    [button=interaction-Bewertung schlecht]NEIN[/button]
    `,
    interaction: (message) => {
      return "Klammer13";
    },
  },

  // falschs
  Falsch1: {
    en: `This is unfortunately not correct. With HELP you get a tip.`,
    de: `Das ist leider nicht richtig. Mit HELP erhalten Sie einen Hinweis.`,
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
    en: `This is unfortunately not correct. With HELP you get a tip.`,
    de: `Das ist leider nicht richtig. Mit HELP erhalten Sie einen Hinweis.`,
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
    en: `This is unfortunately not correct. To solve the puzzle you need the final letters of the ships in the order RED, GREEN, YELLOW, BLUE. They result in the solution word. With HELP you get a hint. 
    You are in Blog1. If you want to change the blog, please type in the corresponding blog (e.g. Blog2).`,
    de: `Das ist leider nicht richtig. Um das Rätsel zu lösen, brauchst du die Endbuchstaben der Schiffe in der Reihenfolge ROT, GRÜN, GELB, BLAU. Sie ergeben das Lösungswort. Mit HELP erhalten Sie einen Hinweis. 
    Sie befinden sich in Blog1. Wenn Sie das Blog wechseln möchten, geben Sie bitte das entsprechende Blog ein (z. B. Blog2).`,
    interaction: (message) => {
      if (matchWords(message, [`KRET`, `K R E T`])) return `S3 B1 Zusatz`;

      if (matchWords(message, [`Hilfe`, `ayuda`, `help`, `aide`]))
        return `Hilfe3`;
      if (matchWords(message, [`solution`])) return `L3 B1`;
      return "Klammer3";
    },
  },

  Falsch4: {
    en: `This is unfortunately not correct. You will find the instructor at the end of Grotto Bay. You can find the link in the blog. With HELP you get a tip. `,
    de: `Das ist leider nicht richtig. Sie finden den Ausbilder am Ende der Grotto Bay. Den Link dazu finden Sie im Blog. Mit HELP erhalten Sie einen Tipp.  `,
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
    en: `We do not offer diving trips on this ship. Take some dive trips to the wrecks. With HELP you get a tip.`,
    de: `Wir bieten keine Tauchausflüge auf diesem Schiff an. Machen Sie einige Tauchausflüge zu den Wracks. Mit HELP erhalten Sie einen Hinweis.`,
    interaction: (message) => {
      if (matchWords(message, ["1619"])) return `S5 B2 Zusatz`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe5`;
      if (matchWords(message, ["Caesar", "Dive Caesar", "go caesar", "Cäsar", 'Geh, Cäsar', 'Tauch Cäsar'])) return `Tauchen Caesar`;
      if (matchWords(message, ["Pedro", "Sanpedro"]))
        return `Tauchen San Pedro`;
      if (matchWords(message, ["venture", "Seaventure"]))
        return `Tauchen Sea Venture`;
      if (matchWords(message, ["L'herminie", "herminie", "Lherminie"]))
        return `Tauchen Herminie`;
      if (matchWords(message, ["Constellation"]))
        return `Tauchen Constellation`;
      if (matchWords(message, ["Cristobal", "CristobalColon", "Colon"]))
        return `Tauchen Christobal`;
      if (matchWords(message, ["Lartington"])) return `Tauchen Lartinton`;
      if (matchWords(message, ["Montana"])) return `Tauchen Montana`;
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
      if (matchWords(message, ["Warwick"])) return `Tauchen Warwick`;
      if (matchWords(message, [`solution`])) return `L5 B2`;
      return "Klammer5";
    },
  },

  Falsch6: {
    en: `This is unfortunately not correct. Take a good look around once again. With HELP you get a tip. `,
    de: `Das ist leider nicht richtig. Schauen Sie sich noch einmal genau um. Mit HELP erhalten Sie einen Tipp. `,
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
    en: `This is unfortunately not correct. What does it look like? Maybe Carter marked something here. Carter was one of the survivors of the Sea Venture and could have identified the Sea Venture on the map for sure. With HELP you get a tip. `,
    de: `Das ist leider nicht richtig. Wie sieht es denn aus? Vielleicht hat Carter hier etwas markiert. Carter war einer der Überlebenden der Sea Venture und hätte die Sea Venture sicher auf der Karte identifizieren können. Mit HELP erhalten Sie einen Tipp. `,
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
    en: `Unfortunately, this is not correct. Please complete the web address and enter it into your browser.
    With HELP you will get a hint.`,
    de: `Leider ist dies nicht korrekt. Bitte vervollständigen Sie die Webadresse und geben Sie sie in Ihren Browser ein.
    Mit HELP erhalten Sie einen Hinweis. `,
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
    en: `This is unfortunately not correct. With HELP you get a tip. `,
    de: `Das ist leider nicht richtig. Mit HELP erhalten Sie einen Hinweis.  `,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Ayuda", "help", "Aide"]))
        return "Hilfe13 Aufloesung";
      return "Klammer13";
    },
  },

  "Language Select": {
    en: `Please change the language first before playing this game,
[button=lang-en]English[/button]
[button=lang-de]German[/button]`,
    de: `Bitte ändern Sie zuerst die Sprache, bevor Sie dieses Spiel spielen
    [button=lang-en]Englisch[/button]
[button=lang-de]Deutsch[/button]`,
    interaction: (message) => {},
  },

  // S1
  "S1 Swizzle Inn": {
    en: `If you want to change the language, [url=https://www.paragamix.com/en-us/start-mission]enter the code again and choose the language first[/url]
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/px_bermuda_crazydude.gif[/img]
    Hello - I am the Crazy Dude.
    ::next-3::
    [audio]https://www.paragamix.com/images/Bermudas/audioe/bb1.mp3[/audio]
::next-4::
What is my first name? Please enter it here in the chat.
[button=https://goo.gl/maps/yMXc2TVC19G3fF1z9]Swizzle Inn[/button]
`,
    de: `Wenn Sie die Sprache ändern möchten, [url=https://www.paragamix.com/en-us/start-mission]geben Sie den Code erneut ein und wählen Sie zunächst die Sprache aus[/url]
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/px_bermuda_crazydude.gif[/img]
Hallo - ich bin der Crazy Dude.
::next-3::
[audio]https://www.paragamix.com/images/Bermudas/audiog/bb1.mp3[/audio]
::next-4::
Wie lautet mein Vorname? Bitte geben Sie ihn hier im Chat ein.
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
    en: `That's right. I'm Bil Krauss, a popular entertainer in Bermuda. 
    ::next-2::
    Please choose your individual level of difficulty.
    [button=interaction-S2 Level easy]medium[/button]
    [button=interaction-S2 Level hard]tricky[/button]`,
    de: `Ja, das ist richtig. Ich bin Bil Krauss, ein beliebter Entertainer auf den Bermudas. 
    ::next-2::
    Bitte wählen Sie Ihren individuellen Schwierigkeitsgrad.
    [button=interaction-S2 Level easy]Mittel[/button]
    [button=interaction-S2 Level hard]knifflig[/button]`,
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

  "S2 Level easy": {
    en: `You have chosen the moderate version.
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
    de: `Sie haben die moderate Version gewählt.
    ::next-1::
    Neben der Musik sind die Wracks von Bermuda meine zweite Leidenschaft.
    Werfen Sie einen Blick auf meinen Blog. Jeder Blog-Beitrag liefert ein Puzzlestück zur Lösung des Rätsels um eines der ältesten Wracks der Bermudas: die Sea Venture.
    ::next-2::
    [b]Mehrere Spieler: [/b]Teilen Sie die Blogeinträge auf und tauschen Sie sie über WhatsApp usw. aus. Springen Sie direkt zum Blog, indem Sie die Blognummer eingeben (z.B. BLOG1 für den 1. Blog).
    ::next-3::
    [b]Lösung der Aufgabe: [/b]Wenn Sie alle Rätsel gelöst haben, schicken Sie eine E-Mail an den Kunstexperten.
    ::next-4::
    [b]Wenn es nicht weitergeht: [/b]Starten Sie erneut mit RESTART. Geben Sie dann einfach die Nummer des Blogs ein (z. B. BLOG1 für den ersten Blog) und Sie beginnen dort, wo Sie aufgehört haben.  
    ::next-5::
    Geben Sie hier "Blog x" für die nächste Aufgabe ein, also z.B. Blog 1 für den ersten Blog oder starten Sie die erste Aufgabe über die Schaltfläche.
   [button=https://parablog.wixsite.com/wrecks]Bils-Blog[/button]
    [button=interaction-S3 B1 Rätsel]erste Aufgabe (blog1)[/button]`,
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
    en: `You have chosen the tricky version.
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
    [button=https://parablog.wixsite.com/bermudaswrecks]Bils blog[/button]
    [button=interaction-S3 B1 Rätsel]first task (blog1)[/button]`,
    de: `Sie haben die schwierige Version gewählt.
    ::next-1::
    Neben der Musik sind die Wracks von Bermuda meine zweite Leidenschaft.
    Werfen Sie einen Blick auf meinen Blog. Jeder Blog-Beitrag liefert ein Puzzlestück zur Lösung des Rätsels um eines der ältesten Wracks der Bermudas: die Sea Venture.
    ::next-2::
    [b]Mehrere Spieler: [/b]Teilen Sie die Blogeinträge auf und tauschen Sie sich über WhatsApp usw. aus. Springen Sie direkt zum Blog, indem Sie die Blognummer eingeben (z.B. BLOG1 für den 1. Blog).
    ::next-3::
    [b]Lösung der Aufgabe: [/b]Wenn Sie alle Rätsel gelöst haben, schicke Sie eine E-Mail an den Kunstexperten.
    ::next-4::
    [b]Wenn es nicht mehr weitergeht: [/b]Starten Sie erneut mit RESTART. Geben Sie dann einfach die Nummer des Blogs ein (z. B. BLOG1 für den ersten Blog) und Sie beginnen dort, wo Sie aufgehört haben. 
    ::next-5::
    Geben Sie hier "Blog x" für die nächste Aufgabe ein, also z.B. Blog 1 für den ersten Blog oder starten Sie die erste Aufgabe über die Schaltfläche.
    [button=https://parablog.wixsite.com/wracks]Bils-Blog[/button]
    [button=interaction-S3 B1 Rätsel]erste Aufgabe (blog1)[/button]`,
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
    en: `[b]Please click on "Bil's Blog" above if you haven't already. [/b]

    To get in the mood for your mission, check out the puzzle of the week on my blog. 
    The final letters of the ships in the order RED, GREEN, YELLOW, BLUE result in the solution word. What is it ?`,
    de: `[b]Bitte klicken Sie oben auf "Bil's Blog", wenn Sie es nicht schon getan haben. [/b]

    Um sich auf Ihre Mission einzustimmen, schauen Sie sich das Rätsel der Woche in meinem Blog an. 
    Die Endbuchstaben der Schiffe in der Reihenfolge ROT, GRÜN, GELB, BLAU ergeben das Lösungswort. Wie lautet es?`,
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
    en: `Well done! KRET is right. 
    ::next-2::
    At my last gig at the Swizzle Inn, I struck up a conversation with an art expert after a few beers. He left me his email. I tore up the note and forgot his name. Now I found part of it again at the bar. An art expert could be useful for our mission.
    ::next-3::
    [img]https://www.paragamix.com/images/Bermudas/px_bermuda_kartea.jpeg[/img]
    ::next-4::
    This completes this task.
    [button=interaction-S4 B2 Tauchen]next task[/button]`,
    de: `Gut gemacht! KRET ist korrekt. 
    ::next-2::
    Nach meinem letzten Besuch im Swizzle Inn kam ich ins Gespräch mit einem Kunstexperten, nachdem wir ein paar Bierchen getrunken hatten. Er gab mir seine E-Mail-Adresse, aber leider habe ich den Zettel zerrissen und seinen Namen vergessen. Nun habe ich einen Teil davon in der Bar wiedergefunden. Die Expertise eines Kunstexperten könnte sich als nützlich für unsere 
    ::next-3::
    [img]https://www.paragamix.com/images/Bermudas/px_bermuda_kartea.jpeg[/img]
    ::next-4::
    Damit ist diese Aufgabe abgeschlossen.
    [button=interaction-S4 B2 Tauchen]nächste Aufgabe[/button]`,
    interaction: (message) => {},
  },

  // S4
  "S4 B2 Tauchen": {
    en: `[b]Blog2 (diving)[/b]
    ::next-2::
    I will call the diving instructor if you give me his number. He will surely plan a great day for you on or in the sea. `,
    de: `[b]Blog2 (Tauchen)[/b]
    ::next-2::
    Ich werde den Tauchlehrer anrufen, wenn Sie seine Telefonnummer hier eingeben. Er wird sicher einen tollen Tag am oder im Meer für Sie planen. `,
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
    en: `[audio]https://www.paragamix.com/images/Bermudas/audioe/bb2.mp3[/audio]
    ::next-1::
    [img]https://dvgpba5hywmpo.cloudfront.net/media/image/NRDKa7BJSQJ4bUwuaExzv1bp3[/img]
    ::next-2::
    Are you interested in when the ship sank that I found these cannonballs on? Explore the wreck map, type in the name of the wreck or type in the year if you know it.
    [button=https://www.google.com/maps/d/edit?mid=1-_X23wraPdPggojHiQv7TrDGsCmgEthz&usp=sharing]wreck map[/button]`,
    de: `[audio]https://www.paragamix.com/images/Bermudas/audiog/bb2.mp3[/audio]
    ::next-1::
    [img]https://dvgpba5hywmpo.cloudfront.net/media/image/NRDKa7BJSQJ4bUwuaExzv1bp3[/img]
    ::next-2::
    nteressiert es Sie, wann das Schiff gesunken ist, auf dem ich diese Kanonenkugeln gefunden habe? Erkunden Sie die Wrackkarte, geben Sie den Namen des Wracks ein oder geben Sie das Jahr ein, wenn Sie die Lösung wissen.
    [button=https://www.google.com/maps/d/edit?mid=1-_X23wraPdPggojHiQv7TrDGsCmgEthz&usp=sharing]Wrackkarte[/button]`,
    interaction: (message) => {
      if (matchWords(message, ["1619"])) return `S5 B2 Zusatz`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe5`;
      if (matchWords(message, ["Caesar", "Dive Caesar", "go caesar", "Cäsar", 'Geh, Cäsar', 'Tauch Cäsar'])) return `Tauchen Caesar`;
      if (matchWords(message, ["Pedro", "Sanpedro"]))
        return `Tauchen San Pedro`;
      if (matchWords(message, ["venture", "Seaventure"]))
        return `Tauchen Sea Venture`;
      if (matchWords(message, ["L'herminie", "herminie", "Lherminie"]))
        return `Tauchen Herminie`;
      if (matchWords(message, ["Constellation"]))
        return `Tauchen Constellation`;
      if (matchWords(message, ["Cristobal", "CristobalColon", "Colon"]))
        return `Tauchen Christobal`;
      if (matchWords(message, ["Lartington"])) return `Tauchen Lartinton`;
      if (matchWords(message, ["Montana"])) return `Tauchen Montana`;
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
      if (matchWords(message, ["Warwick"])) return `Tauchen Warwick`;
      if (matchWords(message, ["solution"])) return `L5 B2`;
      return "Klammer5";
    },
  },

  "S5 B2 Zusatz": {
    en: `You recognized it. Michael recovered the cannonballs from the wreck of the Warwick. 
    I'm not sure if Michael or Teddy had anything to do with the Sea Venture's gold ducats.
    ::next-1::
    [img]https://dvgpba5hywmpo.cloudfront.net/media/image/ayI63K7jnyKYexy9oPJUImRHw[/img]
    ::next-2::
    I found another scrap of paper in the bar.
    [button=interaction-S6 B3 Diebesgut]next task[/button]`,
    de: `Sie haben es erkannt. Michael hat die Kanonenkugeln aus dem Wrack der Warwick geborgen. 
    Ich bin mir nicht sicher, ob Michael oder Teddy etwas mit den Golddukaten der Sea Venture zu tun hatten.
    ::next-1::
    [img]https://dvgpba5hywmpo.cloudfront.net/media/image/ayI63K7jnyKYexy9oPJUImRHw[/img]
    ::next-2::
    Ich habe einen weiteren Zettel in der Bar gefunden.
    [button=interaction-S6 B3 Diebesgut]nächste Aufgabe[/button]`,
    interaction: (message) => {},
  },
  // S6
  "S6 B3 Diebesgut": {
    en: `[b]Blog3 (stolen goods)[/b]
  ::next-2::
  Apparently, Carter's house was broken into. But what would be of interest to a thief there?
  [button=https://goo.gl/maps/kHiaKScGn6rcCaBZ9]what is missing?[/button]`,
    de: `[b]Blog3 (Diebesgut)[/b]
  ::next-2::
  Offenbar wurde in Carters Haus eingebrochen. Aber was würde einen Dieb dort interessieren?
  [button=https://goo.gl/maps/kHiaKScGn6rcCaBZ9]Was fehlt?[/button]`,
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
    en: `[img]http://www.paragamix.com/images/Bermudas/bermuda_zinnteller.gif[/img]
    [url=http://www.paragamix.com/images/Bermudas/bermuda_zinnteller.gif]enlarge[/url]
    ::next-2::
    [audio]https://www.paragamix.com/images/Bermudas/audioe/bb3.mp3[/audio]`,
    de: `[img]http://www.paragamix.com/images/Bermudas/bermuda_zinnteller.gif[/img]
    [url=http://www.paragamix.com/images/Bermudas/bermuda_zinnteller.gif]vergrößern[/url]
    ::next-2::
    [audio]https://www.paragamix.com/images/Bermudas/audiog/bb3.mp3[/audio]`,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `Hilfe7`;

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
        return `S7 B3 Zusatz`;

      if (matchWords(message, ["solution"])) return `L7 B3`;
      return "Klammer7";
    },
  },

  "S7 B3 Zusatz": {
    en: `The marking seems to be the unknown ship 3, which sank off Bermuda.
    ::next-1::
    [img]https://dvgpba5hywmpo.cloudfront.net/media/image/iCYcfjdqncitDXGjcNt3kHt82[/img]
    ::next-2::
    I found another scrap of paper at the Swizzle Inn.
    [button=interaction-S8 B4 Grotto]next task[/button]`,
    de: `Die Markierung scheint das unbekannte Schiff 3 zu sein, das vor den Bermudas gesunken ist. 
    ::next-1::
    [img]https://dvgpba5hywmpo.cloudfront.net/media/image/iCYcfjdqncitDXGjcNt3kHt82[/img]
    ::next-2::
    Ich habe im Swizzle Inn einen weiteren Papierfetzen gefunden.
    [button=interaction-S8 B4 Grotto]nächste Aufgabe[/button]`,
    interaction: (message) => {},
  },

  // S8
  "S8 B4 Grotto": {
    en: `[b]Blog4 Tucker's house[/b]
    The bust from the Sea Venture must still be on the island. We should take a closer look at Henry Tucker's house, now a museum.
    I have lent an employee of the museum my infrared camera, she will go in search of clues for us ...
    ::next-1::
    Can you find out the location of the hiding place? 
What is it?
    [button=https://www.paragamix.com/dsinga/tucker1/app-files/index.html]Tucker house[/button]`,
    de: `[b]Blog4 Tuckers Haus[/b]
    Die Büste von der Sea Venture muss sich noch auf der Insel befinden. Wir sollten einen genaueren Blick in das Haus von Henry Tucker werfen, das heute ein Museum ist. Ich habe einer Mitarbeiterin des Museums meine Infrarotkamera geliehen, damit sie für uns auf Spurensuche gehen kann.
    ::next-1::
    Können Sie herausfinden, wo sich das Versteck befindet? 
    Was ist das?
    [button=https://www.paragamix.com/dsinga/tucker1/app-files/index.html]Tucker-Haus[/button]`,
    interaction: (message) => {
      if (
        matchWords(message, [
          "Cathedral",
          "Cave",
          "Palm",
          "grotto",
          "Grotte",
          "Höhle",
          "Kathedrale",
        ])
      )
        return `S8a B4 Bueste`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `H8 B4 Grotto`;
      if (matchWords(message, ["solution"])) return `L8 B4 Grotto`;
      return "K8 B4 Grotto";
    },
  },

  "S8a B4 Bueste": {
    en: `Excellent. You have found the secret place. 
    ::next-1::
    Can you find the bust and identify the name of the roman god it represents?
    [button=https://www.paragamix.com/dsinga/grotto/app-files/index.html]Cathedral Cave[/button]`,
    de: `Ausgezeichnet. Sie haben den geheimen Ort gefunden. 
    ::next-1::
    Können Sie die Büste finden und den Namen des römischen Gottes nennen, den sie darstellt?
    [button=https://www.paragamix.com/dsinga/grotto/app-files/index.html]Kathedralenhöhle[/button]`,
    interaction: (message) => {
      if (matchWords(message, ["Baccus", "Bacchus"])) return `S8b B4 Spa`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `H8a B4 Bueste`;
      if (matchWords(message, ["solution"])) return `L8a B4 Bueste`;
      return "K8a B4 Bueste";
    },
  },

  "S8b B4 Spa": {
    en: `You have indeed found the bust of the roman god Bacchus. Carter had recovered it from the Sea Venture and hidden it in the cave. Today it is the spa area of a hotel. Apparently it was found during construction work and installed in the cave. Apparently no one has noticed this before. 
    ::next-1::
    You're making good progress. You found the bust of the Sea Venture. I'm sure you'll also find the gold ducats of the Sea Venture.
    [button=interaction-S9a B5 Tucker]next task[/button]`,
    de: `Sie haben tatsächlich die Büste des römischen Gottes Bacchus gefunden. Carter hatte sie aus der Sea Venture geborgen und in der Höhle versteckt. Heute befindet sie sich im Wellnessbereich eines Hotels. Offenbar wurde sie bei Bauarbeiten gefunden und in der Höhle aufgestellt. Offensichtlich hat dies noch niemand bemerkt.  
    ::next-1::
    Sie kommen gut voran. Sie haben die Büste der Sea Venture gefunden. Ich bin sicher, Sie werden auch die Golddukaten der Sea Venture finden.
    [button=interaction-S9a B5 Tucker]nächste Aufgabe[/button]`,
    interaction: (message) => {
      return "K8 B4 Grotto";
    },
  },

  // S9
  "S9a B5 Tucker": {
    en: `[b]Blog 5 Teddy Tucker[/b]
    The wine bottle is a typical artifact of its time. What is the inventory number?`,
    de: `[b]Blog 5 Teddy Tucker[/b]
    Die Weinflasche ist ein typisches Artefakt ihrer Zeit. Wie lautet die Inventarnummer?`,
    interaction: (message) => {
      if (
        matchWords(message, [
          "L.97.665",
          "L97665",
          "L.97.608",
          "L97608",
          "solución",
          "solution",
          "lösung",
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
    en: `[img]https://www.paragamix.com/images/Bermudas/px_bermuda_flaschen.jpg[/img]
    [url=https://www.paragamix.com/images/Bermudas/px_bermuda_flaschen.jpg]enlarge[/url]
    ::next-2::
    At least 2 groups of bottles are said to be from the Sea Venture. But which ones are they?
    ::next-3::
    Maybe my glass mark collection will help you ...
    [button=https://www.instagram.com/bilkrauss/]glas mark collection[/button]`,
    de: `[img]https://www.paragamix.com/images/Bermudas/px_bermuda_flaschen.jpg[/img]
    [url=https://www.paragamix.com/images/Bermudas/px_bermuda_flaschen.jpg]vergrößern[/url]
    ::next-2::
    Mindestens 2 Gruppen von Flaschen sollen von der Sea Venture stammen. Aber welche sind es?
    ::next-3::
    Vielleicht hilft Ihnen meine Glasmarkensammlung weiter ...
    [button=https://www.instagram.com/bilkrauss/]Sammlung von Glasmarken[/button]`,
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
      if (matchWords(message, ["Hilfe", "help"])) return `H9b B5 Flaschen`;
      if (matchWords(message, ["solution"])) return `L9b B5`;
      return "K9b B5 Flaschen";
    },
  },

  "S9 B5 Mustererkennung": {
    en: `[audio]https://www.paragamix.com/images/Bermudas/audioe/bb8.mp3[/audio]
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/bermudas_flaschen.gif[/img]
    [url=https://www.paragamix.com/images/Bermudas/bermudas_flaschen.gif]enlarge[/url]
    ::next-3::
    I came up with the last name of the art expert. We should get Moore involved. Write him an email later at xxxxx.mooreABC@gmail.com when you have found out the first name xxxxx and und A,B,C.
    [button=interaction-S10 B6 Goldkreuz]next task[/button]`,
    de: `[audio]https://www.paragamix.com/images/Bermudas/audiog/bb8.mp3[/audio]
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/bermudas_flaschen.gif[/img]
    [url=https://www.paragamix.com/images/Bermudas/bermudas_flaschen.gif]vergrößern[/url]
    ::next-3::
    Der Nachname des Kunstexperten ist mir wieder eingefallen: Wir sollten Moore kontaktieren. Sobald Sie die Vornamen herausgefunden haben, schreiben Sie ihm bitte eine E-Mail an xxxxx.mooreABC@gmail.com, wobei "xxxxx" für den Vornamen und A, B, C für die noch fehlenden Buchstaben stehen.
    [button=interaction-S10 B6 Goldkreuz]nächste Aufgabe[/button]`,
    interaction: (message) => {
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `H9a B5 Tucker`;
      return "K9a B5 Tucker";
    },
  },

  // S10
  "S10 B6 Goldkreuz": {
    en: `[b]Blog 6 gold cross[/b]
    ::next-2::
    [audio]https://www.paragamix.com/images/Bermudas/audioe/bb5.mp3[/audio]`,
    de: `[b]Blog 6 Goldkreuz[/b]
    ::next-2::
    [audio]https://www.paragamix.com/images/Bermudas/audiog/bb5.mp3[/audio]`,
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
    en: `Correct. The URL is [url=http://bit.ly/7gold7]http://bit.ly/7gold7[/url].
    But who bought the gold ducats?`,
    de: `Correct. The URL is [url=http://bit.ly/7gold7]http://bit.ly/7gold7[/url].
    Aber wer hat die Golddukaten gekauft?`,
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
    en: `Well done so far.
    ::next-2::
    [b]Blog 7 Sea Venture[/b]
    Can you solve the riddle?`,
    de: `Das ist bisher gut gelungen.
    ::next-2::
    [b]Blog 7 Sea Venture[/b]
    Können Sie das Rätsel lösen?`,
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
    en: `[b]Blog 7 Sea Venture[/b]
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/chat_DiscoveryBuch_englisch.gif[/img]
    [url=https://www.paragamix.com/images/Bermudas/chat_DiscoveryBuch_englisch.gif]enlarge[/url]
    ::next-2::
    [audio]https://www.paragamix.com/images/Bermudas/audioe/bb6.mp3[/audio]
    ::next-1::
    [img]https://www.paragamix.com/images/Bermudas/px_bermuda_picos.jpg[/img]
    [url=https://www.paragamix.com/images/Bermudas/px_bermuda_picos.jpg]enlarge[/url]`,
    de: `[b]Blog 7 Sea Venture[/b]
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/chat_DiscoveryBuch_englisch.gif[/img]
    [url=https://www.paragamix.com/images/Bermudas/chat_DiscoveryBuch_englisch.gif]vergrößern[/url]
    ::next-2::
    [audio]https://www.paragamix.com/images/Bermudas/audiog/bb6.mp3[/audio]
    ::next-1::
    [img]https://www.paragamix.com/images/Bermudas/px_bermuda_picos.jpg[/img]
    [url=https://www.paragamix.com/images/Bermudas/px_bermuda_picos.jpg]vergrößern[/url]`,
    interaction: (message) => {
      if (matchWords(message, ["Fort", "Fort!"])) return `S12 B7 Fort`;
      if (matchWords(message, ["Hilfe", "Hinweis", "ayuda", "aide", "help"]))
        return `H12 B7 Gewehr`;
      if (matchWords(message, ["solution"])) return `L12 B7 Gewehr`;
      return "K12 B7 Gewehr";
    },
  },

  "S12 B7 Fort": {
    en: `Fort is correct. But I'm looking for the age of the cannon that is inside the fort. Look around there and try to open the combination lock first.
    ::next-2::
    [audio]https://www.paragamix.com/images/Bermudas/px_bermuda_maze_sound.mp3[/audio]`,
    de: `Fort ist korrekt. Jetzt benötige ich jedoch das Alter der Kanone, die sich im Fort befindet. Untersuchen Sie das Gelände und versuchen Sie zunächst, das Zahlenschloss zu öffnen.
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
    en: `The code was correct and the combination lock is open.
    The cannon is another artifact from the Sea Venture. When was it made?
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/px_bermuda_tuer.jpg[/img]
    [url=https://www.paragamix.com/dsinga/gun/app-files/index.html]Open door[/url].`,
    de: `Der Code war korrekt und das Zahlenschloss ist nun offen.
    Die Kanone ist ein weiteres Artefakt aus der Sea Venture, aber wann wurde sie genau hergestellt?
    ::next-2::
    [img]https://www.paragamix.com/images/Bermudas/px_bermuda_tuer.jpg[/img]
    [url=https://www.paragamix.com/dsinga/gun/app-files/index.html]Offene Tür[/url].`,
    interaction: (message) => {
      if (matchWords(message, ["1605"])) return `Schritt 13 Finale`;
      if (matchWords(message, ["Hilfe", "help"])) return `H12 B7 Door`;
      if (matchWords(message, ["solution"])) return `L12 B7 Door`;
      return "K12 B7 Door";
    },
  },

  // S13
  "Schritt 13 Finale": {
    en: `[b]Congratulations.[/b] You found the rifle - the second artifact that can be clearly attributed to the Sea Venture - and solved all the mysteries surrounding the Sea Venture. 

    We should now call in Josef as an art theft expert. I remembered his first name. Please e-mail him at [b]josef.yyyyyABC@gmail.com[/b] using your e-mail program. He will clear up the matter for you. The mission is finished.
    
    If you do not receive an email from Josef, type HELP.
    ::next-3::
    Follow us on [url=https://www.facebook.com/Paragamix/]Facebook[/url] or [url=https://www.instagram.com/paragamix/]Instagram[/url]. We regularly give away codes among all followers.`,
    de: `[b]Herzlichen Glückwunsch.[/b] Sie haben das Gewehr gefunden - das zweite Artefakt, das eindeutig der Sea Venture zugeordnet werden kann - und alle Rätsel um die Sea Venture gelöst.

    Wir sollten jetzt Josef als Experten für Kunstdiebstahl hinzuziehen. Ich habe mir seinen Vornamen gemerkt. Bitte schicken Sie ihm eine E-Mail an [b]josef.yyyyyABC@gmail.com[/b] mit Ihrem eigenen E-Mail-Programm. Er wird die Angelegenheit für Sie aufklären. Die Mission ist beendet.
    
    Wenn Sie keine E-Mail von Josef erhalten, geben Sie HELP ein.
    ::next-3::
    Folgen Sie uns auf [url=https://www.facebook.com/Paragamix/]Facebook[/url] oder [url=https://www.instagram.com/paragamix/]Instagram[/url]. Wir verschenken regelmäßig Codes unter allen Followern.`,
    interaction: (message) => {
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "Hilfe13 Aufloesung";
      return "Klammer2";
    },
  },

  // F8
  "F8 B4 Grotto": {
    en: `Unfortunately, this is not correct. Put the two grids on top of each other. With HELP you get a tip.`,
    de: `Leider ist das nicht richtig. Legen Sie die beiden Gitter übereinander. Mit HELP erhalten Sie einen Tipp.`,
    interaction: (message) => {
      if (
        matchWords(message, [
          `Cathedral`,
          `Cave`,
          `Palm`,
          `grotto`,
          "Grotte",
          "Höhle",
          "Kathedrale",
        ])
      )
        return "S8a B4 Bueste";
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H8 B4 Grotto";
      if (matchWords(message, ["solution"])) return "L8 B4 Grotto";
      return "K8 B4 Grotto";
    },
  },

  "F8a B4 Bueste": {
    en: `This is unfortunately not correct. Look around in the cave. With HELP you get a tip.`,
    de: `Das ist leider nicht richtig. Schauen Sie sich in der Höhle um. Mit HELP erhalten Sie einen Tipp.`,
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
    en: `This is unfortunately not correct. With HELP you get a tip. `,
    de: `Das ist leider nicht richtig. Mit HELP erhalten Sie einen Hinweis.  `,
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
    en: `This is unfortunately not correct. With HELP you get a tip. `,
    de: `Das ist leider nicht richtig. Mit HELP erhalten Sie einen Hinweis. `,
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
    en: `This is unfortunately not correct. With HELP you get a tip. `,
    de: `Das ist leider nicht richtig. Mit HELP erhalten Sie einen Hinweis. `,
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
    en: `This is unfortunately not correct. With HELP you get a tip. `,
    de: `Das ist leider nicht richtig. Mit HELP erhalten Sie einen Hinweis. `,
    interaction: (message) => {
      if (matchWords(message, ["Fort", "Fort!"])) return `S12 B7 Fort`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Gewehr";
      if (matchWords(message, ["solution"])) return "L12 B7 Gewehr";
      return "K12 B7 Gewehr";
    },
  },

  "F12 B7 Fort": {
    en: `This is unfortunately not correct. With HELP you get a tip. `,
    de: `Das ist leider nicht richtig. Mit HELP erhalten Sie einen Hinweis.  `,
    interaction: (message) => {
      if (matchWords(message, ["3512"])) return `S12 B7 Door`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Fort";
      if (matchWords(message, ["solution"])) return "L12 B7 Fort";
      return "K12 B7 Fort";
    },
  },

  "F12 B7 Door": {
    en: `This is unfortunately not correct. With HELP you get a tip. `,
    de: `Das ist leider nicht richtig. Mit HELP erhalten Sie einen Hinweis. `,
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
    en: `[b]Solution to Blog 1: [/b]

    You can find the names of the ships and info, like the "wrecked" date in the blog post about the wrecks. Based on the date you will find out the name of the ship.

    Red stamp: Warwi(K) 1619
    Green stamp: Caesa(R) 1818
    Blue stamp: Lord Amhers(T) 1778
    The yellow stamp is the L'Hermini(E). Here the date is missing, but you can find a photo of the L'Herminie in the blog post "Why so many wrecks". 
    ::next-1::
    Solution: KRET
    [button]next[/button]`,
    de: `[b]Lösung zu Blog 1: [/b]

    Im Blogbeitrag über Schiffswracks finden Sie die Namen der Schiffe und die dazugehörigen Informationen, sogar das Datum des Untergangs. Durch die auf den Briefmarken angegebenen Daten können Sie die Identität der einzelnen Schiffe feststellen.
    Grüne Briefmarke: Caesa(R) 1818
    Blaue Briefmarke: Lord Amhers(T) 1778
    Die gelbe Briefmarke ist die L'Hermini(E). Hier fehlt das Datum, aber Sie finden ein Foto der L'Herminie im Blogbeitrag "Warum so viele Wracks".
    ::next-1::
    Solution: KRET
    [button]nächste[/button]`,
    interaction: (message) => {},
  },

  // L4
  "L4 B2": {
    en: `[b]Solution to Blog 2: [/b]

    Follow the beach to the end. There you will find the diving school of Michael Williams. There are two phone numbers on the building. 
    ::next-1::
    Solution: 2932915 or 2937310
    [button=interaction-S5 B2 Anruf]next[/button]`,
    de: `[b]Lösung zu Blog 2: [/b]

    Folgen Sie dem Strand bis zum Ende. Dort finden Sie die Tauchschule von Michael Williams. An dem Gebäude sind zwei Telefonnummern angebracht.  
    ::next-1::
    Solution: 2932915 oder 2937310
    [button=interaction-S5 B2 Anruf]nächste[/button]`,
    interaction: (message) => {},
  },

  // L5
  "L5 B2": {
    en: `[b]Solution to Blog 2: [/b]

The diving trip you are looking for goes to Warwick. So type in Warwick. At the end of the video you will discover the cannonballs you are looking for. The Warwick sank in 1619. If you type in Sea Venture, you'll get a clue that makes Michael suspicious.
    ::next-1::
    Solution: 1619
    [button=interaction-S5 B2 Zusatz]next[/button]`,
    de: `[b]Lösung zu Blog 2: [/b]

    Die Tauchreise, die Sie suchen, führt zur Warwick. Geben Sie also Warwick ein. Am Ende des Videos werden Sie die Kanonenkugeln entdecke. Die Warwick sank im Jahr 1619. Wenn Sie "Sea Venture" eingeben, erhalten Sie einen Hinweis, der misstrauisch macht.
        ::next-1::
        Solution: 1619
        [button=interaction-S5 B2 Zusatz]nächste[/button]`,
    interaction: (message) => {},
  },

  // L6
  "L6 B3": {
    en: `[b]Solution to Blog 3: [/b]
Take a good look around Carter's house. Compare the photo in Blog 3 with what you see on Google Maps. The plate is missing from the blog photo, which was taken shortly after the burglary.
    ::next-1::
    Solution: Plate
    [button=interaction-S7 B3 Teller]next[/button]`,
    de: `[b]Lösung zu Blog 3: [/b]
    Sehen Sie sich in Carters Haus genau um. Vergleichen Sie das Foto im Blog 3 mit dem, was Sie bei Google Maps sehen. Auf dem Blog-Foto, das kurz nach dem Einbruch aufgenommen wurde, fehlt der Teller.
        ::next-1::
        Solution: Plate
        [button=interaction-S7 B3 Teller]nächste[/button]`,
    interaction: (message) => {},
  },

  // L7
  "L7 B3": {
    en: `[b]Solution to Blog 3: [/b]
The plate obviously shows part of a map. The X indicates the place where the Sea Venture sank. Now find the marked spot on the map of shipwrecks based on the coastline. Ship3 sank in front of the marked section of coastline. So according to the map Carter made, Ship3 is the Sea Venture.
    ::next-1::
    Solution: Ship3
    [button=interaction-S7 B3 Zusatz]next[/button]`,
    de: `[b]Lösung zu Blog 3: [/b]
    Die Platte zeigt offensichtlich den Teil einer Karte. Das X markiert die Stelle, an der die Sea Venture gesunken ist. Suchen Sie nun die markierte Stelle auf der Karte der Schiffswracks anhand der Küstenlinie. Schiff3 ist vor dem markierten Küstenabschnitt gesunken. Nach der Karte, die Carter erstellt hat, ist Schiff 3 also die Sea Venture.
        ::next-1::
        Solution: Ship3
        [button=interaction-S7 B3 Zusatz]nächste[/button]`,
    interaction: (message) => {},
  },

  // L8
  "L8 B4 Grotto": {
    en: `[b]Solution:[/b]

    1. First press the light switch in Henry Tucker's house so that the infrared camera can detect what is hidden. Look around, you will find two grids on which Henry has marked numbers. Put the two grids on top of each other and fill in the empty spaces with the numbers from 1 to 9, each only once, so that in each row, each column and each diagonal the sum is 34:
    
    3-12-13-6
    14-7-2-11
    1-10-15-8
    16-5-4-9
    
    2. Look at the interactive map of Bermuda. There you will find a grid similar to the one in Henry Tucker's house. In blog post 4, the number 2 is mentioned. You will find the 2 in row 2 in column 3. This place marks "Cathedral Cave" on the map. This is the place you are looking for.
    ::next-1::
    Solution: Cathedral cave
    [button=interaction-S8a B4 Bueste]next[/button]`,
    de: `[b]Lösung:[/b]

    1. Beginnen Sie damit, den Lichtschalter in Henry Tuckers Haus zu betätigen, damit die Infrarotkamera erkennen kann, was verborgen ist. Schauen Sie sich um, Sie werden zwei Gitter finden, auf denen Henry Zahlen markiert hat. Legen Sie die beiden Gitter übereinander und füllen Sie die leeren Felder mit den Zahlen von 1 bis 9, wobei jede Zahl nur einmal vorkommt. Dabei sollte die Summe in jeder Zeile, jeder Spalte und jeder Diagonale 34 betragen.
    
    3-12-13-6
    14-7-2-11
    1-10-15-8
    16-5-4-9
    
    2. Sehen Sie sich die interaktive Karte der Bermudas an. Dort finden Sie ein Gitter, das dem in Henry Tuckers Haus ähnelt. Im Blogbeitrag 4 wird die Zahl 2 erwähnt. Sie finden die 2 in Zeile 2 in Spalte 3. Diese Stelle markiert "Cathedral Cave" auf der Karte. Dies ist der Ort, nach dem Sie suchen.
    ::next-1::
    Solution: Cathedral cave
    [button=interaction-S8a B4 Bueste]nächste[/button]`,
    interaction: (message) => {},
  },

  "L8a B4 Bueste": {
    en: `[b]Solution to Blog 4:[/b]
Follow the arrows and look around the cave. At the very end you will find the bust of the roman god that Carter once hid in the cave. 
    ::next-1::
    Solution: Bacchus
    [button=interaction-S8b B4 Spa]next[/button]`,
    de: `[b]Lösung zu Blog 4:[/b]
    Folgen Sie den Pfeilen und sehen Sie sich in der Höhle um. Ganz am Ende finden Sie die Büste des römischen Gottes, die Carter einst in der Höhle versteckt hat. 
        ::next-1::
        Solution: Bacchus
        [button=interaction-S8b B4 Spa]nächste[/button]`,
    interaction: (message) => {},
  },

  // L9
  "L9a B5": {
    en: `[b]Solution to Blog 5: [/b]
    The bottle was found on the L'Herminie. In Blog 1 "Why so many wrecks" you can find the Flickr photos about the wreck.
    ::next-1::
    Solution: L.97.665 or L.97.608
    [button=interaction-S9b B5 Flaschen]next[/button]`,
    de: `[b]Lösung zu Blog 5: [/b]
    Die Flasche wurde auf der L'Herminie gefunden. Im Blog 1 "Warum so viele Wracks" finden Sie die Flickr-Fotos dieses Wracks.
    ::next-1::
    Solution: L.97.665 oder L.97.608
    [button=interaction-S9b B5 Flaschen]nächste[/button]`,
    interaction: (message) => {},
  },

  "L9b B5": {
    en: `[b]Solution to Blog 5: [/b]
    First, take a look at Bil's Instagram profile to see which glass tokens are from the Sea Venture. Then look for those brands in the black and white photo and enter the letter/number combination in the chat in the form X1 Y1, i.e. F1 A2 for example.
    ::next-1::
    Solution: B2 E3 or E3 B2
    [button=interaction-S10 B6 Goldkreuz]next[/button]`,
    de: `[b]Lösung zu Blog 5: [/b]
    Werfen Sie zunächst einen Blick auf Bils Instagram-Profil, um zu sehen, welche Glasmarken von der Sea Venture stammen. Suchen Sie dann nach diesen Marken auf dem Schwarz-Weiß-Foto und geben Sie die Buchstaben-Zahlen-Kombination im Chat in der Form X1 Y1 ein, also zum Beispiel F1 A2.
    ::next-1::
    Solution: B2 E3 oder E3 B2
    [button=interaction-S10 B6 Goldkreuz]nächste[/button]`,
    interaction: (message) => {},
  },

  // L10
  "L10 B6": {
    en: `[b]Solution to Blog 6:[/b]
This puzzle has it all. Look for the items on the packing list at the Ocean Discovery Center (pictured right). You will find the items in the showcases. Now you have to find the 4 ships on the wreck map and arrange the letters in the order of the packing list:

Navigation circle - in the showcase of the Warwick - G
Medical ampoule - in the Constellation's showcase at the bottom right - O
Ship's bell - not to be missed in the Frenchman's showcase - L
Millstone - not to be missed in the showcase of the Caesar - D

The word you are looking for is GOLD.

You can find out the Y by counting the stones on the gold cross (also on display at the Ocean Discovery Center). There are SEVEN.
So the URL is: [url=https://tinyurl.com/GOLDSEVEN]https://tinyurl.com/GOLDSEVEN[/url]

Enter this URL into your browser. In the article number 364215375135191 you can read who bought the gold ducats.
::next-1::
Solution: Christian Lueder
[button=interaction-S11 B7 Buch]next[/button]`,
    de: `[b]Lösung zu Blog 6: [/b]
Dieses Rätsel ist eine Herausforderung! Suchen Sie die Gegenstände auf der Packliste im Ocean Discovery Center (rechts im Bild). Sie finden die Gegenstände in den Vitrinen. Anschließend müssen Sie die 4 Schiffe auf der Wrackkarte finden und die Buchstaben in der Reihenfolge der Packliste anordnen.

Navigationskreis - in der Vitrine der Warwick - G
Medizinische Ampulle - im Schaukasten der Constellation unten rechts - O
Schiffsglocke - nicht zu übersehen im Schaufenster des Franzosen - L
Millstone - nicht zu übersehen in der Vitrine des Caesar - D

Das Wort, das Sie suchen, ist GOLD.

Finden Sie das y heraus, indem Sie die Steine auf dem goldenen Kreuz zählen (das ebenfalls im Ocean Discovery Center ausgestellt ist). Es sind SIEBEN.
Die URL lautet also: [url=https://tinyurl.com/GOLDSIEBEN]https://tinyurl.com/GOLDSIEBEN[/url]

Geben Sie diese URL in Ihren Browser ein. In dem Artikel mit der Nummer 364215375135191 können Sie lesen, wer die Golddukaten gekauft hat. 
::next-1::
Solution: Christian Lueder
[button=interaction-S11 B7 Buch]nächste[/button]`,
    interaction: (message) => {},
  },

  // L11
  "L11 B7": {
    en: `[b]Solution to Blog 7:[/b]
EXODUS - The numbers indicate the position of the searched letter in the respective word. So 2nd for the 2nd letter in the word that was omitted in the text.
    ::next-1::
    Solution: Somersbook
    [button=interaction-S12 B7 Gewehr]next[/button]`,
    de: `[b]Lösung zu Blog 7:[/b]
    EXODUS - die Ziffern geben die Position des gesuchten Buchstabens im angegebenen Wort an. Zum Beispiel steht "2." für den 2. Buchstaben in diesem Wort, der im Text weggelassen wurde. 
    ::next-1::
    Solution: Somersbook
    [button=interaction-S12 B7 Gewehr]nächste[/button]`,
    interaction: (message) => {},
  },

  // L12
  "L12 B7 Gewehr": {
    en: `[b]Solution to Blog 7:[/b]
Somer's book mentions the cove where the castaways were stranded. To decipher the building that is nearby, you need the text from Somer's book and the table with the pictograms. Each sentence stands for a certain pictogram, whose letter you should find out. The solution is FORT! So the cannon was brought to the fort. 
    ::next-1::
    Solution: Fort!
    [button=interaction-S12 B7 Fort]next[/button]`,
    de: `[b]Lösung zu Blog 7:[/b]
    In Somers Buch wird die Bucht erwähnt, in der die Schiffbrüchigen gestrandet sind.Um das Gebäude in der Nähe zu entziffern, benötigen Sie den Text aus Somers Buch und die Tabelle mit den Piktogrammen. Jeder Satz entspricht einem bestimmten Piktogramm, dessen Buchstaben Sie herausfinden müssen. Was ist der Name des Gebäudes?
    Mit SOLUTION können Sie dieses Rätsel überspringen. Jeder Satz steht für ein bestimmtes Piktogramm, dessen Buchstaben du herausfinden sollst. Die Lösung lautet FORT! Die Kanone wurde also zum Fort gebracht.
        ::next-1::
        Solution: Fort!
        [button=interaction-S12 B7 Fort]nächste[/button]`,
    interaction: (message) => {},
  },

  "L12 B7 Fort": {
    en: `[b]Solution to Blog 7:[/b]
In Bil's blog about Fort St. Catherine you will find a link that leads inside the fort. There you will find a locked door. You can find out the number of the combination lock by following the sounds. First you'll hear a bell, then a chain, then a clock and then a saw. On the wall there is a symbol for each object. This is the mirrored digit of the code for the combination lock. 
    ::next-1::
    Solution: 3512
    [button=interaction-S12 B7 Door]next[/button]`,
    de: `[b]Lösung zu Blog 7:[/b]
    Im Blog von Bil über Fort St. Catherine finden Sie einen Link, der Sie zum Inneren des Forts führt. Dort stoßen Sie auf eine verschlossene Tür. Um die Nummer des Zahlenschlosses herauszufinden, folgen Sie den Geräuschen. Zuerst hören Sie eine Glocke, dann eine Kette, gefolgt von einer Uhr und schließlich einer Säge. An der Wand gibt es für jedes Objekt ein Symbol. Dies entspricht der gespiegelten Ziffer des Codes für das Kombinationsschloss.
        ::next-1::
        Solution: 3512
        [button=interaction-S12 B7 Door]nächste[/button]`,
    interaction: (message) => {},
  },

  "L12 B7 Door": {
    en: `[b]Solution to Blog 7:[/b]
Once you open the door, after a few steps you will find the cannon of a board on which there are 4 colored Xs. You can find out the numbers by looking at the rows of numbers on the wall opposite. On the wall to the left of the cannon, you will find three tools to load the cannon with. On the wall opposite you will find the same tools again. Using the three colors red, green, and blue, you identify the correct rows of numbers and must now add the X's to the row of numbers. The X's in the correct order give the date (anno) mentioned on the sign under the cannon.
    ::next-1::
    Solution: 1605
    [button=interaction-Schritt 13 Finale]next[/button]`,
    de: `[b]Lösung zu Blog 7:[/b]
    Wenn Sie die Tür öffnen, entdecken Sie nach einigen Schritten eine Kanone auf einem Brett mit 4 farbigen X darauf. Die Zahlen können Sie anhand der Reihen auf der gegenüberliegenden Wand ablesen. Links von der Kanone finden Sie drei Werkzeuge, mit denen Sie die Kanone laden können. Diese Werkzeuge finden Sie auch auf der gegenüberliegenden Wand. Anhand der Farben Rot, Grün und Blau identifizieren Sie die richtigen Zahlenreihen und fügen die X's entsprechend hinzu. Die X's in der korrekten Reihenfolge ergeben das Datum (Jahr), das auf dem Schild unter der Kanone angegeben ist.
        ::next-1::
        Solution: 1605
        [button=interaction-Schritt 13 Finale]nächste[/button]`,
    interaction: (message) => {},
  },

  // H8
  "H8 B4 Grotto": {
    en: `[b]Help: [/b]1. First press the light switch in Henry Tucker's house so that the infrared camera can detect what is hidden. Look around, you will find two grids on which Henry has marked numbers. Place the two grids on top of each other and fill in the empty spaces with the numbers from 1 to 9, each only once, so that in each row, each column and each diagonal the sum is 34. 

2. Look at the interactive map of Bermuda. There you will find a grid similar to the one in Henry Tucker's house. In blog post 4, the number 2 is mentioned. 
    
With SOLUTION you can skip this mystery.`,
    de: `[b]Hilfe: [/b]1. Beginnen Sie damit, den Lichtschalter in Henry Tuckers Haus zu betätigen, damit die Infrarotkamera erkennen kann, was verborgen ist. Schauen Sie sich um, Sie werden zwei Gitter finden, auf denen Henry Zahlen markiert hat. Legen Sie die beiden Gitter übereinander und füllen Sie die leeren Felder mit den Zahlen von 1 bis 9, wobei jede Zahl nur einmal vorkommt. Dabei sollte die Summe in jeder Zeile, jeder Spalte und jeder Diagonale 34 betragen.

2. Sehen Sie sich die interaktive Karte von den Bermudas an. Dort finden Sie ein Gitter, das dem in Henry Tuckers Haus ähnelt. Im Blogbeitrag 4 wird die Zahl 2 erwähnt. 
    
Mit SOLUTION können Sie sich dieses Rätsel ersparen.`,
    interaction: (message) => {
      if (
        matchWords(message, [
          `Cathedral`,
          `Cave`,
          `Palm`,
          `grotto`,
          "Kathedrale",
          "Katedrale",
          "Grotte",
          "Höhle",
        ])
      )
        return "S8a B4 Bueste";
      if (matchWords(message, ["solution"])) return "L8 B4 Grotto";
      return "K8 B4 Grotto";
    },
  },

  "H8a B4 Bueste": {
    en: `[b]Help: [/b]
    Follow the arrows to the end and look around the cave.
    With SOLUTION you can skip this mystery.`,
    de: `[b]Hilfe: [/b]
    Folgen Sie den Pfeilen bis zum Ende und sehen Sie sich in der Höhle um.
    Mit SOLUTION können Sie dieses Rätsel überspringen.`,
    interaction: (message) => {
      if (matchWords(message, [`Baccus`, `Bacchus`])) return "S8b B4 Spa";
      if (matchWords(message, ["solution"])) return "L8a B4 Bueste";
      return "K8a B4 Bueste";
    },
  },

  // F9
  "H9a B5 Tucker": {
    en: `[b]Help: [/b]
    The bottle was found on L'Herminie. Take a closer look at the Flickr photos (blog 1) of this wreck. 
    With SOLUTION you can skip this riddle. `,
    de: `[b]Hilfe: [/b]
    Die Flasche wurde auf L'Herminie gefunden. Schauen Sie sich die Flickr-Fotos (Blog 1) dieses Wracks genauer an. 
    Mit SOLUTION können Sie dieses Rätsel überspringen. `,
    interaction: (message) => {
      if (matchWords(message, [`L.97.665`, `L97665`, `L.97.608`, `L97608`]))
        return "S9b B5 Flaschen";
      if (matchWords(message, ["solution", "lösung"])) return "L9a B5";
      return "K9a B5 Tucker";
    },
  },

  "H9b B5 Flaschen": {
    en: `[b]Help:[/b]
    First, check out Bil's Instagram profile to see which glass tokens are from the Sea Venture. Then find those marks in the black and white photo and enter the letter/number combination in the chat.
    With SOLUTION you can skip this riddle. `,
    de: `[b]Hilfe:[/b]
    Schauen Sie sich zunächst Bils Instagram-Profil an, um herauszufinden, welche Glasmünzen von der Sea Venture stammen. Suchen Sie dann die Markierungen auf dem Schwarz-Weiß-Foto und geben Sie die Buchstaben-/Zahlenkombination im Chat ein.
    Mit SOLUTION können Sie dieses Rätsel überspringen.  `,
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
    en: `[b]Help:[/b] Somer's book mentions the bay where the castaways were stranded. To decipher the building that is nearby, you need the text from Somer's book and the table with the pictograms. Each sentence stands for a certain pictogram, whose letter you should find out. What is the name of the building?
    With SOLUTION you will skip this puzzle.`,
    de: `[b]Hilfe:[/b] In Somers Buch wird die Bucht erwähnt, in der die Schiffbrüchigen gestrandet sind. Um das Gebäude in der Nähe zu entziffern, benötigen Sie den Text aus Somers Buch und die Tabelle mit den Piktogrammen. Jeder Satz entspricht einem bestimmten Piktogramm, dessen Buchstaben Sie herausfinden müssen. Wie lautet der Name des Gebäudes?
    Mit SOLUTION können Sie dieses Rätsel überspringen.`,
    interaction: (message) => {
      if (matchWords(message, ["Fort", "Fort!"])) return `Schritt 13 Finale`;
      if (matchWords(message, ["solution"])) return "L12 B7 Gewehr";
      return "K12 B7 Gewehr";
    },
  },

  "H12 B7 Fort": {
    en: `[b]Help: [/b]In Bil's blog about Fort St. Catherine you will find a link that leads inside the fort. There you will find a locked door. You can find out the number of the combination lock by following the sounds. 
    With SOLUTION you will skip this puzzle. `,
    de: `[b]Hilfe: [/b]In Bils Blog über Fort St. Catherine findet ihr einen Link, der ins Innere des Forts führt. Dort finden Sie eine verschlossene Tür. Finden Sie die Nummer des Zahlenschlosses heraus, indem Sie den Geräuschen folgen. 
    Mit SOLUTION können Sie dieses Rätsel überspringen. `,
    interaction: (message) => {
      if (matchWords(message, ["3512"])) return `S12 B7 Door`;
      if (matchWords(message, ["solution"])) return "L12 B7 Fort";
      return "K12 B7 Fort";
    },
  },

  "H12 B7 Door": {
    en: `[b]Help:[/b] When you have opened the door, after a few steps you will find the cannon of a board on which there are 4 colored Xs. You can find out the numbers by looking at the rows of numbers on the wall opposite. On the wall to the left of the cannon, you will find three tools to load the cannon with. On the wall opposite you will find the same tools again. Using the three colors red, green, and blue, you identify the correct rows of numbers and must now add the X's to the row of numbers. The X's in the correct order give the date (anno) mentioned on the sign under the cannon.
    With SOLUTION you skip this puzzle. `,
    de: `[b]Help:[/b] When you have opened the door, after a few steps you will find the cannon of a board on which there are 4 colored Xs. You can find out the numbers by looking at the rows of numbers on the wall opposite. On the wall to the left of the cannon, you will find three tools to load the cannon with. On the wall opposite you will find the same tools again. Using the three colors red, green, and blue, you identify the correct rows of numbers and must now add the X's to the row of numbers. The X's in the correct order give the date (anno) mentioned on the sign under the cannon.
    With SOLUTION you skip this puzzle. `,
    interaction: (message) => {
      if (matchWords(message, ["1605"])) return `Schritt 13 Finale`;
      if (matchWords(message, [`hilfe`, `Ayuda`, `Help`, `aide`]))
        return "H12 B7 Door";
      if (matchWords(message, ["solution"])) return "L12 B7 Door";
      return "K12 B7 Door";
    },
  },

  "Bewertung schlecht": {
    en: `Thank you for trying our online escape game. 
    ::next-1::
    It's a pity that you didn't like it. We would like to adapt the game even better to your requirements and would be very pleased to receive your feedback. Please send an email to <a href= "mailto:feedback@paragamix.com">feedback@paragamix.com</a>.
    For beginners we recommend [url=https://www.paragamix.com/en-us/escape_adele_e]Adele[/url] or the [url=https://www.paragamix.com/en-us/escape_jerez_e]Sherry adventure[/url]`,
    de: `Vielen Dank, dass Sie unser Online Escape Spiel gespielt haben. 
    ::next-1::
    Es ist schade, dass es Ihnen nicht gefallen hat. Wir würden das Spiel gerne noch besser an Ihre Bedürfnisse anpassen und würden uns über Ihr Feedback sehr freuen. Bitte senden Sie eine E-Mail an <a href= "mailto:feedback@paragamix.com">feedback@paragamix.com</a>.
    Für Anfänger empfehlen wir [url=https://www.paragamix.com/en-us/escape_adele_e]Adele[/url] oder das [url=https://www.paragamix.com/en-us/escape_jerez_e]Sherry adventure[/url].
    
    Es tut uns leid zu lesen, dass es Ihnen nicht gefallen hat. Wir würden das Spiel gerne noch besser an Ihre Bedürfnisse anpassen und würden uns über Ihr Feedback sehr freuen. Bitte senden Sie eine E-Mail an <a href="mailto:info@paragamix.com">info@paragamix.com</a>.<br>Für Anfänger empfehlen wir <a href="https://www.paragamix.com/de/escape_adele_g">Adele</a> oder das <a href="https://www.paragamix.com/de/escape_jerez_g">Sherry Abenteuer</a>`,
    interaction: (message) => {},
  },

  "Bewertung gut": {
    en: `Thank you for playing our online escape game. We put a lot of effort into it and we are very happy that you liked it. Please be so kind and give us a short [url=https://g.page/Paragamix/review?gm]review on Google[/url]. This will help us to become better known and develop more games.  `,
    de: `Vielen Dank, dass Sie unser Online-Escape-Spiel gespielt haben. Wir haben uns sehr viel Mühe gegeben und freuen uns sehr, dass es Ihnen gefallen hat. Bitte seien Sie so nett und geben Sie uns eine kurze [url=https://g.page/Paragamix/review?gm]Bewertung auf Google[/url]. Dies wird uns helfen, bekannter zu werden und weitere Spiele zu entwickeln. 

    Vielen Dank, dass Sie unser Online Escape Spiel gespielt haben. Wir haben uns sehr bemüht und freuen uns, dass es Ihnen gefallen hat. Bitte nehmen Sie sich einen Moment Zeit, um uns eine kurze Bewertung auf Google zu hinterlassen. Ihr Feedback hilft uns, bekannter zu werden und zukünftige Spiele zu verbessern. [url=https://g.page/Paragamix/review?gm]Hier können Sie Ihre Bewertung abgeben[/url]. Vielen Dank für Ihre Unterstützung! `,
    interaction: (message) => {},
  },

  // Ship names
  Warwick: {
    en: `The English merchant ship Warwick was owned by the Earl of Warwick and sank in 1619 during a strong storm in Castle Harbor [url=https://www.flickr.com/photos/154021822@N07/albums/72157663437450738]Photos[/url]`,
    de: `Das englische Handelsschiff Warwick gehörte dem Earl of Warwick und sank 1619 während eines starken Sturms in Castle Harbor [url=https://www.flickr.com/photos/154021822@N07/albums/72157663437450738]Fotos[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  Caesar: {
    en: `The English brig Caesar suffered shipwreck on a Bermuda reef on her way from Shields to Baltimore. She had loaded millstones, medicine bottles, parts of grandfather clocks, glassware, lead oxide and a marble ledge for a church in Baltimore.  [url=https://www.flickr.com/photos/154021822@N07/albums/72157690658730635]Fotos[/url]`,
    de: `Die englische Brigg Caesar erlitt auf dem Weg von Shields nach Baltimore auf einem Bermuda-Riff Schiffbruch. Sie hatte Mühlsteine, Medizinflaschen, Teile von Standuhren, Glaswaren, Bleioxid und einen Marmorsims für eine Kirche in Baltimore geladen.  [url=https://www.flickr.com/photos/154021822@N07/albums/72157690658730635]Photos[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  "San Pedro": {
    en: `The San Pedro and the Warwick look very similar. The Spanish San Pedro was on a voyage from Cartagena to Cádiz and was shipwrecked in 1594. [url=https://www.flickr.com/photos/154021822@N07/albums/72157661363800127]Have a look[/url]`,
    de: `Die San Pedro und die Warwick sehen sich sehr ähnlich. Die spanische San Pedro befand sich auf einer Reise von Cartagena nach Cádiz und erlitt im Jahr 1594 Schiffbruch. [url=https://www.flickr.com/photos/154021822@N07/albums/72157661363800127]Have a look[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  "Lord Amherst": {
    en: `The English weapon transporter Lord Amherst, armed with 24 cannons, capsized in 1778 while en route from Jamaica to London. It had been utilized as a hospital ship to transport injured sailors from the Revolutionary War back to England.
    [url=https://www.flickr.com/photos/154021822@N07/albums/72157688137290692]Photos[/url]`,
    de: `Der englische Waffentransporter Lord Amherst, der mit 24 Kanonen bewaffnet war, kenterte 1778 auf dem Weg von Jamaika nach London. Es war als Lazarettschiff eingesetzt worden, um verletzte Seeleute aus dem Revolutionskrieg nach England zurückzubringen.
    [url=https://www.flickr.com/photos/154021822@N07/albums/72157688137290692]Photos[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  "The Frenchman": {
    en: `This unidentified shipwreck was discovered at the end of the 20th century. In recent years, the treasure hunter Teddy Tucker has been working at the site and has recovered a variety of artifacts from the Revolutionary War era.
    [url=https://www.flickr.com/photos/154021822@N07/albums/72157689310294251]
    Photos[/url]`,
    de: `Dieses nicht identifizierte Schiffswrack wurde Ende des 20. Jahrhunderts entdeckt. In den letzten Jahren hat der Schatzsucher Teddy Tucker an der Stelle gearbeitet und eine Vielzahl von Artefakten aus der Zeit des Revolutionskriegs geborgen.
    [url=https://www.flickr.com/photos/154021822@N07/albums/72157689310294251]
    Fotos[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  "l'herminie": {
    en: `The 60-gun French frigate L'Herminie sank in 1839. It was part of a squadron in Mexican waters dispatched to enforce French claims against Mexico. Due to rough weather, the ship sought refuge in the waters of Bermuda. By the time land was sighted, it was too late.
    [url=https://www.flickr.com/photos/154021822@N07/albums/72157690662407525]Photos[/url]`,
    de: `Die französische Fregatte L'Herminie mit 60 Kanonen sank 1839. Sie gehörte zu einem Geschwader, das in mexikanische Gewässer entsandt wurde, um die französischen Ansprüche gegenüber Mexiko durchzusetzen. Wegen des rauen Wetters suchte das Schiff Zuflucht in den Gewässern der Bermudas. Als Land gesichtet wurde, war es bereits zu spät.
    [url=https://www.flickr.com/photos/154021822@N07/albums/72157690662407525]Photos[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  Constellation: {
    en: `This American four-masted schooner sank in 1943. During the Second World War it was put into service and used as a cargo ship. Today its hull lies broken on a coral and sand bottom and reveals petrified bags of cement, building material and glassware. [url=https://www.flickr.com/photos/154021822@N07/albums/72157663404710038]Schau mal...[/url]`,
    de: `Dieser amerikanische Viermastschoner sank im Jahr 1943. Während des Zweiten Weltkriegs wurde er in Dienst gestellt und als Frachtschiff genutzt. Heute liegt sein Rumpf zerbrochen auf einem Korallen- und Sandgrund und offenbart versteinerte Säcke mit Zement, Baumaterial und Glaswaren. [url=https://www.flickr.com/photos/154021822@N07/albums/72157663404710038] Werfen Sie einen Blick darauf...[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  "Cristobal Colon": {
    en: `This huge Spanish cruise ship sank in 1946. It sailed between New York and Central America. The Cristobal Colon was one of the most luxurious cruise ships of her time and crashed into the coral reefs off the north coast of Bermuda because the captain misinterpreted an offshore communication tower as the Gibbs Hill Lighthouse.
    [url=https://www.flickr.com/photos/154021822@N07/albums/72157663404919348]Schau mal...[/url]`,
    de: `This huge Spanish cruise ship sank in 1946. It sailed between New York and Central America. The Cristobal Colon was one of the most luxurious cruise ships of her time and crashed into the coral reefs off the north coast of Bermuda because the captain misinterpreted an offshore communication tower as the Gibbs Hill Lighthouse.
    [url=https://www.flickr.com/photos/154021822@N07/albums/72157663404919348] Take a look...[/url]`,
    interaction: (message) => {
      return "Klammer3";
    },
  },

  "Tauchen Sea Venture": {
    en: `To most ships I offer diving trips, but not to Sea Venture. Everyone knows that the wreck of the Sea Venture has not yet been discovered. What makes you think that I have found the gold ducats? Carter must have found the gold treasure shortly after the sinking of the Sea Venture. Teddy must have looted the rest. Why don't you ask him? Choose another ship for a dive.
    [audio]https://www.paragamix.com/images/Bermudas/audioe/bb9.mp3[/audio]
    ::next-1::
    Find another wreck.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    de: `Zu den meisten Schiffen biete ich Tauchausflüge an, aber nicht zu der Sea Venture. Es ist allgemein bekannt, dass das Wrack der Sea Venture bisher nicht entdeckt wurde. Unterstellst du mir etwa, dass ich die Golddukaten gefunden habe? Das war Carter. Er muss den Goldschatz kurz nach dem Untergang der Sea Venture gefunden haben. Teddy muss den Rest geplündert haben. Warum fragst du nicht ihn? Wähle ein anderes Schiff für einen Tauchgang.
    [audio]https://www.paragamix.com/images/Bermudas/audiog/bb9.mp3[/audio]
    ::next-1::
    Finden Sie ein anderes Wrack.
    [button=interaction-S5 B2 Anruf]Rufen Sie Michael an[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Montana": {
    en: `Welcome to our virtual dive trip. On to the Montana.
    [video]https://www.youtube.com/embed/ly2lpRkBbC8[/video]
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    de: `Willkommen zu unserer virtuellen Tauchreise. Auf zur Montana!
    [video]https://www.youtube.com/embed/ly2lpRkBbC8[/video]
    ::next-1::
    Vielen Dank, dass Sie eine virtuelle Tauchreise gebucht haben.
    [button=interaction-S5 B2 Anruf]Rufen Sie Michael an[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Lartinton": {
    en: `Welcome to our virtual dive trip. On to Lartington.
    [video]https://www.youtube.com/embed/V3D5_OAPizM[/video]
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    de: `Willkommen zu unserem virtuellen Tauchausflug. Auf zur Lartington!
    [video]https://www.youtube.com/embed/V3D5_OAPizM[/video]
    ::next-1::
    Vielen Dank, dass Sie eine virtuelle Tauchreise gebucht haben.
    [button=interaction-S5 B2 Anruf]Rufen Sie Michael an[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Caesar": {
    en: `Welcome to our virtual dive trip. On to Caesar.
    [video]https://www.youtube.com/embed/gb8Gq3KoDrc[/video]
    
    The English brig Caesar suffered shipwreck on a Bermuda reef on her way from Shields to Baltimore.
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    de: `Willkommen zu unserem virtuellen Tauchausflug. Auf zu Caesar.
    [video]https://www.youtube.com/embed/gb8Gq3KoDrc[/video]
    
    Die englische Brigg Caesar erlitt auf dem Weg von Shields nach Baltimore auf einem Bermuda-Riff Schiffbruch.
    ::next-1::
    Vielen Dank, dass Sie eine virtuelle Tauchreise gebucht haben.
    [button=interaction-S5 B2 Anruf]Rufen Sie Michael an[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Herminie": {
    en: `Welcome to our virtual dive trip. On to L'Herminie.
    [video]https://www.youtube.com/embed/rfCbndOflwg[/video]
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    de: `Willkommen zu unserer virtuellen Tauchreise. Auf zur L'Herminie!
    [video]https://www.youtube.com/embed/rfCbndOflwg[/video]
    ::next-1::
    Vielen Dank, dass Sie eine virtuelle Tauchreise gebucht haben.
    [button=interaction-S5 B2 Anruf]Rufen Sie Michael an[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Constellation": {
    en: `Welcome to our virtual dive trip. On to Constellation.
    [video]https://www.youtube.com/embed/E9Awv0bANhc[/video]
    This American four-masted schooner sank in 1943. During the Second World War it was put into service and used as a cargo ship.
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    de: `Willkommen zu unserer virtuellen Tauchreise. Auf zur Constellation!
    [video]https://www.youtube.com/embed/E9Awv0bANhc[/video]
    Dieser amerikanische Viermastschoner sank im Jahr 1943. Während des Zweiten Weltkriegs wurde er in Dienst gestellt und als Frachtschiff eingesetzt.
    ::next-1::
    Vielen Dank, dass Sie eine virtuelle Tauchreise gebucht haben.
    [button=interaction-S5 B2 Anruf]Rufen Sie Michael an[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Warwick": {
    en: `Welcome to our virtual dive trip. On to Warwick.
    [video]https://www.youtube.com/embed/LGnEd08vsD0[/video]
    The English merchant ship Warwick was owned by the Earl of Warwick and sank in 1619 during a strong storm in Castle Harbor 
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    de: `Willkommen zu unserem virtuellen Tauchausflug. Auf zur Warwick!
    [video]https://www.youtube.com/embed/LGnEd08vsD0[/video]
    Das englische Handelsschiff Warwick gehörte dem Earl of Warwick und sank 1619 während eines starken Sturms im Castle Harbor 
    ::next-1::
   Vielen Dank, dass Sie eine virtuelle Tauchreise gebucht haben.
    [button=interaction-S5 B2 Anruf]Rufen Sie Michael an[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Christobal": {
    en: `Welcome to our virtual dive trip. On to Christobal Colon.
    [video]https://www.youtube.com/embed/7aTchsUbEM0?si=362lcMxSoZ21Xulf[/video]
    This huge Spanish cruise ship sank in 1946. It sailed between New York and Central America.
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    de: `Willkommen zu unserer virtuellen Tauchreise. Auf zur Christobal Colon!
    [video]https://www.youtube.com/embed/7aTchsUbEM0?si=362lcMxSoZ21Xulf[/video]
    Dieses riesige spanische Kreuzfahrtschiff sank im Jahr 1946. Es verkehrte zwischen New York und Mittelamerika.
    ::next-1::
    Vielen Dank, dass Sie eine virtuelle Tauchreise gebucht haben.
    [button=interaction-S5 B2 Anruf]Rufen Sie Michael an[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen San Pedro": {
    en: `Unfortunately we do not offer diving trips to San Pedro. Instead we recommend the Warwick, which is just as old.[video]https://www.youtube.com/embed/LGnEd08vsD0[/video]
    The English merchant ship Warwick was owned by the Earl of Warwick and sank in 1619 during a strong storm in Castle Harbor.
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    de: `Leider bieten wir keine Tauchausflüge zur San Pedro an. Stattdessen empfehlen wir die Warwick, die genauso alt ist.[video]https://www.youtube.com/embed/LGnEd08vsD0[/video]
    Das englische Handelsschiff Warwick gehörte dem Earl of Warwick und sank 1619 während eines starken Sturms im Castle Harbor.
    ::next-1::
    Vielen Dank, dass Sie eine virtuelle Tauchreise gebucht haben.
    [button=interaction-S5 B2 Anruf]Rufen Sie Michael an[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Ship3": {
    en: `I can assure you that it is not worth diving there. I have visited this wreck several times and there is nothing to see there except some wooden planks. Everything I found I have given to the [url=https://goo.gl/maps/u8j8VPb5z8QYJ4b9A]Ocean Discovery Center[/url]. That is all I have. Please choose another wreck.

    [audio]https://www.paragamix.com/images/Bermudas/audioe/bb10.mp3[/audio]
    
    But we can take a [url=https://goo.gl/maps/2ebb159HBbKr7zeQ6]tour with the jet ski[/url] to the approximate position of ship3. 
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    de: `Ich kann Ihnen versichern, dass es sich nicht lohnt, dort zu tauchen. Ich habe dieses Wrack schon mehrmals besucht, und außer ein paar Holzplanken gibt es dort nichts zu sehen. Alles, was ich gefunden habe, habe ich dem [url=https://goo.gl/maps/u8j8VPb5z8QYJ4b9A]Ocean Discovery Center[/url] gegeben. Das ist alles, was ich habe. Bitte wählen Sie ein anderes Wrack.

    [audio]https://www.paragamix.com/images/Bermudas/audiog/bb10.mp3[/audio]
    
    Wenn Du willst machen wir eine [url=https://goo.gl/maps/2ebb159HBbKr7zeQ6]Tour mit dem Jetski[/url] zur ungefähren Position von Schiff3.
    ::next-1::
    Vielen Dank, dass Sie eine virtuelle Tauchreise gebucht haben.
    [button=interaction-S5 B2 Anruf]Rufen Sie Michael an[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },

  "Tauchen Ship sonstige": {
    en: `This wreck has not yet been identified. I have been there several times. With pleasure we can make an excursion there.
    ::next-1::
    Thank you for booking a virtual dive trip.
    [button=interaction-S5 B2 Anruf]Call Michael[/button]`,
    de: `Dieses Wrack ist bisher noch nicht identifiziert worden. Ich war bereits mehrmals dort und kann Ihnen gerne einen Ausflug dorthin anbieten.
    ::next-1::
    Vielen Dank, dass Sie eine virtuelle Tauchreise gebucht haben.
    [button=interaction-S5 B2 Anruf]Rufen Sie Michael an[/button]`,
    interaction: (message) => {
      return "Klammer5";
    },
  },
  RESTART: {
    en: "",
    de: "",
    interaction: (message) => {
      if (matchWords(message, ["Blog1", "Blog 1"])) return "S3 B1 Rätsel";
      if (matchWords(message, ["Blog2", "Blog 2"])) return "S4 B2 Tauchen";
      if (matchWords(message, ["Blog3", "Blog 3"])) return "S6 B3 Diebesgut";
      if (matchWords(message, ["Blog4", "Blog 4"])) return "S8 B4 Grotto";
      if (matchWords(message, ["Blog5", "Blog 5"])) return "S9a B5 Tucker";
      if (matchWords(message, ["Blog6", "Blog 6"])) return "S10 B6 Goldkreuz";
      if (matchWords(message, ["Blog7", "Blog 7"])) return "S11 B7 Buch";
      if (matchWords(message, ["KRET", "K R E T"])) return "Schritt 13 Finale";
      if (matchWords(message, ["josef.moore110@gmail.com"]))
        return "S3 B1 Zusatz";
      if (
        matchWords(message, [
          "7gold7",
          "sevengoldseven",
          "bit.ly/sevengoldseven",
          "http://bit.ly/7gold7",
          "https://bit.ly/7gold7",
        ])
      )
        return "S10b B6 Goldkreuz";

      return null;
    },
  },
};
