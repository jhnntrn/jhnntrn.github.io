import "./App.css";
import { useState, useEffect } from "react";
import Message from "./components/Message";
import Loading from "./components/Loading";
import Input from "./components/Input";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
  }

  return (
    <div className="container">
      <Message />
      <Input />
    </div>
  );
}

export default App;
