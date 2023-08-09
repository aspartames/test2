const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
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
