import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreSharedModule } from 'app/shared/shared.module';
import { ShipmentComponent } from './shipment.component';
import { ShipmentDetailComponent } from './shipment-detail.component';
import { ShipmentUpdateComponent } from './shipment-update.component';
import { ShipmentDeletePopupComponent, ShipmentDeleteDialogComponent } from './shipment-delete-dialog.component';
import { shipmentRoute, shipmentPopupRoute } from './shipment.route';

const ENTITY_STATES = [...shipmentRoute, ...shipmentPopupRoute];

@NgModule({
  imports: [StoreSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ShipmentComponent,
    ShipmentDetailComponent,
    ShipmentUpdateComponent,
    ShipmentDeleteDialogComponent,
    ShipmentDeletePopupComponent
  ],
  entryComponents: [ShipmentDeleteDialogComponent]
})
export class AccountancyShipmentModule {}
