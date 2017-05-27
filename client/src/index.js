import React from 'react';
import ReactDOM from 'react-dom';
import Root from './packages/pages/root/component';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
