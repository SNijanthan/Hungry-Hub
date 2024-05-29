import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Nijanthan S",
  defaultUser: "Default User",
});

export default userContext;
