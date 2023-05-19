import { fetchWooCommerceProducts } from "../../../utils/wooCommerceApi";
import Products from "../../../components/Products";
import Header from "../../../components/Header";
import { sortProductsByCategories } from "../../../utils/sortProductsByCategorie";

const GenderPage = ({ genderProducts }) => {
  return (
    <div>
      <Header />
      <Products products={genderProducts} />
    </div>
  );
};
export default GenderPage;

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

      // Check if gender, category, and productSlug are defined and of string type
      if (typeof gender === "string" && gender !== "accessories") {
        return {
          params: {
            gender,
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
  const { gender } = params; // NEEDS TO BE SAME NAME AS DYNAMIC SLUG FILE NAME
  const wooCommerceProducts = await fetchWooCommerceProducts(gender).catch(
    (error) => console.error(error)
  );

  const genderProducts = wooCommerceProducts.filter((product) =>
    product?.categories?.some((cat) => cat?.slug === gender)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      genderProducts,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
