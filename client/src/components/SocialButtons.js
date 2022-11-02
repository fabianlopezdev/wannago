// Social Share Buttons
import { EmailShareButton, WhatsappShareButton } from 'react-share';

// Social Share Icons
import { EmailIcon, WhatsappIcon } from 'react-share';

import { useState } from 'react';
import './SocialButtons.css';
import { guestLinkGenerator } from '../utils/helperFunctions';

const SocialButtons = ({ wannaGoId, userName }) => {
  const [copied, setCopied] = useState('Copy Link');
  const guestLink = guestLinkGenerator(wannaGoId);

  const onClickCopyLink = () => {
    navigator.clipboard.writeText(guestLink);
    setCopied('Copied');
  };
  return (
    <>
      <div className='socialContainer'>
        <h4>Share the wannaGo:</h4>
        <div className='socialButtons'>
          <button
            title='Copy Link'
            className='copyButton'
            onClick={onClickCopyLink}
          >
            {copied}
          </button>
          <WhatsappShareButton
            title={`Do you wannaGo?`}
            url={guestLink}
          >
            <div title='Via WhatsApp'>
            <WhatsappIcon
              size={50}
              round
              />
              </div>
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
};

export default SocialButtons;

