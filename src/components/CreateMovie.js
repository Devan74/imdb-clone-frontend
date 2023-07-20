import React, { useState } from "react";
import axios from "axios";
import ActorForm from "./ActorForm";
import ProducerForm from "./ProducerForm";
import MovieForm from "./MovieForm";
import {URL} from '../App';

const CreateMovie = () => {
  const [actorData, setActorData] = useState({
    name: "",
    gender: "",
    dob: "",
    bio: "",
  });

  const [producerData, setProducerData] = useState({
    name: "",
    gender: "",
    dob: "",
    bio: "",
  });

  const [movieData, setMovieData] = useState({
    name: "",
    yearOfRelease: "",
    plot: "",
    poster: "",
  });

  const handleActorFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Your code for getting the token from local storage
      const token = localStorage.getItem("token");
        // console.log(token)
      // Set the Authorization header with the token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Submit actor data and get the new actor's ID
      const response = await axios.post(`${URL}/api/actors`, actorData, config);
       // Check if the response data is defined before accessing 'data'
    if (response.data) {
        const actorId = response.data._id;
  
        // Ensure that 'movieData.actors' is initialized as an array before using the spread operator
        // If 'movieData.actors' is not yet an array, initialize it as an empty array
        const updatedActors = Array.isArray(movieData.actors)
          ? [...movieData.actors, actorId]
          : [actorId];
  
        // Update the movieData state with the new actor IDs
        setMovieData({
          ...movieData,
          actors: updatedActors,
        });
  
        // Clear the actor form after submission
        setActorData({
          name: "",
          gender: "",
          dob: "",
          bio: "",
        });
      } else {
        console.error("Response data is undefined.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleProducerFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Your code for getting the token from local storage
      const token = localStorage.getItem("token");

      // Set the Authorization header with the token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Submit producer data and get the new producer's ID
      const response = await axios.post(`${URL}/api/producers`, producerData, config);
      const producerId = response.data._id;

      // Update the movieData state with the new producer ID
      setMovieData({
        ...movieData,
        producer: producerId,
      });

      // Clear the producer form after submission
      setProducerData({
        name: "",
        gender: "",
        dob: "",
        bio: "",
      });
    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  const handleMovieFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Your code for getting the token from local storage
      const token = localStorage.getItem("token");

      // Set the Authorization header with the token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Submit the movie data
      await axios.post(`${URL}/api/movies`, movieData, config);

      // Clear the movie form after submission
      setMovieData({
        name: "",
        yearOfRelease: "",
        plot: "",
        poster: "",
      });
    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  return (
    <div>
      <h1>Create Movie</h1>
      <ActorForm
        actorData={actorData}
        setActorData={setActorData}
        onSubmit={handleActorFormSubmit}
      />
      <ProducerForm
        producerData={producerData}
        setProducerData={setProducerData}
        onSubmit={handleProducerFormSubmit}
      />
      <MovieForm
        movieData={movieData}
        setMovieData={setMovieData}
        onSubmit={handleMovieFormSubmit}
      />
    </div>
  );
};

export default CreateMovie;
