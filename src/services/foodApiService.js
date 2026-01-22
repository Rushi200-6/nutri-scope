export const fetchFoodByBarcode = async (code) => {
  const res = await fetch(
    `https://world.openfoodfacts.org/api/v0/product/${code}.json`
  );
  const data = await res.json();

  if (!data || data.status !== 1 || !data.product) return null;

  const p = data.product;
  const name = p.product_name || "Unknown Product";

  let ingredientsText = "";
  if (p.ingredients_text) ingredientsText = p.ingredients_text;
  else if (p.ingredients_text_en) ingredientsText = p.ingredients_text_en;
  else if (Array.isArray(p.ingredients)) {
    ingredientsText = p.ingredients.map(i => i.text).join(", ");
  }

  return { name, ingredientsText };
};