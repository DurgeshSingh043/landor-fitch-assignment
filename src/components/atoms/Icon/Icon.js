import { arrowLeft, arrowRight, menu, search } from '../../../assests';
import { ICONS } from '../../../constants/_icons';

import './icon.scss';

const getSvgIcon = (name) => {
  switch (name) {
    case ICONS.ArrowLeft:
      return arrowLeft;
    case ICONS.ArrowRight:
      return arrowRight;
    case ICONS.Search:
      return search;
    case ICONS.Menu:
      return menu;
    default:
      return null;
  }
};

const Icon = ({ name = 'user', className, ...other }) => {
  return (
    <img
      className={`icon ${className}`}
      alt={name}
      src={getSvgIcon(name)}
      {...other}
    ></img>
  );
};

export default Icon;
