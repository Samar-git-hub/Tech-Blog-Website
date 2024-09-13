document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Search initiated');
});

document.getElementById('search-bar').addEventListener('input', function(event) {
    let filter = event.target.value.toLowerCase(); // can replace event.target with this
    let blogs = document.querySelectorAll('.description-title'); // returns a list to us with all of the elements with description title, like <div class="description-title">Blog Title 1</div>
    blogs.forEach(function(blog) { // remember each iteration is for every thing in the list returned by the list in query selector above
        if (blog.textContent.toLowerCase().includes(filter)) { // retrieves text for each blog
            blog.closest('.one-blog-container').style.display = '';
        } else {
            blog.closest('.one-blog-container').style.display = 'none';
        }
    });
});
/*
so firstly in every element in the list returned by let blogs = document.querySelectorAll('.description-title');
(more context of the above line above)
in every iteration where we have a parameter x (or blog here), and if
the x parameter has textcontent that includes the amount
of text entered by the user in the input box.
if yes, in the parameter x (or blog) target, we then have the closest method, which
gives us the closest ancestor that matches a css-selector (of the element returned in the list aka the blog iteration or x)
*/
