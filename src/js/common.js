// image zoom on hover
const setImageZoom = () => {
    $('.zoom_hover').hover(function () {
            $(this).addClass('zoom')
        },
        function () {
            $(this).removeClass('zoom')
        }
    )
}


// map overlay
const setMapActive = () => {
    const mapOverlay = $('.map_overlay')

    mapOverlay.click(function () {
        $(this).css('display', 'none')
    })

    function handleTouch(event) {
        if (event.touches.length === 2) {
            mapOverlay.css('display', 'none')
        } else if (event.touches.length === 1) {
            mapOverlay.css('display', 'block')
        }
    }

    $(document).on('touchstart', handleTouch);

    return () => $(document).off('touchstart', handleTouch)
}
