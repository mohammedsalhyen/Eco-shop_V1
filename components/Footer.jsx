import React from 'react'
import { AiFillFacebook, AiOutlineWhatsApp} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2024 Mohammed Salhyen All rights reserverd</p>
      <p className="icons">
        <AiFillFacebook />
        <AiOutlineWhatsApp />
      </p>
    </div>
  )
}

export default Footer
