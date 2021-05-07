import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.scss';
import myPhoto from './assets/IMG_6433.JPG';

const App: React.FC<any> = () => {
    console.log(style.text);
    return (
        <>
            <div>
                <h1 className={style.text}>
                    Webpack Artem!
                    <br />
                    {style.text}
                    <hr />
                    <p className={style.green}>
                        {new Date().toLocaleDateString()}
                    </p>
                </h1>
                <img src={myPhoto} width="240px" alt="sd" />
            </div>
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

if (module && module.hot && module.hot.accept) {
    module.hot.accept();
}
