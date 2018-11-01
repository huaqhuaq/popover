clickMe.addEventListener('click', function(e) {
  popover.style.display = 'block'
})
wrapper.addEventListener('click',function(e){
  e.stopPropagation()
})
document.addEventListener('click', function() {
  popover.style.display = 'none'
})


// $(clickMe).on('click', function() {
//   $(popover).show()
//   setTimeout(function() {
//     $(document).one('click', function() {
//       $(popover).hide()
//     })
//   }, 0)
// })