import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 700;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 3px solid #2ecc71;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#services">Services</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#about">About</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#testimonials">Testimonials</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#carousel">Recents</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#team">Team</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#contact">Contact</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
