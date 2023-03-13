import React, { useState } from "react";

function MimimiTranslator() {
  const [texto, setTexto] = useState("");
  const [textoTraducido, setTextoTraducido] = useState("");

  function traducirTexto() {
    const mimimi = texto.replace(/[aeiou]/gi, "i").replace(/(\b\w)/g, "$1");
    setTextoTraducido(mimimi);
  }

  function handleTextoChange(event) {
    setTexto(event.target.value);
  }

  return (
    <div>
      <textarea value={texto} onChange={handleTextoChange} />
      <button onClick={traducirTexto}>Traducir a MIMIMI</button>
      <p>{textoTraducido}</p>
    </div>
  );
}

export default MimimiTranslator;
