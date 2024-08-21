// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('navbart2');
    const scrollThreshold = 500; // Scroll threshold in pixels
    let lastScrollTop = 0; // Keeps track of the last scroll position

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;

        if (scrollTop > scrollThreshold) {
            // User has scrolled past the threshold
            if (scrollTop < lastScrollTop) {
                // User is scrolling up
                searchForm.classList.add('show');
            } else {
                // User is scrolling down
                searchForm.classList.remove('show');
            }
        } else {
            // User has not scrolled past the threshold
            searchForm.classList.remove('show');
        }

        // Update last scroll position
        lastScrollTop = scrollTop;
    });
});
