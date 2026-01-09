interface HomeAboutUsFactItemsProps {
  title: string;
  subtitle: string;
  subtitle2: string;
}

const HomeAboutUsFactItems: React.FC<HomeAboutUsFactItemsProps> = ({
  title,
  subtitle,
  subtitle2
}) => {
  return (
    <div className="flex flex-col text-white font-ibm text-center">
      <label className="text-[2.25rem] mb-1.5">{title}</label>
      <label className="text-stone mb-[0.3rem]">{subtitle}</label>
      <label className="text-[0.8rem] text-stone font-thin">{subtitle2}</label>
    </div>
  );
};

export default HomeAboutUsFactItems;
