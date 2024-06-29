const items = document.querySelectorAll("#categories .item");
const h2Count = document.querySelectorAll("#categories h2").length;

console.log(`Number of categories: ${h2Count}`);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
    const liCount = item.querySelectorAll("li").length;
   
    console.log(`Category: ${title}`);
    console.log(`Elements: ${liCount}`);
});
