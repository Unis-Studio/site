document.addEventListener("DOMContentLoaded", async () => {
  // 1. On charge le Header et on attend qu'il soit fini (await)
  const headerRes = await fetch("includes/header.html");
  const headerData = await headerRes.text();
  document.getElementById("header").innerHTML = headerData;

  // 2. On charge le Footer et on attend (await)
  const footerRes = await fetch("includes/footer.html");
  const footerData = await footerRes.text();
  document.getElementById("footer").innerHTML = footerData;
});