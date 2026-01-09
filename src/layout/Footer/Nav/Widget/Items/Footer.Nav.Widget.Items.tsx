interface NavItem {
  label: string;
  href: string;
}

interface FooterNavWidgetItemsProps {
  title: string;
  items: NavItem[];
}

const FooterNavWidgetItems: React.FC<FooterNavWidgetItemsProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col text-midnight gap-2 text-[0.9rem]">
      <h3 className="font-ibm font-semibold">{title}</h3>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="font-light hover:cursor-pointer hover:text-midnight/20 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default FooterNavWidgetItems;
