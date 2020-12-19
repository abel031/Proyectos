import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import localES from '@angular/common/locales/es';
import { registerLocaleData} from '@angular/common'

import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';

registerLocaleData(localES,"es");

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
