


const zoomFloorScheme = () => {
    const zoomImage = $('.swiper-wrapper');
    const zoomImage2 = $('.map_scheme_slider_item');

    const zoomInButton = $('.zoom_plus');
    const zoomOutButton = $('.zoom_minus');


    zoomInButton.on('click', function () {
        zoomImage.addClass('zoom')
        zoomImage2.addClass('zoom')
    });


    zoomOutButton.on('click', function () {
        zoomImage.removeClass('zoom')
        zoomImage2.removeClass('zoom')
    });

}




const mobileButtonSearch = () =>{
    $('.map_scheme_search_icon_mobile').on('click', function (){
        $('.map_scheme_filter').toggleClass('active')
        $('.map_scheme_search_icon_mobile').toggleClass('active')
        $('#map_scheme_search').toggleClass('active')

    })

}


const mapSchemeSlider = () =>{
    swiper = new Swiper('.map_scheme_slider', {
        allowTouchMove: false,
        loop: false,
        speed: 300,
        spaceBetween: 200,
        slidesPerView: 1,
        direction: !isTablet() ? 'vertical' : 'horizontal',

        pagination: {
            el: '.map_scheme_slider_pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="pagination_item ' + className + '">' + (index + 1) + '</span>';
            },
        }
    })

}



const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    mobileButtonSearch,
    mapSchemeSlider,
    zoomFloorScheme
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader],
    desktop: [setDropMenu],
    tablet: [setMobileMenu],
    mobile: []
}


// execute
isDocumentReady(settings)
