import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function ProductCard({ name, src, price, href, slug, salePrice }) {
  const router = useRouter();

  const currPathNav = router.asPath;

  return (
    <Link href={`/shop/${href}/${slug}`} passHref>
      <div className={styles.container}>
        <>
          <Image src={src} height="274px" width="280px" alt="images" priority />
        </>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.priceContainer}>
          {salePrice && <p className={styles.salePrice}>${salePrice}</p>}
          <p className={styles.price}>${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
