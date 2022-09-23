import React from "react";
import {
  FooterBorder,
  FooterContainer,
  FooterIcon,
  FooterMenu,
  FooterMenuContainer,
  FooterWrap,
  IconContainer,
  IconText,
  SocialIconLink,
  SocialIcons,
  SocialIconText,
  SocialMediaWrap,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBorder />
      <FooterWrap>
        <IconContainer>
          <FooterIcon size="180" />
          <IconText>&copy; 2022 Mocha Patisserie</IconText>
        </IconContainer>
        <FooterMenu>
          <li>Delivery</li>
          <li>Pick Up</li>
          <li>Catering</li>
          <li>Menu</li>
          <li>Locations</li>
          <li>Gift Catalog</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </FooterMenu>
        <FooterMenu>
          <li>Rewards</li>
          <li>FAQs</li>
          <li>Community</li>
          <li>Careers</li>
          <li>Wholesale</li>
          <li>Instructions</li>
          <li>State Privacy Notice</li>
        </FooterMenu>
        <SocialMediaWrap>
          <SocialIconText>Find us on</SocialIconText>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
