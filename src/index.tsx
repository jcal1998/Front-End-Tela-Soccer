import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer } from 'miragejs'

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/players', ()=>{
        return [
          {
            player : { 
              firstname : 'Neymar' , 
              lastname : 'da Silva' , 
              age : '32', 
              nationality : 'Brazil' 
            },
          }
        ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
