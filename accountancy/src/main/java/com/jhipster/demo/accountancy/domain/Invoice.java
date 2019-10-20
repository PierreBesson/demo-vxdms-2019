package com.jhipster.demo.accountancy.domain;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

import com.jhipster.demo.accountancy.domain.enumeration.InvoiceStatus;

import com.jhipster.demo.accountancy.domain.enumeration.PaymentMethod;

/**
 * A Invoice.
 */
@Document(collection = "invoice")
public class Invoice implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("code")
    private String code;

    @NotNull
    @Field("date")
    private String date;

    @Field("details")
    private String details;

    @NotNull
    @Field("status")
    private InvoiceStatus status;

    @NotNull
    @Field("payment_method")
    private PaymentMethod paymentMethod;

    @NotNull
    @Field("payment_date")
    private String paymentDate;

    @NotNull
    @Field("payment_amount")
    private BigDecimal paymentAmount;

    @DBRef
    @Field("shipment")
    private Set<Shipment> shipments = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public Invoice code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDate() {
        return date;
    }

    public Invoice date(String date) {
        this.date = date;
        return this;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDetails() {
        return details;
    }

    public Invoice details(String details) {
        this.details = details;
        return this;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public InvoiceStatus getStatus() {
        return status;
    }

    public Invoice status(InvoiceStatus status) {
        this.status = status;
        return this;
    }

    public void setStatus(InvoiceStatus status) {
        this.status = status;
    }

    public PaymentMethod getPaymentMethod() {
        return paymentMethod;
    }

    public Invoice paymentMethod(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }

    public void setPaymentMethod(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getPaymentDate() {
        return paymentDate;
    }

    public Invoice paymentDate(String paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }

    public void setPaymentDate(String paymentDate) {
        this.paymentDate = paymentDate;
    }

    public BigDecimal getPaymentAmount() {
        return paymentAmount;
    }

    public Invoice paymentAmount(BigDecimal paymentAmount) {
        this.paymentAmount = paymentAmount;
        return this;
    }

    public void setPaymentAmount(BigDecimal paymentAmount) {
        this.paymentAmount = paymentAmount;
    }

    public Set<Shipment> getShipments() {
        return shipments;
    }

    public Invoice shipments(Set<Shipment> shipments) {
        this.shipments = shipments;
        return this;
    }

    public Invoice addShipment(Shipment shipment) {
        this.shipments.add(shipment);
        shipment.setInvoice(this);
        return this;
    }

    public Invoice removeShipment(Shipment shipment) {
        this.shipments.remove(shipment);
        shipment.setInvoice(null);
        return this;
    }

    public void setShipments(Set<Shipment> shipments) {
        this.shipments = shipments;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Invoice)) {
            return false;
        }
        return id != null && id.equals(((Invoice) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Invoice{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", date='" + getDate() + "'" +
            ", details='" + getDetails() + "'" +
            ", status='" + getStatus() + "'" +
            ", paymentMethod='" + getPaymentMethod() + "'" +
            ", paymentDate='" + getPaymentDate() + "'" +
            ", paymentAmount=" + getPaymentAmount() +
            "}";
    }
}
