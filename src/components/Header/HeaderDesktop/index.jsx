import React from "react";
import { HeaderNavList } from '../HeaderNavList';
import { HeaderTitle } from '../HeaderTitle';
import { Text } from '../../Text';

export const HeaderDesktop = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <HeaderNavList className="header" />
        <a href="https://news.ycombinator.com/login?goto=ask" className="header__login">
          <Text tag="p" weight="w400" size="md" color="white">Login</Text>
        </a>
      </nav>
      <HeaderTitle />
    </header>
  )
};
