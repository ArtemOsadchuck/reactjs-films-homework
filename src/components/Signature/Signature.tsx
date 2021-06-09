import React from 'react';
import style from './Signature.scss';
import myPhoto from './assets/IMG_6433.JPG';

interface ISignature {
    name: string;
}

const Signature: React.FC<ISignature> = ({ name }) => (
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
);

export default Signature;
