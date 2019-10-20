import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreSharedModule } from 'app/shared/shared.module';
import { InvoiceComponent } from './invoice.component';
import { InvoiceDetailComponent } from './invoice-detail.component';
import { InvoiceUpdateComponent } from './invoice-update.component';
import { InvoiceDeletePopupComponent, InvoiceDeleteDialogComponent } from './invoice-delete-dialog.component';
import { invoiceRoute, invoicePopupRoute } from './invoice.route';

const ENTITY_STATES = [...invoiceRoute, ...invoicePopupRoute];

@NgModule({
  imports: [StoreSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    InvoiceComponent,
    InvoiceDetailComponent,
    InvoiceUpdateComponent,
    InvoiceDeleteDialogComponent,
    InvoiceDeletePopupComponent
  ],
  entryComponents: [InvoiceDeleteDialogComponent]
})
export class AccountancyInvoiceModule {}
