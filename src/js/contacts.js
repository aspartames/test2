
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
    desktop: [setDropMenu, setFixedHeader, updateHeaderParameters],
    tablet: [setMobileMenu, setFixedHeader, updateHeaderParameters],
    mobile: [rentersLogoGrid]
}


// execute
isDocumentReady(settings)
