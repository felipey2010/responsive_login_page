import { useContext } from "react";
import { PuffLoader } from "react-spinners";
import { AiOutlineClose } from "react-icons/ai";
import { AppContext } from "../utils/Context";
import bioClicked from "../images/bio-black.png";

export default function Modal({ title, description }) {
  const {
    setOpenModal,
    clicked,
    setClicked,
    username,
    setSuccess,
    setOpenConfirm,
  } = useContext(AppContext);

  function handleClick() {
    if (username.length > 1) {
      setSuccess(true);
      setOpenModal(false);
      setOpenConfirm(true);
    } else {
      setSuccess(false);
      setOpenConfirm(false);
    }
    setClicked(!clicked);
  }

  return (
    <>
      <div className="modal-container">
        <div className="modal-inner-container">
          <div className="close-btn-div">
            <AiOutlineClose onClick={() => setOpenModal(false)} />
          </div>
          <h3>{title}</h3>

          <p>{description}</p>

          <div className="loader-div" onClick={() => handleClick()}>
            <PuffLoader size={60} color="#dd4136" />
          </div>

          {clicked && (
            <div className="print-div">
              <img src={bioClicked} alt="bio" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
