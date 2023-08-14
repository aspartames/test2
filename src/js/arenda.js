

// custom select
let isCustomized = false
const setCustomSelect = () => {
    if(!isMobile() && !isCustomized){
        $('#rent_type').select2({
            minimumResultsForSearch: -1,
        })

        isCustomized = true
    }
    else if (isMobile() && isCustomized) {
        $('#rent_type').select2('destroy');

        isCustomized = false
    }

}

const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
    setMapActive,
    setVideoControls,
    rentalForm,
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
