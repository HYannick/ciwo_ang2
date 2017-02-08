import { Directive, Renderer, ElementRef, AnimationPlayer } from '@angular/core';
import { AnimationStyles } from "@angular/core/src/animation/animation_styles";
import { AnimationKeyframe } from "@angular/core/src/animation/animation_keyframe";


@Directive({
    selector: '[sliderRenderer]'
})

export class SliderDirective {
    node: string;
    slider = [];
    constructor(private renderer: Renderer, private elementRef : ElementRef ){}
    ngAfterContentInit(){
        const wrapper = this.elementRef.nativeElement;
        const slides = wrapper.getElementsByClassName('slide');
        console.log(slides)

    }
}
