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
        переключаются через lefbar, оттуда идёт "сигнал" в App.js,
        и App.js открывает необходимую компоненту.
        */}

          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  profile={props.state.profile}
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
                  dialogs={props.state.dialogs}
                  contacts={props.state.contacts}
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
