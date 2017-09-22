import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodosResolver } from './resource/todos.resolver';


const routes: Routes = [{
path: '',
redirectTo: 'todos',
pathMatch: 'full'
},
{
    path: 'todos',
    component: TodosComponent,
    data: {
        title: 'Example of static route data'
    },
    // This tells Angular router to resolve data using TodosResolver and assign the resolver’s return value as todos in the route’s data
    resolve: {
        todos: TodosResolver
    }
}, {
    // Notice that the wildcard route must be the last route in our routing configuration for it to work as expected.
    path: '**',
    component: PageNotFoundComponent
}];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers: [
    TodosResolver
]
})

export class AppRoutingModule {}
