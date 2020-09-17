const checkResponse = (response) => {
  if (response.status !== 200) {
    throw new Error(`Network error! ${response.status}`);
  }
  return response.json();
};

const getUserData = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(checkResponse)
    .catch((err) => {
      console.log(`Fatal error: ${err}`);
    });
};

export default getUserData;
