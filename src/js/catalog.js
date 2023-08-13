
const setCatalogViewButtons = () => {

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

const setMobileButtons = () =>{
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

// custom select
let isCustomized = false
const setCustomSelect = () => {
    if(!isMobile() && !isCustomized){
        $('#catalog_category').select2({
            minimumResultsForSearch: -1,
            placeholder: "Категория",
            allowClear: false,
        })

        $('#catalog_floor').select2({
            minimumResultsForSearch: -1,
            placeholder: "Выбор этажа",
            allowClear: false,
        })

        isCustomized = true
    }
    else if (isMobile() && isCustomized) {
        $('#catalog_category').select2('destroy');
        $('#catalog_floor').select2('destroy');

        isCustomized = false
    }

}


const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
    setCatalogViewButtons,
    setMobileButtons,
    setCustomSelect,
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader],
    desktop: [setDropMenu, setFixedHeader, updateHeaderParameters, setCustomSelect],
    tablet: [setMobileMenu, setFixedHeader, updateHeaderParameters, setCustomSelect],
    mobile: [setCustomSelect]
}

isDocumentReady(settings)
