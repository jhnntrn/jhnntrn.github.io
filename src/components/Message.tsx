import "./Message.css";
import Typewriter from "typewriter-effect";

function Message() {
  return (
    <div className="message">
      <Typewriter
        options={{
          strings: ["Chị ơiiii", "Có j ăng hok", "Em đói =))))))))"],
          autoStart: true,
          loop: false,
        }}
      />
    </div>
  );
}
export default Message;
