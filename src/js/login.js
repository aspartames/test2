
const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader, setFixedHeader, updateHeaderParameters],
    desktop: [setDropMenu, setFixedHeader, updateHeaderParameters],
    tablet: [setMobileMenu],
    mobile: []
}


isDocumentReady(settings)
