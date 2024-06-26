import React from 'react'

const PageLink = (props) => {
    const { href, text } = props;
  return (
    <li>
      <a href={href} className={props.section + "-link"}>
        {text}
      </a>
    </li>
  );
}

export default PageLink