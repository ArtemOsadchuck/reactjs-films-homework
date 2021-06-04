import React from 'react';
import style from './Component1.module.scss';
import myPhoto from './assets/IMG_6433.JPG';

const Component1: React.FC = () => (
    <>
        <div>
            <h1 className={style.text}>
                Webpack Artem
                <br />
                {style.text}
                <hr />
                <p className={style.green}>{new Date().toLocaleDateString()}</p>
            </h1>
            <img src={myPhoto} width="240px" alt="sd" />
        </div>
    </>
);

export default Component1;
