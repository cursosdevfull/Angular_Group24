import { Routes } from '@angular/router';
import { ProductList } from './views/product-list/product-list';
import { ProductReport } from './views/product-report/product-report';
import { ProductSummary } from './views/product-summary/product-summary';
import { ProductService } from './services/product-service';

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductList,
    //providers: [ProductService],
  },
  {
    path: 'report',
    component: ProductReport,
  },
  {
    path: 'summary',
    component: ProductSummary,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
