const scrollContainer = document.querySelector('.portfolio-container');

        let isScrolling = false;
        let scrollAmount = 0;
        let lastScrollTime = 0;

        scrollContainer.addEventListener('wheel', (event) => {
        // Prevent the default scroll behavior
        event.preventDefault();

        // Get the time of the scroll event
        const now = Date.now();
        const delta = event.deltaY;

        // Calculate how much the scroll should move (adjust speed)
        scrollAmount += delta;

        // Control the smoothing of the scroll
        if (!isScrolling) {
            isScrolling = true;
            smoothScroll();
        }
        });

        function smoothScroll() {
            const currentTime = Date.now();
            
            // Adjust scroll speed (lower = slower)
            const speed = 0.1; // Controls the smoothness of the scroll

            // Animate scrolling
            if (scrollAmount !== 0) {
                const scrollDelta = scrollAmount * speed;

                // Scroll horizontally
                scrollContainer.scrollLeft += scrollDelta;

                // Decrease scrollAmount gradually for smooth stop
                scrollAmount -= scrollDelta;

                // Continue the animation until scrollAmount is close to 0
                if (Math.abs(scrollAmount) > 0.1) {
                requestAnimationFrame(smoothScroll);
                } else {
                isScrolling = false;
                scrollAmount = 0; // Reset scrollAmount after animation ends
                }
            }
        }

        