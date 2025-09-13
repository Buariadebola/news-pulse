import React from 'react'
import { BsShareFill } from 'react-icons/bs'
import { FaWhatsapp } from "react-icons/fa";

const WhatsappShareButton = ({ title, url }) => {

    const shareText = `${title} - ${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  return (
    <>
        <a
        href={whatsappUrl}
        target="_blank"
        >
        <button className='whatsapp-share'><BsShareFill/><FaWhatsapp style={{marginLeft: '5px'}}/></button>
        </a>
    </>
  )
}

export default WhatsappShareButton
