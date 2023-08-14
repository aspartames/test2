
const zoomFloorScheme = () => {
    const zoomImage = $('.card_floor_img');
    const zoomImage2 = $('.card_floor_wrapper');

    const zoomInButton = $('.zoom_plus');
    const zoomOutButton = $('.zoom_minus');


    zoomInButton.on('touchstart', function () {
        zoomImage.addClass('zoom')
        zoomImage2.addClass('zoom')
    });

    zoomOutButton.on('touchstart', function () {
        zoomImage.removeClass('zoom')
        zoomImage2.removeClass('zoom')
    });

    zoomInButton.on('click', function () {
        zoomImage.addClass('zoom')
        zoomImage2.addClass('zoom')
        });

    zoomOutButton.on('click', function () {
        zoomImage.removeClass('zoom')
        zoomImage2.removeClass('zoom')
    });


}

const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    zoomFloorScheme,
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader],
    desktop: [setDropMenu, setFixedHeader, updateHeaderParameters],
    tablet: [setMobileMenu, setFixedHeader, updateHeaderParameters],
    mobile: []
}


isDocumentReady(settings)
