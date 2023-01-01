import {
Component, 
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
DoCheck,
Input,
OnChanges,
OnDestroy,
OnInit,
SimpleChanges,
ViewEncapsulation,
ViewChild,
ElementRef,
ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native

})

export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{

@Input('srvElement') element: {type: string, name: string, content: string};
@Input() name: string;
@ViewChild('heading') header: ElementRef;
@ContentChild ('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log('constructor called');
  }
ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }
ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
ngDoCheck(): void {
  console.log('ngDoCheck called');
}
ngAfterContentInit(): void {
  console.log('ngAfterContentInit called');
  console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
}
ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked called');
}

ngAfterViewInit(): void {
  console.log('ngAfterViewInit called');
  console.log('Text Content: ' + this.header.nativeElement.textContent);
}
ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked called');
}
ngOnDestroy(): void {
  console.log('ngOnDestroy called');
}
}
