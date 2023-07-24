const isDesktop = () => $(window).width() > 1500
const isLaptop = () => $(window).width() <= 1500
const isTablet = () => $(window).width() <= 1000
const isMobile = () => $(window).width() <= 600


$(document).ready(function() {



const dropMenu = () => {
    if(!isTablet()) {
        const dropMenu = $('.drop_menu')
        const hoverItem = $('.header_bottom_nav_item')
        const button = $('.header_all')
        const dropMenuNavSelected = $('.drop_menu_nav_selected')

        let timer = null
        let isButtonAllShops = false

        button.mouseenter(()=>{
            clearTimeout(timer)
            dropMenuNavSelected.html('')
            isButtonAllShops = true
            dropMenu.addClass('active')
            $('.menu_icon').addClass('active')
            $('.drop_menu_nav_list').removeClass('hidden')
        })
        button.mouseleave(() => {
            timer = setTimeout(() => {
                dropMenu.removeClass('active')
                $('.menu_icon').removeClass('active')
                return () => clearTimeout()
            }, 300)

            return () => clearTimeout()
        })

        hoverItem.mouseenter((e) => {
            clearTimeout(timer)
            dropMenuNavSelected.html('')
            isButtonAllShops = false

            dropMenu.addClass('active')
            $('.menu_icon').removeClass('active')

            const selectedShopItems = $(`[data-category="${e.currentTarget.dataset.navItem}"]`)
            const copySelectedShopItems = selectedShopItems.clone()
            dropMenuNavSelected.html(copySelectedShopItems)
            $('.drop_menu_nav_list').addClass('hidden')
        })
        hoverItem.mouseleave(() => {
            timer = setTimeout(() => {
                dropMenu.removeClass('active')
                shopsItem.removeClass('visible')

                return () => clearTimeout()
            }, 300)

            return () => clearTimeout()
        })

        dropMenu.mouseenter(() => {
            clearTimeout(timer)
            dropMenu.addClass('active')
            isButtonAllShops && $('.menu_icon').addClass('active')
        })
        dropMenu.mouseleave(() => {
            dropMenu.removeClass('active')
            $('.menu_icon').removeClass('active')
        })
    }
}

dropMenu()



const mobileMenu = () =>{
        if(isTablet()){
            const button= $('.header_all')

            button.click(()=>{
                $('.drop_menu_mobile').toggleClass('active')
                $('.menu_icon').toggleClass('active')

            })
        }
}

mobileMenu()



const mapActive = () => {
    const mapOverlay = $('.map_overlay')
    mapOverlay.click(()=>{
        mapOverlay.css('display', 'none')
    })

    function handleTouch(event) {
        if (event.touches.length === 2) {
            mapOverlay.css('display', 'none')
        } else if (event.touches.length === 1) {
            mapOverlay.css('display', 'block')
        }
    }
    $(document).on('touchstart', handleTouch);

}

mapActive()



if(!isTablet()) {

    const heightHeader = $('header').height();
    const heightBottom = $('.header_bottom').height();
    const heightTop = $('.header_top').height();
    const headerFixedHeight = heightHeader - heightBottom - heightTop

    let isTru = false
    $(window).scroll(function () {
        const scrollPosition = $(this).scrollTop();


        if (scrollPosition > heightTop && !isTru) {
            $("header").addClass('fixed');
            $("header").css('top', `-${heightTop}px`)
            $("header").css('height', `${headerFixedHeight}px`)
            $(".header_mid").addClass('fixed');
            $(".header_bottom").css('top', `-${heightBottom}px`)
            $(".drop_menu").css('top', `${isLaptop() ? 110 : 124}px`)
            $('.header_all_fixed').addClass('fixed')
            $('.header_mid_info').addClass('fixed')
            $('.drop_menu_bottom_nav_wrapper').addClass('fixed')
            $('.drop_menu_nav_list').addClass('fixed')

            isTru = true

        }
        if (scrollPosition < heightTop) {
            $("header").removeClass('fixed');
            $("header").css('top', '0')
            $("header").css('height', 'fit-content')
            $(".header_mid").removeClass('fixed');
            $(".header_bottom").css('top', `0`)
            $(".drop_menu").css('top', `${heightHeader}px`)
            $('.header_all_fixed').removeClass('fixed')
            $('.header_mid_info').removeClass('fixed')
            $('.drop_menu_bottom_nav_wrapper').removeClass('fixed')
            $('.drop_menu_nav_list').removeClass('fixed')

            isTru = false

        }

    })
}
})
