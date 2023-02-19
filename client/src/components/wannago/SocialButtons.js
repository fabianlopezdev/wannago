// Social Share Buttons
import { EmailShareButton, WhatsappShareButton } from 'react-share';

// Social Share Icons
import { EmailIcon, WhatsappIcon } from 'react-share';

import { useState } from 'react';
import './SocialButtons.css';
import { guestLinkGenerator } from '../../utils/helperFunctions';
import { Link } from 'react-router-dom';
const SocialButtons = ({ wannago }) => {
  const [copied, setCopied] = useState('Copy Link');
  // const guestLink = guestLinkGenerator(wannaGoId);

  const onClickCopyLink = () => {
    navigator.clipboard.writeText(wannago.guestLink);
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
            title={`${wannago.hostName} has a plan: \n\n ${wannago.what} *in* ${wannago.where} *on* ${wannago.when}. \n\n *Do you wannago?* Click on the link:  \n`}
            url={wannago.guestLink}
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


