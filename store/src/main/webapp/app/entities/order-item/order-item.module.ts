import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreSharedModule } from 'app/shared/shared.module';
import { OrderItemComponent } from './order-item.component';
import { OrderItemDetailComponent } from './order-item-detail.component';
import { OrderItemUpdateComponent } from './order-item-update.component';
import { OrderItemDeletePopupComponent, OrderItemDeleteDialogComponent } from './order-item-delete-dialog.component';
import { orderItemRoute, orderItemPopupRoute } from './order-item.route';

const ENTITY_STATES = [...orderItemRoute, ...orderItemPopupRoute];

@NgModule({
  imports: [StoreSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    OrderItemComponent,
    OrderItemDetailComponent,
    OrderItemUpdateComponent,
    OrderItemDeleteDialogComponent,
    OrderItemDeletePopupComponent
  ],
  entryComponents: [OrderItemDeleteDialogComponent]
})
export class StoreOrderItemModule {}
