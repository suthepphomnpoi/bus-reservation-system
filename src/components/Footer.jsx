import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center border-top mt-5 pt-4 pb-4 text-muted">
      <small>© {year} Bus Reservation System</small>
    </footer>
  );
};

export default Footer;
