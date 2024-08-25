 document.addEventListener('scroll', function() {
            var scrollPosition = window.scrollY;
            var windowHeight = window.innerHeight;
            var documentHeight = document.documentElement.scrollHeight;
            var scrollPercentage = scrollPosition / (documentHeight - windowHeight);

            var image1 = document.getElementById('image1');
            var image2 = document.getElementById('image2');
            var image3 = document.getElementById('image3');

            var text1 = document.getElementById('text1');
            var text2 = document.getElementById('text2');
            var text3 = document.getElementById('text3');

            // Change content based on scroll percentage
            if (scrollPercentage < 0.33) {
                image1.classList.add('visible');
                image1.classList.remove('hidden');
                text1.classList.add('visible');
                text1.classList.remove('hidden');

                image2.classList.add('hidden');
                image2.classList.remove('visible');
                text2.classList.add('hidden');
                text2.classList.remove('visible');

                image3.classList.add('hidden');
                image3.classList.remove('visible');
                text3.classList.add('hidden');
                text3.classList.remove('visible');
            } else if (scrollPercentage < 0.66) {
                image2.classList.add('visible');
                image2.classList.remove('hidden');
                text2.classList.add('visible');
                text2.classList.remove('hidden');

                image1.classList.add('hidden');
                image1.classList.remove('visible');
                text1.classList.add('hidden');
                text1.classList.remove('visible');

                image3.classList.add('hidden');
                image3.classList.remove('visible');
                text3.classList.add('hidden');
                text3.classList.remove('visible');
            } else {
                image3.classList.add('visible');
                image3.classList.remove('hidden');
                text3.classList.add('visible');
                text3.classList.remove('hidden');

                image1.classList.add('hidden');
                image1.classList.remove('visible');
                text1.classList.add('hidden');
                text1.classList.remove('visible');

                image2.classList.add('hidden');
                image2.classList.remove('visible');
                text2.classList.add('hidden');
                text2.classList.remove('visible');
            }
        });
