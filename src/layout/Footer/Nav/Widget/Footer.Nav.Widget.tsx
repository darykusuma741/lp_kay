import FooterNavWidgetItems from './Items/Footer.Nav.Widget.Items';

const FooterNavWidget: React.FC = () => {
  return (
    <div className="md:block hidden">
      <div className="flex flex-row justify-end w-full">
        <div className="flex flex-row xl:gap-[9.13rem] gap-[2.13rem]">
          <FooterNavWidgetItems
            title="Company"
            items={[
              { label: 'About', href: '#' },
              { label: 'Features', href: '#' },
              { label: 'Works', href: '#' },
              { label: 'Career', href: '#' }
            ]}
          />
          <FooterNavWidgetItems
            title="Help"
            items={[
              { label: 'Customer Support', href: '#' },
              { label: 'Knowledgebase', href: '#' },
              { label: 'Terms & Conditions', href: '#' },
              { label: 'Privacy Policy', href: '#' }
            ]}
          />
          <FooterNavWidgetItems
            title="Resources"
            items={[
              { label: 'Free eBooks', href: '#' },
              { label: 'How to - Blog', href: '#' },
              { label: 'Youtube Playlist', href: '#' }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterNavWidget;
