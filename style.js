$('.our-product-curousel').owlCarousel({
    loop: true,
    margin: 30,
    dots:false,
    nav: false,
    responsive: {
        0: {
            items: 1  //1
        },
        600: {
            items: 2  //3
        },
        1000: {
            items: 3 //4
        }
    }
})
$('.our-blog-curousel').owlCarousel({
    loop: true,
    // margin: 30,
    // nav: false,
    dots:false,
    responsive: {
        0: {
            items: 1  //1
        },
        600: {
            items: 2  //3
        },
        1000: {
            items: 3 //4
        }
    }
})
