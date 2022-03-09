import { useContext } from "react";
import { AppContext } from "./utils/Context";
import login from "./images/login.svg";
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";

function App() {
  const { toggleLogin, setToggleLogin } = useContext(AppContext);

  return (
    <div className="App">
      <div className="container">
        <div className="top-div">
          <p onClick={() => setToggleLogin(!toggleLogin)}>
            {toggleLogin ? "Login" : "Register"}
          </p>
        </div>

        <div className="middle-div">
          <img src={login} alt="login" />

          <p>
            {toggleLogin ? "Create your account" : "Log in to your account"}
          </p>
        </div>

        {toggleLogin ? <SignUpComponent /> : <LoginComponent />}
      </div>
    </div>
  );
}

export default App;
