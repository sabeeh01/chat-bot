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
};
