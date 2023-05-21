const { DateTime } = require("luxon");
const safeLinks = require('@sardine/eleventy-plugin-external-links');
// const drawio = require('eleventy-plugin-drawio');

module.exports = function (eleventyConfig) { 
    eleventyConfig.addPassthroughCopy("./source/resources/**/*.js");
    eleventyConfig.addPassthroughCopy("./source/resources/**/*.css");

    // eleventyConfig.addPlugin(drawio);
    eleventyConfig.addPlugin(safeLinks);

    eleventyConfig.addPassthroughCopy("./source/**/*.jpeg");

    eleventyConfig.addPassthroughCopy("./source/**/*.jpg");
    eleventyConfig.addPassthroughCopy("./source/**/*.png");
    // eleventyConfig.addPassthroughCopy("./source/resources/svg/");


    // luxton docs: https://github.com/moment/luxon/blob/master/docs/formatting.md#tolocalestring-strings-for-humans
    // tutorial: https://www.alpower.com/tutorials/formatting-dates-in-eleventy/
    eleventyConfig.addFilter("asPostDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat('dd LLLL yyyy'); //=> 30 Aprril 2014
        // other config likely here
    });

    // DateTime.fromJSDate(dateObj).toFormat("LLL yyyy");

    eleventyConfig.addPairedShortcode('tag', (children, title) => {
        return `<details class="callout--info">
        <summary><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> ${title}</summary>${children}</details>`
    });


    return { 
        dir: { 
            input: "source", 
            output: "docs" // I WOULD MAKE THIS _public BUT GITHUB PAGES DONT LIKE THAT
        }
    }
}