
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
    $('.see_all_button').on('click', function (){
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

const animation = () => {
    let windowTop = $(window).scrollTop() - 300;
    let windowBottom = windowTop + $(window).height() + 800;

    $('.description_item').each(function() {

        let elemTop = $(this).offset().top;
        let elemBottom = elemTop + $(this).height();
        console.log(elemBottom,  windowBottom)

        if ((elemBottom <= windowBottom) && (elemTop >= windowTop)) {
            $(this).find('.description_text').addClass('animated');
            $(this).find('.description_images').addClass('animated');

        } else {
            $(this).find('.description_text').removeClass('animated');
            $(this).find('.description_images').removeClass('animated');
        }
    });
}


const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
    setMapActive,
    setVideoControls,
    rentersLogoGrid,
    animation
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader, animation],
    desktop: [setDropMenu, rentersLogoGrid, setFixedHeader, updateHeaderParameters],
    tablet: [setMobileMenu, rentersLogoGrid, setFixedHeader, updateHeaderParameters],
    mobile: [rentersLogoGrid]
}


isDocumentReady(settings)
