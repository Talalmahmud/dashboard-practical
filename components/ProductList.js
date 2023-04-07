import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div className="mx-2 mb-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
