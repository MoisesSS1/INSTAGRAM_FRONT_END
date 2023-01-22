import { createContext } from "react";

const UserContext = createContext(localStorage.getItem('token'))

export default UserContext