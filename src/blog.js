var Blogs = [
    {
        title: "My First Blog Post",
        date: "October 1, 2025",
        description: "This is a brief description of my first blog post.",
        image: "./profile-photo.jpeg",
        imageAlt: "Profile Photo",
        slug: "my-first-blog-post",
    },
    {
        title: "Cal Poly is Awesome",
        date: "October 12, 2025",
        description: "Learn more about the school.",
        image: "./cal-poly-logo.webp",
        imageAlt: "Cal Poly Logo",
        slug: "cal-poly-is-awesome",
    },
];
/**
 * Render the blogs into a container element with class `blog-content-container`.
 * Each blog creates a small card with a link to `<slug>.html` (root-level file).
 */
function displayBlogs() {
    var container = document.querySelector(".blog-content-container");
    if (!container) {
        // Nothing to mount to
        return;
    }
    // Clear existing content (idempotent)
    container.innerHTML = "";
    Blogs.forEach(function (blog) {
        var blogDiv = document.createElement("div");
        blogDiv.className = "blog-item";
        var link = document.createElement("a");
        link.href = "./".concat(blog.slug, ".html");
        link.className = "blog-link";
        var title = document.createElement("h2");
        title.textContent = blog.title;
        link.appendChild(title);
        var date = document.createElement("p");
        date.className = "blog-date";
        date.textContent = blog.date;
        var img = document.createElement("img");
        img.src = blog.image;
        img.alt = blog.imageAlt;
        img.className = "blog-image";
        var desc = document.createElement("p");
        desc.className = "blog-description";
        desc.textContent = blog.description;
        blogDiv.appendChild(link);
        blogDiv.appendChild(img);
        blogDiv.appendChild(date);
        blogDiv.appendChild(desc);
        container.appendChild(blogDiv);
    });
}
// Auto-mount when the DOM is ready so this script works
// If the page manually calls displayBlogs,
// that's also fine — the call below is idempotent.
if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () { return displayBlogs(); });
    }
    else {
        // DOM already ready
        displayBlogs();
    }
}
