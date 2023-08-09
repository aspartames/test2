

const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
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
