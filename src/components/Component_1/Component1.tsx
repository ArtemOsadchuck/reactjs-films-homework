import React from 'react';
import style from './Component1.scss';
import myPhoto from './assets/IMG_6433.JPG';

interface IComponent1 {
    name: string;
}

const Component1: React.FC<IComponent1> = ({ name }) => (
    <>
        <div>
            <h1 className={style.text}>
                {name}
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
