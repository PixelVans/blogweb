module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("admin")
    eleventyConfig.addPassthroughCopy("styles.css")
    eleventyConfig.addPassthroughCopy("assets")
    eleventyConfig.addPassthroughCopy("scripts.js")

    
    eleventyConfig.addFilter("dayOnly", function(date) {
      const options = { 
          day: 'numeric', 
          month: 'long', // Use 'short' for abbreviated month names
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true // Set to false for 24-hour format
      };
      return new Date(date).toLocaleString('en-US', options);
  });
  
  
    };
  ;
  
  