import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgUiBannerModule } from '@storybook-nx-show/ng/ui/banner';
import { NgUiButtonModule } from '@storybook-nx-show/ng/ui/button';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgUiBannerModule, NgUiButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
