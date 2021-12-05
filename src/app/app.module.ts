import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFirestore} from "@angular/fire/firestore";
import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import { MatCardModule } from '@angular/material/card';
import { MarcasPipe } from './pipes/marcas.pipe';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFireStorageModule,
        MatCardModule
   
    ],
    exports: [MatCardModule],
    declarations: [AppComponent],
    providers: [AuthGuard, AngularFirestore],
    bootstrap: [AppComponent]
})
export class AppModule {}
