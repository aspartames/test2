
const rentalForm = () => {

    $('.rental_form_open').on('click', function (){
        $(".rental_form").addClass('active')
        $("body").css('overflow-y', 'hidden')
    })

    $('.form_close').on('click', function (){
        $(".rental_form").removeClass('active')
        $("body").css('overflow-y', 'auto')
    })

}
