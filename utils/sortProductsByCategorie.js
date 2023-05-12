// I DO THIS BECAUSE SOME PRODUCTS HAVE REVERSED ORDER OF GENDER / CATEGORY
// I WANT THE "first" [0] CATEGORY TO ALWAYS BE MEN/WOMEN/ACCESSORIES
// AND NOT WOMEN-HOODIES, OR SHIRTS AND GENDER IS [1]

export function sortProductsByCategories(products) {
  const sortedProducts = products.map((p) => {
    const sortedCategories = p.categories.sort((a, b) => {
      if (a.slug === "men" && b.slug !== "men") {
        return -1;
      }
      if (a.slug === "women" && b.slug !== "women") {
        return -1;
      }
      if (a.slug !== "men" && b.slug === "men") {
        return 1;
      }
      if (a.slug !== "women" && b.slug === "women") {
        return 1;
      }
      return 0;
    });

    const sortedSlug = sortedCategories.map(({ slug }) => slug).join("/");

    return {
      ...p,
      sortedCategories,
      sortedSlug,
    };
  });

  return sortedProducts;
}
