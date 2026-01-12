import csTrust from '../../../assets/cs-trust.png';
import dataPrivacy from '../../../assets/data-privacy.png';
import csSupport from '../../../assets/cs-support.png';
import HomeFeaturesItems from './items/Home.Features.Items';

const HomeFeatures: React.FC = () => {
  return (
    <div className="w-screen flex lg:flex-row flex-col overflow-hidden justify-between items-center gap-20 lg:py-36 py-10 lg:px-36 px-10 bg-white/97">
      <HomeFeaturesItems
        src={csTrust}
        title="Customer Trust"
        content="At Kay Digital Studio, we value the trust our clients place in us. Every project we
        undertake is built on a foundation of integrity, transparency, and commitment to quality.
        Your success is our priority."
      />
      <div className="lg:block hidden border-l border-mist h-40"></div>
      <HomeFeaturesItems
        src={dataPrivacy}
        title="Data and Privacy"
        content="At Kay Digital Studio, we respect your privacy and are committed to protecting your personal data. Any information you provide to us is collected, stored, and processed responsibly and securely."
      />
      <div className="lg:block hidden border-l border-mist h-40"></div>
      <HomeFeaturesItems
        src={csSupport}
        title="24/7 Customer Support"
        content="At Kay Digital Studio, we are committed to providing exceptional support around the clock. Our 24/7 customer service team is always ready to assist you, ensuring your questions are answered and your needs are met promptly."
      />
    </div>
  );
};

export default HomeFeatures;
