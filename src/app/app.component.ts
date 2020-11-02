import { Component, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { ThemeService } from './_services/theme.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme =  new FormControl(false);
  public color1: string = '#0a4885';
  title = 'todo-application';
  constructor(
    private themeService: ThemeService,
    public vcRef: ViewContainerRef, 
    private cpService: ColorPickerService,
    private translate: TranslateService
) { 
  translate.setDefaultLang('en');
  // this.darkTheme.valueChanges.subscribe(value => {
  //   if (value) {
  //     this.themeService.toggleDark();
  //   } else {
  //     this.themeService.toggleLight();
  //   }
  // });
}

ngOnInit() {
}
themeSelection(color){
  if(color === 'dark'){
    this.themeService.toggleDark();
  } else{
    this.themeService.toggleLight();
  }
  }

toggleLang(lang){
  console.log(lang);
    this.translate.use(lang);

  // this.translate.setDefaultLang(lang);
}
 getComboA(selectObject) {
  var value = selectObject.value;  
  console.log(value);
}
public onChangeColor(color: string): Cmyk {
  const hsva = this.cpService.stringToHsva(color);
  const rgba = this.cpService.hsvaToRgba(hsva);
  console.log(color);
   console.log(rgba);

  return this.cpService.rgbaToCmyk(rgba);
}
}
