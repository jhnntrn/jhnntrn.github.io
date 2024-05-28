// src/components/CombinedButtons.tsx

import React, { useState, useEffect } from "react";
import Button from "./Button";
import NoButton from "./NoButton";
import "./Input.css";

const Input: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const delay = 1000; // 97 seconds in milliseconds
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const handleNormalButtonClick = () => {
    alert("Oki z chủ nhật mình ik chơi nka ");
  };

  const handleNoButtonClick = () => {
    setDisabled(true);
    alert("Ai cho bấm cái này màk bấm 😏");
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
        disabled={disabled}
      />
    </div>
  ) : null;
};

export default Input;
