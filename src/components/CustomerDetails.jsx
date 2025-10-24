// src/components/CustomerDetails.js
import React, { useEffect, useState } from 'react';
import '../styles/GamingForm.css';

const CustomerDetails = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('campaigns')) || [];
    setCampaigns(data);
  }, []);

  return (
    <div className="customer-details-container">
      <h1 className="details-title">📋 Submitted Campaigns</h1>
      {campaigns.length === 0 ? (
        <p>No campaigns submitted yet.</p>
      ) : (
        <ul className="campaign-list">
          {campaigns.map((campaign, index) => (
            <li key={index} className="campaign-card">
              <strong>Name:</strong> {campaign.name}<br />
              <strong>Budget:</strong> ${campaign.budget}<br />
              <strong>Platform:</strong> {campaign.platform}<br />
              <strong>Status:</strong> {campaign.status || 'N/A'}<br />
              <strong>Files:</strong> {campaign.files.join(', ') || 'None'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerDetails;
