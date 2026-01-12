interface ProductContetntProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const ProductContetnt: React.FC<ProductContetntProps> = ({ ref }) => {
  return <div ref={ref} className="w-screen h-screen bg-white"></div>;
};

export default ProductContetnt;
