import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

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
      <Navbar />
    </div>
  );
}

export default App;
