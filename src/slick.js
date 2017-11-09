import $ from 'jquery'
import 'script-loader!slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

$('.content').slick({
  vertical: true,
  slidesToShow: 5,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 10 * 1000,
  pauseOnFocus: false,
  arrows: false,
  loop: true,
  pauseOnHover: false,
  verticalSwiping: true,
  centerPadding: 0
})