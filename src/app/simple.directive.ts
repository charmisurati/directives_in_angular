import { Directive ,ElementRef,Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective {

  @HostBinding('style.backgroundColor')bgcolor:string="'red'";
  @Input()defaultcolor:string;
  @Input()setcolor:string;
  constructor(private eleref:ElementRef, private ren:Renderer2) { 
    // this.ren.setStyle(this.eleref.nativeElement,'background-color','yellow');
    this.bgcolor="red";
  }
  @HostListener('mouseenter') mouseenter(eventdata:Event)
  {
    //this.ren.setStyle(this.eleref.nativeElement,'background-color','green');
    //this.bgcolor="yellow";
    this.bgcolor=this.defaultcolor;
  }
  @HostListener('mouseleave') mouseleave (eventdata:Event)
  {
   // this.ren.setStyle(this.eleref.nativeElement,'background-color','transparent');
  // this.bgcolor="transparent";
  this.bgcolor=this.setcolor;
  }

}
