fetch('https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user')
  .then((response) => response.json())
  .then((data) => {
    const user = data.find((user) => user.id === '8');
    if (user) {
      console.log(`Name of user with ID 8: ${user.name}`);
    } else {
      throw new Error('User with ID 8 does not exist');
    }
  })
  .catch((error) => console.error(error));