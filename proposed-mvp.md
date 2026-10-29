# Cooperative GIG — Proposed MVP Scope

**Status:** Proposed MVP scope for review  
**Source documents:** `project-scope.md`, `SRS.md`, `feature-inventory.md`  
**MVP audience:** Individual customers, workers and cooperative operations  
**Client direction:** Web-first; Node.js backend remains a proposed technical direction

This document selects an MVP from the full-platform inventory. Existing P0/P1/P2 values remain full-platform priorities; the classifications below are MVP decisions and do not change those priorities or the full-platform requirements.

Institutional customers and institutional service requests are outside this MVP. `INS-01`–`INS-03` remain Later full-platform capabilities. `INS-04` remains Conditional and outside MVP pending stakeholder validation.

## 1. Core MVP feature matrix

| Feature ID | Feature | MVP classification | MVP implementation scope | SRS references | Dependencies | Acceptance criteria |
|---|---|---|---|---|---|---|
| ID-01 | User registration and authentication | Must | Authenticate individual customers, workers and authorized cooperative users. | `FR-AUTH-001, FR-AUTH-005` | User model, authentication service | Valid users authenticate; invalid credentials are rejected. |
| ID-02 | Role and permission management | Must | Implement customer, worker and cooperative-manager permissions; retain extensible administrative roles. | `FR-AUTH-002, FR-AUTH-006–007` | ID-01, organizational model | A user cannot perform an action outside the assigned role. |
| ID-03 | Organization-scoped access | Must | Enforce cooperative-level isolation for every MVP request, worker, assignment and payment record. | `FR-AUTH-003` | ID-02, cooperative records | A user cannot retrieve another cooperative’s restricted records. |
| ID-04 | Account recovery and status management | Should | Provide recovery and inactive/suspended account controls; recovery-channel details remain policy-dependent. | `FR-AUTH-005` | ID-01, notification mechanism | A recovery request follows the approved process, and a prohibited action by an inactive/suspended account is rejected. |
| ID-05 | Profile management | Must | Support permitted customer, worker and cooperative-user profile fields. | `FR-AUTH-004` | ID-01, role profiles | Permitted profile changes succeed; invalid or unauthorized changes fail. |
| SVC-01 | Service categories and catalogue | Must | Provide active household and community services with descriptions and requirements. | `FR-SVC-001, 003` | Service data model | An individual customer can browse active services and requirements. |
| SVC-02 | Cooperative service listings | Must | Show which cooperatives offer each service; allow authorized managers to maintain listings. | `FR-SVC-002, 004` | Cooperative records, SVC-01 | A customer can identify an offering cooperative. |
| SVC-03 | Service search and filtering | Should | Provide practical location/category filtering where data is reliable. | `FR-SVC-005` | SVC-01, SVC-02 | A selected filter returns matching services. |
| SVC-04 | Pricing-type configuration | Must | Distinguish fixed, indicative and negotiable service pricing. | `FR-SVC-006` | SVC-01, pricing policy | The displayed pricing type is unambiguous. |
| REQ-01 | Household/community service requests | Must | Support individual-customer requests with service, location, schedule and description. | `FR-REQ-001–005` | ID-01, SVC-01, SVC-02 | A valid request receives a unique reference; invalid input is rejected. |
| REQ-02 | Request review and clarification | Must | Allow a cooperative manager to accept, reject or request clarification. | `FR-REQ-006–007` | REQ-01, cooperative permissions | Each manager decision is recorded with status and actor. |
| REQ-03 | Booking status and history | Must | Expose current and historical individual-customer request outcomes. | `FR-REQ-008, 010` | REQ-01, status model | A customer can view current status and prior outcomes. |
| REQ-04 | Cancellation and rescheduling | Should | Support policy-approved requests and recorded outcomes; exact policy remains open. | `FR-REQ-009` | REQ-01, status model | An unauthorized cancellation is rejected; an allowed action is traceable. |
| REQ-05 | Customer budget input | Must | Capture an optional budget without forcing a fixed price. | `FR-REQ-003` | REQ-01, pricing model | Budget input does not make a negotiable service fixed-price. |
| WRK-01 | Worker registration and cooperative association | Must | Onboard and associate workers with the authorized cooperative. | `FR-WRK-001–003` | ID-01, cooperative model | An approved worker is linked to the correct cooperative. |
| WRK-02 | Skills and service eligibility | Must | Maintain skills, eligibility and mandatory service/safety information. | `FR-WRK-001, 003` | WRK-01, service catalogue | Only authorized users can change eligibility. |
| WRK-03 | Availability management | Must | Maintain availability as a ranking/scheduling input; it is not an automatic offer exclusion. | `FR-WRK-004, FR-WRK-011, FR-RANK-004` | WRK-01, scheduling model | An unavailable worker may receive an offer under the approved workflow. |
| WRK-04 | Worker work history and workload | Must | Retain assignment and workload data needed for fair allocation. | `FR-WRK-010, FR-RANK-003, 008` | Assignment records | Authorized users can retrieve relevant history. |
| WRK-05 | Worker status and eligibility lifecycle | Must | Apply approved inactive, suspended and eligibility states. | `FR-WRK-003, FR-RANK-002` | WRK-01, WRK-02 | Ineligible workers are excluded where rules require it. |
| RANK-01 | Eligibility filtering | Must | Exclude workers failing mandatory suitability, safety or service-eligibility requirements. | `FR-RANK-001, 002`, `BR-029` | WRK-02, WRK-03, REQ-01 | Mandatory failures are excluded and recorded. |
| RANK-02 | Worker ranking algorithm | Must | Use deterministic, documented ranking with suitability, workload, previous allocations and availability factors. | `FR-RANK-001–004` | RANK-01, WRK-04, approved ranking policy | Equivalent inputs and policy versions produce reproducible rankings. |
| RANK-03 | Manager recommendation interface | Must | Let managers review ranked candidates before sending offers. | `FR-RANK-005–006` | RANK-02, cooperative dashboard | A manager can review eligible ranked candidates. |
| RANK-04 | Allocation history and decision records | Must | Record recommendations, selected worker, rationale and policy version. | `FR-RANK-007–008` | RANK-02, assignment records | Allocation decisions are traceable. |
| RANK-05 | Fairness monitoring | Must | Provide the approved indicators for reviewing opportunity distribution. | `FR-RANK-009–010` | RANK-04, reporting | Authorized users can inspect defined fairness indicators. |
| RANK-06 | Manager override and justification | Must | Permit only policy-approved overrides with justification and audit history. | `FR-RANK-010` | RANK-03, audit logging | An override without required justification is rejected. |
| ASG-01 | Assignment offer creation | Must | Managers send offers to selected workers, including unavailable workers where permitted. | `FR-ASG-001–002` | RANK-03, cooperative permissions | An authorized manager can send an offer. |
| ASG-02 | Accept/reject offer | Must | Workers accept or reject offers; responses and timestamps are retained. | `FR-WRK-006`, `FR-ASG-003–005` | ASG-01, worker interface | Accepted and rejected offers cannot be confused with confirmed assignments. |
| ASG-03 | Offer expiry and withdrawal | Must | Implement the offer expiry/withdrawal state required for recovery and ranked-candidate reassignment; timeout duration remains an open policy decision. | `FR-ASG-004–006` | ASG-01, timeout policy, notifications | An expired or withdrawn offer cannot become confirmed, and its terminal state can trigger the approved reassignment path. |
| ASG-04 | Ranked-candidate reassignment | Must | Offer another eligible ranked candidate after rejection/expiry and prevent conflicts. | `FR-ASG-006–007`, `FR-WRK-009` | RANK-02, ASG-02, scheduling rules | Reassignment follows eligibility and conflict rules. |
| ASG-05 | Assignment confirmation | Must | Confirm only after worker response, required customer agreement, cooperative approval and conflict checks. | `FR-ASG-008–010` | ASG-02, NEG-04 where required | A recommendation or offer alone never creates a confirmed assignment. |
| NEG-01 | Worker quote submission | Must | Support quotes for services without predefined fixed prices. | `FR-NEG-001–003` | ASG-02, SVC-04, pricing model | A quote records amount, scope, schedule and terms. |
| NEG-02 | Customer acceptance and counteroffer | Must | Support customer accept/reject/counteroffer and worker response. | `FR-NEG-004–005` | NEG-01, customer interface | Counteroffers and responses are recorded. |
| NEG-03 | Quote version history | Must | Preserve every quote and counteroffer; distinguish proposed from agreed price. | `FR-NEG-006–007` | NEG-01, NEG-02 | Prior versions remain retrievable. |
| NEG-04 | Final agreement record | Must | Record agreed scope, schedule, price and payment terms before confirmation. | `FR-NEG-008–009` | NEG-01, NEG-02, agreement model | The agreement is created only after required parties accept the same terms. |
| NEG-05 | Negotiation timeout and failure handling | Should | Support approved timeout, closure or reassignment behavior. | `FR-NEG-010–011` | NEG-01, notifications, timeout policy | Failed negotiation follows a defined path. |
| NEG-06 | Scope and price change management | Should | Record approved post-agreement changes and preserve prior versions. | `FR-NEG-012` | NEG-04, audit logging | An unapproved scope/price change is rejected. |
| PAY-01 | Payment terms and obligations | Must | Record agreed terms, amounts due and balances for individual-customer jobs. | `FR-PAY-001–003` | NEG-04, payment policy | Agreed payment obligations are retrievable. |
| PAY-02 | Payment records and status tracking | Must | Record declared, processing, confirmed, outstanding and disputed states without gateway claims. | `FR-PAY-004–005, 012` | PAY-01, financial model | Statuses remain distinguishable. |
| PAY-03 | Cash payment declarations | Must | Record cash declarations without representing them as independently verified. | `FR-PAY-005, 012` | PAY-02, confirmation policy | A cash declaration does not become verified without evidence. |
| PAY-05 | Refunds, partial payments and adjustments | Should | Record approved adjustments and partial payments. | `FR-PAY-007` | PAY-02, financial policy | Balances update with traceable entries. |
| PAY-06 | Financial disputes and reconciliation | Should | Track individual-customer payment disputes and resolutions. | `FR-PAY-008–009` | PAY-02, complaint workflow | A dispute has an attributable resolution history. |
| PAY-07 | Cooperative fees and settlement rules | Conditional | Do not calculate fees or settlement until an approved cooperative/platform policy exists. | `FR-PAY-010–011` | Payment recipient and fee policy | No fee or revenue-sharing amount is produced without an approved policy. |
| COOP-01 | Cooperative profile and service management | Must | Maintain cooperative profile and service listings within scope. | `FR-COOP-001–002` | ID-03, SVC-01 | Managers cannot edit another cooperative’s records. |
| COOP-02 | Request and workforce operations dashboard | Must | Provide the manager view for requests, recommendations, offers and active jobs. | `FR-COOP-003–006` | REQ-02, WRK-01, RANK-03, ASG-01 | A manager can operate the complete individual-customer workflow. |
| COOP-03 | Operational exception handling | Must | Support basic reassignment and failed-assignment handling; complaints and broader service issues remain reduced-scope extensions. | `FR-COOP-007–008` | ASG-04, JOB-03, JOB-06 | An authorized manager can record a failed assignment and initiate an eligible reassignment; broader complaint handling follows approved policy where enabled. |
| COOP-04 | Cooperative reporting | Should | Provide basic request, assignment, completion and workforce summaries. | `FR-COOP-009` | Request, worker, assignment and job records | Reports are limited to the cooperative scope. |
| JOB-01 | Worker job dashboard | Must | Show confirmed individual-customer jobs and service details. | `FR-JOB-001` | ASG-05, worker permissions | Workers can view confirmed jobs. |
| JOB-02 | Job status updates | Must | Support permitted progress transitions and timestamps. | `FR-JOB-002–003` | JOB-01, status model | Invalid transitions are rejected. |
| JOB-03 | Delays and inability to complete | Must | Let workers report inability or delay so the cooperative can recover through reassignment; broader exception workflows remain policy-dependent. | `FR-JOB-004, 009` | JOB-01, notification workflow | A failed-assignment report is recorded, visible to the cooperative and eligible for the approved reassignment path. |
| JOB-04 | Completion evidence and verification | Must | Record and verify individual-customer completion; expose permitted assignment information. | `FR-JOB-005–008, FR-JOB-011` | JOB-02, completion policy | Completion follows the approved verification process. |
| JOB-05 | Ratings and feedback | Later | Defer ratings and feedback until after the core completion workflow. | `FR-JOB-010` | JOB-04, customer interface | No rating is required for MVP completion; later submissions can remain linked to completed services. |
| JOB-06 | Complaints and service disputes | Should | Record and resolve individual-customer issues separately from booking status. | `FR-JOB-010`, `FR-DSP-001–006` | JOB-04, complaint policy | Issues are attributable, escalatable and closable. |

## 2. Minimal supporting capabilities

| Feature ID | Feature | MVP classification | MVP implementation scope | SRS references | Dependencies | Acceptance criteria |
|---|---|---|---|---|---|---|
| ADM-03 | Administrative audit and escalation | Must | Implement minimum administrative audit and escalation needed for cooperative operations. | `FR-ADM-006–007, 010` | Role model, audit logging | Administrative actions identify actor, time and outcome. |
| ADM-01 | Central platform monitoring | Should | Provide limited authorized oversight/aggregates only; broad platform reporting is deferred. | `FR-ADM-001–002, 008` | Audit records, reporting, scope permissions | Central access cannot bypass cooperative isolation. |
| ADM-02 | State cooperative registration and management | Later | Preserve the multi-tenant model but defer broad state workflows from the pilot MVP. | `FR-ADM-003–005` | ID-03, organization model | Later implementation remains scoped to authorized states. |
| ADM-04 | Shared policy management | Conditional | Requires approved policy authority and versioning before implementation. | `FR-ADM-009, FR-ADM-011` | Governance approval model | No shared policy change becomes effective without approved control. |
| NOT-01 | Booking and job notifications | Must | Notify individual customers, workers and managers of core status changes. | `FR-NOT-001, 005` | Status-change events, notification service | Core request, assignment, completion and payment updates are delivered. |
| NOT-02 | Assignment offer notifications | Must | Notify workers of offers and responses. | `FR-NOT-002, 004` | ASG-01, ASG-02 | Offer and response outcomes are accurately reflected. |
| NOT-03 | Negotiation notifications | Should | Notify customers/workers of quotes and counteroffers. | `FR-NOT-003` | NEG-01, NEG-02 | Relevant parties receive negotiation updates. |
| NOT-04 | Payment and complaint notifications | Should | Notify individual-customer parties of permitted payment and complaint changes. | `FR-NOT-005–006` | PAY-02, JOB-06 | Notification delivery status is retained where supported. |
| REP-01 | Service operations reporting | Should | Provide basic individual-customer request and completion summaries. | `FR-REP-001` | Request, assignment and job records | Authorized users can review request volumes and outcomes. |
| REP-02 | Workforce utilization reporting | Should | Provide basic recorded workload summaries. | `FR-REP-002` | WRK-04, assignment history | Reports match recorded workload data. |
| REP-03 | Fair allocation analytics | Must | Provide the approved fairness indicators required to review MVP allocation. | `FR-REP-003` | RANK-04, RANK-05 | Authorized users can inspect allocation indicators. |
| REP-04 | State and platform reporting | Later | Defer broad state/platform reports while retaining access-boundary design. | `FR-REP-004–005` | ADM-01, ADM-02, data-access policies | No deferred report is exposed as an MVP capability. |
| REP-05 | Financial reporting | Conditional | Defer until payment and settlement policies are approved. | `FR-REP-006–007` | PAY-01–PAY-07 | Financial reports are not enabled without approved policy and permissions. |
| PLT-01 | Backend authorization enforcement | Must | Enforce role and cooperative boundaries on every API. | `NFR-SEC-001–003` | ID-02, ID-03 | Direct API calls cannot bypass restrictions. |
| PLT-02 | Audit trail | Must | Audit material allocation, assignment, administrative, negotiation and payment events. | `FR-RANK-007`, `FR-ADM-007`, `NFR-DAT-003–004` | Identity model, domain events | Material decisions retain actor, time and outcome. |
| PLT-03 | Data validation and integrity | Must | Validate domain inputs and prevent unintended partial states. | `NFR-SEC-005`, `NFR-DAT-001–002` | API/domain validation | Invalid operations do not create inconsistent records. |
| PLT-04 | Duplicate and concurrency protection | Must | Protect requests, offers, confirmations and payment records from duplicates/conflicts. | `NFR-REL-001` | Domain model, transactions | Concurrent assignment attempts are handled safely. |
| PLT-05 | Backup and recovery | Must | Establish and verify basic backup/restore for the MVP deployment. | `NFR-REL-002` | Database, deployment infrastructure | A documented restore procedure succeeds in a test. |
| PLT-06 | Automated testing and CI | Must | Test authorization, allocation, state transitions and critical workflows automatically. | `NFR-SEC-006`, `NFR-MNT-002–004` | Repository and test framework | Automated checks run and cover critical business rules. |
| PLT-07 | API and architecture documentation | Must | Document the MVP interfaces and material data-model decisions. | `NFR-MNT-001, 005` | Architecture/API design | Core interfaces and changes are documented. |
| PLT-08 | Performance and scaling controls | Should | Test agreed pilot targets; quantitative targets remain an open decision. | `NFR-PER-001–003` | Architecture, load assumptions | Performance tests evaluate approved targets. |
| PLT-09 | Accessibility and responsive interface | Must | Provide responsive web workflows and a documented baseline accessibility check. | `NFR-USE-001–005` | Frontend design system | Core workflows work on supported screen sizes. |
| PLT-10 | Privacy and data lifecycle controls | Must | Apply approved access, retention, correction and deletion controls. | `NFR-SEC-006–007` | Data classification, retention policy | Lifecycle actions follow approved policies. |

## 3. Deferred and conditional scope

| Feature ID | Feature | MVP classification | Reason |
|---|---|---|---|
| INS-01 | Institutional account and representative authorization | Later | Institutional customers are outside MVP; retain for the full platform. |
| INS-02 | Institutional requirement submission | Later | Institutional requests are outside MVP. |
| INS-03 | Institutional delivery tracking | Later | Institutional tracking, reports and conditional financial visibility are outside MVP. |
| INS-04 | Contract, tender and procurement management | Conditional | Requires stakeholder validation; remains outside MVP. |
| PAY-04 | Digital payment integration | Later | Gateway processing is excluded from MVP. |
| JOB-05 | Ratings and feedback | Later | Valuable service-quality capability, but not required to complete the core workflow. |
| PAY-07 | Cooperative fees and settlement rules | Conditional | Requires an approved fee, revenue-sharing and settlement policy; no calculation is enabled in MVP by default. |
| FUT-01 | Advanced demand forecasting | Later | Requires historical data and validated need. |
| FUT-02 | Advanced recommendation optimization | Later | Transparent baseline ranking is sufficient for MVP. |
| FUT-03 | External welfare, insurance or support integrations | Conditional | Requires partners, legal basis and security review. |
| FUT-04 | Dedicated Android application | Later | The initial release is web-first. |
| FUT-05 | Advanced analytics and dashboards | Later | Defer until metrics and data volume justify it. |

## 4. End-to-end MVP workflow

1. An individual customer discovers an available service.
2. The customer submits a household or community request.
3. The cooperative accepts, rejects or requests clarification.
4. The system filters and ranks suitable workers using transparent allocation rules.
5. An authorized manager reviews candidates and sends an assignment offer.
6. The worker accepts or rejects the offer.
7. A rejected or expired offer may proceed to another eligible ranked candidate.
8. The customer and worker negotiate terms when the service is not fixed-price.
9. Required parties agree to the same scope, schedule, price and payment terms.
10. The assignment is confirmed only after authorization and scheduling/conflict checks.
11. The worker performs the job and updates permitted status values.
12. Completion evidence is recorded and verified under the approved process.
13. Payment terms, payment declarations, verification status and outstanding balances are maintained without processing gateway transactions.

Availability does not automatically prevent an offer. Confirmed assignments must obey approved conflict rules. Fair allocation cannot bypass mandatory eligibility or safety requirements. Payment records do not imply gateway processing or independently verified settlement.

## 5. MVP completion criteria

The MVP is complete when:

- An individual customer can discover, submit and track a request.
- A cooperative manager can review requests and operate the allocation workflow.
- Ranked recommendations are reproducible under a documented policy version.
- Worker offers support acceptance and rejection, and offers remain distinct from confirmed assignments.
- Negotiable terms are recorded consistently before confirmation.
- Confirmed jobs can be tracked through completion and verification.
- Payment terms, payment declarations, verification status and balances are maintained without gateway processing or an implied settlement confirmation.
- Unauthorized cross-cooperative access is rejected and tested.
- Material allocation, assignment, administrative, negotiation and payment actions are auditable.
- The web application is responsive, deployable, automatically tested and covered by a verified backup/restore procedure.

Criteria involving fairness indicators, conflict rules, completion verification, payment confirmation, retention and performance targets remain dependent on the unresolved decisions listed below.

## 6. Implementation dependencies and risks

- Role and cooperative-scope permissions must be agreed before authorization and data models are finalized.
- Ranking weights, fairness indicators, tie-breaking and manager overrides must be approved before implementing `RANK-02`–`RANK-06`.
- Availability meaning and scheduling conflicts must be defined before confirmation and reassignment logic is finalized.
- Offer expiry, confirmation sequencing and negotiation timeouts affect state machines and notification APIs.
- Completion verification and dispute authority affect job closure and payment status.
- Rejected, expired or failed assignments require a defined reassignment and exception path; `ASG-03`, `ASG-04`, `JOB-03` and `COOP-03` provide the MVP recovery capability, while timeout and exception policies remain open.
- Payment recipient, cash evidence and settlement semantics remain unresolved; no gateway behavior is assumed.
- Retention, correction, deletion and dispute-preservation policies affect audit and data lifecycle design.
- Pilot performance, availability, backup and recovery targets remain open.
- Institutional features are intentionally deferred; shared components must not require institutional onboarding, while `INS-01`–`INS-03` and `INS-04` remain preserved in the full platform.

## 7. Traceability check

All feature IDs and SRS references used in this document were checked against the current `feature-inventory.md` and `SRS.md`. No new requirement or feature IDs are introduced. Existing full-platform priorities remain unchanged. The institutional requirements and features remain in their source documents and are classified here as Later or Conditional only for MVP planning.
