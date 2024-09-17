document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = document.querySelectorAll('.blog-post');

    // Add fade-in effect on scroll
    window.addEventListener('scroll', fadeInOnScroll);

    function fadeInOnScroll() {
        blogPosts.forEach(post => {
            const rect = post.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                post.classList.add('active');
            }
        });
    }

    // Trigger initial fade-in for visible posts
    fadeInOnScroll();
});
