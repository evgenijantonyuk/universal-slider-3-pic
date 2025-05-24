
import ScrollSlider from "./ScrollSlider.js"
import ScrollSliderTrack from './ScrollSliderTrack.js'


const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')
const scrollSliderTrack = document.querySelector('.scroll-slider-track')

nextBtn.addEventListener('click', () => {
    scrollSliderTrack.scrollToNext()
})

prevBtn.addEventListener('click', () => {
    scrollSliderTrack.scrollToPrev()
})
