import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let contacts = [
  {
  id: 1,
  name: 'Scott',
  phone: '555 555 555'
  },
  {
    id: 2,
    name: 'Courtney',
    phone: '543 524 555'
  },
  {
    id: 3,
    name: 'John',
    phone: '959 102 390'
  }
]

ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));
registerServiceWorker();
