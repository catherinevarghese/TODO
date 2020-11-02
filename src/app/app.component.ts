import { Component, ViewContainerRef } from '@angular/core';

import { ColorPickerService, Cmyk } from 'ngx-color-picker';

import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public color1: string = '#0a4885';
  title = 'todo-application';
  constructor(
    public vcRef: ViewContainerRef, 
    private cpService: ColorPickerService,
    private translate: TranslateService
) { 
  translate.setDefaultLang('hi');
}

ngOnInit() {
}

public onChangeColor(color: string): Cmyk {
  const hsva = this.cpService.stringToHsva(color);
  const rgba = this.cpService.hsvaToRgba(hsva);
  console.log(color);
   console.log(rgba);

  return this.cpService.rgbaToCmyk(rgba);
}
}
