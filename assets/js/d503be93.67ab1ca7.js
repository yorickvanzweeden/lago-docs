"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[9653],{8945:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/new-api-endpoints","metadata":{"permalink":"/changelog/new-api-endpoints","editUrl":"changelog/changelog/new-api-endpoints.md","source":"@site/changelog/new-api-endpoints.md","title":"Released new API endpoints","description":"We like our users when they use our nice and clean UI, but we also love when they use our API. One of the usecase could be to use Lago as a white-labeled solution.","date":"2022-07-13T18:00:00.000Z","formattedDate":"July 13, 2022","tags":[],"readingTime":1.01,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-07-13T18:00"},"nextItem":{"title":"App version","permalink":"/changelog/app-version"}},"content":"We like our users when they use our nice and clean UI, but we also love when they use our API. One of the usecase could be to use Lago as a white-labeled solution.\\n\\nHere is the full list of endpoints we have just released:\\n\\n**Billable metrics**\\n- Create a billable metric `POST /api/v1/billable_metrics`\\n- Update a billable metric `PUT /api/v1/billable_metrics/:code`\\n- Destroy a billable metric `DELETE /api/v1/billable_metrics/:code`\\n- Fetch a specific billable metric `GET /api/v1/billable_metrics/:code`\\n- Fetch all billable metrics `GET /api/v1/billable_metrics?per_page=2&page=1`\\n\\n**Plans**\\n- Create a plan `POST /api/v1/plans`\\n- Update a plan `PUT /api/v1/plans/:code`\\n- Destroy a plan `DELETE /api/v1/plans/:code`\\n- Fetch a specific plan `GET /api/v1/plans/:code`\\n- Fetch all plans `GET /api/v1/plans?per_page=2&page=1`\\n\\n**Coupons**\\n- Create a coupon `POST /api/v1/coupons`\\n- Update a coupon `PUT /api/v1/coupons/:code`\\n- Destroy a coupon `DELETE /api/v1/coupons/:code`\\n- Fetch a specific coupon `GET /api/v1/coupons/:code`\\n- Fetch all coupons `GET /api/v1/coupons?per_page=2&page=1`\\n\\n**Add-ons**\\n- Create a add_on `POST /api/v1/add_ons`\\n- Update a add_on `PUT /api/v1/add_ons/:code`\\n- Destroy a add_on `DELETE /api/v1/add_ons/:code`\\n- Fetch a specific add_on `GET /api/v1/add_ons/:code`\\n- Fetch all add_ons `GET /api/v1/add_ons?per_page=2&page=1`\\n\\n**Current usage**\\n- Get the current usage of a specific customer `GET /api/v1/customers/:customer_id/current_usage`\\n\\n**Organization**\\n- Update the information of your organization `PUT /api/v1/organizations`"},{"id":"/app-version","metadata":{"permalink":"/changelog/app-version","editUrl":"changelog/changelog/app-version.md","source":"@site/changelog/app-version.md","title":"App version","description":"It is now possible to check the version of the Lago application you are using.","date":"2022-07-13T10:00:00.000Z","formattedDate":"July 13, 2022","tags":[],"readingTime":0.225,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-07-13T10:00"},"prevItem":{"title":"Released new API endpoints","permalink":"/changelog/new-api-endpoints"},"nextItem":{"title":"Customer current usage","permalink":"/changelog/current-usage"}},"content":"It is now possible to check the version of the Lago application you are using.\\n\\nClick the name of your organization in the top-left corner of the user interface to see the app version currently in use.\\n\\n![App version as displayed in the user interface](../static/img/app-version.png)"},{"id":"/current-usage","metadata":{"permalink":"/changelog/current-usage","editUrl":"changelog/changelog/current-usage.md","source":"@site/changelog/current-usage.md","title":"Customer current usage","description":"Current Usage","date":"2022-07-13T10:00:00.000Z","formattedDate":"July 13, 2022","tags":[],"readingTime":0.54,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-07-13T10:00"},"prevItem":{"title":"App version","permalink":"/changelog/app-version"},"nextItem":{"title":"PDF invoices","permalink":"/changelog/download-invoices"}},"content":"![Current Usage](../static/img/current-usage.png)\\n\\nGood news for those who follow closely the consumption of their customers. You can now track the current billing usage of your customers either from the UI or from the API.\\n\\n**To access this Usage tab:**\\n1. Access your list of **customers**;\\n2. Select a specific customer that is **already linked to a subscription**;\\n3. Access the **usage** tab; and\\n4. Get a complete view of **usage-based consumption** that is going to be billed on the next invoice.\\n\\nOn top of that, you can fetch the current usage of a customer directly from the API. To do so, you can access the following endpoint `GET /api/v1/customers/:customer_id/current_usage`"},{"id":"/download-invoices","metadata":{"permalink":"/changelog/download-invoices","editUrl":"changelog/changelog/download-invoices.md","source":"@site/changelog/download-invoices.md","title":"PDF invoices","description":"Lago will generate a PDF file for each new invoice.","date":"2022-07-13T10:00:00.000Z","formattedDate":"July 13, 2022","tags":[],"readingTime":0.19,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-07-13T10:00"},"prevItem":{"title":"Customer current usage","permalink":"/changelog/current-usage"},"nextItem":{"title":"Integration with Stripe Payments","permalink":"/changelog/stripe-integration"}},"content":"Lago will generate a PDF file for each new invoice.\\n\\nYou can download invoices via the user interface or the API and can also modify some of the elements included in the invoice template.\\n\\nFull documentation [available here](../docs/guide/invoicing/download-invoices)."},{"id":"/stripe-integration","metadata":{"permalink":"/changelog/stripe-integration","editUrl":"changelog/changelog/stripe-integration.md","source":"@site/changelog/stripe-integration.md","title":"Integration with Stripe Payments","description":"Lago now offers native integration with Stripe, including (but not limited to):","date":"2022-07-04T10:00:00.000Z","formattedDate":"July 4, 2022","tags":[],"readingTime":0.405,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-07-04T10:00"},"prevItem":{"title":"PDF invoices","permalink":"/changelog/download-invoices"},"nextItem":{"title":"Weekly plan interval","permalink":"/changelog/weekly-interval"}},"content":"Lago now offers native integration with Stripe, including (but not limited to):\\n- Ability to create Lago customers in Stripe automatically and retrieve their customer ID;\\n- Ability to define Stripe as the default payment provider for a customer;\\n- Ability to generate payment intents automatically;\\n- Ability to update the status of an invoice depending on the payment status; and\\n- Ability to receive a webhook when a payment fails.\\n\\nTo learn more about this integration, please [consult our guide](../docs/guide/payments/stripe-integration)."},{"id":"/weekly-interval","metadata":{"permalink":"/changelog/weekly-interval","editUrl":"changelog/changelog/weekly-interval.md","source":"@site/changelog/weekly-interval.md","title":"Weekly plan interval","description":"When setting up a plan, you can select the weekly interval to define a weekly billing period.","date":"2022-07-04T10:00:00.000Z","formattedDate":"July 4, 2022","tags":[],"readingTime":0.54,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-07-04T10:00"},"prevItem":{"title":"Integration with Stripe Payments","permalink":"/changelog/stripe-integration"},"nextItem":{"title":"Invoice monthly charges for a plan paid yearly","permalink":"/changelog/billable-metric-monthly-for-plan-yearly"}},"content":"When setting up a plan, you can select the weekly interval to define a weekly billing period.\\n\\nThe plan interval applies to the subscription and charges, which means that:\\n- For plans that must be paid in advance, the subscription fee is invoiced at the beginning of the week;\\n- For plans that are paid in arrears, the subscription fee is invoiced at the end of the week; and\\n- Usage is calculated at the end of each week.\\n\\nThe week starts on Sunday and ends on Saturday. If the customer\'s subscription starts in the middle of the week, the fees will be applied on a pro-rata basis."},{"id":"/billable-metric-monthly-for-plan-yearly","metadata":{"permalink":"/changelog/billable-metric-monthly-for-plan-yearly","editUrl":"changelog/changelog/billable-metric-monthly-for-plan-yearly.md","source":"@site/changelog/billable-metric-monthly-for-plan-yearly.md","title":"Invoice monthly charges for a plan paid yearly","description":"Before the release of this feature, usaged-based features (charges) were following the plan period. If the plan period was invoiced yearly, the charges were invoiced yearly.","date":"2022-06-13T10:00:00.000Z","formattedDate":"June 13, 2022","tags":[],"readingTime":0.65,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-06-13T10:00"},"prevItem":{"title":"Weekly plan interval","permalink":"/changelog/weekly-interval"},"nextItem":{"title":"Percentage charge model","permalink":"/changelog/percentage-charge-model"}},"content":"Before the release of this feature, usaged-based features (charges) were following the plan period. If the plan period was invoiced yearly, the charges were invoiced yearly.\\n\\nIt\'s now possible to **invoice billable metrics on a montly basis** for a plan billed yearly. The base amount of the plan will be invoice yearly (in-arrears or in-advance), but your usage based features will be invoiced on a monthly basis.\\n\\n**To do so:**\\n1. Access a **Plan**;\\n2. Define a plan **yearly**;\\n3. Price **additional charges** from your billable metrics; and\\n4. Turn `on` the toggle for **applying charges monthly**.\\n\\nBy switching on, **all the charges** will be invoiced monthly even if the plan is yearly.\\n\\n:::tip\\nThe last invoice is gathering both the subscription and the usage-based charges\\n:::\\n\\n![charges invoiced monthly](../static/img/charges-monthly.png)"},{"id":"/percentage-charge-model","metadata":{"permalink":"/changelog/percentage-charge-model","editUrl":"changelog/changelog/percentage-charge-model.md","source":"@site/changelog/percentage-charge-model.md","title":"Percentage charge model","description":"Inside the Plans, by creating a charge, you can now select the percentage charge model.","date":"2022-06-13T10:00:00.000Z","formattedDate":"June 13, 2022","tags":[],"readingTime":0.385,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-06-13T10:00"},"prevItem":{"title":"Invoice monthly charges for a plan paid yearly","permalink":"/changelog/billable-metric-monthly-for-plan-yearly"},"nextItem":{"title":"Event debugger","permalink":"/changelog/event-debugger"}},"content":"Inside the **Plans**, by creating a charge, you can now select the **percentage charge model**.\\n\\nThis feature is pretty useful for industries willing to take a `% + fixed fee` out of a usage-based features (for banking or charity industry, for instance). These fees are applied on the *units to be charged* (e.g. the aggregation result of your billable metric).\\n\\nThe fixed charge can either be applied per **each single unit** or for **all units**.\\n\\n![Percentage charge](../static/img/percentage-charge-model.png)"},{"id":"/event-debugger","metadata":{"permalink":"/changelog/event-debugger","editUrl":"changelog/changelog/event-debugger.md","source":"@site/changelog/event-debugger.md","title":"Event debugger","description":"You are now able to view all the ingested events sent from your application to Lago.","date":"2022-06-10T10:00:00.000Z","formattedDate":"June 10, 2022","tags":[],"readingTime":0.605,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-06-10T10:00"},"prevItem":{"title":"Percentage charge model","permalink":"/changelog/percentage-charge-model"},"nextItem":{"title":"Add-ons","permalink":"/changelog/ftr-addons"}},"content":"You are now able to view all the ingested events sent from your application to Lago.\\nWe called this feature `debugger` because it makes the event ingestion easier and more understandable.\\n\\n1. Access the `Developer` sidebar item;\\n2. Click the `Debugger` tab; and\\n3. Take a look at the latest events ingested\\n\\n:::tip\\nIf an event you sent is not shown in the UI, it means that it has not been ingested by Lago\\n:::\\n\\nThis debugger is also helpul to warn you for 2 specific cases:\\n1. **Warning 1** - The event code is not related to an existing billable metric\\n2. **Warning 2** - The property sent does not match the aggregation property defined in your billable metric\\n\\n![Debugger](../static/img/events-debugger.png)"},{"id":"/ftr-addons","metadata":{"permalink":"/changelog/ftr-addons","editUrl":"changelog/changelog/ftr-addons.md","source":"@site/changelog/ftr-addons.md","title":"Add-ons","description":"Add-ons are now available on Lago. Create add-ons to apply one-time fees (e.g. setup fee, one-time purchase, etc.) and generate the corresponding invoices instantly.","date":"2022-06-06T10:00:00.000Z","formattedDate":"June 6, 2022","tags":[],"readingTime":0.14,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-06-06T10:00"},"prevItem":{"title":"Event debugger","permalink":"/changelog/event-debugger"},"nextItem":{"title":"Pay-as-you-go template","permalink":"/changelog/template-algolia"}},"content":"Add-ons are now available on Lago. Create add-ons to apply one-time fees (e.g. setup fee, one-time purchase, etc.) and generate the corresponding invoices instantly.\\n\\nFull documentation [available here](../docs/guide/addons)."},{"id":"/template-algolia","metadata":{"permalink":"/changelog/template-algolia","editUrl":"changelog/changelog/template-algolia.md","source":"@site/changelog/template-algolia.md","title":"Pay-as-you-go template","description":"We\'ve added a new template to our collection: click here to learn how to replicate Algolia\'s pay-as-you-go pricing.","date":"2022-06-03T10:00:00.000Z","formattedDate":"June 3, 2022","tags":[],"readingTime":0.34,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-06-03T10:00"},"prevItem":{"title":"Add-ons","permalink":"/changelog/ftr-addons"},"nextItem":{"title":"Coupons","permalink":"/changelog/ftr-coupons"}},"content":"We\'ve added a new template to our collection: [click here](https://www.getlago.com/resources/templates/algolia) to learn how to replicate Algolia\'s pay-as-you-go pricing.\\n\\nIt\'s a great starting point for companies whose pricing fully depends on usage, such as cloud service providers and API companies.\\n\\nWith Lago, you can adapt this template to your products and services, using some of our most popular features, including the [\'sum\' aggregation type](../docs/guide/billable-metrics/aggregation-types#2-sum) and the [package charge model](../docs/guide/plans/charges#the-package-charge-model)."},{"id":"/ftr-coupons","metadata":{"permalink":"/changelog/ftr-coupons","editUrl":"changelog/changelog/ftr-coupons.md","source":"@site/changelog/ftr-coupons.md","title":"Coupons","description":"Introducing coupons, a new feature that allows you to offer discounts to your customers.","date":"2022-06-02T10:00:00.000Z","formattedDate":"June 2, 2022","tags":[],"readingTime":0.09,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-06-02T10:00"},"prevItem":{"title":"Pay-as-you-go template","permalink":"/changelog/template-algolia"},"nextItem":{"title":"Subscription changes","permalink":"/changelog/subscription-changes"}},"content":"Introducing coupons, a new feature that allows you to offer discounts to your customers.\\n\\nFull documentation [available here](../docs/guide/coupons)."},{"id":"/subscription-changes","metadata":{"permalink":"/changelog/subscription-changes","editUrl":"changelog/changelog/subscription-changes.md","source":"@site/changelog/subscription-changes.md","title":"Subscription changes","description":"You can now modify the subscription assigned to a customer through the user interface.","date":"2022-05-24T10:00:00.000Z","formattedDate":"May 24, 2022","tags":[],"readingTime":0.165,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-05-24T10:00"},"prevItem":{"title":"Coupons","permalink":"/changelog/ftr-coupons"},"nextItem":{"title":"Package pricing for charges","permalink":"/changelog/package-pricing"}},"content":"You can now modify the subscription assigned to a customer through the user interface.\\n\\nTo learn how to upgrade or downgrade a subscription and how it affects billing, please refer to the documentation."},{"id":"/package-pricing","metadata":{"permalink":"/changelog/package-pricing","editUrl":"changelog/changelog/package-pricing.md","source":"@site/changelog/package-pricing.md","title":"Package pricing for charges","description":"It is now possible to apply a package pricing model to a charge. To do so:","date":"2022-05-18T10:00:00.000Z","formattedDate":"May 18, 2022","tags":[],"readingTime":0.38,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2022-05-18T10:00"},"prevItem":{"title":"Subscription changes","permalink":"/changelog/subscription-changes"}},"content":"It is now possible to apply a [package pricing model](../docs/guide/plans/charges#the-package-charge-model) to a charge. To do so:\\n1. Select an existing plan (or create a new one);\\n2. Add a charge; and\\n3. Select the package pricing model.\\n\\nThis new pricing model allows you to apply a flat fee to a range of units. The price will be fixed for the entire range, regardless of the number of units consumed by the customer during the billing period."}]}')}}]);