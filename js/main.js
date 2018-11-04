// clickMe.addEventListener('click', function(e) {
//   popover.style.display = 'block'
// })
// wrapper.addEventListener('click',function(e){
//   e.stopPropagation()
// })
// document.addEventListener('click', function() {
//   popover.style.display = 'none'
// })


$(clickMe).on('click', function(e) {
  $(popover).toggleClass('active')
  e.stopPropagation()
  setTimeout(function() {
    $(document).one('click', function() {
      $(popover).removeClass('active')
    })
  }, 0)
})

$(popover).on('click', function (e) {
  e.stopPropagation()
})