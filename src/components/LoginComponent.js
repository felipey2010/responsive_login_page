import { useContext } from "react";
import { AppContext } from "../utils/Context";
import Bio from "../images/bio-black.png";
import Modal from "./Modal";
import ConfirmationModal from "./ConfirmationModal";

export default function LoginComponent() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    openModal,
    setOpenModal,
    openConfirm,
    setOpenConfirm,
    success,
    setSuccess,
  } = useContext(AppContext);

  function clearInputs() {
    if (username.length > 1 && password.length > 1) {
      setUsername("");
      setPassword("");
      setSuccess(true);
    } else {
      setSuccess(false);
    }

    setOpenConfirm(true);
  }

  return (
    <>
      <div className="input-div">
        <input
          type="text"
          required
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          required
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className="button-div">
        <button onClick={() => clearInputs()}>Login</button>

        <span onClick={() => setOpenModal(!openModal)}>
          <img src={Bio} alt="bio" />
        </span>
      </div>

      {/* Modal to login with fingerprint */}
      {openModal && (
        <Modal
          title="Fingerprint Authentication"
          description="Place your registered finger on the scanner"
        />
      )}

      {/* Show confirmation notification */}
      {openConfirm && (
        <ConfirmationModal
          title="Login Successful"
          error="Login Failed!"
          success={success}
          setSuccess={setSuccess}
        />
      )}
    </>
  );
}
