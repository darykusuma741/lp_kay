import { useRef } from 'react';

interface ProductBodyProps {
  children: (props: {
    productContentRef: React.RefObject<HTMLDivElement | null>;
    scrollToContent: () => void;
  }) => React.ReactNode;
}

const ProductBody: React.FC<ProductBodyProps> = ({ children }) => {
  const productContentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    productContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-full">{children({ productContentRef, scrollToContent })}</div>
  );
};

export default ProductBody;
