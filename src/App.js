import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import LeftBar from "./Components/leftBar/LeftBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewFeeds from "./Components/NewFeeds/NewFeeds";
import Messages from "./Components/Messages/Messages";
import Friends from "./Components/Friends/Friends";
import Profile from "./Components/Profile/Profile";

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
};
// Конец Redux

function App() {
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
            <Route path="/profile" Component={Profile}></Route>
            <Route path="/newsfeed" Component={NewFeeds}></Route>
            <Route path="/friends" Component={Friends}></Route>
            <Route path="/messages/*" element={ <Messages data={data} /> }></Route>
          </Routes>

        </main>
      </div>

    </BrowserRouter>
  );
}

export default App;
