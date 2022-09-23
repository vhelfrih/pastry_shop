import React from "react";
import {
  FooterBorder,
  FooterContainer,
  FooterIcon,
  FooterMenu,
  FooterMenuContainer,
  FooterWrap,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBorder />
      <FooterWrap>
        <FooterMenu>
          <li>
            <FooterIcon size="180" />
          </li>
          <li>2022 Mocha Patisserie</li>
        </FooterMenu>
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
        {/* <SocialIcons>
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
            href="//www.twitter.com/briandesignz"
            target="_blank"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
            <FaLinkedin /> */}
        {/* </SocialIconLink>
        </SocialIcons> */}
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
