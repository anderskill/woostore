import Header from "../../../../components/Header";
import Products from "../../../../components/Products";
import { sortProductsByCategories } from "../../../../utils/sortProductsByCategorie";
import { fetchWooCommerceProducts } from "../../../../utils/wooCommerceApi";

const CategoryPage = ({ categoryProducts }) => {
  return (
    <div>
      <Header />
      <Products products={categoryProducts} />
    </div>
  );
};
export default CategoryPage;

export async function getStaticPaths() {
  // Fetch all products from your API or data source
  const products = await fetchWooCommerceProducts().catch((error) =>
    console.error(error)
  );
  const sortedProducts = sortProductsByCategories(products);

  // Generate paths based on the products
  const paths = sortedProducts
    .map((product) => {
      const gender = product?.categories[0]?.slug;
      const category = product?.categories[1]?.slug;

      // Check if gender, category, and productSlug are defined and of string type
      if (typeof gender === "string" && typeof category === "string") {
        return {
          params: {
            gender,
            category,
          },
        };
      }

      // Skip generating the path if any of the required parameters are missing or not a string
      return null;
    })
    .filter(Boolean); // Remove any null values from the paths array

  return {
    paths,
    fallback: false, // or "blocking" if you want to use fallback pages
  };
}

export const getStaticProps = async ({ params }) => {
  const { category } = params; // NEEDS TO BE SAME NAME AS DYNAMIC SLUG FILENAME
  const wooCommerceProducts = await fetchWooCommerceProducts(category).catch(
    (error) => console.error(error)
  );

  const categoryProducts = wooCommerceProducts.filter((product) =>
    product.categories.some((cat) => cat.slug === category)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      categoryProducts,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
