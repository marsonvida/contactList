import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { ContactviewComponent } from './contactview/contactview.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactformComponent } from './contactform/contactform.component';
import { HomeComponent } from './home/home.component';
import { ContacteditComponent } from './contactedit/contactedit.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';

const routes: Routes = [  
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'view/:id', component: ContactviewComponent },  
    { path: 'list', component: ContactlistComponent },  
    { path: 'form', component: ContactformComponent },
    { path: 'edit/:id', component: ContacteditComponent },
    { path: '**', pathMatch   : 'full', component: FourZeroFourComponent}
];  

@NgModule({  
    imports: [RouterModule.forRoot(routes)],  
    exports: [RouterModule]  
})  
export class AppRoutingModule { }