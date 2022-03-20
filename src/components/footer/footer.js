import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGithub,
  faTwitter,
  faBehanceSquare,
  faCodepen} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import './footer.css'

export default function Footer(){
  return (
    <div className="footer">
      <div className="footCont">
        <span className="copyrightText">
          Copyright © 2022. Uber Hands. All rights reserved
        </span>
        <div className="socialinks">
          <a target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:sujalmodanwal9@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  )
}
