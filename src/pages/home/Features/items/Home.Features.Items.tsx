interface HomeFeaturesItemsProps {
  src: string;
  title: string;
  content: string;
}

const HomeFeaturesItems: React.FC<HomeFeaturesItemsProps> = ({ src, title, content }) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="mb-4">
        <img src={src} className="h-8" alt="" />
      </div>
      <div className="font-ibm font-bold text-[1.125rem]">{title}</div>
      <div className="text-[1rem] font-Inter font-light">{content}</div>
    </div>
  );
};

export default HomeFeaturesItems;
