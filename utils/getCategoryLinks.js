import Link from "next/link";

export function getCategoryLinks(path) {
  if (path === "/shop") {
    return (
      <>
        <li>
          <Link href="/shop/men">Men</Link>
        </li>
        <li>
          <Link href="/shop/women">Women</Link>
        </li>
        <li>
          <Link href="/shop/accessories">Accessories</Link>
        </li>
      </>
    );
  }
  if (path === "/shop/women") {
    return (
      <>
        <li>
          <Link href="/shop/women/hoodies-women">Hoodies</Link>
        </li>
        <li>
          <Link href="/shop/women/shirts-women">Shirts</Link>
        </li>
      </>
    );
  }
  if (path === "/shop/men") {
    return (
      <>
        <li>
          <Link href="/shop/men/hoodies">Hoodies</Link>
        </li>
        <li>
          <Link href="/shop/men/shirts">Shirts</Link>
        </li>
      </>
    );
  }
  return null; // Default return value or handle unsupported paths
}
