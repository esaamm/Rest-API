import { v4 as uuidv4 } from "uuid";

export let users = [
  // {
  //   firstName: "John",
  //   lastName: "Doe",
  //   age: 25,
  // },
  // {
  //   firstName: "Mary",
  //   lastName: "Doe",
  //   age: 5,
  // },
];

export const getUsers = (req, res) => {
  // console.log(users);//We do console.log to know whether this callback fn is getting executed or not .
  res.send(users); // This line sends msg to the client side .The msg is users array.
};

export const getUser = (req, res) => {
  //Any character after colon(:) + a character or string after colon -> This makes sure whatever we enter after users/ in the url gives the below msg only .
  // req.params gives what we enter in the url after users/
  // params gives the parameter to our function.Here the paremeter is id.
  // console.log(req.params);
  // const id = req.params; // Gives id as object .
  const { id } = req.params; // Destructured the id .

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser); // This line in get method shows whatever +nt in the brackets of res.send to the client screen .
};

export const postUsers = (req, res) => {
  // console.log("POST ROUTE REACHED"); // Tells whether this callback fn is fired or not .
  // req.body contains the data that we want to add in the database from the client/frontend . Here the client from where we r sending info is POSTMAN API where we type the data .
  // console.log(req.body);
  const user = req.body;

  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId); // Adding the data to the above array of users .

  res.send(`The data with username ${user.firstName} added to the database !`); //This line sends the above msg to the client side when we do the post request.
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id); //filter fn array ki jis bhi value pr true hota hai vo value array me rhne deta hai and jis value pr false hota hai vo value delete kr deta hai array se .

  res.send(`The user with user id ${id} deleted from the database !`);
};

export const patchUser = (req, res) => {
  const { id } = req.params;

  // Finding user with the given id using find function .
  const user = users.find((user) => user.id === id);

  // Finding what info client entered for updation which is +nt in req.body .
  const { firstName, lastName, age } = req.body;

  // Checking what details user entered for updation.And updating them.
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with id ${id} is updated !`);
};
