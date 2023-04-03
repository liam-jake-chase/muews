import React from 'react';
import './FooterNav.scss';

export default function FooterNav() {

  return (
    <div className='footer'>
        <nav className='footer__nav'>
            <ul className='footer__ul'>
                <li className='footer__li'>
                    Profile
                </li>
                <li className='footer__li'>
                    Releases
                </li>
                <li className='footer__li'>
                    Events
                </li>
                <li className='footer__li'>
                    Media
                </li>
                <li className='footer__li'>
                    Social
                </li>
            </ul>
        </nav>
    </div>
  )
}
