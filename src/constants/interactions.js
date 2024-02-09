import { matchWords } from "../helpers/matcher";

export const interactions = {
  "S1 Swizzle Inn": {
    response: `If you want to change the language, [url=https://www.paragamix.com/en-us/start-mission]enter the code again and choose the language first[/url]
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
      if (matchWords(message, [`Hilfe`, `Hinweis`, `ayuda`, `help`, `aide`]))
        return `Hilfe1`;

      return `Klammer1`;
    },
  },
  "S2 Bills Blog": {
    response: `That's right. I'm Bil Krauss, a popular entertainer in Bermuda. 
    ::next-2::
    Please choose your individual level of difficulty.
    [select]Medium[/select]
    [select]Tricky[/select]
    `,
    interaction: (message) => {
      if (message === "S2LevelEasy") return "S2LevelEasy";
      if (message === "S2LevelHard") return "S2LevelHard";

      if (matchWords(message, [`Hilfe`, `Hinweis`, `ayuda`, `help`, `aide`]))
        return `Hilfe2 Aufleosung`;

      if (
        matchWords(message, [
          `Auflösung`,
          `Resolution`,
          `Résolution`,
          `Resolucion`,
          `Aufloesung`,
        ])
      )
        return `Schritt 13 finale`;

      return "Klammer2";
    },
  },
  Hilfe1: {
    response: `[b]Help: [/b]Look around the bar. You will find a Crazy Dude notice on the pinboard. You are looking for his first name. With SOLUTION you skip this riddle.`,
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
    response: `This is unfortunately not correct. With HELP you get a tip.`,
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
          `kraus`,
        ])
      )
        return `S2 Bills Blog`;

      if (matchWords(message, [`Hilfe`, `ayuda`, `help`, `aide`]))
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
          `loesung`,
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
};
