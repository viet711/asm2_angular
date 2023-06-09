import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/Client/signup/signup.component';
import { SigninComponent } from './pages/Client/signin/signin.component';
import { NotfoundComponent } from './components/not-found/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShopComponent } from './components/shop/shop.component';

import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { ListProductComponent } from './components/Admin/list-product/list-product.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { ContainerComponent } from './pages/Client/container/container.component';

import { AddComponent } from './components/Admin/add/add.component';
import { EditComponent } from './components/Admin/edit/edit.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: ContainerComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'shop', component: ShopComponent },


    ],
  },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },

  //admin
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ListProductComponent },

      { path: 'add', component:  AddComponent},
      { path: 'edit/:id', component: EditComponent },


    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule],
})
export class AppRoutingModule {}
