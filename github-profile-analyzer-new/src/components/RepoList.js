import React from 'react';

function RepoList({ repos }) {
  if (!repos || repos.length === 0) {
    return <div className="repo-list">No repositories found</div>;
  }

  return (
    <div className="repo-list">
      <h3>Latest Repositories</h3>
      <ul>
        {repos.map(repo => (
          <li key={repo.id} className="repo-item">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
              <h4>{repo.name}</h4>
            </a>
            {repo.description && <p>{repo.description}</p>}
            <div className="repo-details">
              {repo.language && <span className="repo-language">{repo.language}</span>}
              <span className="repo-stars">⭐ {repo.stargazers_count}</span>
              <span className="repo-forks">🍴 {repo.forks_count}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;