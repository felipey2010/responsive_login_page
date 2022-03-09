import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { AppContext } from "../utils/Context";

export default function ConfirmationModal({ title, error, success }) {
  const { setOpenConfirm } = useContext(AppContext);

  return (
    <>
      <div className="modal-container">
        <div className="modal-inner-container">
          <div className="close-btn-div">
            <AiOutlineClose onClick={() => setOpenConfirm(false)} />
          </div>
          {success ? <h3>{title}</h3> : <h3>{error}</h3>}

          <div className="confirmation-div">
            {success ? (
              <FaCheck className="success" />
            ) : (
              <AiOutlineClose className="failed" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
