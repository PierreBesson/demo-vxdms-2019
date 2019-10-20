package com.jhipster.demo.accountancy.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Shipment.
 */
@Document(collection = "shipment")
public class Shipment implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("tracking_code")
    private String trackingCode;

    @NotNull
    @Field("date")
    private Instant date;

    @Field("details")
    private String details;

    @DBRef
    @Field("invoice")
    @JsonIgnoreProperties("shipments")
    private Invoice invoice;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTrackingCode() {
        return trackingCode;
    }

    public Shipment trackingCode(String trackingCode) {
        this.trackingCode = trackingCode;
        return this;
    }

    public void setTrackingCode(String trackingCode) {
        this.trackingCode = trackingCode;
    }

    public Instant getDate() {
        return date;
    }

    public Shipment date(Instant date) {
        this.date = date;
        return this;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public String getDetails() {
        return details;
    }

    public Shipment details(String details) {
        this.details = details;
        return this;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Invoice getInvoice() {
        return invoice;
    }

    public Shipment invoice(Invoice invoice) {
        this.invoice = invoice;
        return this;
    }

    public void setInvoice(Invoice invoice) {
        this.invoice = invoice;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Shipment)) {
            return false;
        }
        return id != null && id.equals(((Shipment) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Shipment{" +
            "id=" + getId() +
            ", trackingCode='" + getTrackingCode() + "'" +
            ", date='" + getDate() + "'" +
            ", details='" + getDetails() + "'" +
            "}";
    }
}
