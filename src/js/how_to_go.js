
const inputUpdate = () => {
    const form2 = () =>{
        $('.detailed_route_wrapper').removeClass('active')
        $('.detailed_route_mobile').removeClass('active')
        $('.how_to_go_form2').addClass('active')
        if(isMobile()) {
            $('body').css('overflow', 'auto')
        }

        $('.reset_button').addClass('active')
        $('.route_button').addClass('active')
        $('.route_selector').addClass('active')
        $('.how_to_go_form_map_links').addClass('active')
        $('.how_to_go_form_parking').removeClass('active')
    }
    const form1 = () =>{
        $('#how_to_go_input').val('')
        $('.detailed_route_wrapper').removeClass('active')
        $('.detailed_route_mobile').removeClass('active')
        $('.how_to_go_form2').addClass('active')
        if(isMobile()){
            $('body').css('overflow', 'auto')
        }

        $('.reset_button').removeClass('active')
        $('.route_button').removeClass('active')
        $('.route_selector').removeClass('active')
        $('.how_to_go_form_map_links').removeClass('active')
        $('.how_to_go_form_parking').addClass('active')
    }

    const form3 = () => {
        $('.detailed_route_wrapper').addClass('active')
        $('.detailed_route_mobile').addClass('active')
        $('.how_to_go_form2').removeClass('active')
        if(isMobile()){
            $('body').css('overflow', 'hidden')
        }
    }


    $('.detailed_route_back').on('click', function (){
        form2()
    })

    $('.detailed_route_close').on('click', function (){
        form1()
    })
    $('#how_to_go_input').on("input",function (){
        if($(this).val().length > 0){
            form2()
        }
        else {
            form1()
        }
    })

    $('.reset_button').on("click", function (){
        form1()
    })

    $('.route_button').on('click', function (){
        form3()
    })
}


let isCustomized = false
const setCustomSelect = () => {
    if(!isMobile() && !isCustomized){
        $('#route_select').select2({
            minimumResultsForSearch: -1,
        })

        isCustomized = true
    }
    else if (isMobile() && isCustomized) {
        $('#route_select').select2('destroy');

        isCustomized = false
    }

}

const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
    setMapActive,
    inputUpdate,
    setCustomSelect
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader],
    desktop: [setDropMenu, setFixedHeader, updateHeaderParameters, setCustomSelect],
    tablet: [setMobileMenu, setFixedHeader, updateHeaderParameters, setCustomSelect],
    mobile: [setCustomSelect]
}


isDocumentReady(settings)
