import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import LeftBar from "./Components/leftBar/LeftBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewFeeds from "./Components/NewFeeds/NewFeeds";
import Messages from "./Components/Messages/Messages";
import Friends from "./Components/Friends/Friends";
import Profile from "./Components/Profile/Profile";

function App(props) {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
        <main className="main">
          <LeftBar />

          {/*
        Сами компоненты, которые находятся в <Routes></Routes>
        переключаются через lefbar, path проверяет ссылку и когда ссылка
        становится нужной рендерит компонент
        */}

          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                profileWindow={props.state.profileWindow}
                dispatch={props.dispatch}
                />
              }
            ></Route>
            <Route path="/newsfeed" Component={NewFeeds}></Route>
            <Route path="/friends" Component={Friends}></Route>
            <Route
              path="/messages/*"
              element={
                <Messages
                dispatch={props.dispatch}
                messagesWindow={props.state.messagesWindow}
                />
              }
            ></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
