import React, { useEffect, useRef } from 'react';
import { navContent } from '../../../mockData';
import cx from 'classnames';
import { Text } from '../../Text';


export const HeaderNavList = ({ className, menuOpen=false, setMenuOpen }) => {
  const ref = useRef();
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setMenuOpen(!menuOpen);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, ref, setMenuOpen]);

  return (
    <ul
      className={cx(menuOpen ? `${className}__nav-list menu_active` : `${className}__nav-list`)}
      ref={ref}
    >
      {menuOpen && <div className="close_icon" role="button" onClick={() => {setMenuOpen(!menuOpen)}}>&#x2715;</div>}
      {navContent.map(({ id,text, href }) => (
      <li key={id}>
        <a href={href} className={`${className}__nav-link`}>
          <Text tag="p" weight="w400" size="md" color="white">
            {text}
          </Text>
        </a>
      </li>
      ))}
    </ul>
  )
};
