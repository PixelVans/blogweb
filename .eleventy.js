module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("admin")
    eleventyConfig.addPassthroughCopy("styles.css")
    eleventyConfig.addPassthroughCopy("assets")
    eleventyConfig.addPassthroughCopy("scripts.js")
    };
  ;
  
  