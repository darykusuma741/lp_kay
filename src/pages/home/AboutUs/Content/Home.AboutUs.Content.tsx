import aboutUsItem1 from '../../../../assets/about-us-item-1.png';

const HomeAboutUsContent: React.FC = () => {
  return (
    <div className="flex-col lg:flex-row flex justify-between lg:gap-31 gap-10 items-center">
      <img src={aboutUsItem1} className="w-100" />
      <p className="text-white lg:text-[.9rem] text-[.8rem] leading-loose">
        Kay Digital Studio is a company engaged in information technology and interior development.
        We provide website development, mobile application development, and other digital solutions
        to support business growth in the modern era. In addition, Kay Digital Studio offers
        interior development services ranging from design to construction stages, focusing on
        aesthetics, functionality, and quality workmanship. In addition, Kay Digital Studio offers
        interior development services ranging from design to construction stages, focusing on
        aesthetics, functionality, and quality workmanship.
      </p>
    </div>
  );
};

export default HomeAboutUsContent;
