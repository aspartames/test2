


const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
    setMapActive,
    setVideoControls,
    rentersLogoGrid,
    xxx,
    ssd,
    kjlj,
    asda,
    flks
    /*modalWindow*/
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader],
    desktop: [setDropMenu, rentersLogoGrid],
    tablet: [setMobileMenu, rentersLogoGrid],
    mobile: [rentersLogoGrid]
}


// execute
isDocumentReady(settings)
