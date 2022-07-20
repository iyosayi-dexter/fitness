import './styles/style.scss'
import {setImgSource} from './utils'
import wk1 from './assets/images/wk1.jpg'
import wk2 from './assets/images/wk2.jpg'
import wk3 from './assets/images/wk3.jpg'
import wk4 from './assets/images/wk4.jpg'
import wk5 from './assets/images/wk5.jpg'
import wk6 from './assets/images/wk6.jpg'

import zod from './assets/images/zod.jpg'
import girl from './assets/images/girl.jpg'
import guy from './assets/images/guy.jpg'

const workout_images = [ wk1, wk2, wk3 , wk4 , wk5 , wk6]

const testi__users = [girl, guy, zod]


document.querySelectorAll<HTMLImageElement>(".goal__img").forEach((el:HTMLImageElement , index:number)=>{
    setImgSource(el,workout_images[index])
})


document.querySelectorAll<HTMLImageElement>(".testimonials__userPic").forEach((el:HTMLImageElement, index:number)=>{
    setImgSource(el,testi__users[index])
})


document.querySelector('#close_btn')?.addEventListener("click", ()=>{
    document.querySelector("#nav")?.classList.add('header__nav--close')
})

document.querySelector("#menu_btn")?.addEventListener("click", ()=>{
    document.querySelector("#nav")?.classList.remove('header__nav--close')
})