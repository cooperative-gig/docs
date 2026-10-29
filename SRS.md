# Cooperative GIG
## Software Requirements Specification (SRS)

**Version:** 1.0 Draft  
**Status:** Working Baseline — Pending Review  
**Project:** Cooperative Gig Services Platform for Household and Community Services  
**Document purpose:** Define the intended full platform before selecting the features for Version 1.

---

## 1. Introduction

### 1.1 Purpose

Cooperative GIG is a digital platform intended to help labour cooperative societies manage their workforce, coordinate service requests, distribute work opportunities fairly, negotiate service prices and maintain accountability between workers and customers.

This SRS defines the platform's intended functionality, users, workflows, business rules, security requirements and operational constraints. It will serve as the reference for feature prioritization, system architecture, database design, API development, testing and implementation planning.

This document describes the full-platform vision. It does not imply that all specified capabilities will be implemented in the first release.

### 1.2 Problem statement

Labour cooperative societies have skilled workers who can provide household, community and institutional services. However, customers need a structured way to discover these services, request work, agree on pricing and track service delivery.

Cooperatives also need effective tools to manage workers, assess job requirements, coordinate assignments, monitor service quality and resolve issues between workers and customers.

A fixed-price model may not suit every service because the final cost can depend on the work's complexity, duration, materials and specific requirements. Similarly, assigning work without considering the distribution of opportunities may result in some eligible workers receiving more opportunities than others.

Cooperative GIG aims to address these problems through a cooperative-oriented platform that combines service coordination, worker ranking, negotiated pricing, payment records and administrative oversight.

### 1.3 Objectives

1. Enable customers to discover services and submit requests.
2. Help cooperatives manage workers, customers and service operations.
3. Develop an algorithm that ranks suitable workers and supports equitable job opportunities.
4. Allow workers to accept or reject assignment offers.
5. Facilitate price negotiation between workers and customers.
6. Record agreed service scope, price and payment terms.
7. Track jobs from request submission through completion.
8. Support household, community and institutional service requests.
9. Provide central-level monitoring, state-level administration and cooperative-level operational management.
10. Maintain appropriate security, auditability and accountability.
11. Provide a scalable foundation for additional financial, reporting and integration capabilities.

### 1.4 Scope boundary

The full platform may include workforce management, service discovery, booking coordination, worker ranking, negotiated pricing, payment tracking, complaint management, administrative reporting and future integrations.

The MVP will be selected separately after the requirements have been reviewed and prioritized.

### 1.5 Terminology

- **Service request:** A customer's or institution's request for a service.
- **Worker recommendation:** A worker suggested by the ranking algorithm.
- **Assignment offer:** An offer sent to a worker to perform a particular job.
- **Accepted offer:** An offer the worker agrees to consider or undertake, subject to the remaining required agreements.
- **Negotiation:** The exchange of quotes and counteroffers between a worker and customer.
- **Agreed service:** A request for which the applicable parties have agreed to the scope, price and required terms.
- **Confirmed assignment:** An assignment that satisfies the platform's required acceptance and agreement conditions.
- **Cooperative manager:** An authorized person responsible for a cooperative's operational management.
- **Fair allocation:** A process designed to distribute suitable work opportunities equitably among eligible workers.

---

## 2. Overall Platform Description

### 2.1 Intended operating model

Cooperative GIG will use a centralized digital platform with administrative responsibilities distributed across organizational levels.

**Central platform administration**
- Monitor overall platform operations.
- Access authorized platform-wide reports and aggregated indicators.
- Manage explicitly authorized common settings and controls.
- Maintain oversight without routinely taking over cooperative-level operations.

**State administration**
- Register and manage cooperatives within the authorized state scope.
- Maintain cooperative records and relevant administrative information.
- Monitor state-level operations and access permitted reports.

**Cooperative management**
- Manage workers, services and operational records.
- Review incoming requests and coordinate service delivery.
- Review worker rankings and send assignment offers.
- Support price negotiation, monitor job progress and handle service issues.
- Maintain appropriate relationships between workers and customers.

A cooperative operating at a central or national level must retain its cooperative-management capabilities. Its administrative scope does not automatically replace its operational role.

### 2.2 User classes

| User | Primary responsibilities |
|---|---|
| Customer | Discover services, submit requests, negotiate price, track jobs and provide feedback. |
| Institutional customer | Submit organizational requirements and coordinate service delivery. |
| Worker | Maintain profile information, respond to assignment offers, negotiate service terms and perform jobs. |
| Cooperative manager | Manage workforce and services, review requests, coordinate assignments and resolve operational issues. |
| State administrator | Register and manage authorized cooperatives and oversee state-level operations. |
| Platform administrator | Monitor overall operations and manage authorized platform-wide functions. |
| Support or verification personnel | Perform assigned verification, support or complaint-handling duties if required. |

### 2.3 Platform assumptions

- The platform will support multiple cooperatives.
- Each cooperative will have a defined organizational identity and operational scope.
- Customers and workers will interact through authenticated accounts where required.
- Workers must be able to accept or reject assignment offers.
- Price negotiation will be supported for services that do not use a fixed price.
- Worker ranking will be implemented through documented algorithmic rules.
- The initial client direction is web-based, with Node.js preferred for the backend.
- The precise ownership and operating organization of the central platform remain unresolved.

---

## 3. Functional Requirements

### 3.1 Accounts and access management

- **FR-AUTH-001:** The platform shall authenticate users before allowing access to protected functionality.
- **FR-AUTH-002:** The platform shall support role-based permissions.
- **FR-AUTH-003:** Authorization shall account for organizational scope, including the user's permitted state or cooperative.
- **FR-AUTH-004:** Users shall be able to maintain permitted account and profile information.
- **FR-AUTH-005:** The platform shall support appropriate account verification, recovery and status-management processes.
- **FR-AUTH-006:** Unauthorized access to protected records or operations shall be rejected.
- **FR-AUTH-007:** The platform shall distinguish user identity, role, organizational affiliation and assigned permissions.

### 3.2 Service catalogue and discovery

- **FR-SVC-001:** Customers shall be able to browse available service categories and descriptions.
- **FR-SVC-002:** Customers shall be able to identify cooperatives offering relevant services.
- **FR-SVC-003:** The platform shall maintain information about service requirements and applicable service conditions.
- **FR-SVC-004:** Authorized cooperative personnel shall be able to maintain their service listings.
- **FR-SVC-005:** The platform shall support relevant discovery criteria, such as location and service category, where applicable.
- **FR-SVC-006:** Pricing information shall distinguish fixed prices, indicative prices and prices requiring negotiation.

### 3.3 Customer service requests

- **FR-REQ-001:** Customers shall be able to submit service requests with the required service details.
- **FR-REQ-002:** Requests shall record relevant information, including location, preferred schedule and work description.
- **FR-REQ-003:** Customers may provide an optional budget or expected price range.
- **FR-REQ-004:** The platform shall validate required request information before accepting submission.
- **FR-REQ-005:** Each submitted request shall receive a unique identifier.
- **FR-REQ-006:** The platform shall make requests available to the appropriate cooperative for review.
- **FR-REQ-007:** Authorized managers shall be able to accept a request for processing, reject it or request clarification.
- **FR-REQ-008:** Customers shall be able to view the status of their requests.
- **FR-REQ-009:** The platform shall support permitted cancellation and rescheduling requests.
- **FR-REQ-010:** Customers shall be able to view relevant historical requests and outcomes.

### 3.4 Worker profiles and lifecycle

- **FR-WRK-001:** The platform shall maintain worker profiles containing relevant skills and service-related information.
- **FR-WRK-002:** Workers shall be associated with the appropriate cooperative or cooperatives according to the approved membership model.
- **FR-WRK-003:** Authorized personnel shall be able to verify worker information and manage eligibility status.
- **FR-WRK-004:** The platform shall record worker availability information where provided.
- **FR-WRK-005:** Workers shall be able to view their assignment offers and confirmed assignments.
- **FR-WRK-006:** Workers shall be able to accept or reject assignment offers.
- **FR-WRK-007:** The platform shall record the response and timestamp for each assignment offer.
- **FR-WRK-008:** Workers shall be able to update job progress through permitted status transitions.
- **FR-WRK-009:** Workers shall be able to report unavailability, delays or inability to complete a job.
- **FR-WRK-010:** The platform shall retain relevant worker assignment and completion history.
- **FR-WRK-011:** Workers or authorized personnel shall be able to maintain recorded worker availability according to the approved availability policy.

### 3.5 Worker-ranking algorithm

- **FR-RANK-001:** The platform shall implement an algorithm to rank workers for a service request.
- **FR-RANK-002:** The algorithm shall evaluate workers against the request's relevant skill, service and other suitability requirements.
- **FR-RANK-003:** The algorithm shall consider workload and previous job allocations to support equitable distribution of opportunities.
- **FR-RANK-004:** The algorithm shall consider recorded availability as a relevant factor according to the approved ranking policy, but unavailable status shall not automatically prevent an assignment offer from being sent.
- **FR-RANK-005:** The platform shall present ranked recommendations to an authorized cooperative manager.
- **FR-RANK-006:** The platform shall allow an authorized manager to select a candidate from the recommended workers, subject to eligibility and governance rules.
- **FR-RANK-007:** The platform shall record the selected worker and relevant assignment decision information.
- **FR-RANK-008:** The platform shall retain sufficient allocation history to evaluate the distribution of opportunities.
- **FR-RANK-009:** The platform shall support monitoring for persistent imbalances in job opportunities.
- **FR-RANK-010:** The platform shall support the recording of justified manager overrides according to the approved policy.

The ranking formula, factor weights, tie-breaking rules and fairness metrics must be specified in a separate algorithm design. They are not yet finalized.

### 3.6 Assignment offers and acceptance

- **FR-ASG-001:** An authorized cooperative manager shall be able to send an assignment offer to a selected worker.
- **FR-ASG-002:** An offer may be sent even if the worker's recorded availability indicates that they are unavailable.
- **FR-ASG-003:** The worker shall be able to accept or reject the offer.
- **FR-ASG-004:** The platform shall record the offer's pending, accepted, rejected or expired state as applicable.
- **FR-ASG-005:** A rejected or expired offer shall not become a confirmed assignment.
- **FR-ASG-006:** The platform shall support offering the job to another ranked candidate after rejection or expiry.
- **FR-ASG-007:** The platform shall prevent incompatible confirmed assignments according to the approved scheduling rules.
- **FR-ASG-008:** An accepted offer shall proceed to the required price and scope agreement process when negotiation is necessary.
- **FR-ASG-009:** A confirmed assignment shall satisfy the applicable worker-acceptance, customer-agreement and cooperative-approval conditions.
- **FR-ASG-010:** The platform shall retain a traceable history of offers, responses and assignment changes.

### 3.7 Price negotiation

- **FR-NEG-001:** The platform shall support negotiated pricing for services without a predefined fixed price.
- **FR-NEG-002:** Workers shall be able to submit a quote for the proposed service.
- **FR-NEG-003:** A quote may include the proposed amount, work scope, estimated duration, cost breakdown and payment terms where applicable.
- **FR-NEG-004:** Customers shall be able to accept a quote, reject it, request clarification or submit a counteroffer.
- **FR-NEG-005:** Workers shall be able to respond to counteroffers.
- **FR-NEG-006:** The platform shall maintain a history of quotes, counteroffers and revisions.
- **FR-NEG-007:** The platform shall distinguish proposed prices from the final agreed price.
- **FR-NEG-008:** The platform shall record the final agreed amount, work scope, schedule and payment terms.
- **FR-NEG-009:** The platform shall not treat the price as agreed until the required parties have accepted the same terms.
- **FR-NEG-010:** The platform shall support negotiation expiry or timeout policies if adopted.
- **FR-NEG-011:** If the parties cannot agree, the request shall follow the approved decline, closure or reassignment process.
- **FR-NEG-012:** Changes to agreed work scope or price shall require the applicable approvals and a recorded revision.

### 3.8 Payment management

- **FR-PAY-001:** The platform shall maintain the agreed price and payment terms associated with a service.
- **FR-PAY-002:** The platform shall support a configurable payment model appropriate to the service and cooperative policy.
- **FR-PAY-003:** The platform shall record payment obligations and outstanding balances.
- **FR-PAY-004:** The platform shall record payment status and relevant transaction information.
- **FR-PAY-005:** The platform shall distinguish a declared cash payment from a digitally verified transaction.
- **FR-PAY-006:** Digital payment integration may be supported through an approved payment provider.
- **FR-PAY-007:** The platform shall support recording of refunds, adjustments or partial payments where applicable.
- **FR-PAY-008:** The platform shall support authorized review of payment disputes.
- **FR-PAY-009:** The platform shall maintain a traceable history of financial status changes.
- **FR-PAY-010:** Financial information shall be accessible only to authorized users.
- **FR-PAY-011:** Cooperative fees, commissions or revenue-sharing rules shall be configurable according to an approved policy rather than assuming one universal fee.
- **FR-PAY-012:** The platform shall distinguish recording a payment from independently confirming that the money has been received.

The payment recipient, cooperative revenue model, fee policy and settlement responsibilities remain open decisions.

### 3.9 Job execution and completion

- **FR-JOB-001:** Workers shall be able to view the details of their confirmed jobs.
- **FR-JOB-002:** Workers shall be able to update job status through permitted transitions.
- **FR-JOB-003:** The platform shall record relevant progress and timestamps.
- **FR-JOB-004:** Workers shall be able to report delays or inability to complete a job.
- **FR-JOB-005:** The platform shall support completion information or evidence where required.
- **FR-JOB-006:** The platform shall support the approved completion-verification process.
- **FR-JOB-007:** Customers shall be able to view permitted job progress and completion information.
- **FR-JOB-008:** The platform shall retain final job records and relevant assignment history.
- **FR-JOB-009:** The platform shall support cancellation, reassignment and exception handling.
- **FR-JOB-010:** The platform shall support customer feedback and service-related complaints where enabled.
- **FR-JOB-011:** Customers and institutional customers shall be able to view permitted assignment information after an assignment is confirmed, subject to role and organizational access rules.

### 3.10 Cooperative management

- **FR-COOP-001:** Authorized managers shall be able to maintain cooperative profiles and service listings.
- **FR-COOP-002:** Managers shall be able to manage worker records within their authorized scope.
- **FR-COOP-003:** Managers shall be able to review and process incoming service requests.
- **FR-COOP-004:** Managers shall be able to view ranked worker recommendations.
- **FR-COOP-005:** Managers shall be able to send assignment offers and monitor responses.
- **FR-COOP-006:** Managers shall be able to monitor active jobs and completion status.
- **FR-COOP-007:** Managers shall be able to handle operational exceptions and reassignment.
- **FR-COOP-008:** Managers shall be able to review relevant customer feedback and complaints.
- **FR-COOP-009:** Managers shall be able to access relevant workforce and service-delivery reports.
- **FR-COOP-010:** Cooperative records shall be protected from unauthorized access by other cooperatives.

### 3.11 Central and state administration

- **FR-ADM-001:** The platform shall support authorized platform-wide monitoring.
- **FR-ADM-002:** Central administrators shall be able to view permitted aggregated platform indicators and reports.
- **FR-ADM-003:** State administrators shall be able to register cooperatives within their authorized state scope.
- **FR-ADM-004:** State administrators shall be able to maintain authorized cooperative records.
- **FR-ADM-005:** State administrators shall be able to view relevant state-scoped operational reports.
- **FR-ADM-006:** Administrative permissions shall be explicitly defined and enforced.
- **FR-ADM-007:** Important administrative actions shall be recorded.
- **FR-ADM-008:** Central monitoring shall not automatically grant unrestricted access to every cooperative's operational data.
- **FR-ADM-009:** Cooperatives operating at a central level shall retain cooperative-management functionality.
- **FR-ADM-010:** The platform shall support escalation of issues between the appropriate administrative levels.
- **FR-ADM-011:** Changes to shared policies and allocation rules shall require authorized control and shall be traceable to the responsible actor, effective time and policy version.

### 3.12 Institutional service management

- **FR-INS-001:** Authorized institutional representatives shall be able to submit service requirements.
- **FR-INS-002:** Institutional requests shall record relevant scope, location, schedule and workforce needs.
- **FR-INS-003:** Cooperatives shall be able to review institutional requests and assess feasibility.
- **FR-INS-004:** The platform shall record acceptance, rejection or requests for clarification.
- **FR-INS-005:** Accepted institutional requests shall support workforce coordination and job tracking.
- **FR-INS-006:** Institutions shall be able to view permitted service-delivery records.
- **FR-INS-007:** Institutions shall be able to submit feedback or complaints.
- **FR-INS-008:** The platform may support formal contracts, tenders and procurement workflows if validated.
- **FR-INS-009:** Authorized institutional representatives shall be able to maintain permitted institutional organization and contact information.
- **FR-INS-010:** Authorized institutional representatives shall be able to access relevant service-delivery reports within their permitted scope.
- **FR-INS-011:** Institutional users may access permitted financial records when the corresponding payment and financial-reporting capabilities are implemented.

### 3.13 Notifications and communication

- **FR-NOT-001:** The platform shall notify relevant parties of request and booking status changes.
- **FR-NOT-002:** Workers shall receive assignment-offer notifications.
- **FR-NOT-003:** Customers and workers shall receive relevant quote and counteroffer updates.
- **FR-NOT-004:** The platform shall communicate accepted, rejected or expired assignment offers.
- **FR-NOT-005:** The platform shall communicate relevant cancellation, completion and payment-status changes.
- **FR-NOT-006:** Notification delivery status shall be tracked where supported by the delivery channel.

### 3.14 Feedback, complaints and disputes

- **FR-DSP-001:** Customers shall be able to report service-related issues.
- **FR-DSP-002:** The platform shall record complaint status and relevant history.
- **FR-DSP-003:** Authorized personnel shall be able to review and resolve complaints.
- **FR-DSP-004:** The platform shall support escalation of unresolved issues.
- **FR-DSP-005:** Disputes relating to work scope, completion, price or payment shall be recorded separately from ordinary booking status.
- **FR-DSP-006:** Resolution decisions shall be attributable to authorized personnel.

### 3.15 Reporting and analytics

- **FR-REP-001:** Cooperatives shall be able to review relevant service-request and completion information.
- **FR-REP-002:** Authorized personnel shall be able to review worker workload and utilization.
- **FR-REP-003:** The platform shall support analysis of job-allocation patterns.
- **FR-REP-004:** State administrators shall be able to access permitted state-level reports.
- **FR-REP-005:** Central administrators shall be able to access permitted platform-level reports.
- **FR-REP-006:** Financial reporting may be supported if payment and settlement capabilities are adopted.
- **FR-REP-007:** Reports shall respect role and organizational access boundaries.

---

## 4. Business Rules

### 4.1 Request and assignment rules

- **BR-001:** Every request must have a unique identifier.
- **BR-002:** Submission does not mean the request has been accepted.
- **BR-003:** Only an authorized manager can initiate an assignment offer on behalf of a cooperative.
- **BR-004:** An assignment offer is not a confirmed assignment.
- **BR-005:** A worker must respond to an assignment offer by accepting or rejecting it.
- **BR-006:** Rejected or expired offers must not become confirmed assignments.
- **BR-007:** The platform must prevent incompatible confirmed assignments under the approved scheduling rules.
- **BR-008:** Confirmed assignments must satisfy the applicable acceptance and service-agreement requirements.

### 4.2 Fair allocation rules

- **BR-009:** Worker recommendations must follow documented ranking rules.
- **BR-010:** Suitability requirements must be considered alongside fair opportunity.
- **BR-011:** Availability information must not automatically block an offer under the currently intended workflow.
- **BR-012:** Allocation history must be retained sufficiently to evaluate opportunity distribution.
- **BR-013:** Manager overrides must follow the approved policy.
- **BR-014:** Fairness must be evaluated using defined indicators rather than assuming that equal job counts always constitute fairness.
- **BR-029:** Fair-allocation rules must not bypass mandatory suitability, safety or service-eligibility requirements merely to equalize opportunity measures.

### 4.3 Negotiation and financial rules

- **BR-015:** A proposed quote is not a final agreed price.
- **BR-016:** The required parties must agree to the same terms before the service is confirmed under the negotiated-pricing workflow.
- **BR-017:** Changes to agreed scope or price require the applicable approvals.
- **BR-018:** Payment records must distinguish amounts due, payments declared, transactions confirmed and balances outstanding.
- **BR-019:** A recorded cash payment must not be represented as independently verified unless the platform has an appropriate verification basis.
- **BR-020:** Fees and revenue sharing must follow an approved cooperative or platform policy.
- **BR-021:** Payment disputes must follow the approved review and resolution process.

### 4.4 Governance and data rules

- **BR-022:** Users may access only the functions and records authorized for their role and organizational scope.
- **BR-023:** State administrators must operate within their authorized state scope.
- **BR-024:** Cooperative managers must be restricted to their authorized cooperative records.
- **BR-025:** Central monitoring privileges must not automatically imply unrestricted operational authority.
- **BR-026:** Significant request, assignment, negotiation, financial and administrative changes must be traceable.
- **BR-027:** Job statuses must follow permitted transitions.
- **BR-028:** Data access and reporting must respect applicable privacy requirements.

---

## 5. Non-Functional Requirements

### 5.1 Security

- **NFR-SEC-001:** Protected functionality must require authentication.
- **NFR-SEC-002:** Authorization must be enforced by backend services.
- **NFR-SEC-003:** Sensitive information must be protected against unauthorized access.
- **NFR-SEC-004:** Passwords, tokens, credentials and application secrets must be handled securely.
- **NFR-SEC-005:** Inputs must be validated, and errors must not expose secrets or sensitive implementation details.
- **NFR-SEC-006:** Security testing must cover critical workflows and access boundaries.
- **NFR-SEC-007:** The platform shall support approved policies and controlled processes for data retention, correction and deletion, subject to legal, audit and dispute-preservation requirements.

### 5.2 Data integrity and auditability

- **NFR-DAT-001:** Request, assignment, negotiation and payment records must remain internally consistent.
- **NFR-DAT-002:** Failed operations must not silently leave records in unintended states.
- **NFR-DAT-003:** Critical changes must be traceable to the responsible user or system process.
- **NFR-DAT-004:** The platform must preserve the history needed to investigate assignment and payment disputes.
- **NFR-DAT-005:** Financial amounts must use appropriate precision and currency representation.

### 5.3 Reliability and performance

- **NFR-REL-001:** Duplicate submissions and conflicting assignments must be handled safely.
- **NFR-REL-002:** Backup and recovery procedures must be documented.
- **NFR-PER-001:** Common operations must meet agreed response-time targets under expected load.
- **NFR-PER-002:** The system must support growth in users, cooperatives and service requests without requiring a complete redesign.
- **NFR-PER-003:** Reporting and analytics must not unreasonably disrupt core booking operations.

Quantitative performance, availability and recovery targets remain to be established.

### 5.4 Usability and accessibility

- **NFR-USE-001:** Interfaces must present clear status descriptions and understandable actions.
- **NFR-USE-002:** Forms must provide clear validation feedback.
- **NFR-USE-003:** Core workflows must be usable on supported device sizes.
- **NFR-USE-004:** Language and accessibility requirements must be determined for the intended user population.
- **NFR-USE-005:** Customers and workers must be able to understand relevant booking, negotiation and assignment outcomes.

### 5.5 Maintainability and testing

- **NFR-MNT-001:** The codebase must have clear module boundaries.
- **NFR-MNT-002:** Ranking and pricing rules must be testable independently of the user interface.
- **NFR-MNT-003:** Automated tests must cover critical workflows, authorization and business rules.
- **NFR-MNT-004:** Changes must be reviewed and tested before merging into the primary branch.
- **NFR-MNT-005:** API and data-model changes must be documented.

---

## 6. Proposed Status Models

These models establish the distinctions the platform must preserve. Exact transition permissions and timeout policies will be finalized during detailed design.

### 6.1 Service request

Proposed states:

`Submitted → Under Review → Accepted for Processing / Rejected`

An accepted request may proceed to worker ranking and assignment offers.

### 6.2 Assignment offer

Proposed states:

`Pending Response → Accepted / Rejected / Expired / Withdrawn`

An accepted offer proceeds to price and scope agreement where negotiation is required.

### 6.3 Negotiation

Proposed states:

`Awaiting Worker Quote → Quote Submitted → Counteroffer Pending → Agreed / Declined / Expired`

The platform must support multiple quote revisions without losing previous offers.

### 6.4 Confirmed job

Proposed states:

`Confirmed → In Progress → Completed`

Alternative outcomes may include `Cancelled`, `Unable to Complete` or `Disputed`. The exact state machine will specify which roles can perform each transition.

### 6.5 Payment

Proposed states:

`Not Due → Due → Partially Paid / Payment Reported / Payment Processing → Paid / Failed / Disputed / Refunded`

The final model must distinguish declared payment, payment-provider confirmation and actual settlement. These states are not interchangeable.

---

## 7. Acceptance Criteria

The requirements will be considered verifiable when tests can establish the following outcomes.

| Area | Acceptance condition |
|---|---|
| Authentication | Unauthorized users cannot access protected operations. |
| Organizational boundaries | Users cannot access records outside their permitted scope. |
| Service requests | Valid requests receive unique references and invalid requests produce clear errors. |
| Worker ranking | The algorithm follows the documented criteria and produces reproducible results for equivalent inputs. |
| Fair allocation | Allocation history supports evaluation against the defined fairness indicators. |
| Availability | A worker marked unavailable can still receive an offer under the specified workflow. |
| Assignment response | Rejected or expired offers do not become confirmed assignments. |
| Negotiation | Quote and counteroffer history is retained, and the agreed price is recorded only after the required agreement. |
| Scope changes | A price or scope change requires the specified approvals and creates a traceable revision. |
| Payment tracking | Declared, processing, confirmed, outstanding and disputed amounts are distinguishable. |
| Job execution | Only permitted status transitions are accepted and recorded. |
| Administration | Central, state and cooperative permissions are enforced. |
| Auditability | Significant decisions and changes can be traced. |
| Reliability | Critical failures do not create inconsistent requests, assignments or financial records. |

Detailed test cases will be produced after the status transitions, allocation formula, payment policies and permissions are approved.

---

## 8. Assumptions, Risks and Open Decisions

### 8.1 Established direction

- Cooperative management is the operational centre of the platform.
- Central administration focuses on overall monitoring and authorized platform-wide controls.
- State administrators register and manage cooperatives within their authorized scope.
- Worker recommendations are generated by a ranking algorithm.
- Workers must accept or reject assignment offers.
- Offers may be sent regardless of recorded availability.
- Worker and customer negotiate price where a fixed price is not appropriate.
- Payment tracking must accommodate more than one payment method.
- A universal fixed fee is not assumed.

### 8.2 Decisions still requiring definition

1. **Ranking algorithm:** Factor weights, fairness measurements, tie-breaking and treatment of unavailable workers.
2. **Offer timeout:** How long a worker has to respond and whether reminders are sent.
3. **Negotiation timeout:** How long quotes remain valid and what happens when negotiation fails.
4. **Worker selection:** Whether managers can select any eligible candidate or must follow ranking order unless an override is justified.
5. **Confirmation:** Whether cooperative approval is required after price agreement and worker acceptance.
6. **Pricing policy:** Whether cooperatives may establish minimum or maximum prices, review quotes or intervene only in exceptions.
7. **Payment recipient:** Whether customers pay workers directly, pay cooperatives or use another approved arrangement.
8. **Fees:** Whether cooperatives or the platform charge commissions, membership fees or service fees.
9. **Cash payments:** What evidence or confirmation is required before recording payment as settled.
10. **Digital payments:** Which provider and transaction model, if any, will be used.
11. **Completion verification:** Who confirms completion and how disputes are handled.
12. **Institutional contracts:** Whether formal contracts, tenders and procurement are part of the intended platform.
13. **Governance:** Exact central and state permissions, including suspension, verification and dispute escalation.
14. **Operating organization:** Who legally owns or operates the central platform.
15. **Non-functional targets:** Expected load, response time, availability, backup and recovery requirements.
16. **Shared-policy governance:** Which authorities approve shared-policy changes, how policy versions become effective and how historical versions are retained.
17. **Data lifecycle:** Retention periods, correction procedures, deletion exceptions and preservation requirements for legal, audit or dispute purposes.

### 8.3 Principal risks

| Risk | Mitigation direction |
|---|---|
| Unfair ranking outcomes | Document criteria, retain allocation history and evaluate results. |
| Offers sent to unavailable workers | Make offer status explicit, require worker response and prevent incompatible confirmed assignments. |
| Failed price negotiations | Support counteroffers, expiry and reassignment. |
| Price or scope disputes | Preserve quote history and require recorded agreement for changes. |
| Unverified payments | Distinguish reported payments from independently confirmed transactions. |
| Unclear cooperative authority | Define role and organization permissions before implementation. |
| Excessive first-release scope | Select the MVP from this specification using feasibility and priority criteria. |
| Deferred institutional workflows | Keep institutional requirements intact for a later release and validate institutional permissions and delivery policies before implementation. |
| Inadequate requirements validation | Review unresolved policies before finalizing affected functionality. |

---

## 9. MVP Selection Framework

The MVP will be selected from the requirements in this SRS after review. The following are candidate modules, not finalized release commitments:

1. Authentication and role-based access.
2. Service catalogue and customer requests.
3. Worker profiles and cooperative management.
4. Worker-ranking algorithm and allocation history.
5. Assignment offers and worker acceptance or rejection.
6. Negotiated quotes and customer counteroffers.
7. Recording of agreed price and payment terms.
8. Job tracking and completion records.
9. Basic central and state administration.
10. Institutional services as a later-release capability; institutional requests are excluded from the approved MVP boundary.
11. Notifications, feedback and complaints.
12. Digital payment integration, advanced financial settlement and analytics.

Each candidate will be assessed for importance, implementation effort, dependencies, risk, testability and demonstration value.

The MVP should demonstrate a coherent end-to-end service workflow. Features deferred from Version 1 remain part of the full-platform vision unless explicitly removed through a documented scope decision.

---

## 10. Requirements Governance

1. Every functional requirement must have a unique identifier.
2. Requirements must be classified as established, proposed or pending validation.
3. Related business rules, dependencies and acceptance criteria must be traceable.
4. Changes to the approved requirements baseline must be documented.
5. The full-platform specification must remain distinct from the Version 1 scope.
6. Technical design must follow the approved requirements rather than introduce undocumented business assumptions.
7. Requirements are ready for implementation when the behavior, permissions, relevant exceptions and acceptance criteria are sufficiently clear.

## 11. Definition of SRS Readiness

This SRS becomes ready for approval when:

- The roles and operating model have been reviewed.
- The customer, worker and cooperative workflows are agreed.
- Ranking, offer acceptance and negotiated pricing are sufficiently specified.
- Payment and financial responsibilities have been defined to the level required by the selected scope.
- Organizational permissions and administrative boundaries are documented.
- Non-functional requirements have measurable targets where practical.
- Open decisions are either resolved or explicitly accepted as deferred.
- The requirements are ready to be prioritized into a separate Version 1 backlog.
