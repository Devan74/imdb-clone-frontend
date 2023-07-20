import React from "react";

const MovieForm = ({ movieData, setMovieData, onSubmit }) => {
  const handleChange = (e) => {
    setMovieData({
      ...movieData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={movieData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="yearOfRelease" className="form-label">
          Year of Release
        </label>
        <input
          type="text"
          name="yearOfRelease"
          value={movieData.yearOfRelease}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="plot" className="form-label">
          Plot
        </label>
        <textarea
          name="plot"
          value={movieData.plot}
          onChange={handleChange}
          className="form-control"
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="poster" className="form-label">
          Poster URL
        </label>
        <input
          type="url"
          name="poster"
          value={movieData.poster}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Movie
      </button>
    </form>
  );
};

export default MovieForm;
