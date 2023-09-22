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
      <button onClick={toggleModal} className="btn-modal">
        about
      </button>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="window-popup">
              <button className="close-modal" onClick={toggleModal}>
                close
              </button>
              <div className="text-wrp">
                <h3 className="header-about">about me</h3>
                <p className="text-about">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  tristique suscipit vehicula. Phasellus eget dolor fringilla,
                  porta nisi Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nulla tristique suscipit vehicula. Phasellus eget dolor
                  fringilla, porta ni Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nulla tristique suscipit vehicula. Phasellus
                  eget dolor fringilla, porta ni Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nulla tristique suscipit
                  vehicula. Phasellus eget dolor fringilla, porta ni non,
                  fermentum libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* background info */}
    </div>
  );
}
