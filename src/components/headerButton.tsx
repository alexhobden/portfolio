interface HeaderButtonProps {
  title: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ title }) => {
  return (
    <div className="w-36 text-[#ffffff] hover:text-blue-200 hover:cursor-pointer text-shadow-textr">
      <a href="#about-me">{title}</a>
    </div>
  );
};

export default HeaderButton;
