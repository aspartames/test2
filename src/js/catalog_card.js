const zoomFloorScheme = () => {
    const zoomImage = $('.sda');
    const zoomImage2 = $('.card_floor_wrapper');

    const zoomInButton = $('.zoom_plus');
    const zoomOutButton = $('.zoom_minus');


    zoomInButton.on('click', function () {
        zoomImage.addClass('zoom')
        zoomImage2.addClass('zoom')
        });


    zoomOutButton.on('click', function () {
        zoomImage.removeClass('zoom')
        zoomImage2.removeClass('zoom')
    });


/*    let zoomLevel = 1;

    zoomInButton.on('click', function() {
        if(zoomLevel < 3){
            zoomLevel += 1;
            zoomImage.css('transform', `scale(${zoomLevel})`);
            $('.card_floor_wrapper').css('height', '550px')

        }
    });

    zoomOutButton.on('click', function() {
        if (zoomLevel > 1) {
            zoomLevel -= 1;
            zoomImage.css('transform', `scale(${zoomLevel})`);
            $('.card_floor_wrapper').css('height', 'auto')

            /!*
                        zoomImage2.css('height', `auto`);
            *!/

        }
    });*/
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
    desktop: [setDropMenu],
    tablet: [setMobileMenu],
    mobile: []
}


// execute
isDocumentReady(settings)
