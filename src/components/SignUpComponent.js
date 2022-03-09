import { useContext } from "react";
import { AppContext } from "../utils/Context";
import Bio from "../images/bio-black.png";
import Modal from "./Modal";
import ConfirmationModal from "./ConfirmationModal";

export default function SignUpComponent() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    openModal,
    setOpenModal,
    openConfirm,
    setOpenConfirm,
    success,
    setSuccess,
  } = useContext(AppContext);

  function clearInputs() {
    if (
      username.length > 1 &&
      password.length > 1 &&
      confirmPassword.length > 1
    ) {
      setUsername("");
      setPassword("");
      setConfirmPassword("");
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

        <input
          type="password"
          required
          placeholder="confirm password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="button-div">
        <button onClick={() => clearInputs()}>Register</button>

        <span onClick={() => setOpenModal(!openModal)}>
          <img src={Bio} alt="bio" />
        </span>
      </div>

      {/* Modal to register fingerprint */}
      {openModal && (
        <Modal
          title="Register your fingerprint"
          description="Place your finger on the scanner"
        />
      )}

      {/* Modal to show confirmation of registration */}

      {openConfirm && (
        <ConfirmationModal
          title="Registration Successful"
          error="Registration Failed!"
          success={success}
          setSuccess={setSuccess}
        />
      )}
    </>
  );
}
