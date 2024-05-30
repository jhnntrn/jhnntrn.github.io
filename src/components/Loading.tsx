import { easeIn, motion } from "framer-motion";
import "./Loading.css";
function Loading() {
  return (
    <motion.div
      className="loading"
      animate={{ opacity: 0 }}
      transition={{ ease: easeIn, delay: 1 }}
    >
      <h1>a project by</h1>
      <div className="logo">Tri Tran</div>
    </motion.div>
  );
}

export default Loading;
