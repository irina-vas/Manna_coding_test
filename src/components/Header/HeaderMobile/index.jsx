import React, { useState } from 'react';
import { HeaderNavList } from '../HeaderNavList';
import { HeaderTitle } from '../HeaderTitle';
import { Text } from '../../Text';

export const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="headerMobile">
      <HeaderNavList setMenuOpen={setMenuOpen} className="headerMobile" menuOpen={menuOpen} />
      <nav className="headerMobile__nav">
        <div className="headerMobile__menu" role="button" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="https://news.ycombinator.com/login?goto=ask" className="header__login">
          <Text tag="p" weight="w400" size="md" color="black">Login</Text>
        </a>
      </nav>
      <HeaderTitle />
    </header>
  )
}