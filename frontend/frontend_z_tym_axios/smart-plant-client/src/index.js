const axios = require("axios").default;

const newUser = {
  firstname: "Natalia",
  surname: "Puca",
};

const createUser = async () => {
  const res = await axios.post("http://localhost:3000/users", newUser);
};

createUser();
