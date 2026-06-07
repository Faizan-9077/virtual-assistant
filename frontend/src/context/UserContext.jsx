import React, { createContext, useEffect, useState } from "react";
import axios from "axios"

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  const serverUrl = "http://localhost:8000";

  const [userData, setUserData] = useState(null)
  const [loadingUser, setLoadingUser] = useState(true)

  const handleCurrentUser = async() => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/current`,
        {withCredentials:true})
      setUserData(result.data)
    } catch (error) {
      if (error.response?.status !== 401) {
        console.log(error)
      }
      setUserData(null)
    } finally {
      setLoadingUser(false)
    }
  }

  useEffect(() => {
    handleCurrentUser()
  }, [])

  const value = {
    serverUrl,
    userData,
    setUserData,
    loadingUser,
    refreshCurrentUser: handleCurrentUser,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;