/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../../assets/images/logo.png';
import { Text } from '../../Text';

export const HeaderTitle = () => {
  return (
    <div className="header__wrapper">
      <a className="header__logo" href="#">
        <img src={logo} alt="HN logo" />
      </a>
      <Text size="xlg" weight="w700" color="orange" tag="h1" className="header__title">HACKER NEWS</Text>
    </div> 
  )
};
