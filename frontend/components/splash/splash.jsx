import React from 'react';

const handleClick = (e) => {
  let splash = e.currentTarget;
  let heckyeah = document.getElementsByClassName("heckyeah")[0]
  let splashBackground = document.getElementById("splash-background");
  heckyeah.classList.add("fadeInOut");
  window.setTimeout(() => {
    splash.classList.add("none");
    splashBackground.classList.add("none");
    heckyeah.classList.add("none");
  }, 1500);
}

const Splash = () => (
  <div>
    <div className="heckyeah">HECK YEAH!</div>
    <div id="splash-background">
    </div>
    <div id="splash" onClick={handleClick}>
      <div className="splash-title fadeIn">{"'MURICA"}</div>
      <div className="splash-eagle fadeInSlower"></div>
    </div>
  </div>
)

export default Splash;
