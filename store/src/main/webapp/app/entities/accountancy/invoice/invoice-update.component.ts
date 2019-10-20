import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IInvoice, Invoice } from 'app/shared/model/accountancy/invoice.model';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'jhi-invoice-update',
  templateUrl: './invoice-update.component.html'
})
export class InvoiceUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    code: [null, [Validators.required]],
    date: [null, [Validators.required]],
    details: [],
    status: [null, [Validators.required]],
    paymentMethod: [null, [Validators.required]],
    paymentDate: [null, [Validators.required]],
    paymentAmount: [null, [Validators.required]]
  });

  constructor(protected invoiceService: InvoiceService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ invoice }) => {
      this.updateForm(invoice);
    });
  }

  updateForm(invoice: IInvoice) {
    this.editForm.patchValue({
      id: invoice.id,
      code: invoice.code,
      date: invoice.date,
      details: invoice.details,
      status: invoice.status,
      paymentMethod: invoice.paymentMethod,
      paymentDate: invoice.paymentDate,
      paymentAmount: invoice.paymentAmount
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const invoice = this.createFromForm();
    if (invoice.id !== undefined) {
      this.subscribeToSaveResponse(this.invoiceService.update(invoice));
    } else {
      this.subscribeToSaveResponse(this.invoiceService.create(invoice));
    }
  }

  private createFromForm(): IInvoice {
    return {
      ...new Invoice(),
      id: this.editForm.get(['id']).value,
      code: this.editForm.get(['code']).value,
      date: this.editForm.get(['date']).value,
      details: this.editForm.get(['details']).value,
      status: this.editForm.get(['status']).value,
      paymentMethod: this.editForm.get(['paymentMethod']).value,
      paymentDate: this.editForm.get(['paymentDate']).value,
      paymentAmount: this.editForm.get(['paymentAmount']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IInvoice>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
