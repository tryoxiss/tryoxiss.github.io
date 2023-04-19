module.exports = function (eleventyConfig) { 
    eleventyConfig.addPassthroughCopy("./source/resources/");

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