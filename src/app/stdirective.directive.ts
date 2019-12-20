import { Directive, Input, ElementRef, ViewContainerRef,TemplateRef } from '@angular/core';

@Directive({
  selector: '[appStdirective]'
})
export class StdirectiveDirective {

  constructor(private ss: TemplateRef<any>, private ele:ElementRef, private view: ViewContainerRef) { }
  @Input() set appStdirective (condition:boolean)
  {
    if(condition)
    {
      this.view.createEmbeddedView(this.ss);
    }
    else{
      this.view.clear();
    }
  }

}
