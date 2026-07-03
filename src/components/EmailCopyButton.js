import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const EMAIL = "josemasia2004@gmail.com";

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch (err) {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
};

const EmailCopyButton = ({ className, tooltipClassName }) => {
  const [status, setStatus] = useState("idle");

  const handleClick = async () => {
    try {
      await copyToClipboard(EMAIL);
      setStatus("copied");
    } catch (err) {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 1500);
  };

  const tooltipText = status === "copied" ? "¡Copiado! ✅" : status === "error" ? "No se pudo copiar" : EMAIL;

  return (
    <button className={`relative group ${className}`} onClick={handleClick}>
      <span className={tooltipClassName}>{tooltipText}</span>
      <FaEnvelope />
    </button>
  );
};

export default EmailCopyButton;
