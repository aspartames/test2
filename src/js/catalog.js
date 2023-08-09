

const catalogViewButtons = () => {

    $("#tiles_button").on('click', function (){
        $(".catalog_list").removeClass('active')
        $("#list_button").removeClass('active')
        $(".catalog_tiles").addClass('active')
        $(this).addClass('active')
    })
    $("#list_button").on('click', function (){
        $(".catalog_tiles").removeClass('active')
        $("#tiles_button").removeClass('active')
        $(".catalog_list").addClass('active')
        $(this).addClass('active')
    })
}

const mobileButtons = () =>{
    $('.mobile_search_button').on('click', function (){
        $('.mobile_floor_button').removeClass('active')
        $('.catalog_controls_filter').removeClass('floor')
        $('.catalog_controls_filter').toggleClass('search')
        $('.mobile_search_button').toggleClass('active')

    })

    $('.mobile_floor_button').on('click', function (){
        $('.mobile_search_button').removeClass('active')
        $('.catalog_controls_filter').removeClass('search')
        $('.catalog_controls_filter').toggleClass('floor')
        $('.mobile_floor_button').toggleClass('active')

    })
}



const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
    catalogViewButtons,
    mobileButtons,
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
