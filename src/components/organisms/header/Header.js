import { useState } from 'react';
import { ICONS } from '../../../constants/_icons';
import { Button, Icon } from '../../atoms';
import './header.scss';

const Header = () => {
  const [activeNav, setActiveNav] = useState('nav1');

  const navClickHandler = (event) => {
    event.preventDefault();
    const name = event?.target?.getAttribute('name');
    name && setActiveNav(name);
  };
  return (
    <div className="header" onClick={navClickHandler}>
      <div className="header__nav-left">
        <Icon
          className="header__nav-left__menu-icon"
          isTab={true}
          name={ICONS.Menu}
        />
        <a
          href="/"
          name="nav1"
          className={`header__nav-left__nav nav ${
            activeNav === 'nav1' ? 'active' : ''
          }`}
        >
          Nav1
        </a>
        <a
          href="/"
          name="nav2"
          className={`header__nav-left__nav nav ${
            activeNav === 'nav2' ? 'active' : ''
          }`}
        >
          Nav2
        </a>
      </div>
      <Button className="logo" text="Logo" />
      <div className="header__nav-right-search">
        <a
          href="/"
          name="nav3"
          className={`header__nav-right-search__nav nav ${
            activeNav === 'nav3' ? 'active' : ''
          }`}
        >
          Nav3
        </a>
        <a
          href="/"
          name="nav4"
          className={`header__nav-right-search__nav nav ${
            activeNav === 'nav4' ? 'active' : ''
          }`}
        >
          Nav4
        </a>
        <Icon
          className="header__nav-right-search"
          isTab={true}
          name={ICONS.Search}
        />
      </div>
    </div>
  );
};

export default Header;
