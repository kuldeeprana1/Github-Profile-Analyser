import React from 'react';

function LanguageChart({ languages }) {
  if (!languages || Object.keys(languages).length === 0) {
    return <div className="language-chart">No language data available</div>;
  }

  // Get total count of languages
  const total = Object.values(languages).reduce((sum, count) => sum + count, 0);

  return (
    <div className="language-chart">
      <h3>Language Distribution</h3>
      <div className="chart-container">
        {Object.entries(languages).map(([language, count]) => {
          const percentage = Math.round((count / total) * 100);
          return (
            <div key={language} className="language-bar">
              <div className="language-name">{language}</div>
              <div className="language-bar-container">
                <div 
                  className="language-bar-fill" 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <div className="language-percentage">{percentage}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LanguageChart;