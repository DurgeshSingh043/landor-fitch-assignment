import { ICONS } from '../../../constants/_icons';
import Icon from '../Icon';
import './button.scss';

const Button = ({ text, children, className, ...other }) => (
  <button className={`button ${className}`} {...other}>
    {text || children}
  </button>
);

export default Button;

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`next-arrow ${className}`}
      //style={{ ...style }}
      onClick={onClick}
    >
      <Icon isTab={true} name={ICONS.ArrowRight} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`prev-arrow ${className}`}
      //style={{ ...style }}
      onClick={onClick}
    >
      <Icon isTab={true} name={ICONS.ArrowLeft} />
    </div>
  );
};

export { NextArrow, PrevArrow };
