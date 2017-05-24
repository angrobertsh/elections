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

// const Splash = () => (
//   <div id="splash" onClick={handleClick}>
//     FFFFFFUUUUUUUUUUCCCCCCCK YEAHHHHHHh
//   </div>
// )


class Splash extends React.Component{
  constructor(props){
    super(props);
  }

  ComponentDidMount(){

  }

  render(){
    return (
      <div>
        <div id="splash-background">
        </div>
        <div id="splash" onClick={handleClick}>
          <div id="splash-title">{"'MURICA"}</div>
          <div id="splash-eagle"></div>
        </div>
      </div>
    );
  }

}

export default Splash;
