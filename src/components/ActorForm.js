import React from "react";

const ActorForm = ({ actorData, setActorData, onSubmit }) => {
  const handleChange = (e) => {
    setActorData({
      ...actorData,
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
          value={actorData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <select
          name="gender"
          value={actorData.gender}
          onChange={handleChange}
          className="form-control"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="dob" className="form-label">
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          value={actorData.dob}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bio" className="form-label">
          Bio
        </label>
        <textarea
          name="bio"
          value={actorData.bio}
          onChange={handleChange}
          className="form-control"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Actor
      </button>
    </form>
  );
};

export default ActorForm;
