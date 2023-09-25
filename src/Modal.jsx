import React, { useState } from "react";

export function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="modal-bg">
      <div className="wrp-text-about">
        <p className="header-text-about">Let's talk about your projects</p>
      </div>
      <button onClick={toggleModal} className="btn-modal">
        message me!
      </button>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="window-popup">
              <button className="close-modal" onClick={toggleModal}>
                close
              </button>
              <div className="text-wrp">
                <h3 className="header-about">contacts</h3>
                <form>form</form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* background info */}
    </div>
  );
}
