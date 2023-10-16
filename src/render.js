import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, changePostValue } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} changePostValue={changePostValue} />
    </React.StrictMode>
  );
};

export default rerenderEntireTree;