
// zoom scheme on mobile
const zoomFloorScheme = () => {
    const sliderContainer= $('.map_scheme_slider_container');
    const slider = $('.map_scheme_slider');

    const zoomInButton = $('.zoom_plus');
    const zoomOutButton = $('.zoom_minus');


    zoomInButton.on('click', function () {
        sliderContainer.addClass('zoom')
        slider.addClass('zoom')
    });


    zoomOutButton.on('click', function () {
        sliderContainer.removeClass('zoom')
        slider.removeClass('zoom')
    });

}

// visible search input on mobile
const mobileButtonSearch = () =>{
    $('.map_scheme_search_icon_mobile').on('click', function (){
        $('.map_scheme_filter').toggleClass('active')
        $('.map_scheme_search_icon_mobile').toggleClass('active')
        $('#map_scheme_search').toggleClass('active')
    })
}

// slider
const setMapSchemeSlider = () =>{

    swiper = new Swiper('.map_scheme_slider', {
        allowTouchMove: false,
        loop: false,
        speed: 300,
        spaceBetween: 200,
        slidesPerView: 1,
        direction: 'horizontal',

        pagination: {
            el: '.map_scheme_slider_pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="pagination_item ' + className + '">' + (index + 1) + '</span>';
            },
        },

        breakpoints: {
            1000: {
                direction:'vertical',
            },
        }
    })

    swiper.on('slideChange', function () {
        $(".mobile_floor").text(`${swiper.realIndex + 1} этаж`)
    });
}



const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    mobileButtonSearch,
    setMapSchemeSlider,
    zoomFloorScheme,
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader],
    desktop: [setDropMenu, setFixedHeader, updateHeaderParameters],
    tablet: [setMobileMenu, setFixedHeader, updateHeaderParameters],
    mobile: []
}


isDocumentReady(settings)
