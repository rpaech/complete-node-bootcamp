function replaceProductTags(template, product) {
  let output;
  output = template.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%NAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(
    /{%NOT_ORGANIC%}/g,
    !product.organic ? "not-organic" : ""
  );
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  return output;
}

export default replaceProductTags;
