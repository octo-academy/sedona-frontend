import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
            <AppContainer>
                <Component/>
            </AppContainer>,
        document.getElementById('root'),
    )
};

render(() => (<h1 style={{ textAlign: 'center' }}>HELLO WORLD!</h1>));

