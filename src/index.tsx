import React from 'react';
import ReactDOM from 'react-dom';
import Component1 from './components/Component_1/index';

ReactDOM.render(
    <React.StrictMode>
        <Component1 name="Webpack Artem" />
    </React.StrictMode>,
    document.getElementById('root')
);

if (module && module.hot && module.hot.accept) {
    module.hot.accept();
}
