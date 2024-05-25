function showProductInfo(element) {
    element.querySelector('.product-info').style.display = 'block';
}

function hideProductInfo(element) {
    element.querySelector('.product-info').style.display = 'none';
}document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('.share-btn');

    shareButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Share this product!');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            document.body.style.backgroundColor = container.getAttribute('data-bg-color');
        });

        container.addEventListener('mouseleave', function() {
            document.body.style.backgroundColor = '';
        });
    });
});
