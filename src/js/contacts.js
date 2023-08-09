
const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
    setMapActive,
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
