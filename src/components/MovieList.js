import React, { useEffect, useState } from "react";
import axios from "axios";
import {URL} from '../App';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      // Get the authentication token from local storage 
      const token = localStorage.getItem("token");

      // Set the Authorization header with the token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Make the GET request with the token
      const response = await axios.get(`${URL}/api/movies`, config);
      setMovies(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Movie List</h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie._id} className="col-md-4 mb-4">
            <div className="card">
              {movie.poster && (
                <img
                  src={movie.poster}
                  className="card-img-top"
                  alt={movie.name}
                  width={"200px"}
                  height={"350px"}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">Year of Release: {movie.yearOfRelease}</p>
                <p className="card-text">Producer:</p>
                <p className="card-text">Actors:</p>
                <ul className="list-unstyled">
                  {movie.actors.map((actor) => (
                    <li key={actor._id}>{actor.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
