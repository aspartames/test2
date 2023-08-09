
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

const setLogoGrid = (columns, even) =>{

    // clear prev state
    $('.empty').remove()

    // get items
    const items = $('.renters_logo_item').not('.empty')
    const itemsAmount = items.length

    // get total columns
    const totalColumns = even ? columns * 2 : columns * 2 - 1;

    // set css grid columns
    $('.renters_logo').css('--columns',`${totalColumns}`)

    // set empty block template
    const emptyBlock = '<div class="renters_logo_item empty"></div>'

    // array with elements index
    const elementsKey = {
        beforeCreate: [],
        afterPass: []
    }

    // push index to array
    for (let i = 0; i < itemsAmount; i++){
        if(i % columns === 0 && i !== 0 && i ){
            elementsKey.beforeCreate.push(i)
            elementsKey.afterPass.push(i + (columns - 1))
        }
    }

    // create empty blocks
    items.each(function (ndx, el){
        if(ndx === itemsAmount - 1){
            return null
        }
        if(even){
            if(elementsKey.afterPass.includes(ndx) && elementsKey.afterPass.indexOf(ndx) % 2 === 0){
                return null
            }
            if(elementsKey.beforeCreate.includes(ndx) && elementsKey.beforeCreate.indexOf(ndx) % 2 === 0){
                $(el).before(emptyBlock)
            }
        }
        $(el).after(emptyBlock)
    })


    // centered last row
    // get percentage of filled
    let filledPercent = itemsAmount * 2 / totalColumns
    filledPercent = Number(filledPercent.toFixed(2).toString().split('.')[1])

    // if last row is not completely filled
    if(filledPercent !== 0 && !isMobile()){
        // get number of free cells
        const freeCells = Math.round(totalColumns - (filledPercent / 100) * totalColumns)

        // get extreme block
        const extremeBlock = $('.renters_logo_item')[itemsAmount * 2 - (totalColumns - freeCells)]

        // create empty blocks before extreme block
        for (let i = 0; i < (Math.ceil(freeCells / 2)); i++) {
            extremeBlock.insertAdjacentHTML('beforebegin', emptyBlock)
        }
        if(even){
            extremeBlock.insertAdjacentHTML('beforebegin', emptyBlock)
        }
    }
}
const rentersLogoGrid = () => {
    $('.see_all_button').click(function (){
        $(this).toggleClass('active')
        $('.renters_logo_container').toggleClass('active')
    })

    if (isMobile()) {
        return setLogoGrid(2, false)
    }
    if ($(window).width() <= 800) {
        return setLogoGrid(3, true)
    }
    if (isTablet()) {
        return setLogoGrid(4, false)
    }

    return setLogoGrid(5, true)

}



const modalWindow = () => {
    const t = setTimeout(()=>{
        $(".rental_application").addClass('active')
        $("body").css('overflow-y', 'hidden')
    },1000)

    $('.form_close').on('click', function (){
        $(".rental_application").removeClass('active')
        $("body").css('overflow-y', 'auto')
    })

    return () => clearTimeout(t)
}

const xxx = () =>{
    $('.mobile_search_button').on('click', function (){
        $('.mobile_floor_button').removeClass('active')
        $('.catalog_controls_filter').removeClass('floor')
        $('.catalog_controls_filter').toggleClass('search')
        $('.mobile_search_button').toggleClass('active')

    })

    $('.mobile_floor_button').on('click', function (){
        $('.mobile_search_button').removeClass('active')
        $('.catalog_controls_filter').removeClass('search')
        $('.catalog_controls_filter').toggleClass('floor')
        $('.mobile_floor_button').toggleClass('active')

    })
}

const ssd = () => {

    $("#tiles_button").on('click', function (){
        $(".catalog_list").removeClass('active')
        $("#list_button").removeClass('active')
        $(".catalog_tiles").addClass('active')
        $(this).addClass('active')
    })
    $("#list_button").on('click', function (){
        $(".catalog_tiles").removeClass('active')
        $("#tiles_button").removeClass('active')
        $(".catalog_list").addClass('active')
        $(this).addClass('active')
    })
}

const kjlj = () => {
    const zoomImage = $('.sda');
    const zoomImage2 = $('.card_floor_wrapper');

    const zoomInButton = $('.zoom_plus');
    const zoomOutButton = $('.zoom_minus');

    let zoomLevel = 1;

    zoomInButton.on('click', function() {
        if(zoomLevel < 3){
            zoomLevel += 1;
            zoomImage.css('transform', `scale(${zoomLevel})`);

        }
    });

    zoomOutButton.on('click', function() {
        if (zoomLevel > 1) {
            zoomLevel -= 1;
            zoomImage.css('transform', `scale(${zoomLevel})`);
            /*
                        zoomImage2.css('height', `auto`);
            */

        }
    });
}

const asda = () =>{
    $('.floor_plans_search_icon_mobile').on('click', function (){
        $('.floor_plans_filter').toggleClass('active')
        $('.floor_plans_search_icon_mobile').toggleClass('active')
        $('#floor_plans_search').toggleClass('active')

    })

}


const flks = () =>{
    swiper = new Swiper('.floor_plans_slider', {
        loop: false,
        speed: 300,
        spaceBetween: 200,
        slidesPerView: 1,
        direction: !isTablet() ? 'vertical' : 'horizontal',

        pagination: {
            el: '.floor_plans_slider_pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="pagination_item ' + className + '">' + (index + 1) + '</span>';
            },
        }
    })

}

const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
    setMapActive,
    setVideoControls,
    rentersLogoGrid,
    xxx,
    ssd,
    kjlj,
    asda,
    flks
    /*modalWindow*/
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
