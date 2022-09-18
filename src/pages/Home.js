import React from 'react';

function Home() {
  return (
    <div>
      {localStorage.getItem('jwt')
        ? `Hello ${JSON.parse(localStorage.getItem('jwt')).username}`
        : 'You are not currently logged in. Please log in to proceed further.'}
    </div>
  );
}

export default Home;
