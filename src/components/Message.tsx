import "./Message.css";
import Typewriter from "typewriter-effect";

function Message() {
  return (
    <div className="message">
      <Typewriter
        options={{
          strings: ["Chị ơiiii", "Chị đâu rùii", "Tụi em nhớ chị <3"],
          autoStart: true,
          loop: false,
        }}
      />
    </div>
  );
}
export default Message;
