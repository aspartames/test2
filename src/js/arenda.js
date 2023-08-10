
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

const rentalForm = () => {

    $('.rental_form_open').on('click', function (){
        $(".rental_application").addClass('active')
        $("body").css('overflow-y', 'hidden')
    })

    $('.form_close').on('click', function (){
        $(".rental_application").removeClass('active')
        $("body").css('overflow-y', 'auto')
    })

}


const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
    setMapActive,
    setVideoControls,
    rentalForm,
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader],
    desktop: [setDropMenu, setFixedHeader, updateHeaderParameters],
    tablet: [setMobileMenu, setFixedHeader, updateHeaderParameters],
    mobile: []
}


// execute
isDocumentReady(settings)
