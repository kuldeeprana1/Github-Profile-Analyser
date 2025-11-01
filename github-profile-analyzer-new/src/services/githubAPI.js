// GitHub API service
const API_URL = 'https://api.github.com';

export const fetchUserProfile = async (username) => {
  try {
    const response = await fetch(`${API_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchUserRepos = async (username) => {
  try {
    const response = await fetch(`${API_URL}/users/${username}/repos?sort=updated&per_page=10`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchLanguageStats = async (username) => {
  try {
    const repos = await fetchUserRepos(username);
    const languages = {};
    
    // Count languages across repositories
    repos.forEach(repo => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });
    
    return languages;
  } catch (error) {
    throw error;
  }
};