import "./Message.css";
import Typewriter from "typewriter-effect";

function Message() {
  /*-----------------Timelog------------------*/
  const firstDay = 1716397915;
  const todayDay = Date.now();

  let howLong: number = todayDay - firstDay;

  let strHowLongDay: string = new Date(howLong).getDay().toString();
  let strHowLongHrs: string = new Date(howLong).getHours().toString();
  let strHowLongMins: string = new Date(howLong).getMinutes().toString();
  let strHowLongSecs: string = new Date(howLong).getSeconds().toString();
  let totalTime: string =
    strHowLongDay +
    " ngày, " +
    strHowLongHrs +
    " tiếng, " +
    strHowLongMins +
    " phút, zà " +
    strHowLongSecs +
    " giây";
  /*------------------------------------------*/

  /*-------------------Text-------------------*/
  const name: string = "Minh Châuuu";
  let message1: string = "ê " + name;
  let message2: string = "m có bíc là tụi mìnk bíc nhao bao lâu ckua?";
  let message3: string = "đ bíc đúng hok";
  let message4: string = "ngoo vcl =))))";
  let message5: string = "để t nói cho m bíc nèk";
  let message6: string = "mình bíc nhao được " + totalTime + " r ák";
  let message7: string = "ghê vl ckua =)))";
  let message8: string = "thì là cũng lâu lâu rùi đó =))))))))))))";
  let message9: string = "hỏng ấy thì mình ấy đii";
  let message10: string = "ấy là ấy ấy z đó";

  return (
    <div className="message">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(message1)
            .pauseFor(2500)
            .deleteAll()
            .typeString(message2)
            .pauseFor(2500)
            .deleteAll()
            .typeString(message3)
            .pauseFor(2500)
            .deleteAll()
            .typeString(message4)
            .pauseFor(2500)
            .deleteAll()
            .typeString(message5)
            .pauseFor(2500)
            .deleteAll()
            .typeString(message6)
            .pauseFor(2500)
            .deleteAll()
            .typeString(message7)
            .pauseFor(2500)
            .deleteAll()
            .typeString(message8)
            .pauseFor(2500)
            .deleteAll()
            .typeString(message9)
            .pauseFor(2500)
            .deleteAll()
            .typeString(message10)
            .pauseFor(2500)
            .deleteChars(10)
            .typeString("mình iu nhao ik á")
            .pauseFor(2500)
            .deleteAll()
            .typeString("mchau làm ngừi iu mtri nka :>")
            .callFunction(() => {
              console.log("Pick input");
            })
            .pauseFor(5000)
            .deleteChars(2)
            .typeString("nhaaaaaa")
            .start();
        }}
      />
    </div>
  );
}
export default Message;
