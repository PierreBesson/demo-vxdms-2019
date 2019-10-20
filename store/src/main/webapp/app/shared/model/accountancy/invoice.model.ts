import { IShipment } from 'app/shared/model/accountancy/shipment.model';
import { InvoiceStatus } from 'app/shared/model/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/shared/model/enumerations/payment-method.model';

export interface IInvoice {
  id?: number;
  code?: string;
  date?: string;
  details?: string;
  status?: InvoiceStatus;
  paymentMethod?: PaymentMethod;
  paymentDate?: string;
  paymentAmount?: number;
  shipments?: IShipment[];
}

export class Invoice implements IInvoice {
  constructor(
    public id?: number,
    public code?: string,
    public date?: string,
    public details?: string,
    public status?: InvoiceStatus,
    public paymentMethod?: PaymentMethod,
    public paymentDate?: string,
    public paymentAmount?: number,
    public shipments?: IShipment[]
  ) {}
}
