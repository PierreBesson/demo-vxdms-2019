import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { take, map } from 'rxjs/operators';
import { InvoiceService } from 'app/entities/accountancy/invoice/invoice.service';
import { IInvoice, Invoice } from 'app/shared/model/accountancy/invoice.model';
import { InvoiceStatus } from 'app/shared/model/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/shared/model/enumerations/payment-method.model';

describe('Service Tests', () => {
  describe('Invoice Service', () => {
    let injector: TestBed;
    let service: InvoiceService;
    let httpMock: HttpTestingController;
    let elemDefault: IInvoice;
    let expectedResult;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = {};
      injector = getTestBed();
      service = injector.get(InvoiceService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new Invoice(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', InvoiceStatus.PAID, PaymentMethod.CREDIT_CARD, 'AAAAAAA', 0);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);
        service
          .find(123)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: elemDefault });
      });

      it('should create a Invoice', () => {
        const returnedFromService = Object.assign(
          {
            id: 0
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        service
          .create(new Invoice(null))
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should update a Invoice', () => {
        const returnedFromService = Object.assign(
          {
            code: 'BBBBBB',
            date: 'BBBBBB',
            details: 'BBBBBB',
            status: 'BBBBBB',
            paymentMethod: 'BBBBBB',
            paymentDate: 'BBBBBB',
            paymentAmount: 1
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);
        service
          .update(expected)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should return a list of Invoice', () => {
        const returnedFromService = Object.assign(
          {
            code: 'BBBBBB',
            date: 'BBBBBB',
            details: 'BBBBBB',
            status: 'BBBBBB',
            paymentMethod: 'BBBBBB',
            paymentDate: 'BBBBBB',
            paymentAmount: 1
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        service
          .query(expected)
          .pipe(
            take(1),
            map(resp => resp.body)
          )
          .subscribe(body => (expectedResult = body));
        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Invoice', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
