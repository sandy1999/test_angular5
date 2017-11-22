import { trigger,state,animate,animation, style,transition,keyframes,useAnimation } from "@angular/animations";

export const bounceLeftAnimation = animation(
    animate('0.5s ease-in',keyframes([
        style({
            offset:.2,
            opacity:1,
            transform:'translateX(20px)'
        }),
        style({
            offset:1,
            opacity:0,
            transform:'translateX(-100%)'
        })
    ]))
)

export const fadeInAnimation = animation([
    style({opacity:0}),
    animate('{{duration}} {{easing}}')
],{
    params:{
        duration:'2s',
        easing:'ease-out'
    }
})

export const fadeOutAnimation = animation([
    animate('{{duration}} {{easing}}')
],{
    params:{
        duration:'2s',
        easing:'ease-in'
    }
})
export const slide = trigger('slide',[
    transition(':enter',[
        animate(500,style({transform:'translateX(10px)'}))
    ]),
    transition(':leave',[
       useAnimation(bounceLeftAnimation) 
    ])
])
export const fade = trigger('fade',[
    state('void',style({opacity:0})),
        transition(':enter',[
        animate(1500)
        ]),

        transition(':leave',[
        animate(1500)
    ])
  ])