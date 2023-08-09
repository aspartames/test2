
let headerParameters = {
    isHeaderFixed: false,
    header: $("header"),
    heightHeader: $('header').height(),
    heightBottom: $('.header_bottom').height(),
    heightTop: $('.header_top').height(),
}

const setFixedHeader = () => {
    if (!isTablet()) {
        const {isHeaderFixed, header, heightHeader, heightBottom, heightTop} = headerParameters

        const scrollPosition = $(this).scrollTop();

        const headerFixedHeight = heightHeader - heightBottom - heightTop

        if (scrollPosition > heightTop && !isHeaderFixed) {
            header.addClass('fixed');
            header.css('top', `-${heightTop}px`)
            header.css('height', `${headerFixedHeight}px`)
            $(".header_mid").addClass('fixed');
            $(".header_bottom").css('top', `-${heightBottom}px`)
            $(".drop_menu").css('top', `${isLaptop() ? 110 : 124}px`)
            $('.header_all_fixed').addClass('fixed')
            $('.header_mid_info').addClass('fixed')
            $('.drop_menu_bottom_nav_wrapper').addClass('fixed')
            $('.drop_menu_nav_list').addClass('fixed')

            headerParameters.isHeaderFixed = true

        }
        if (scrollPosition < heightTop) {
            header.removeClass('fixed');
            header.css('top', '0')
            header.css('height', 'fit-content')
            $(".header_mid").removeClass('fixed');
            $(".header_bottom").css('top', `0`)
            $(".drop_menu").css('top', `${heightHeader}px`)
            $('.header_all_fixed').removeClass('fixed')
            $('.header_mid_info').removeClass('fixed')
            $('.drop_menu_bottom_nav_wrapper').removeClass('fixed')
            $('.drop_menu_nav_list').removeClass('fixed')

            headerParameters.isHeaderFixed = false

        }
    }
}

const setDropMenu = () => {
    if (!isTablet()) {
        removeMenuHandlers()

        const dropMenu = $('.drop_menu')
        const hoverItem = $('.header_bottom_nav_item')
        const button = $('.header_all')
        const menuIcon = $('.menu_icon')
        const dropMenuNavList = $('.drop_menu_nav_list')
        const dropMenuNavSelected = $('.drop_menu_nav_selected')

        let timer = null
        let isButtonAllShops = false

        button.mouseenter(() => {
            clearTimeout(timer)
            dropMenuNavSelected.html('')
            isButtonAllShops = true
            dropMenu.addClass('active')
            button.addClass('active')
            menuIcon.addClass('active')
            dropMenuNavList.removeClass('hidden')
        })
        button.mouseleave(() => {
            timer = setTimeout(() => {
                dropMenu.removeClass('active')
                button.removeClass('active')
                menuIcon.removeClass('active')
                return () => clearTimeout()
            }, 300)

            return () => clearTimeout()
        })

        hoverItem.mouseenter((e) => {
            clearTimeout(timer)
            dropMenuNavSelected.html('')
            isButtonAllShops = false

            dropMenu.addClass('active')
            menuIcon.removeClass('active')

            const selectedShopItems = $(`[data-category="${e.currentTarget.dataset.navItem}"]`)
            const copySelectedShopItems = selectedShopItems.clone()
            dropMenuNavSelected.html(copySelectedShopItems)
            dropMenuNavList.addClass('hidden')
        })
        hoverItem.mouseleave(() => {
            timer = setTimeout(() => {
                dropMenu.removeClass('active')

                return () => clearTimeout()
            }, 300)

            return () => clearTimeout()
        })

        dropMenu.mouseenter(() => {
            clearTimeout(timer)
            dropMenu.addClass('active')
            isButtonAllShops && menuIcon.addClass('active')
        })
        dropMenu.mouseleave(() => {
            dropMenu.removeClass('active')
            button.removeClass('active')
            menuIcon.removeClass('active')
        })
    }
}

const setMobileMenu = () => {
    if (isTablet()) {
        removeMenuHandlers()

        $('.header_all').click(function () {
            $('.drop_menu_mobile').toggleClass('active')
            $('.menu_icon').toggleClass('active')
            $(this).toggleClass('active')
        })
    }
}

const removeMenuHandlers = () => {
    $('.header_all').off()
    $('.header_bottom_nav_item').off()
    $('.drop_menu').off()
}

