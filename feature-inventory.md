# Cooperative GIG — Feature Inventory

**Version:** 0.1  
**Status:** Full-platform working inventory  
**Source baseline:** Cooperative GIG SRS v1.0 Draft  
**Technical direction:** Web-first client; Node.js backend proposed

## 1. Prioritization legend

| Priority | Meaning |
|---|---|
| P0 — Foundational | Essential for the full platform's core operating model or data integrity. |
| P1 — Core | Important for complete operational capability. |
| P2 — Extended | Advanced, optional or dependent on additional policy decisions. |

These priorities describe the full-platform vision. They do not determine the MVP scope.

### 1.1 Approved MVP boundary

The first release supports the complete individual-customer workflow: service discovery, request submission, cooperative review, fair worker ranking, assignment offers and responses, negotiated pricing where applicable, assignment confirmation, job execution, completion and payment-status recording. Institutional customers and institutional service requests are deferred from MVP delivery. The institutional features remain part of the full-platform inventory and retain their full-platform priorities.

| Feature ID | MVP classification | MVP disposition |
|---|---|---|
| INS-01 | Later | Institutional accounts and representative authorization are deferred; no institutional account is required for the first release. |
| INS-02 | Later | Institutional requirement submission is deferred; the MVP request workflow is for individual customers. |
| INS-03 | Later | Institutional delivery tracking, institutional reports and conditional institutional financial visibility are deferred. |
| INS-04 | Conditional | Contract, tender and procurement management remains outside MVP pending stakeholder validation. |

Shared features such as authorization, auditability, notifications, payment records, reporting infrastructure and job completion remain in the MVP where needed for individual customers. They must not require institutional onboarding or institutional requests as prerequisites. Institutional requirements in `SRS.md` and institutional features in this inventory are preserved for a later release.

## 2. Feature inventory by module

### A. Identity, accounts and access control

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| ID-01 | User registration and authentication | FR-AUTH-001, 005 | User model, authentication service | P0 | Users can authenticate; invalid credentials are rejected. |
| ID-02 | Role and permission management | FR-AUTH-002, 006, 007 | ID-01, organizational model | P0 | Users can perform only actions permitted by their assigned roles. |
| ID-03 | Organization-scoped access | FR-AUTH-003 | ID-02, cooperative/state records | P0 | Users cannot access unauthorized organizations' restricted records. |
| ID-04 | Account recovery and status management | FR-AUTH-005 | ID-01, notification mechanism | P1 | Recovery follows an approved process; inactive or suspended accounts cannot perform prohibited actions. |
| ID-05 | Profile management | FR-AUTH-004 | ID-01, role-specific profiles | P1 | Users can update permitted profile fields and invalid updates are rejected. |

### B. Service catalogue and discovery

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| SVC-01 | Service categories and catalogue | FR-SVC-001, 003 | Service data model | P0 | Customers can browse active service categories and descriptions. |
| SVC-02 | Cooperative service listings | FR-SVC-002, 004 | Cooperative records, SVC-01 | P0 | Customers can identify which cooperatives offer a service; authorized managers can maintain listings. |
| SVC-03 | Service search and filtering | FR-SVC-005 | SVC-01, SVC-02 | P1 | Search and filters return services matching the selected criteria. |
| SVC-04 | Pricing-type configuration | FR-SVC-006 | SVC-01, pricing policy | P0 | A service is identified as fixed-price, indicative-price or negotiable; the displayed price type is unambiguous. |

### C. Customer requests and booking management

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| REQ-01 | Household/community service requests | FR-REQ-001–005 | ID-01, SVC-01, SVC-02 | P0 | Valid requests are saved with a unique reference; invalid requests receive actionable errors. |
| REQ-02 | Request review and clarification | FR-REQ-006, 007 | REQ-01, cooperative permissions | P0 | Authorized managers can accept a request for processing, reject it or request clarification. |
| REQ-03 | Booking status and history | FR-REQ-008, 010 | REQ-01, status model | P0 | Customers can view current status and historical outcomes. |
| REQ-04 | Cancellation and rescheduling | FR-REQ-009 | REQ-01, status model, policy decisions | P1 | Only permitted cancellation or rescheduling actions succeed and are recorded. |
| REQ-05 | Customer budget input | FR-REQ-003 | REQ-01, pricing model | P1 | A customer can optionally supply a budget without being forced to set a fixed price. |

### D. Worker onboarding and workforce management

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| WRK-01 | Worker registration and cooperative association | FR-WRK-001–003 | ID-01, cooperative model | P0 | Worker profiles are linked to authorized cooperative records and follow the approved onboarding process. |
| WRK-02 | Skills and service eligibility | FR-WRK-001, 003 | WRK-01, service catalogue | P0 | Managers can maintain relevant skills and eligibility; only authorized users can change approval status. |
| WRK-03 | Availability management | FR-WRK-004, FR-WRK-011, FR-RANK-004 | WRK-01, scheduling model | P0 | Availability is stored with clear meaning and can be updated by authorized users; an unavailable status is not automatically a hard offer exclusion. |
| WRK-04 | Worker work history and workload | FR-WRK-010, FR-RANK-003, 008 | Assignment records | P0 | Authorized users can retrieve relevant work history and workload information. |
| WRK-05 | Worker status and eligibility lifecycle | FR-WRK-003, FR-RANK-002 | WRK-01, WRK-02 | P1 | Ineligible workers are excluded where required by the approved eligibility rules. |

### E. Worker ranking and fair allocation

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| RANK-01 | Eligibility filtering | FR-RANK-001, 002, BR-029 | WRK-02, WRK-03, REQ-01 | P0 | Candidates failing mandatory suitability, safety or service-eligibility requirements are excluded. |
| RANK-02 | Worker ranking algorithm | FR-RANK-001–004 | RANK-01, WRK-04, approved ranking policy | P0 | Given the same inputs and policy version, the algorithm produces consistent, testable rankings. |
| RANK-03 | Manager recommendation interface | FR-RANK-005, 006 | RANK-02, cooperative dashboard | P0 | Managers can review ranked eligible candidates before sending an offer. |
| RANK-04 | Allocation history and decision records | FR-RANK-007, 008 | RANK-02, assignment records | P0 | Candidate recommendations and final assignment decisions can be traced according to policy. |
| RANK-05 | Fairness monitoring | FR-RANK-009, 010 | RANK-04, reporting | P1 | Authorized managers can review defined allocation indicators and identify potential imbalances. |
| RANK-06 | Manager override and justification | FR-RANK-010 | RANK-03, audit logging | P1 | Overrides follow the approved policy and retain the required justification and decision history. |

### F. Assignment offers and worker responses

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| ASG-01 | Assignment offer creation | FR-ASG-001, 002 | RANK-03, cooperative permissions | P0 | An authorized manager can send an offer, including to a worker marked unavailable under the agreed policy. |
| ASG-02 | Accept/reject offer | FR-WRK-006, FR-ASG-003–005 | ASG-01, worker interface | P0 | The worker can accept or reject; the response and timestamp are recorded. |
| ASG-03 | Offer expiry and withdrawal | FR-ASG-004–006 | ASG-01, timeout policy, notifications | P1 | Expired or withdrawn offers cannot become confirmed assignments. |
| ASG-04 | Ranked-candidate reassignment | FR-ASG-006, 007, FR-WRK-009 | RANK-02, ASG-02, scheduling rules | P0 | A rejected or expired offer can be followed by another eligible offer; incompatible confirmed assignments are prevented. |
| ASG-05 | Assignment confirmation | FR-ASG-008–010 | ASG-02, negotiation where required | P0 | The job is confirmed only after the required worker response, customer agreement and cooperative approvals. |

### G. Price negotiation and service agreements

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| NEG-01 | Worker quote submission | FR-NEG-001–003 | ASG-02, SVC-04, pricing model | P0 | A worker can propose a price and the applicable scope, schedule and payment terms. |
| NEG-02 | Customer acceptance and counteroffer | FR-NEG-004, 005 | NEG-01, customer interface | P0 | A customer can accept, reject or counter a quote; the worker can respond to a counteroffer. |
| NEG-03 | Quote version history | FR-NEG-006, 007 | NEG-01, NEG-02 | P0 | Previous quotes and counteroffers remain retrievable; proposed and agreed prices are distinct. |
| NEG-04 | Final agreement record | FR-NEG-008, 009 | NEG-01, NEG-02, agreed scope model | P0 | The final price, scope, schedule and terms are recorded only after the required parties agree. |
| NEG-05 | Negotiation timeout and failure handling | FR-NEG-010, 011 | NEG-01, notification and timeout policy | P1 | Expired or failed negotiations follow a defined closure or reassignment path. |
| NEG-06 | Scope and price change management | FR-NEG-012 | NEG-04, audit logging | P1 | Changes after agreement require the specified approvals and preserve the previous agreement history. |

### H. Payment and financial management

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| PAY-01 | Payment terms and obligations | FR-PAY-001–003 | NEG-04, payment policy | P0 | The platform records the agreed payment terms, amounts due and outstanding balances. |
| PAY-02 | Payment records and status tracking | FR-PAY-004, 005, 012 | PAY-01, financial data model | P0 | Declared, processing, confirmed, outstanding and disputed states are distinguishable. |
| PAY-03 | Cash payment declarations | FR-PAY-005, 012 | PAY-02, confirmation policy | P1 | A declared cash payment is not represented as independently verified without an appropriate basis. |
| PAY-04 | Digital payment integration | FR-PAY-006 | PAY-01, provider selection, security review | P2 | Provider transaction states and references are recorded; a failed transaction is not marked paid. |
| PAY-05 | Refunds, partial payments and adjustments | FR-PAY-007 | PAY-02, financial policy | P1 | Authorized adjustments create traceable financial entries and correct outstanding balances. |
| PAY-06 | Financial disputes and reconciliation | FR-PAY-008, 009 | PAY-02, complaint workflow | P1 | Disputes are tracked to resolution and financial history remains auditable. |
| PAY-07 | Cooperative fees and settlement rules | FR-PAY-010, 011 | Payment recipient and fee policy | P1 | Charges and revenue-sharing calculations follow a documented, authorized policy. |

### I. Job execution and service quality

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| JOB-01 | Worker job dashboard | FR-JOB-001 | ASG-05, worker permissions | P0 | Workers can view confirmed jobs and relevant service details. |
| JOB-02 | Job status updates | FR-JOB-002, 003 | JOB-01, status model | P0 | Authorized status transitions are recorded with timestamps. |
| JOB-03 | Delays and inability to complete | FR-JOB-004, 009 | JOB-01, notification workflow | P1 | Workers can report issues and the cooperative receives the required update. |
| JOB-04 | Completion evidence and verification | FR-JOB-005–008, FR-JOB-011 | JOB-02, completion policy | P0 | Completion records and permitted post-confirmation assignment information are visible to authorized parties. |
| JOB-05 | Ratings and feedback | FR-JOB-010 | JOB-04, customer interface | P1 | Permitted feedback can be submitted and linked to the relevant completed service. |
| JOB-06 | Complaints and service disputes | FR-JOB-010, FR-DSP-001–006 | JOB-04, complaint policy | P1 | Issues can be recorded, assigned for review, escalated and closed with a traceable outcome. |

### J. Cooperative operations and governance

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| COOP-01 | Cooperative profile and service management | FR-COOP-001, 002 | ID-03, SVC-01 | P0 | Authorized managers can maintain only their cooperative's permitted records. |
| COOP-02 | Request and workforce operations dashboard | FR-COOP-003–006 | REQ-02, WRK-01, RANK-03, ASG-01 | P0 | Managers can review requests, manage offers and monitor active jobs from their operational view. |
| COOP-03 | Operational exception handling | FR-COOP-007, 008 | ASG-04, JOB-03, JOB-06 | P1 | Managers can process reassignment, complaints and service issues within their permissions. |
| COOP-04 | Cooperative reporting | FR-COOP-009 | Request, worker, assignment and job records | P1 | Managers can view accurate reports limited to their cooperative's scope. |
| ADM-01 | Central platform monitoring | FR-ADM-001, 002, 008 | Audit records, reporting and scope permissions | P0 | Authorized central administrators can review platform-level indicators without automatically gaining unrestricted operational access. |
| ADM-02 | State cooperative registration and management | FR-ADM-003–005 | ID-03, organizational model | P0 | State administrators can register and manage cooperatives within their authorized scope. |
| ADM-03 | Administrative audit and escalation | FR-ADM-006, 007, 010 | Role model, audit logging | P0 | Administrative actions are attributable and issues can be escalated to the authorized level. |
| ADM-04 | Shared policy management | FR-ADM-009, FR-ADM-011 | Governance approval model | P1 | Changes to common policies are authorized and traceable to the responsible actor, effective time and policy version. |

### K. Institutional services

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| INS-01 | Institutional account and representative authorization | FR-INS-001, FR-INS-009 | ID-01, organizational model | P1 | Full-platform feature: only authorized representatives can submit requests for their institution and maintain permitted organization/contact information. Deferred from MVP. |
| INS-02 | Institutional requirement submission | FR-INS-002–004 | INS-01, REQ-02 | P1 | Full-platform feature: institutions can submit requirements; cooperatives can review and record a decision. Deferred from MVP. |
| INS-03 | Institutional delivery tracking | FR-INS-005–007, FR-INS-010, FR-INS-011 | INS-02, ASG-05, JOB-02, JOB-04 | P1 | Full-platform feature: accepted institutional requests can be assigned, monitored and closed; authorized representatives can access scoped service reports and conditional financial records. Deferred from MVP. |
| INS-04 | Contract, tender and procurement management | FR-INS-008 | Institutional policy, agreement model | P2 | Conditional full-platform feature: if stakeholder validation approves it, authorized users can manage the defined contract lifecycle and associated records. Outside MVP. |

### L. Notifications and communication

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| NOT-01 | Booking and job notifications | FR-NOT-001, 005 | Status-change events, notification service | P1 | Relevant parties receive updates after specified status changes. |
| NOT-02 | Assignment offer notifications | FR-NOT-002, 004 | ASG-01, ASG-02, notification service | P0 | Workers receive offer notifications and response outcomes are reflected accurately. |
| NOT-03 | Negotiation notifications | FR-NOT-003 | NEG-01, NEG-02, notification service | P1 | Relevant parties are notified of new quotes and counteroffers. |
| NOT-04 | Payment and complaint notifications | FR-NOT-005, 006 | PAY-02, JOB-06, notification service | P1 | Relevant parties receive permitted updates, and delivery status is recorded where supported. |

### M. Reporting and analytics

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| REP-01 | Service operations reporting | FR-REP-001 | Request, assignment and job records | P1 | Authorized users can review request volumes and service outcomes. |
| REP-02 | Workforce utilization reporting | FR-REP-002 | WRK-04, assignment history | P1 | Reports reflect recorded workload and assignment history. |
| REP-03 | Fair allocation analytics | FR-REP-003 | RANK-04, RANK-05 | P1 | Reports expose the approved fairness indicators and relevant time periods. |
| REP-04 | State and platform reporting | FR-REP-004, 005 | ADM-01, ADM-02, data access policies | P1 | Reports respect state and platform-level permissions. |
| REP-05 | Financial reporting | FR-REP-006, 007 | PAY-01–PAY-07 | P2 | Authorized reports reconcile with recorded financial events and respect data boundaries. |

### N. Platform security, reliability and engineering

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| PLT-01 | Backend authorization enforcement | NFR-SEC-001–003 | ID-02, ID-03 | P0 | Direct API requests cannot bypass role or organization-level restrictions. |
| PLT-02 | Audit trail | FR-RANK-007, FR-ADM-007, NFR-DAT-003, 004 | Identity model, critical domain events | P0 | Important decisions and changes retain actor, time and relevant outcome information. |
| PLT-03 | Data validation and integrity | NFR-SEC-005, NFR-DAT-001, 002 | API and domain validation | P0 | Invalid inputs and failed operations do not silently create inconsistent records. |
| PLT-04 | Duplicate and concurrency protection | NFR-REL-001 | Request/assignment data model, transactional operations | P0 | Duplicate submissions and concurrent assignment attempts are handled safely. |
| PLT-05 | Backup and recovery | NFR-REL-002 | Database and deployment infrastructure | P1 | Documented backup and restore procedures can be tested. |
| PLT-06 | Automated testing and CI | NFR-SEC-006, NFR-MNT-002–004 | Repository and test framework | P0 | Automated checks run on changes and cover critical business rules. |
| PLT-07 | API and architecture documentation | NFR-MNT-001, 005 | Architecture and API design | P1 | Interfaces and material data-model changes are documented. |
| PLT-08 | Performance and scaling controls | NFR-PER-001–003 | Architecture, load assumptions | P1 | Performance tests can evaluate agreed targets under expected load. |
| PLT-09 | Accessibility and responsive interface | NFR-USE-001–005 | Frontend design system | P1 | Core workflows are usable across supported screen sizes and meet agreed accessibility criteria. |
| PLT-10 | Privacy and data lifecycle controls | NFR-SEC-006, NFR-SEC-007 | Data classification, retention policy | P1 | Data access and lifecycle actions follow approved privacy, retention, correction and deletion policies. |

### O. Future platform capabilities

| Feature ID | Feature | SRS references | Dependencies | Priority | Acceptance criteria |
|---|---|---|---|---|---|
| FUT-01 | Advanced demand forecasting | Extended platform scope | Sufficient historical data, validated forecasting need | P2 | Forecasts are evaluated against an agreed baseline and their limitations are documented. |
| FUT-02 | Advanced recommendation optimization | Extended platform scope | RANK-02, reliable outcome data, evaluation criteria | P2 | Any enhanced ranking approach is compared against the existing rules using approved evaluation measures. |
| FUT-03 | External welfare, insurance or support integrations | Extended platform scope | Partner availability, legal and security review | P2 | Approved integrations meet defined access, consent, security and data-exchange requirements. |
| FUT-04 | Dedicated Android application | Extended platform scope | Stable API contracts, client requirements | P2 | The mobile client supports the approved mobile workflows through authorized APIs. |
| FUT-05 | Advanced analytics and dashboards | FR-REP-001–007 | Reliable operational data, reporting requirements | P2 | Dashboards present validated metrics with appropriate access controls and definitions. |

## 3. Cross-cutting acceptance rules

All feature acceptance tests should also verify, where relevant:

1. Role and organization permissions are enforced by the backend.
2. Invalid state transitions are rejected.
3. Important actions are traceable.
4. Errors do not silently corrupt or duplicate records.
5. Sensitive information is not exposed to unauthorized users.
6. Automated tests cover critical normal and exception paths.

## 4. Feature inventory completion criteria

The full-platform inventory is ready for MVP selection when:

- Each SRS requirement is mapped to one or more features or explicitly identified as not separately implemented.
- Duplicate features and missing dependencies are resolved.
- Open business policies are recorded and assigned for resolution.
- P0/P1/P2 full-platform priorities are reviewed.
- Each selected MVP feature can be connected to testable acceptance criteria.
- Implementation effort and dependencies are estimated by the team.

