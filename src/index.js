import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        // dispath обязательно "захардкодить" к store
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
