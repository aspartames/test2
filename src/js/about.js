
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


const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
    setMapActive,
    setVideoControls,
    rentersLogoGrid,
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
