import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.StoreProductModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.StoreCustomerModule)
      },
      {
        path: 'product-order',
        loadChildren: () => import('./product-order/product-order.module').then(m => m.StoreProductOrderModule)
      },
      {
        path: 'order-item',
        loadChildren: () => import('./order-item/order-item.module').then(m => m.StoreOrderItemModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./accountancy/invoice/invoice.module').then(m => m.AccountancyInvoiceModule)
      },
      {
        path: 'shipment',
        loadChildren: () => import('./accountancy/shipment/shipment.module').then(m => m.AccountancyShipmentModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class StoreEntityModule {}
