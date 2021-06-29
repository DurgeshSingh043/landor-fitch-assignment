import { ICONS } from '../../../constants/_icons';
import { Button, Icon } from '../../atoms';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <Icon className="header__menu" name={ICONS.Menu} />
      <Button className="header__logo" text="Logo" />
      <Icon className="header__search" name={ICONS.Search} />
    </div>
  );
};

export default Header;
