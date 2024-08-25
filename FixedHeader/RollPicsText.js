document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrollPercentage = scrollPosition / (documentHeight - windowHeight);

    var images = [
        document.getElementById('image1'),
        document.getElementById('image5'),
        document.getElementById('image2'),
        document.getElementById('image3'),
        document.getElementById('image4')
    ];

    var texts = [
        document.getElementById('text1'),
        document.getElementById('text5'),
        document.getElementById('text2'),
        document.getElementById('text3'),
        document.getElementById('text4')
    ];

    var numImages = images.length;

    // Determine the index of the current image/text based on scroll percentage
    var index = Math.floor(scrollPercentage * numImages);

    for (var i = 0; i < numImages; i++) {
        if (i === index) {
            images[i].classList.add('visible');
            images[i].classList.remove('hidden');
            texts[i].classList.add('visible');
            texts[i].classList.remove('hidden');
        } else {
            images[i].classList.add('hidden');
            images[i].classList.remove('visible');
            texts[i].classList.add('hidden');
            texts[i].classList.remove('visible');
        }
    }
});
