import './Interface.scss';
import { IoIosCloudyNight } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";
import { useState } from 'react';

function Interface() {
  const [state, setstate] = useState(0);
  if (window.sessionStorage.getItem("background_theme") !== "sun" && window.sessionStorage.getItem("background_theme") !== "sun") {
    window.sessionStorage.setItem("background_theme","sun");
  }
  
  const c = window.sessionStorage.getItem("background_theme") === "sun";

  return (
    <div className="interface">
        <div onClick={() => {setback("sun"); setstate(state+1);}}  className={`interface__choice ${c && "interface__choice--select"}`}>
          <MdWbSunny />
          <p>Jour</p>
        </div>

        <div onClick={() => {setback("night"); setstate(state+1);}}  className={`interface__choice ${!c && "interface__choice--select"}`}>
          <IoIosCloudyNight />
          <p>Nuit</p>
        </div>
    </div>
  );
}

const setColor = (color1,color2,text) => {
  document.documentElement.style.setProperty("--color1", color1 || "#e8f3fa");
  document.documentElement.style.setProperty("--color2", color2 || "#faede7");
  document.documentElement.style.setProperty("--text", text || "black");
}

const setback = (x) => {
  window.sessionStorage.setItem("background_theme",x);
  
  if (x === "night") setColor("#213958","#0A1C31","white");
  else setColor();
}

setback(window.sessionStorage.getItem("background_theme"));

export default Interface;