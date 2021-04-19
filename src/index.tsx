import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// import { createServer, Model } from 'miragejs'

// createServer({
//   models : {
//     team: Model,
//   },

//   seeds(server){
//     server.db.loadData({
//       teams: [
//         {
//           Name: 'Barcelona',
//           Description: 'Futbol Club Barcelona',
//           Avg : '28.6',
//           Website : 'https://www.fcbarcelona.com/en/',
//           Type : 'real',
//           Formation: '2',
//           Players : [
//             {
//               name: 'Lionel Messi',
//               age: '33',
//               nationality: 'Argentina'
//             },
//             {
//               name: 'Antoine Griezmann',
//               age: '30',
//               nationality: 'French'
//             },
//             {
//               name: 'Ousmane Dembélé',
//               age: '23',
//               nationality: 'French'
//             }
//           ],
//         },
//         {
//           Name: 'PSG',
//           Description: 'Paris Saint-Germain Football Club',
//           Avg : '28.6',
//           Website : 'https://www.psg.fr/',
//           Type : 'real',
//           Formation: '3',
//           Players : [
//             {
//               name: 'Neymar',
//               age: '29',
//               nationality: 'Brazil'
//             },
//             {
//               name: 'Kylian Mbappé',
//               age: '22',
//               nationality: 'French'
//             },
//             {
//               name: 'Ángel Di María',
//               age: '33',
//               nationality: 'Argentina'
//             }
//           ],
//         }
//       ]
//     })
//   },

//   routes(){
//     this.namespace = 'api';

//     this.get('http://localhost:3000/teams', ()=>{
//       return this.schema.all('team')
//     })

//     this.post('http://localhost:3000/teams', (  schema, request) => {
//       const data= JSON.parse(request.requestBody)

//       return schema.create('team', data)
//     })
//   }
// })