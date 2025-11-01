import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import RepoList from './components/RepoList';
import LanguageChart from './components/LanguageChart';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { fetchUserProfile, fetchUserRepos, fetchLanguageStats } from './services/githubAPI';

function App() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (searchUsername) => {
    setUsername(searchUsername);
    setLoading(true);
    setError('');
    
    try {
      const userProfile = await fetchUserProfile(searchUsername);
      setProfile(userProfile);
      
      const userRepos = await fetchUserRepos(searchUsername);
      setRepos(userRepos);
      
      const languageStats = await fetchLanguageStats(searchUsername);
      setLanguages(languageStats);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching data');
      setProfile(null);
      setRepos([]);
      setLanguages({});
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>GitHub Profile Analyzer</h1>
      </header>
      
      <main className="container">
        <SearchBar onSearch={handleSearch} />
        
        {loading && <Loader />}
        
        {error && <ErrorMessage message={error} />}
        
        {profile && !loading && !error && (
          <div className="results">
            <ProfileCard profile={profile} />
            
            <div className="data-section">
              <RepoList repos={repos} />
              <LanguageChart languages={languages} />
            </div>
          </div>
        )}
      </main>
      
      <footer className="footer">
        <p>GitHub Profile Analyzer &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
