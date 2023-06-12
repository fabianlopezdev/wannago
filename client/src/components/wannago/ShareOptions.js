// Social Share Buttons
import { WhatsappShareButton } from 'react-share';
import { dateFormatter } from '../../utils/helperFunctions';

// Social Share Icons
import { WhatsappIcon } from 'react-share';

import { useState } from 'react';
import './SocialButtons.css';

const ShareOptions = ({ wannago }) => {
  const [copied, setCopied] = useState('Copy Link');

  const dateTime = dateFormatter(wannago.when);

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
            title={`*${wannago.hostName}* has a plan: \n\n ${wannago.what} *in* ${wannago.where} *on* ${dateTime.wannaGoFormat} *at* ${dateTime.time}. \n\n *Do you wannago?* Click on the link:  \n`}
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

export default ShareOptions;



