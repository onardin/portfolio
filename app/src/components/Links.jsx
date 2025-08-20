import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faEnvelope, faMailForward }      from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

export default function SocialLinks() {
  return (
    <ul className="social-links">
    <li>
        <a href="mailto:on2207@columbia.edu" target="_blank" rel="noopener noreferrer">
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} color="#ADD8E6" size="6x" />
            <FontAwesomeIcon
              icon={faEnvelope}
              inverse
              transform="shrink-6"
              size="6x"
            />
          </span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/onardin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa-layers fa-fw">
            {/* bottom layer: big circle */}
            <FontAwesomeIcon icon={faCircle} color="#333" size="6x" />
            {/* top layer: white GitHub mark */}
            <FontAwesomeIcon
              icon={faGithub}
              inverse
              transform="shrink-6"
              size="6x"
            />
          </span>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/onardin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faCircle} color="#2867B2" size="6x" />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              inverse
              transform="shrink-6"
              size="6x"
            />
          </span>
        </a>
      </li>
      
    </ul>
  )
}