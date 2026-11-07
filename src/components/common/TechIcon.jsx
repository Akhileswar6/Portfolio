import React from 'react';

const iconPathMap = {
  'AWS': '/icons/AWS.png',
  'Azure SQL Database': '/icons/Azure SQL Database.png',
  'Azure SQL': '/icons/Azure SQL Database.png',
  'SQL': '/icons/Azure SQL Database.png',
  'CSS3': '/icons/CSS3.png',
  'CSS': '/icons/CSS3.png',
  'Docker': '/icons/Docker.png',
  'Express.js': '/icons/Express.png',
  'Express': '/icons/Express.png',
  'Firebase': '/icons/Firebase.png',
  'Firebase Realtime DB': '/icons/Firebase.png',
  'Git': '/icons/Git.png',
  'GitHub': '/icons/github (3).png',
  'HTML5': '/icons/HTML5.png',
  'HTML': '/icons/HTML5.png',
  'JavaScript': '/icons/JavaScript.png',
  'Linux': '/icons/Linux.png',
  'MongoDB': '/icons/MongoDB.png',
  'Node.js': '/icons/Node.js.png',
  'Postman': '/icons/Postman.png',
  'Python': '/icons/Python.png',
  'React.js': '/icons/React.png',
  'React': '/icons/React.png',
  'Tailwind CSS': '/icons/Tailwind CSS.png',
};

export const TechIcon = ({ name, icon, className = 'w-6 h-6' }) => {
  const trimmed = (name || '').trim();
  const lowerKey = Object.keys(iconPathMap).find(
    (k) => k.toLowerCase() === trimmed.toLowerCase()
  );
  const src = icon || iconPathMap[trimmed] || (lowerKey ? iconPathMap[lowerKey] : null);

  if (src) {
    return (
      <img
        src={src}
        alt={name || 'Skill Icon'}
        className={`${className} object-contain`}
        loading="lazy"
      />
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#B8A58A" strokeWidth="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
};
