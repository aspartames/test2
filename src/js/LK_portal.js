
const LKNavigation = () =>{
    const profileButton = $('#profile_button')
    const documentsButton = $('#documents_button')
    const letterButton = $('#letter_button')
    const exitButton = $('#exit_button')
    const allButtons = $('.LK_nav_button')

    const mobileSelect = $('#portal_nav')

    const profile = $('.LK_content_profile')
    const documents = $('.LK_content_documents')
    const letter = $('.LK_content_letter')
    const allContentItems = $('.LK_content_item')


    const clear = () =>{
        allContentItems.removeClass('active')
        allButtons.removeClass('active')
    }
    const setContent = (content, button) => {
        content.addClass('active')
        button.addClass('active')
    }

    profileButton.on('click', function (){
        clear()
        setContent(profile, profileButton)
    })
    documentsButton.on('click', function (){
        clear()
        setContent(documents, documentsButton)
    })
    letterButton.on('click', function (){
        clear()
        setContent(letter, letterButton)
    })


    mobileSelect.on('change', function (){
       const value = $(this).val()
        if(value === 'profile'){
            clear()
            setContent(profile, profileButton)
        }
        if(value === 'letter'){
            clear()
            setContent(letter, profileButton)
        }
        if(value === 'documents'){
            clear()
            setContent(documents, documentsButton)
        }
    })
}


const initSettings = [
    setFixedHeader,
    setDropMenu,
    setMobileMenu,
    setImageZoom,
    LKNavigation,
]

const settings = {
    init: initSettings,
    scroll: [setFixedHeader],
    desktop: [setDropMenu, setFixedHeader, updateHeaderParameters],
    tablet: [setMobileMenu, setFixedHeader, updateHeaderParameters],
    mobile: []
}


isDocumentReady(settings)
