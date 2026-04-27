import React from "react";
import { ThemeContext } from "../App";
import { useContext } from "react";

function Info() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p
        className= {theme}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        accusamus vero maiores, iure dolorum exercitationem alias in dicta quos
        eligendi nihil, quas, laboriosam beatae perferendis odit incidunt soluta
        quo facilis.
      </p>
    </div>
  );
}

export default Info;