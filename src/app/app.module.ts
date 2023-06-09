import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/Client/header/header.component';
import { FooterComponent } from './shared/Client/footer/footer.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ContainerComponent } from './pages/Client/container/container.component';
import { SignupComponent } from './pages/Client/signup/signup.component';
import { SigninComponent } from './pages/Client/signin/signin.component';
import { NotfoundComponent } from './components/not-found/notfound.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CarouselComponent } from './components/product-detail/carousel/carousel.component';
import { BannerComponent } from './components/banner/banner.component';
import { ShopComponent } from './components/shop/shop.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { Banner2Component } from './components/banner2/banner2.component';
import { Banner3Component } from './components/banner3/banner3.component';
import { Banner4Component } from './components/banner4/banner4.component';
import { ButtonModule } from 'primeng/button';
import { MenuHiddenComponent } from './shared/Client/header/menu-hidden/menu-hidden.component';
import { SearchComponent } from './shared/Client/header/search/search.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { ListProductComponent } from './components/Admin/list-product/list-product.component';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpeedDialModule } from 'primeng/speeddial';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { AnimateModule } from 'primeng/animate';
import { CardModule } from 'primeng/card';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './shared/Admin/sidebar/sidebar.component';
import { ContainerAdimComponent } from './pages/Admin/container-adim/container-adim.component';
import { SizeComponent } from './components/Admin/size/size.component';
import { ColorComponent } from './components/Admin/color/color.component';
import { CategoyComponent } from './components/Admin/categoy/categoy.component';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MailOutline, AppstoreOutline, SettingOutline } from '@ant-design/icons-angular/icons';
const icons = [MailOutline, AppstoreOutline, SettingOutline];
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { AddComponent } from './components/Admin/add/add.component';
import { EditComponent } from './components/Admin/edit/edit.component';
import { CommentComponent } from './components/comment/comment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListProductsComponent,
    ProductDetailComponent,
    ContainerComponent,
    SignupComponent,
    SigninComponent,
    NotfoundComponent,
    TestimonialsComponent,
    CarouselComponent,
    BannerComponent,
    ShopComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    AccountComponent,
    Banner2Component,
    Banner3Component,
    Banner4Component,
    MenuHiddenComponent,
    SearchComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    DashboardComponent,
    ListProductComponent,
    SigninComponent,
    SidebarComponent,
    ContainerAdimComponent,
    SizeComponent,
    ColorComponent,
    CategoyComponent,
    AddComponent,
    EditComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
   NzIconModule,
   NzLayoutModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    CarouselModule,
    TagModule,
    AutoCompleteModule,
    AvatarModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    AutoCompleteModule,
    BadgeModule,
    BreadcrumbModule,
    BlockUIModule,
    ButtonModule,
    CalendarModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    ChipModule,
    ColorPickerModule,
    ConfirmDialogModule,
    ContextMenuModule,
    VirtualScrollerModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DockModule,
    DragDropModule,
    DropdownModule,
    DynamicDialogModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    InplaceModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ImageModule,
    KnobModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrganizationChartModule,
    OrderListModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    SelectButtonModule,
    SidebarModule,
    ScrollerModule,
    ScrollPanelModule,
    ScrollTopModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SpeedDialModule,
    SpinnerModule,
    SplitterModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TagModule,
    TerminalModule,
    TieredMenuModule,
    TimelineModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TriStateCheckboxModule,
    TreeModule,
    TreeSelectModule,
    TreeTableModule,
    AnimateModule,
    CardModule,
    CommonModule,
    ReactiveFormsModule,
    NzTableModule,
    BrowserModule, NzBreadCrumbModule
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent],
  exports: [SignupComponent],
})
export class AppModule {}
