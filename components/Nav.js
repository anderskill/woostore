import React, { useContext } from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../mock/categories";
import { CartContext } from "../contexts/cartContext";
import HorizontalLine from "../components/HorizontalLine";

const Nav = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navItemsContainer}>
          <div className={styles.imageContainer}>
            <Link href="/shop">
              <a>
                <Image
                  className={styles.image}
                  src="/logo.png"
                  layout="fill"
                  alt="image of logo"
                />
              </a>
            </Link>
          </div>
          {categories.map((category) => {
            const categorySlug = category.slug;
            return (
              <div key={category.name} className={styles.dropdown}>
                <Link
                  href={`/shop/${category.slug}`}
                  className={styles.dropdownItem}
                >
                  {category.name}
                </Link>
                <div className={styles.dropdownContent}>
                  {category?.subcategories?.map((subcategory) => (
                    <Link
                      key={subcategory.name}
                      href={`/shop/${categorySlug}/${subcategory.slug}`}
                    >
                      {subcategory.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <div className={styles.cartContainer}>
            <Link href="/shop/cart">
              <a>
                <Image
                  src="/shopping-cart.png"
                  width={20}
                  height={20}
                  alt="image of a shopping cart icon"
                />
              </a>
            </Link>
            {cartItems.length > 0 && (
              <Link href="/shop/cart" passHref>
                <span className={styles.cartCount}>{cartItems.length}</span>
              </Link>
            )}
          </div>
        </div>
        <HorizontalLine />
      </div>
    </>
  );
};

export default Nav;
