---
sidebar_position: 2
---

# Messages
Here is the complete list of webhook messages sent by Lago.

## Event ingestion

<details className="custom-toggle">
<summary><b>Event error</b></summary>
This webhook is sent when there is an error related to the creation of an event.

```json
{
  "webhook_type": "event.error",
  "object_type": "event_error",
  "event_error": {
    "status": 422,
    "error": "Unprocessable entity",
    "message": "code does not exist",
    "input_params": {
      "transaction_id": "__transaction_id__",
      "external_customer_id": "customer123",
      "code": "code123"
    }
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **status** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | HTTP status of the error. Possible statuses are `404` or `422` |
| **error** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | HTTP error code. Possible errors are `Not found` or `Unprocessable entity` |
| **message** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Error code. See next list for the description of each error code. |
| **input_params** &nbsp &nbsp <Type>JSON</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | JSON provided at event creation |

| Code | Description |
|--|--|
| **billable_metric_not_found** &nbsp &nbsp <Type>404</Type> | No billable metric matches the given code |
| **customer_not_found** &nbsp &nbsp <Type>404</Type> | No customer matches the external id |
| **subscription_not_found** &nbsp &nbsp <Type>404</Type> | No subscription matches the given external subscription id |
| **invalid_argument** &nbsp &nbsp <Type>422</Type> | No subscription matches the given external subscription id |
| **invalid_recurring_resource** &nbsp &nbsp <Type>422</Type> | Provided recurring resource for persisted event is invalid |
</details>

## Invoices

<details className="custom-toggle">
<summary><b>Draft invoice created</b></summary>
Sent when a new invoice is in draft.

```json
{
  "webhook_type": "invoice.drafted",
  "object_type": "invoice",
  "invoice": {
    "lago_id": "10pb140c-0e7a-44dc-bdff-b683d0770et9",
    "sequential_id": 2,
    "number": "LAG-1234-001-002",
    "issuing_date": "2023-01-22",
    "invoice_type": "subscription",
    "status": "draft",
    "payment_status": "pending",
    "amount_cents": 5500,
    "amount_currency": "USD",
    "vat_amount_cents": 0,
    "vat_amount_currency": "USD",
    "credit_amount_cents": 0,
    "credit_amount_currency": "USD",
    "total_amount_cents": 5500,
    "total_amount_currency": "USD",
    "file_url": null,
    "legacy": false,
    "customer": {
      "lago_id": "578df9d1-a5b5-abc4-b1cd-cc123159cdj3",
      "external_id": "customer_1234",
      "name": "Helen Ross",
      "sequential_id": 26,
      "slug": "LAG-X575-026",
      "created_at": "2023-01-11T06:59:44Z",
      "country": null,
      "address_line1": null,
      "address_line2": null,
      "state": null,
      "zipcode": null,
      "email": null,
      "city": null,
      "url": null,
      "phone": null,
      "logo_url": null,
      "legal_name": null,
      "legal_number": null,
      "currency": "USD",
      "timezone": null,
      "applicable_timezone": "Europe/Paris",
      "billing_configuration": {
        "invoice_grace_period": null,
        "payment_provider": null,
        "vat_rate": null
      }
    },
    "subscriptions": [
      {
        "lago_id": "00911bba-d074-1234-abcd-00d4e57746mm",
        "external_id": "07cc066d-1234-5678-xyzw-e42ea21e6307",
        "lago_customer_id": "578df9d1-a5b5-abc4-b1cd-cc123159cdj3",
        "external_customer_id": "customer_1234",
        "name": "",
        "plan_code": "corporate",
        "status": "active",
        "billing_time": "anniversary",
        "subscription_at": "2023-01-17T15:44:16Z",
        "started_at": "2023-01-17T15:44:16Z",
        "terminated_at": null,
        "canceled_at": null,
        "created_at": "2023-01-17T15:44:39Z",
        "previous_plan_code": null,
        "next_plan_code": null,
        "downgrade_plan_date": null,
        "subscription_date": "2023-01-17"
      }
    ],
    "fees": [
      {
        "lago_id": "12345678-ebea-47de-ghjk-bbbfd42755f3",
        "lago_group_id": null,
        "lago_true_up_fee_id": null,
        "lago_true_up_parent_fee_id": null,
        "item": {
          "type": "subscription",
          "code": "corporate",
          "name": "Corporate"
        },
        "amount_cents": 5500,
        "amount_currency": "USD",
        "vat_amount_cents": 0,
        "vat_amount_currency": "USD",
        "total_amount_cents": 5500,
        "total_amount_currency": "EUR",
        "units": "1.0",
        "events_count": null
      }
    ],
    "credits": []
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **invoice** &nbsp &nbsp <Type>JSON</Type> &nbsp &nbsp <NotNullable>Not nullable</NotNullable> | [Invoice object](../invoices/invoice-object) |
</details>

<details className="custom-toggle">
<summary><b>Finalized invoice created</b></summary>
Sent when an invoice is finalized.

This will allow your application to proceed with the billing.

```json
{
  "webhook_type": "invoice.created",
  "object_type": "invoice",
  "invoice": {
    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "sequential_id": 2,
    "number": "LAG-1234-001-002",
    "issuing_date": "2022-04-29",
    "invoice_type": "subscription",
    "status": "finalized",
    "payment_status": "succeeded",
    "amount_cents": 100,
    "amount_currency": "EUR",
    "vat_amount_cents": 20,
    "vat_amount_currency": "EUR",
    "total_amount_cents": 120,
    "total_amount_currency": "EUR",
    "file_url": "https://getlago.com/invoice/file",
    "customer": {
      "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",
      "sequential_id": 1,
      "slug": "LAG-1234-001",
      "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
      "address_line1": "5230 Penfield Ave",
      "address_line2": null,
      "city": "Woodland Hills",
      "country": "US",
      "created_at": "2022-04-29T08:59:51Z",
      "email": "dinesh@piedpiper.test",
      "legal_name": "Coleman-Blair",
      "legal_number": "49-008-2965",
      "logo_url": "http://hooli.com/logo.png",
      "name": "Gavin Belson",
      "phone": "1-171-883-3711 x245",
      "state": "CA",
      "url": "http://hooli.com",
      "vat_rate": 20.0,
      "zipcode": "91364"
    },
    "subscriptions": [
        {
        "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",
        "external_id": "susbcription_external_id",
        "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",
        "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
        "canceled_at": "2022-04-29T08:59:51Z",
        "created_at": "2022-04-29T08:59:51Z",
        "plan_code": "new_code",
        "started_at": "2022-04-29T08:59:51Z",
        "status": "active",
        "terminated_at": null
      }
    ],
    "fees": [
      {
        "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",
        "lago_group_id": null,
        "lago_true_up_fee_id": null,
        "lago_true_up_parent_fee_id": null,
        "item": {
          "type": "subscription",
          "code": "plan_code",
          "name": "Plan"
        },
        "amount_cents": 100,
        "amount_currency": "EUR",
        "vat_amount_cents": 20,
        "vat_amount_currency": "EUR",
        "total_amount_cents": 120,
        "total_amount_currency": "EUR",
        "units": "0.32",
        "events_count": 23
      }
    ],
    "credits": [
      {
        "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",
        "item": {
          "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",
          "type": "coupon",
          "code": "coupon_code",
          "name": "Coupon"
        },
        "amount_cents": 100,
        "amount_currency": "EUR"
      }
    ]
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **invoice** &nbsp &nbsp <Type>JSON</Type> &nbsp &nbsp <NotNullable>Not nullable</NotNullable> | [Invoice object](../invoices/invoice-object) |
</details>

<details className="custom-toggle">
<summary><b>One-off invoice created</b></summary>
Sent when a one-off invoice is created. Only add-ons can be applied to one-off invoices.

```json
{
  "webhook_type": "invoice.one_off_created",
  "object_type": "invoice",
  "invoice": {
    "lago_id": "b7b6a31f-b81b-4ae5-a9c8-05c407e47416",
    "sequential_id": 4,
    "number": "ONE-0499-001-004",
    "issuing_date": "2023-05-05",
    "invoice_type": "one_off",
    "status": "finalized",
    "payment_status": "pending",
    "currency": "USD",
    "fees_amount_cents": 25000,
    "vat_amount_cents": 2500,
    "coupons_amount_cents": 0,
    "credit_notes_amount_cents": 0,
    "sub_total_vat_excluded_amount_cents": 25000,
    "sub_total_vat_included_amount_cents": 27500,
    "total_amount_cents": 27500,
    "prepaid_credit_amount_cents": 0,
    "file_url": null,
    "version_number": 3,
    "legacy": false,
    "amount_currency": "USD",
    "vat_amount_currency": "USD",
    "credit_amount_currency": "USD",
    "total_amount_currency": "USD",
    "amount_cents": 25000,
    "credit_amount_cents": 0,
    "customer": {
      "lago_id": "37cee916-5751-4665-9774-aa05bb1a2ffd",
      "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
      "name": "Gavin Belson",
      "sequential_id": 1,
      "slug": "TWI-2B86-001",
      "created_at": "2022-06-01T09:01:12Z",
      "country": "US",
      "address_line1": "5230 Penfield Ave",
      "address_line2": null,
      "state": "CA",
      "zipcode": "91364",
      "email": "dinesh@piedpiper.test",
      "city": "Woodland Hills",
      "url": "http://hooli.com",
      "phone": "1-171-883-3711 x245",
      "logo_url": "http://hooli.com/logo.png",
      "legal_name": "Coleman-Blair",
      "legal_number": "49-008-2965",
      "currency": "USD",
      "timezone": null,
      "applicable_timezone": "UTC",
      "billing_configuration": {
        "invoice_grace_period": null,
        "payment_provider": null,
        "vat_rate": 0,
        "document_locale": null
      }
    },
    "fees": [
      {
        "lago_id": "5fe06606-25c8-4aa8-bce8-a19a12383d51",
        "lago_group_id": null,
        "lago_invoice_id": "b7b6a31f-b81b-4ae5-a9c8-05c407e47416",
        "lago_true_up_fee_id": null,
        "lago_true_up_parent_fee_id": null,
        "item": {
          "type": "add_on",
          "code": "setup_fee",
          "name": "Setup Fee",
          "lago_item_id": "b3f1967d-bf84-44a7-b3e9-207024a6aaa5",
          "item_type": "AddOn"
        },
        "amount_cents": 5000,
        "amount_currency": "USD",
        "vat_amount_cents": 500,
        "vat_amount_currency": "USD",
        "total_amount_cents": 5500,
        "total_amount_currency": "USD",
        "units": "5.0",
        "description": "",
        "unit_amount_cents": 1000,
        "events_count": null,
        "payment_status": "pending",
        "created_at": "2023-05-05T15:05:27Z",
        "succeeded_at": null,
        "failed_at": null,
        "refunded_at": null
      },
      {
        "lago_id": "a74705a1-05f2-41cb-b315-ab0c858c215d",
        "lago_group_id": null,
        "lago_invoice_id": "b7b6a31f-b81b-4ae5-a9c8-05c407e47416",
        "lago_true_up_fee_id": null,
        "lago_true_up_parent_fee_id": null,
        "item": {
          "type": "add_on",
          "code": "customer_success_fee",
          "name": "Customer Success",
          "lago_item_id": "66b75fbf-3410-4251-9105-b4b3d5922a1d",
          "item_type": "AddOn"
        },
        "amount_cents": 20000,
        "amount_currency": "USD",
        "vat_amount_cents": 2000,
        "vat_amount_currency": "USD",
        "total_amount_cents": 22000,
        "total_amount_currency": "USD",
        "units": "1.0",
        "description": "My new description",
        "unit_amount_cents": 20000,
        "events_count": null,
        "payment_status": "pending",
        "created_at": "2023-05-05T15:05:27Z",
        "succeeded_at": null,
        "failed_at": null,
        "refunded_at": null
      }
    ]
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **invoice** &nbsp &nbsp <Type>JSON</Type> &nbsp &nbsp <NotNullable>Not nullable</NotNullable> | [Invoice object](../invoices/invoice-object) |
</details>

<details className="custom-toggle">
<summary><b>Prepaid credits added</b></summary>
Sent when prepaid credits have been added to the customer's wallet.

You can use this information to generate a PDF invoice or collect the payment.

```json
{
  "webhook_type": "invoice.paid_credit_added",
  "object_type": "invoice",
  "invoice": {
    "lago_id": "0e77ace9-68ba-0000-aaaa-999888c43f75",
    "sequential_id": 14,
    "number": "SEL-AZ22-034-014",
    "issuing_date": "2023-04-24",
    "invoice_type": "credit",
    "status": "finalized",
    "payment_status": "pending",
    "currency": "USD",
    "fees_amount_cents": 100,
    "amount_cents": 100,
    "vat_amount_cents": 0,
    "coupons_amount_cents": 0,
    "credit_notes_amount_cents": 0,
    "credit_amount_cents": 0,
    "total_amount_cents": 100,
    "prepaid_credit_amount_cents": 0,
    "file_url": null,
    "version_number": 2,
    "legacy": false,
    "amount_currency": "USD",
    "vat_amount_currency": "USD",
    "credit_amount_currency": "USD",
    "total_amount_currency": "USD",
    "customer": {
      "lago_id": "0e77ace9-68ba-1111-bbbb-999888c43f75",
      "external_id": "customer_1234",
      "name": "James White",
      "sequential_id": 34,
      "slug": "SEL-AZ22-034",
      "created_at": "2023-04-19T21:49:37Z",
      "country": null,
      "address_line1": null,
      "address_line2": null,
      "state": null,
      "zipcode": null,
      "email": null,
      "city": null,
      "url": null,
      "phone": null,
      "logo_url": null,
      "legal_name": null,
      "legal_number": null,
      "currency": "USD",
      "timezone": null,
      "applicable_timezone": "UTC",
      "billing_configuration": {
        "invoice_grace_period": null,
        "payment_provider": null,
        "vat_rate": null,
        "document_locale": null
      }
    },
    "fees": [
      {
        "lago_id": "0e77ace9-68ba-3333-hhhh-999888c43f75",
        "lago_group_id": null,
        "lago_invoice_id": "0e77ace9-68ba-4444-pppp-999888c43f75",
        "lago_true_up_fee_id": null,
        "lago_true_up_parent_fee_id": null,
        "item": {
          "type": "credit",
          "code": "credit",
          "name": "credit",
          "lago_item_id": "0e77ace9-68ba-9999-rrrr-999888c43f75",
          "item_type": "WalletTransaction"
        },
        "amount_cents": 100,
        "amount_currency": "USD",
        "vat_amount_cents": 0,
        "vat_amount_currency": "USD",
        "total_amount_cents": 100,
        "total_amount_currency": "USD",
        "units": "1.0",
        "events_count": null,
        "external_subscription_id": null,
        "payment_status": "pending",
        "created_at": "2023-04-24T08:47:43Z",
        "succeeded_at": null,
        "failed_at": null,
        "refunded_at": null
      }
    ]
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **invoice** &nbsp &nbsp <Type>JSON</Type> &nbsp &nbsp <NotNullable>Not nullable</NotNullable> | [Invoice object](../invoices/invoice-object) |
</details>


<details className="custom-toggle">
<summary><b>PDF invoice generated</b></summary>
Sent when the PDF file has been generated for a customer invoice.

This will allow your application to retrieve the PDF invoice.

```json
{
  "webhook_type": "invoice.generated",
  "object_type": "invoice",
  "invoice": {
    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "sequential_id": 2,
    "number": "LAG-1234-001-002",
    "from_date": "2022-04-01",
    "to_date": "2022-04-30",
    "charges_from_date": "2022-04-01",
    "issuing_date": "",
    "amount_cents": 100,
    "amount_currency": "EUR",
    "vat_amount_cents": 20,
    "vat_amount_currency": "EUR",
    "total_amount_cents": 120,
    "total_amount_currency": "EUR",
    "file_url": "https://getlago.com/invoice/file",
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **invoice** &nbsp &nbsp <Type>JSON</Type> &nbsp &nbsp <NotNullable>Not nullable</NotNullable> | [Invoice object](../invoices/invoice-object) |
</details>

<details className="custom-toggle">
<summary><b>Payment status updated</b></summary>
Sent when the payment status of an invoice is updated based on information provided by the PSP.

```json
{
  "webhook_type": "invoice.payment_status_updated",
  "object_type": "invoice",
  "invoice": {
    "lago_id": "68133479-abcd-1234-5678-jklm437da000",
    "sequential_id": 1,
    "number": "SEL-AZ22-040-XXX",
    "issuing_date": "2023-04-24",
    "invoice_type": "subscription",
    "status": "finalized",
    "payment_status": "succeeded",
    "currency": "USD",
    "fees_amount_cents": 70,
    "amount_cents": 70,
    "vat_amount_cents": 11,
    "coupons_amount_cents": 0,
    "credit_notes_amount_cents": 0,
    "credit_amount_cents": 0,
    "total_amount_cents": 81,
    "prepaid_credit_amount_cents": 0,
    "file_url": null,
    "version_number": 2,
    "legacy": false,
    "amount_currency": "USD",
    "vat_amount_currency": "USD",
    "credit_amount_currency": "USD",
    "total_amount_currency": "USD"
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **invoice** &nbsp &nbsp <Type>JSON</Type> &nbsp &nbsp <NotNullable>Not nullable</NotNullable> | [Invoice object](../invoices/invoice-object) |
</details>


## Subscriptions and fees

<details className="custom-toggle">
<summary><b>Instant fee created</b></summary>
Sent when a fee for a charge to be paid in advance is created.

You can use this information to collect the payment of the `pay_in_advance` fee.

```json
{
  "webhook_type": "fee.created",
  "object_type": "fee",
  "fee": {
    "lago_id": "6be23c42-47d2-45a3-9770-5b3572f225c3",
    "lago_group_id": "5b4881e3-b451-472e-9e03-d99379550743",
    "lago_true_up_fee_id": null,
    "lago_true_up_parent_fee_id": null,
    "item": {
      "type": "subscription",
      "code": "plan_code",
      "name": "Plan"
    },
    "amount_cents": 100,
    "amount_currency": "EUR",
    "vat_amount_cents": 20,
    "vat_amount_currency": "EUR",
    "total_amount_cents": 120,
    "total_amount_currency": "EUR",
    "units": "0.32",
    "events_count": 23
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **fee** &nbsp &nbsp <Type>JSON</Type> &nbsp &nbsp <NotNullable>Not nullable</NotNullable> | [Fee object](../fees/fee-object) |

</details>

<details className="custom-toggle">
<summary><b>Subscription terminated</b></summary>
Sent when a subscription is terminated.

```json
{
  "webhook_type": "subscription.terminated",
  "object_type": "subscription",
  "subscription": {
    "lago_id": "0fd99089-b15a-abcd-1234-a8292df18990",
    "external_id": "custom_sub_id_1234",
    "lago_customer_id": "27b9c2d9-abcd-1234-898f-hyt29a8e0eea",
    "external_customer_id": "customer_1234",
    "name": "",
    "plan_code": "premium",
    "status": "terminated",
    "billing_time": "anniversary",
    "subscription_at": "2023-01-11T10:51:29Z",
    "started_at": "2023-01-11T10:51:29Z",
    "terminated_at": "2023-01-24T14:53:02Z",
    "canceled_at": null,
    "created_at": "2023-01-11T10:51:34Z",
    "previous_plan_code": null,
    "next_plan_code": null,
    "downgrade_plan_date": null,
    "subscription_date": "2023-01-11"
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **subscription** &nbsp &nbsp <Type>JSON</Type> &nbsp &nbsp <NotNullable>Not nullable</NotNullable> | [Subscription object](../subscriptions/subscription-object) |
</details>


## External payment providers

<details className="custom-toggle">
<summary><b>Payment provider created</b></summary>
This webhook is sent when a customer is successfully created in the payment provider's application.

This allows you to retrieve the identifier assigned to the customer by the payment service provider.

```json
{
  "webhook_type": "customer.payment_provider_created",
  "object_type": "customer",
  "customer": {
    "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",
    "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "address_line1": "5230 Penfield Ave",
    "address_line2": null,
    "city": "Woodland Hills",
    "country": "US",
    "created_at": "2022-04-29T08:59:51Z",
    "email": "dinesh@piedpiper.test",
    "legal_name": "Coleman-Blair",
    "legal_number": "49-008-2965",
    "logo_url": "http://hooli.com/logo.png",
    "name": "Gavin Belson",
    "phone": "1-171-883-3711 x245",
    "state": "CA",
    "url": "http://hooli.com",
    "vat_rate": 12.5,
    "zipcode": "91364",
    "billing_configuration": {
      "payment_provider": "stripe",
      "provider_customer_id": "cus_12345"
    }
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **customer** &nbsp &nbsp <Type>JSON</Type> &nbsp &nbsp <NotNullable>Not nullable</NotNullable> | [Customer object](../customers/customer-object) |
</details>


<details className="custom-toggle">
<summary><b>Checkout URL generated</b></summary>
Sent when a new customer is created through integration with GoCardless.

Includes the URL that should be used to set up the [direct debit mandate](../../guide/payments/gocardless-integration#direct-debit).

```json
{
  "webhook_type": "customer.checkout_url_generated",
  "object_type": "payment_provider_customer_checkout_url",
  "payment_provider_customer_checkout_url": {
    "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",
    "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "payment_provider": "gocardless",
    "checkout_url": "__CUSTOM_CHECKOUT_URL__"
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **lago_customer_id** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Unique identifer of the customer in Lago |
| **external_customer_id** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Unique identifer of the customer in your application |
| **payment_provider** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Default payment provider for this customer |
| **checkout_url** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | URL that should be used to set up the direct debit mandate |
</details>

<details className="custom-toggle">
<summary><b>Payment provider error</b></summary>
This webhook is sent when there is an error related to the creation of a customer in the payment provider's application.

You should review the customer's data.

```json
{
  "webhook_type": "customer.payment_provider_error",
  "object_type": "payment_provider_customer_error",
  "payment_provider_customer_error": {
    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "payment_provider": "stripe",
    "provider_error": {
      "message": "Invalid email address",
      "error_code": "email_invalid"
    }
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **lago_id** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Unique identifer of the customer in Lago application |
| **external_id** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Unique identifer of the customer in your application |
| **payment_provider** &nbsp &nbsp <Type>String</Type> | Payment provider used to process the payment |
| **provider_error[message]** &nbsp &nbsp <Type>String</Type> | Error message sent by the payment provider |
| **provider_error[error_code]** &nbsp &nbsp <Type>String</Type> | Error code sent by the payment provider |
</details>

<details className="custom-toggle">
<summary><b>Payment failure</b></summary>
Sent when there is an error related to the payment process.

Usually occurs when no valid payment method is defined for the customer in the payment service provider's application.

```json
{
  "webhook_type": "invoice.payment_failure",
  "object_type": "payment_provider_invoice_payment_error",
  "payment_provider_invoice_payment_error": {
    "lago_invoice_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",
    "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "provider_customer_id": "cus_123456",
    "payment_provider": "stripe",
    "provider_error": {
      "message": "Cannot charge a customer that has no active card",
      "error_code": "missing"
    }
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **lago_invoice_id** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Unique identifer of the invoice in Lago application |
| **lago_customer_id** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Unique identifer of the customer in Lago application |
| **external_customer_id** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Unique identifer of the customer in your application |
| **provider_customer_id** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Unique identifer of the customer in payment provider application |
| **payment_provider** &nbsp &nbsp <Type>String</Type> | Payment provider used to process the payment |
| **provider_error[message]** &nbsp &nbsp <Type>String</Type> | Error message sent by the payment provider |
| **provider_error[error_code]** &nbsp &nbsp <Type>String</Type> | Error code sent by the payment provider |
</details>


## Credit notes and refunds

<details className="custom-toggle">
<summary><b>Credit note created</b></summary>
Sent when a new credit note has been issued for a customer.

This will allow your application to proceed with the refund.

```json
{
  "webhook_type": "credit_note.created",
  "object_type": "credit_note",
  "credit_note": {
    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "sequential_id": 2,
    "number": "LAG-1234-CN2",
    "lago_invoice_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "invoice_number": "LAG-1234",
    "issuing_date": "2022-12-06",
    "credit_status": "available",
    "refund_status": "pending",
    "reason": "other",
    "description": "Free text",
    "total_amount_cents": 120,
    "total_amount_currency": "EUR",
    "credit_amount_cents": 100,
    "credit_amount_currency": "EUR",
    "refund_amount_cents": 0,
    "refund_amount_currency": "EUR",
    "balance_amount_cents": 100,
    "balance_amount_currency": "EUR",
    "vat_amount_cents": 20,
    "vat_amount_currency": "EUR",
    "sub_total_vat_excluded_amount_cents": 100,
    "sub_total_vat_excluded_amount_currency": "EUR",
    "created_at": "2022-10-06 09:52:00",
    "updated_at": "2022-10-06 09:52:00",
    "file_url": "https://getlago.com/credit_note/file",
    "items": [
      {
        "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
        "amount_cents": 100,
        "amount_currency": "EUR",
        "fee":       {
          "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
          "item": {
            "type": "charge",
            "code": "user_seats",
            "name": "User Seats"
          },
          "amount_cents": 100,
          "amount_currency": "",
          "vat_amount_cents": 20,
          "vat_amount_currency": "EUR",
          "total_amount_cents": 120,
          "total_amount_currency": "EUR",
          "units": 12.6,
          "events_count": 10
        }
      }
    ]
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **credit_note** &nbsp &nbsp <Type>JSON</Type> &nbsp &nbsp <NotNullable>Not nullable</NotNullable> | [Credit note object](../credit_notes/credit-note-object) |
</details>


<details className="custom-toggle">
<summary><b>PDF credit note generated</b></summary>
Sent when the PDF file has been generated for a credit note.

This will allow your application to retrieve the PDF credit note.

```json
{
  "webhook_type": "credit_note.generated",
  "object_type": "credit_note",
    "credit_note": {
    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "sequential_id": 2,
    "number": "LAG-1234-CN2",
    "lago_invoice_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "invoice_number": "LAG-1234",
    "issuing_date": "2022-12-06",
    "credit_status": "available",
    "refund_status": "pending",
    "reason": "other",
    "description": "Free text",
    "total_amount_cents": 120,
    "total_amount_currency": "EUR",
    "credit_amount_cents": 100,
    "credit_amount_currency": "EUR",
    "refund_amount_cents": 0,
    "refund_amount_currency": "EUR",
    "balance_amount_cents": 100,
    "balance_amount_currency": "EUR",
    "vat_amount_cents": 20,
    "vat_amount_currency": "EUR",
    "sub_total_vat_excluded_amount_cents": 100,
    "sub_total_vat_excluded_amount_currency": "EUR",
    "created_at": "2022-10-06 09:52:00",
    "updated_at": "2022-10-06 09:52:00",
    "file_url": "https://getlago.com/credit_note/file",
    "items": [
      {
        "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
        "amount_cents": 100,
        "amount_currency": "EUR",
        "fee":       {
          "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
          "item": {
            "type": "charge",
            "code": "user_seats",
            "name": "User Seats"
          },
          "amount_cents": 100,
          "amount_currency": "",
          "vat_amount_cents": 20,
          "vat_amount_currency": "EUR",
          "total_amount_cents": 120,
          "total_amount_currency": "EUR",
          "units": 12.6,
          "events_count": 10
        }
      }
    ]
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **credit_note** &nbsp &nbsp <Type>JSON</Type> &nbsp &nbsp <NotNullable>Not nullable</NotNullable> | [Credit note object](../credit_notes/credit-note-object) |
</details>


<details className="custom-toggle">
<summary><b>Refund failure</b></summary>
This webhook is sent when there is an error related to a credit note refund of a payment previously created on a payment provider.

```json
{
  "webhook_type": "credit_note.refund_failure",
  "object_type": "payment_provider_customer_error",
  "credit_note_payment_provider_refund_error": {
    "lago_credit_note_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "lago_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "provider_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "payment_provider": "stripe",
    "provider_error": {
      "message": "error message",
      "code": "error_code"
    },
  }
}
```

| Attributes | Description |
| -----------| ----------- |
| **lago_credit_note_id** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Unique identifer of the credit note in Lago application |
| **lago_customer_id** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Unique identifer of the customer in Lago application |
| **external_customer_id** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Unique identifer of the customer in your application |
| **provider_customer_id** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Unique identifer of the customer in payment provider |
| **payment_provider** &nbsp &nbsp <Type>String</Type> &nbsp &nbsp <NotNullable>Not null</NotNullable> | Payment provider used to process the payment |
| **provider_error[message]** &nbsp &nbsp <Type>String</Type> | Error message sent by the payment provider |
| **provider_error[error_code]** &nbsp &nbsp <Type>String</Type> | Error message sent by the payment provider |
</details>