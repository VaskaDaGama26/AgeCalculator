import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      text: "Challenge by",
      label: "Frontend Mentor",
      href: "https://www.frontendmentor.io?ref=challenge",
    },
    {
      id: 2,
      text: "Coded by",
      label: "Vasiliy Kirichenko",
      href: "https://www.frontendmentor.io/profile/VaskaDaGama26",
    },
  ];

  return (
    <footer className="footer poppins-regular-italic">
      {links.map((link) => (
        <div key={link.id}>
          {link.text}&nbsp;
          <a className="poppins-bold link" target="_blank" href={link.href}>
            {link.label}
          </a>
          <br />
        </div>
      ))}
    </footer>
  );
};

export default Footer;
