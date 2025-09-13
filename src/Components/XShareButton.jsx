import React from 'react'
import { BsShareFill } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa6';

const XShareButton = ({ title, url }) => {

    const shareText = `${title} - ${url}`;
    const XUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  return (
    <>
        <a
        href={XUrl}
        target="_blank"
        >
        <button className='x-share'><BsShareFill/><FaTwitter style={{marginLeft: '5px'}}/></button>
        </a>
    </>
  )
}

export default XShareButton
