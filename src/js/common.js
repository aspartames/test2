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


// video controls
const setVideoControls = () => {
    const video = $('#video')[0]
    const play = $(".play")
    const volume = $('.volume')

    play.on('click', function (){
        if(video.paused){
            video.play()
            $(this).removeClass('paused')
        }else {
            video.pause()
            $(this).addClass('paused')
        }
    })

    volume.on('click', function() {
        if(video.muted){
            video.muted = !video.muted;
            $(this).addClass('muted')
        } else {
            video.muted = !video.muted;
            $(this).removeClass('muted')
        }
    });

    $('.play, .volume').hide();

    $('.video_wrapper').hover(
        function() {
            $('.play, .volume').fadeIn(300);
        },
        function() {
            $('.play, .volume').fadeOut(300);
        }
    );

}
