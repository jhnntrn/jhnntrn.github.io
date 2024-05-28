// src/components/CombinedButtons.tsx

import React, { useState, useEffect } from "react";
import Button from "./Button";
import NoButton from "./NoButton";
import "./Input.css";

const Input: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const delay = 97000; // 97 seconds in milliseconds
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const handleNormalButtonClick = () => {
    alert("Normal Button clicked!");
  };

  const handleNoButtonClick = () => {
    alert("No Button clicked!");
  };

  return shouldRender ? (
    <div className="input">
      <Button
        text="mchau đồng ý 💍"
        onClick={handleNormalButtonClick}
        className="button button-yes"
      />
      <NoButton
        text="mtri tủi j đòi qen mchau 😏"
        onClick={handleNoButtonClick}
        className="button button-no"
      />
    </div>
  ) : null;
};

export default Input;
