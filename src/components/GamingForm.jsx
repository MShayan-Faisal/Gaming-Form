// src/components/GamingForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GamingForm.css';

const GamingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    budget: '',
    platform: '',
    status: '',
    files: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'files') {
      setFormData({ ...formData, files: Array.from(files).map(file => file.name) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem('campaigns')) || [];
    localStorage.setItem('campaigns', JSON.stringify([...existingData, formData]));

    setFormData({ name: '', budget: '', platform: '', status: '', files: [] });
    document.getElementById('fileInput').value = '';

    navigate('/customer-details');
  };

  return (
    <div className="gaming-form-container">
      <h1 className="form-title">🎮 Create a Gaming Campaign</h1>

      <form onSubmit={handleSubmit} className="gaming-form">
        <label>
          Campaign Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Budget
          <input type="number" name="budget" value={formData.budget} onChange={handleChange} required />
        </label>

        <label>
          Platform
          <select name="platform" value={formData.platform} onChange={handleChange} required>
            <option value="">Select Platform</option>
            <option value="Twitch">Twitch</option>
            <option value="YouTube">YouTube</option>
            <option value="Steam">Steam</option>
          </select>
        </label>

        <label>
          Status
          <input type="text" name="status" value={formData.status} onChange={handleChange} />
        </label>

        <label>
          Upload Files
          <input type="file" name="files" id="fileInput" multiple onChange={handleChange} />
        </label>

        <button type="submit">Launch Campaign 🚀</button>
      </form>
    </div>
  );
};

export default GamingForm;
