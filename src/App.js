import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Logout from "./components/Logout";
import CreateMovie from "./components/CreateMovie";
import ActorForm from "./components/ActorForm";
import ProducerForm from "./components/ProducerForm";
//Backend URL
export const URL="https://imdb-clone-io-factory.onrender.com";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<MovieList />} />
        <Route path="/createmovie" element={<CreateMovie />} />
        <Route path="/create/actor" element={<ActorForm />} />
        <Route path="/create/actor" element={<ActorForm />} />
        <Route path="/create/producer" element={<ProducerForm />} />
      </Routes>
    </>
  );
}

export default App;
