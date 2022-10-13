import React from 'react';
import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';

export const Header = () => {
  return (
    <>
     {window.innerWidth > 768 ? <HeaderDesktop /> : <HeaderMobile />}
    </>
  )
};
