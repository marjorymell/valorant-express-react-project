import React from "react";
import { useFooterContext } from "../../contexts/Footer";
import {
  FooterContainer,
  FooterText,
  FooterLinks,
  FooterLink,
} from "./FooterStyles";

const Footer = () => {
  const { footerText, footerLinks } = useFooterContext();

  return (
    <FooterContainer>
      <FooterText>{footerText}</FooterText>
      <FooterLinks>
        {footerLinks.map((link, index) => (
          <FooterLink
            as="a"
            key={index}
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </FooterLink>
        ))}
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
