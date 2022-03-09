import { useState, createContext, useEffect } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  //Global Variables
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toggleLogin, setToggleLogin] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [success, setSuccess] = useState(false);

  //Loading function
  // function loadPage() {
  //   setLoading(true);
  //   //Clear loading screen after 2 seconds
  //   const timeoutId = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timeoutId);
  // }

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        username,
        setUsername,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        toggleLogin,
        setToggleLogin,
        openModal,
        setOpenModal,
        clicked,
        setClicked,
        openConfirm,
        setOpenConfirm,
        success,
        setSuccess,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
