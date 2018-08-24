$(document).ready(()=>{
  $('#nav-list').addClass('hide')
  $('#dropdown-list').addClass('hide')
  $('#dropdown').click(()=>{
    $('#dropdown-list').toggleClass('show hide')

  })

  if($(window).width() > 760){
    $('#toggler').hide()

  }
  if ($(window).width() < 760) {
    $('.nav-link').hide()
    $("#toggler").click(()=>{
      $('#nav-list').toggleClass("show hide")
    })

  }
})
