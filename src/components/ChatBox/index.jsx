import ChatInputField from "../ChatInputField";
import styles from "./chat-box.module.css";
import { matchWords } from "../../helpers/matcher";
import Typewriter from "../TypeWriter";

const responseDict = {
  [`S1 Swizzle Inn`]: `If you want to change the language, [url=https://www.paragamix.com/en-us/start-mission]enter the code again and choose the language first[/url].
  ::next-2::
  [img][b]https://www.p[/b]aragamix.com/images/Bermudas/px_bermuda_crazydude.gif[/img]
  Hello - I am the Crazy Dude.
  ::next-3::
  [audio]https://www.paragamix.com/images/Bermudas/audioe/bb1.mp3[/audio]
  ::next-5::
  [showVar=KEY][extractedData interaction=ID fallback=TEXT]
 `,
  [`S2blog`]: `That's right. I'm Bil Krauss, a popular entertainer in Bermuda.`,
  [`Hilfe1`]: `[b]Help: [/b]Look around the bar. You will find a Crazy Dude notice on the pinboard. You are looking for his first name. With SOLUTION you skip this riddle.`,
  [`Klammer3`]: `If this is your answer, it is unfortunately wrong.`,
  [`Klammer2`]: `If this is your answer, unfortunately it is wrong. If this should be the solution for a blog puzzle, please enter the corresponding blog first, e.g. BLOG 1 for the 1st blog.`,
  [`Hilfe2 Aufloesung`]: `[b]Help: [/b]Every blog is connected to a puzzle. Enter the blog number (e.g. Blog 1) to call up the puzzle. 
  To solve the mission, send an e-mail to the art expert xxxxx.yyyyyABC@gmail.com. 
  The individual puzzles provide the values for x,y,A,B,C. Keep an eye out for them.
  With RESOLUTION you get the solution for this mission.`,
  [`Schritt 13 finale`]: `[b]Congratulations.[/b] You found the rifle - the second artifact that can be clearly attributed to the Sea Venture - and solved all the mysteries surrounding the Sea Venture. 

  We should now call in Josef as an art theft expert. I remembered his first name. Please e-mail him at [b]josef.yyyyyABC@gmail.com[/b] using your e-mail program. He will clear up the matter for you. The mission is finished.
  
  If you do not receive an email from Josef, type HELP.
  ::next-3::
  Follow us on [url=https://www.facebook.com/Paragamix/]Facebook[/url] or [url=https://www.instagram.com/paragamix/]Instagram[/url]. We regularly give away codes among all followers.`,
  [`S2LevelHard`]: `You have chosen the tricky version.
  ::next-1::
  Besides music, the wrecks of Bermuda are my second passion.
  Take a look at my blog. Each blog post provides a puzzle piece to solving the mystery of one of Bermuda's oldest wrecks: the Sea Venture.
  ::next-3::
  [b]Multiple players: [/b]Split the blog posts and exchange via WhatsApp etc. Jump directly to the blog by entering the blog number (e.g. BLOG1 for the 1st blog).
  ::next-2::
  [b]Mission solution: [/b]When you have solved all the puzzles, send an email to the art expert.
  ::next-1::[b]
  [/b][b]If things get stuck: [/b]Start again with RESTART. Then simply enter the number of the blog (e.g. BLOG1 for the first blog) and you start where you left off.`,
  [`S2LevelEasy`]: `You have chosen the moderate version.
  ::next-1::
  Besides music, the wrecks of Bermuda are my second passion.
  Take a look at my blog. Each blog post provides a puzzle piece to solving the mystery of one of Bermuda's oldest wrecks: the Sea Venture.
  ::next-3::
  [b]Multiple players: [/b]Split the blog posts and exchange via WhatsApp etc. Jump directly to the blog by entering the blog number (e.g. BLOG1 for the 1st blog).
  ::next-1::
  [b]Mission solution: [/b]When you have solved all the puzzles, send an email to the art expert.
  ::next-2::
  [b]If things get stuck: [/b]Start again with RESTART. Then simply enter the number of the blog (e.g. BLOG1 for the first blog) and you start where you left off.`,
  [`S3 B1 Ratsel`]: `[b]Please click on "Bil's Blog" above if you haven't already. [/b]

  To get in the mood for your mission, check out the puzzle of the week on my blog. 
  The final letters of the ships in the order RED, GREEN, YELLOW, BLUE result in the solution word. What is it ?`,
  [`S3 B1 Zusatz`]: `Well done! KRET is right. 
  ::next-2::
  At my last gig at the Swizzle Inn, I struck up a conversation with an art expert after a few beers. He left me his email. I tore up the note and forgot his name. Now I found part of it again at the bar. An art expert could be useful for our mission.
  ::next-2::
  [img]https://www.paragamix.com/images/Bermudas/px_bermuda_kartea.jpeg[/img]`,
};

const ChatBox = ({ messages, setMessages }) => {
  const onSubmit = (message) => {
    const tempMessages = [...messages];
    tempMessages.push({ isUser: true, message });

    if (
      matchWords(message, [
        "lösung",
        "Solución",
        "Solution",
        "loesung",
        "Bill",
        "Bil",
        "Krauss",
      ])
    ) {
      tempMessages.push({
        isUser: false,
        message: responseDict[`S2blog`],
      });
    } else if (
      matchWords(message, [`Hilfe`, `Hinweis`, `ayuda`, `help`, `aide`])
    ) {
      tempMessages.push({
        isUser: false,
        message: responseDict[`Hilfe1`],
      });
    } else if (
      matchWords(message, [
        `Auflösung`,
        `Resolution`,
        `Résolution`,
        `Resolucion`,
        `Aufloesung`,
      ])
    ) {
      tempMessages.push({
        isUser: false,
        message: responseDict[`Schritt 13 finale`],
      });
    } else if (matchWords(message, [`solución`, `KRET`, `K R E T`])) {
      tempMessages.push({
        isUser: false,
        message: responseDict[`S3 B1 Zusatz`],
      });
    }

    setMessages(tempMessages);
  };

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: message?.isUser ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  background: message?.isUser ? "#9076F6" : "#F1F1F0",
                }}
                className={styles.messageContainer}
              >
                <Typewriter
                  style={{
                    color: message?.isUser ? "white" : "black",
                  }}
                  text={message?.message}
                  animate={!message?.isUser && messages.length - 1 === index}
                />
              </div>
            </div>
          );
        })}
      </div>
      <ChatInputField onSubmit={onSubmit} />
    </div>
  );
};

export default ChatBox;
