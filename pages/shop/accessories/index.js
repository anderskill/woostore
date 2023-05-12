import { fetchWooCommerceProducts } from "../../../utils/wooCommerceApi";
import Products from "../../../components/Products";
import Header from "../../../components/Header";

const AccessoriesPage = ({ accessoriesProducts }) => {
  return (
    <div>
      <Header />
      <Products products={accessoriesProducts} />
    </div>
  );
};
export default AccessoriesPage;

export const getStaticProps = async () => {
  const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
    console.error(error)
  );

  const accessoriesProducts = wooCommerceProducts.filter((product) =>
    product.categories.some((cat) => cat.slug === "accessories")
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      accessoriesProducts,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
