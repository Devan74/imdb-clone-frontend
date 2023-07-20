import React from "react";

const ProducerForm = ({ producerData, setProducerData, onSubmit }) => {
  const handleChange = (e) => {
    setProducerData({
      ...producerData,
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
          value={producerData.name}
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
          value={producerData.gender}
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
          value={producerData.dob}
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
          value={producerData.bio}
          onChange={handleChange}
          className="form-control"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Producer
      </button>
    </form>
  );
};

export default ProducerForm;
