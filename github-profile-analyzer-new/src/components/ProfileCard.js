import React from 'react';

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={profile.avatar_url} alt={`${profile.login}'s avatar`} />
      </div>
      <div className="profile-info">
        <h2>{profile.name || profile.login}</h2>
        <h3>@{profile.login}</h3>
        {profile.bio && <p>{profile.bio}</p>}
        
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{profile.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{profile.following}</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{profile.public_repos}</span>
            <span className="stat-label">Repos</span>
          </div>
        </div>
        
        {profile.location && (
          <div className="profile-location">
            <span>📍 {profile.location}</span>
          </div>
        )}
        
        {profile.blog && (
          <div className="profile-website">
            <a href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`} target="_blank" rel="noopener noreferrer">
              🔗 Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;