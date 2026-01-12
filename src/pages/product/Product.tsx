import ScrollToTopOnMount from '../../common/hooks/ScrollToTopOnMount';
import ProductBody from './body/Product.Body';
import ProductContetnt from './content/Product.Content';
import ProductHero from './hero/Product.Hero';

function Product() {
  return (
    <>
      <ScrollToTopOnMount />
      <ProductBody>
        {({ productContentRef, scrollToContent }) => (
          <>
            <ProductHero handleOnClick={scrollToContent} />
            <ProductContetnt ref={productContentRef} />
          </>
        )}
      </ProductBody>
    </>
  );
}

export default Product;
