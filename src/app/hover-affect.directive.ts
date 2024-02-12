import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
@Input() bold:string="";
@Input() underline:string="";
  constructor(private element:ElementRef) { }
@HostListener('mouseenter') mouseEnter(){
  this.element.nativeElement.style.fontWeight=this.bold;
  this.element.nativeElement.style.textDecoration=this.underline;
}
@HostListener('mouseleave') mouseLeave(){
  this.element.nativeElement.style.fontWeight='normal';
  this.element.nativeElement.style.textDecoration='none';
}
}
