import './title.scss';

const Title = ({ text, className, component = 'p' }) => {
  const CustomTag = component;
  return <CustomTag className={`title ${className}`}>{text}</CustomTag>;
};

export default Title;
