
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

let logoSlider = null
let duplicate = false
const setLogoSlider = () => {
    if (isMobile()){
        $('.logo_swiper_wrapper').find('.duplicate').remove()
        logoSlider && logoSlider.destroy()
        duplicate = false
    }
    else {
        if(!duplicate){

            const swiperWrapper = $('.logo_swiper_wrapper');
            const logoSlide = $('.logo_slide');
            logoSlide.each(function (){
                const dublicateSlide = $(this).clone()
                dublicateSlide.addClass('duplicate')
                dublicateSlide.appendTo(swiperWrapper)
            })




            duplicate = true
        }



        logoSlider = new Swiper('.promotions_brands',{
            allowTouchMove: false,
            loop: true,
            slidesPerView: isTablet() ? 6 : 12,
            spaceBetween: 40,
            autoplay: {
                delay: 0,
            },
            speed: 6000,
        })
    }

}

const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setIntroductionSlider,
    setImageZoom,
    setMapActive,
    setLogoSlider,
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader],
    desktop: [setDropMenu, setIntroductionSlider, setFixedHeader, updateHeaderParameters, setLogoSlider],
    tablet: [setMobileMenu, setIntroductionSlider, setFixedHeader, updateHeaderParameters, setLogoSlider],
    mobile: [setIntroductionSlider, setLogoSlider]
}


isDocumentReady(settings)
