import ScrollToTopOnMount from '../../common/hooks/ScrollToTopOnMount';
import ProductBody from './body/Product.Body';
import ProductContetnt from './content/Product.Content';

function Product() {
  return (
    <>
      <ScrollToTopOnMount />
      <ProductBody>
        {({ productContentRef }) => (
          <>
            {/* <ProductHero handleOnClick={scrollToContent} /> */}
            <ProductContetnt ref={productContentRef} />
          </>
        )}
      </ProductBody>
    </>
  );
}

export default Product;
