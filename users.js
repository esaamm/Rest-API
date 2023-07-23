import express, { json } from "express";

import {
  getUsers,
  getUser,
  patchUser,
  deleteUser,
  postUsers,
} from "../container/user.js";

const router = express.Router();

// We can make get request from browser as well as POST API . To make get request from browser refresh the browser in this case .

// Here all routes start with /users

router.get("/", getUsers);

router.post("/", postUsers);

// Show the details of user with id to the client screen .
router.get("/:id", getUser);

router.delete("/:id", deleteUser);

// Patch method is used for slight modification/updation in data .
// Put method is used when we have to update all the data .
router.patch("/:id", patchUser);

export default router;
