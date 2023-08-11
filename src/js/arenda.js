
const rentalForm = () => {

    $('.rental_form_open').on('click', function (){
        $(".rental_application").addClass('active')
        $("body").css('overflow-y', 'hidden')
    })

    $('.form_close').on('click', function (){
        $(".rental_application").removeClass('active')
        $("body").css('overflow-y', 'auto')
    })

}

const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
    setMapActive,
    setVideoControls,
    rentalForm,
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader],
    desktop: [setDropMenu, setFixedHeader, updateHeaderParameters],
    tablet: [setMobileMenu, setFixedHeader, updateHeaderParameters],
    mobile: []
}

isDocumentReady(settings)
