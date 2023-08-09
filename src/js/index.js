
// slider
let swiper = null

const setIntroductionSlider = () => {
    swiper && swiper.destroy()

    swiper = new Swiper('.introduction_slider', {
        loop: isTablet() ? false : true,
        speed: 300,
        spaceBetween: isMobile() ? 14 : isTablet() ? 20 : 40,
        slidesPerView: isMobile() ? 1 : 2,

        navigation: {
            prevEl: '.prev_button',
            nextEl: '.next_button',
        },

        pagination: {
            el: '.pagination',
            type: 'fraction',

        },
        grid: isTablet() ? {
            rows: 2,
            fill: "row"
        } : {},
    })
}


const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setIntroductionSlider,
    setImageZoom,
    setMapActive,
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader],
    desktop: [setDropMenu, setIntroductionSlider],
    tablet: [setMobileMenu, setIntroductionSlider],
    mobile: [setIntroductionSlider]
}


// execute
isDocumentReady(settings)
