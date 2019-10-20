package com.jhipster.demo.accountancy.repository;
import com.jhipster.demo.accountancy.domain.Invoice;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data MongoDB repository for the Invoice entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InvoiceRepository extends MongoRepository<Invoice, String> {

}
