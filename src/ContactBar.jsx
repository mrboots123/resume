import React from 'react';
import {SiGithub, SiLinkedin} from "react-icons/si";
import * as Fa from "react-icons/si";

const Icon = props => {
    const { iconName, size, color } = props;
    console.log(iconName)
    const icon = React.createElement(Fa[iconName]);
    return (
        <div style={{ fontSize: size, color: color }}>{icon}</div>
    );
};

const ContactBar = ({ sites }) => {
    return (
        <div className="d-flex w-100 py-2">
            <div className="d-flex ms-auto">
                {
                  sites.map(site => {
                      const { color, logo, url } = site;
                      return <a href={url} className="ps-2" target="_blank">
                          {
                              <Icon iconName={logo} color={color} size={30}/>
                          }
                      </a>
                  })
                }
            </div>
        </div>
    );
};

export default ContactBar;
