import React from "react";
import ReactDOM from "react-dom";
import style from "./style.module.scss";
// import  module  from 'node'

const App: React.FC<any> = () => {
  console.log(style.text)
  return (
    <h1 className={style.text}>
      Webpack Artem!
      <br/>
      {style.text}
      <hr />
      <p className={style.green}>{new Date().toLocaleDateString()}</p>
    </h1>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

if (module && module.hot && module.hot.accept) {
  module.hot.accept()
}
