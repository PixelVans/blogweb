module.exports = function(eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("scripts.js");

  // Custom filter to format the date
  eleventyConfig.addFilter("dayOnly", function(date) {
      const options = { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
      };
      return new Date(date).toLocaleString('en-US', options);
  });

  // Custom filter to get unique values from an array
  eleventyConfig.addFilter("unique", function(array) {
      return [...new Set(array)];
  });

  // Custom filter to map over an array
  eleventyConfig.addFilter("map", function(array, func) {
      if (typeof func === 'function') {
          return array.map(func);
      }
      return array;  // return array if func is not a valid function
  });

  // Define collections based on the category field
  eleventyConfig.addCollection("poetry", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").filter(function(item) {
        return item.data.category === "Poetry";
    });
  });

  eleventyConfig.addCollection("music", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").filter(function(item) {
        return item.data.category === "Music";
    });
  });

  eleventyConfig.addCollection("books", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").filter(item => 
        item.data.category === "Book" && item.data.chapters
    );
});


  eleventyConfig.addCollection("nature", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").filter(function(item) {
        return item.data.category === "Nature";
    });
  });

  // Optional: A collection for all posts (if needed elsewhere)
  eleventyConfig.addCollection("allPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md");
  });
};
