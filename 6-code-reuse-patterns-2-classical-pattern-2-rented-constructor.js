// CODE REUSE PATTERNS

// Classical inheritance: CLASSICAL PATTERN #2 __ Rent-a-Constructor

function Article() {
	this.tags = ['js', 'css'];
}

var article = new Article(),
	blog,
	page;

// A blog post inherits from an article object
// via the classical pattern #1

function BlogPost() {}
BlogPost.prototype = article; // the Article instance available as the prototype
blog = new BlogPost();

// A static page inherits from an article object
// via the classical pattern #2 - rented constructor pattern

function StaticPage() {
	Article.call(this);
}
page = new StaticPage();

console.log(article.hasOwnProperty('tags')); // true
console.log(blog.hasOwnProperty('tags')); // false
console.log(page.hasOwnProperty('tags')); // true

// blog.tags points to the same reference from article
blog.tags.push('php');

// page has a copy of tags so modifying its values doesn't modifies the article tags array
page.tags.push('html');

console.log('blog.tags: ', blog.tags);
console.log('page.tags: ', page.tags);

console.log('article tags: ', article.tags.join(', '));