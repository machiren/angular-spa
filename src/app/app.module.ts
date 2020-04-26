import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, ja_JP } from 'ng-zorro-antd';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { AppErrorHandlerService } from './app.error.handler';
import { ApiInterceptor } from './api.interceptor';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import ja from '@angular/common/locales/ja';

registerLocaleData(ja);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    LayoutModule,
    FlexLayoutModule,
    AppRoutingModule,
    IconsProviderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({ config: { tokenGetter: AuthService.tokenGetter, skipWhenExpired: true } }),],
  providers: [
    { provide: NZ_I18N, useValue: ja_JP },
    { provide: ErrorHandler, useClass: AppErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
