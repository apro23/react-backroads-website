import React from "react";

const SocialLink = (props) => {
  const { href, icon } = props;
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className={props.section + "-icon"}
        rel="noreferrer"
      >
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
