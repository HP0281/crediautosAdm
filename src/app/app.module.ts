import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule, provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireStorageModule, provideStorage,getStorage } from "@angular/fire/storage";
import { AngularFirestore, provideFirestore,getFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from '@angular/fire';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';



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
        AngularFireStorageModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, AngularFirestore],
    bootstrap: [AppComponent]
})
export class AppModule {}
