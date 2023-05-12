import React, { useContext } from "react";
import { fetchWooCommerceProducts } from "../../../../../utils/wooCommerceApi";
import Image from "next/image";
import styles from "../../../../../styles/ProductPage.module.css";
import QuantityButton from "../../../../../components/QuantityButton";
import RelatedProducts from "../../../../../components/RelatedProducts";
import Link from "next/link";
import { CartContext } from "../../../../../contexts/cartContext";
import { useRouter } from "next/router";
import Breadcrumb from "../../../../../components/BreadCrumb";
import { sortProductsByCategories } from "../../../../../utils/sortProductsByCategorie";

const ProductPage = ({ product, relatedProducts }) => {
  const [quantity, setQuantity] = React.useState(1);

  const [singleProduct] = product;
  const { addItemToCart } = useContext(CartContext);

  const router = useRouter();
  function handleAddToCart() {
    addItemToCart({
      id: singleProduct.id,
      name: singleProduct.name,
      price: singleProduct.price,
      image: singleProduct.images[0].src,
      quantity: quantity,
    });
    alert("product added");
    router.push("/shop/cart");
  }

  function clickHandler({ target }) {
    if (target.name === "increase") {
      setQuantity((prevQuant) => prevQuant + 1);
    }
    if (target.name === "decrease") {
      if (quantity <= 1) return;
      setQuantity((prevQuant) => prevQuant - 1);
    }
  }

  return (
    <div>
      {product.map((p) => (
        <div key={p.id} className={styles.container}>
          <div className={styles.imageAndTextContainer}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={p.images[0]?.src}
                alt={`image of ${p.name}`}
                layout="fill"
              />
            </div>
            <div className={styles.textContainer}>
              <Breadcrumb p={p} />
              <h3>{p.name}</h3>
              <p>{p.short_description.replace(/<\/?p>/g, "")}</p>
              <p>${p.price}</p>
              <QuantityButton
                onClick={handleAddToCart}
                clickHandler={clickHandler}
                quantity={quantity}
                addButton
              />
            </div>
          </div>
        </div>
      ))}
      <div className={styles.relatedProducts}>
        <RelatedProducts relatedProducts={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductPage;

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
      const productSlug = product?.slug;

      // Check if gender, category, and productSlug are defined and of string type
      if (
        typeof gender === "string" &&
        typeof category === "string" &&
        typeof productSlug === "string"
      ) {
        return {
          params: {
            gender,
            category,
            productSlug,
          },
        };
      }

      // Skip generating the path if any of the required parameters are missing or not a string
      return null;
    })
    .filter(Boolean);

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const { productSlug, gender, category } = params; // NEEDS TO BE SAME NAME AS DYNAMIC SLUG FILENAME
  const wooCommerceProducts = await fetchWooCommerceProducts(productSlug).catch(
    (error) => console.error(error)
  );

  const sortedProducts = sortProductsByCategories(wooCommerceProducts);

  const product = sortedProducts.filter((p) => p.slug === productSlug);

  const relatedIds = product.map((p) => p.related_ids);

  const relatedProducts = Object.values(wooCommerceProducts).filter((p) =>
    relatedIds[0].includes(p.id)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
      relatedProducts,
      gender,
      category,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
