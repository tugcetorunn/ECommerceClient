import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';
// nihai rotanın oluşturulduğu yer
const routes: Routes = [
  // örn www.xsite.com/admin isteği geldiğinde layoutComponente git ve bu layout componentin içindeki componentler
  // şunlar demiş oluyoruz.
  { // ana path -> admin, altındakiler children
    path: "admin", component: LayoutComponent, children: [ // component: görüntülenecek componenti yazıyoruz
    // childrenlarda component bazı rotayı zaten module lerde oluşturduk. burada artık module ü baz alacağız.
    // yani bu ana rota oluştururken kullandığımı path ler bizim base path lerimiz. bu isimde istek geldikçe bunun
    // altında ilgili module deki path leri ekle diyoruz. yani admin/components/customers.module içindeki path.
    // bunun için de burada components değil loadChildren ile import işlemlerimizi yapıyoruz.
    { path: "customers", loadChildren: () => import("./admin/components/customers/customers.module")
                                             .then(module => module.CustomersModule) },
    // artık https://www.xsite.com/admin/customers diye bir istek gelirse import ettiğimiz customers.module ü arayacak.
    { path: "products", loadChildren: () => import("./admin/components/products/products.module")
                                            .then(module => module.ProductsModule) },
    { path: "orders", loadChildren: () => import("./admin/components/orders/orders.module")
                                          .then(module => module.OrdersModule) },
    // dashboard, home gibi sayfalara direk ana domain ile gideriz genelde bu yüzden path vermiyoruz ve;                                      
    { path: "", component: DashboardComponent } // anasayfa gibi yerlerde direk componenti çağırıyoruz yukarıdaki gibi
    // lazy loading uygulamıyoruz. burada zaten component seviyesinde root yaptığımız için de aslında dashboardModulede
    // route yapmamıza gerek yok.
    // loadChildren ile yaptığımız module bazlı import işlemi lazyLoadinge de sebep oluyor.
  ]},
  // ana layout ta bir layout içinden listelendirerek değil direk admin seviyesinde ekleme yapacağız. çünkü ana
  // layouta karşılık gelen bir LayoutComponent yok. ana layoutta tüm children lara tek tek obje oluşturacağız.
  { path: "", component: HomeComponent }, // path i boş olan isteklerde (anasayfalarda) direk componenti veriyoruz.
  { path: "basket", loadChildren: () => import("./ui/components/baskets/baskets.module")
                                        .then(module => module.BasketsModule)},
  { path: "products", loadChildren: () => import("./ui/components/products/products.module")
                                          .then(module => module.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // nihai rota root olarak ekleniyor. default satır
  exports: [RouterModule] // default satır. ana module de kullanılabilmesi için export ediliyor.
})
export class AppRoutingModule { }
