document.addEventListener("DOMContentLoaded", function() {
  /**
  * If no sub-featured articles exist, hide the "Top Stories" header from the page
  */
  function checkSubFeaturedHeader() {
  const hasItems = !!document.querySelector(".cl-top-articles-list");
  const header = document.querySelector(".articles__top-stories--header");
  if (!hasItems) {
    header.style.display = "none"; 
  };
  };

  // All Function Calls
  checkSubFeaturedHeader();
});
