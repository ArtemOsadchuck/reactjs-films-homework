import React from 'react';
import ReactDOM from 'react-dom';
import Signature from './components/Signature/index';

ReactDOM.render(
    <React.StrictMode>
        <Signature name="Webpack Artem" />
    </React.StrictMode>,
    document.getElementById('root')
);

if (module?.hot?.accept) {
    module.hot.accept();
}
