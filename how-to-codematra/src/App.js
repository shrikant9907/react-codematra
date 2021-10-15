import React, { useState } from 'react';
import Modal from "./components/modal/Modal";

function App() { 

  // Modal Flag: Default false means hide
  const [showModal, setShowModal]     = useState(false);

  // Method to show / hide the modal
  const handleToggleModal = () => {
    setShowModal(!showModal);
  }
 
  return (
    <>
     {/* Modal Trigger  */}
     <button className="btnui margin-top-50" onClick={handleToggleModal}>Toggle Button</button>

     {/* Modal Component */}
     <Modal show={showModal} close={handleToggleModal} />
    </>
  );
}

export default App;
