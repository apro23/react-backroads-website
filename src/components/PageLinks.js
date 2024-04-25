import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ section }) => {
  return (
    <ul className={section + "-links"} id={section + "-links"}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} section={section} />;
      })}
    </ul>
  );
};

export default PageLinks;
