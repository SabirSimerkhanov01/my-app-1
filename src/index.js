import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Это типо как то из Redux:
const data = {
  dialogData: [
    { id: "1", message: "Hello, how are you?" },
    { id: "2", message: "Hi! Good, what about you?" },
    { id: "2", message: "Not bad.. Do you go to street  with me?" },
    { id: "2", message: "Of Course!" },
  ],

  contactsData: [
    { img: "", id: "1", name: "Andrey" },
    { img: "", id: "2", name: "Liza" },
  ],

  profileData: [
    { name: 'Dzhabir', surname: 'Bashirov', id: '3' },
  ]
};
// Конец Redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
