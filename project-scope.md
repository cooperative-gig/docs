# Cooperative GIG — Project Scope
**Version:** v0.1  
**Document type:** Project Scope  
**Status:** Working Draft — Pending Validation

## 1. Problem Statement

Labour cooperative societies have skilled workers who can provide household, community and institutional services. However, customers need a structured and reliable way to discover these services, submit requests, coordinate with cooperatives and track service delivery.

Cooperative societies also need effective digital tools to manage their workforce, maintain worker profiles, monitor availability, coordinate assignments and ensure accountability. Without transparent allocation processes, suitable workers may not receive equitable opportunities to access available jobs.

Cooperative GIG aims to address these challenges through a cooperative-oriented digital platform that connects customers with cooperative-associated workers while supporting workforce management, service coordination, fair job allocation and accountable service delivery.

The platform is intended to operate through a centralized digital system with state-level administration and society-level operations. It will provide a common environment in which customers can request services, workers can manage their work-related information, cooperatives can coordinate service delivery, and authorized administrators can oversee operations within their respective responsibilities.

The long-term platform vision extends beyond booking management. It may also encompass institutional service coordination, financial transactions, operational reporting, performance monitoring and additional digital services as the platform's requirements mature. These capabilities will be validated and documented before the implementation scope is finalized.

## 2. Project Objectives

1. **Service discovery and access:** Enable customers to discover available services and submit household, community or institutional service requests through a structured digital platform.

2. **Cooperative workforce management:** Enable cooperative societies to maintain worker profiles, manage skills and availability, organize their workforce and coordinate service delivery.

3. **Transparent job allocation:** Establish clear, consistent and auditable rules for recommending eligible workers and confirming assignments.

4. **Equitable work opportunities:** Design job-allocation mechanisms that seek to distribute suitable work opportunities fairly among eligible workers, taking account of relevant factors such as availability, skills, workload and previous allocations.

5. **Service lifecycle visibility:** Provide appropriate visibility into requests, booking decisions, worker assignments, job progress, completion and related records.

6. **Multi-level administration:** Support a centralized platform with authorized state-level administration and society-level operational management.

7. **Accountability and governance:** Maintain appropriate records of important decisions and actions to support operational oversight, dispute investigation and responsible platform administration.

8. **Worker and customer support:** Provide appropriate processes for profile management, booking changes, cancellations, complaints, feedback and other service-related interactions.

9. **Institutional service coordination:** Support organizations that require services from cooperative societies, including requirements submission, workforce coordination and service-delivery monitoring.

10. **Operational efficiency:** Reduce manual coordination, improve access to relevant information and help cooperatives manage service requests and workforce utilization more effectively.

11. **Secure and reliable operation:** Protect user information, enforce role-based permissions, preserve data integrity and provide a maintainable foundation for future platform growth.

12. **Extensibility:** Establish a platform architecture that can accommodate additional services, financial capabilities, reporting tools and client applications as requirements and resources permit.

## 3. Platform Scope

This section describes the intended capability areas of Cooperative GIG as a complete platform. It is not the final Version 1 feature list. Individual capabilities, business rules and dependencies remain subject to requirements validation.

### 3.1 User Accounts and Access Management

- User registration, authentication and account management.
- Role-based access for customers, workers, cooperative managers, state administrators and platform administrators.
- Support for institutional accounts and authorized institutional representatives.
- Profile maintenance and account-status management.
- Permission boundaries based on role and organizational responsibility.
- Account verification and approval processes, where required.
- Secure account recovery and session management.

### 3.2 Service Catalogue and Discovery

- A centralized catalogue of services offered through participating cooperatives.
- Service categories, descriptions, requirements and relevant service information.
- Discovery and filtering of services based on relevant criteria, such as location and service category.
- Visibility into the cooperatives providing particular services.
- Availability information where it can be reliably maintained.
- Service-specific requirements and eligibility conditions.
- Management of service listings by authorized personnel.

### 3.3 Worker Profiles and Workforce Management

- Worker registration or onboarding through an authorized process.
- Worker profiles containing relevant skills, experience, service capabilities and other approved information.
- Worker verification and approval workflows.
- Association of workers with their respective cooperative societies.
- Management of worker availability and work-related status.
- Maintenance of worker skills, qualifications and service eligibility.
- Visibility into current assignments and relevant work history.
- Worker profile updates and changes to eligibility or participation status.
- Workforce reports for authorized cooperative and administrative users.

### 3.4 Customer Service Requests and Bookings

- Submission of household and community service requests.
- Selection of a service and the relevant cooperative, where applicable.
- Collection of required service details, location, preferred schedule and other relevant information.
- Request review, acceptance, rejection or requests for clarification by authorized personnel.
- Booking confirmation and status notifications.
- Viewing of current and historical requests.
- Cancellation and rescheduling according to defined policies.
- Handling of unavailable services, incomplete requests and other booking exceptions.
- Feedback and service ratings, subject to the platform's approved policies.

### 3.5 Institutional Service Management

- Institutional account onboarding and authorization.
- Submission of service requirements by eligible organizations.
- Recording of service scope, workforce requirements, location, schedule and other relevant details.
- Review and clarification of institutional requests.
- Assessment of workforce availability and cooperative capacity.
- Coordination between institutions and authorized cooperative representatives.
- Monitoring of accepted institutional service requests and their progress.
- Recording of delivery outcomes and completion evidence.
- Support for more comprehensive institutional agreements and contracts if validated as part of the long-term platform.

### 3.6 Cooperative Management and Operations

- Cooperative profile and service-catalogue management.
- Worker onboarding, verification and profile administration.
- Workforce availability and capacity management.
- Review and coordination of incoming service requests.
- Worker eligibility assessment and assignment management.
- Monitoring of active jobs and service-delivery status.
- Reassignment and exception handling.
- Maintenance of operational records and relevant history.
- Reporting on requests, assignments, completion and workforce utilization.
- Management of authorized cooperative personnel and their permissions.

### 3.7 Fair Worker Allocation

- Identification of workers who meet the requirements of a service request.
- Filtering based on skills, availability, service eligibility, location and other approved criteria.
- Recommendation of suitable workers using transparent and documented rules.
- Consideration of workload and previous job allocations to support equitable access to opportunities.
- Review and confirmation of assignments by an authorized cooperative manager.
- Recording of assignment decisions and relevant reasons.
- Prevention of conflicting assignments where applicable.
- Reassignment when a worker becomes unavailable or a job cannot proceed.
- Monitoring of allocation patterns to identify potential imbalances.
- Periodic review of allocation rules and their effects on worker opportunity distribution.

Fairness will be treated as an explicit business requirement, rather than assumed to result automatically from automated recommendations. The precise allocation formula, eligibility rules, tie-breaking method and fairness measurements must be defined and validated.

### 3.8 Job Execution and Completion

- Visibility of assignments to the relevant workers.
- Access to the information needed to perform an assigned job.
- Job acceptance or acknowledgement processes, if required by the approved workflow.
- Worker updates for job progress and status.
- Recording of delays, inability to complete work and other exceptions.
- Submission of completion information or supporting evidence where required.
- Completion review or verification by an authorized party.
- Recording of final job status and relevant timestamps.
- Customer or institutional confirmation and feedback, where applicable.
- Retention of service and assignment history for authorized users.

### 3.9 Central and State-Level Administration

- Central administration of authorized platform-wide settings and policies.
- Management of state-level administrative accounts and permissions.
- State-scoped oversight of participating cooperatives and relevant operations.
- Management of organizational records and authorization boundaries.
- Monitoring of operational activity and platform-level indicators.
- Administration of approved service categories and common business rules.
- Audit trails for significant administrative actions.
- Escalation and investigation processes for issues requiring broader oversight.

The precise division of responsibilities between central administrators and state administrators remains subject to governance validation.

### 3.10 Notifications and Communication

- Notifications for request submission, review, assignment and status changes.
- Communication of relevant booking decisions to customers and institutions.
- Assignment and job-update notifications for workers.
- Notifications for cancellations, rescheduling and exceptions.
- Administrative alerts for relevant operational issues.
- In-platform communication or messaging, if required.
- Support for additional notification channels as appropriate.

### 3.11 Financial and Settlement Capabilities

- Recording of approved service charges and pricing information.
- Support for payment tracking and transaction records.
- Integration with payment providers if online payments are adopted.
- Recording of refunds, cancellations, adjustments and related financial events where applicable.
- Cooperative-level settlement and financial reporting.
- Reconciliation and audit records for financial transactions.

The platform's pricing model, payment recipient, distribution of earnings, fees, settlement process and responsibility for financial disputes must be defined before these capabilities are specified in detail.

### 3.12 Feedback, Complaints and Dispute Handling

- Collection of customer feedback and service ratings.
- Recording of service-related complaints.
- Assignment of complaints to authorized personnel.
- Tracking of investigation and resolution status.
- Recording of decisions and supporting information.
- Escalation of unresolved issues according to defined governance rules.
- Review of feedback and complaints to identify recurring operational problems.

### 3.13 Reporting and Analytics

- Reports on service requests, bookings and job completion.
- Workforce availability and utilization reporting.
- Analysis of allocation patterns and distribution of work opportunities.
- Cooperative-level operational reports.
- State-level oversight reports.
- Platform-level performance indicators for authorized administrators.
- Institutional service-delivery reports.
- Financial reports if financial functionality is introduced.
- Data exports and advanced analytics where authorized and appropriate.

Reporting must respect organizational access boundaries and protect sensitive worker and customer information.

### 3.14 Security, Privacy and Auditability

- Authentication and role-based authorization.
- Protection of personal, organizational and service-related data.
- Validation of incoming data and controlled state transitions.
- Secure management of application secrets and credentials.
- Audit logging of significant actions and decisions.
- Restrictions on access to records outside a user's authorized scope.
- Appropriate retention, correction and deletion policies.
- Backup, recovery and operational monitoring.
- Security testing and handling of identified vulnerabilities.
- Compliance with applicable legal and regulatory requirements, as determined during validation.

### 3.15 Platform Interfaces and Technical Extensibility

- A web-based interface for core platform users.
- Responsive access for different screen sizes and device types.
- API support for communication between the client and backend services.
- Potential support for a dedicated Android application.
- Integration interfaces for approved external services.
- Maintainable modular architecture.
- Automated testing and controlled deployment processes.
- Future expansion to additional cooperatives, states, services and user groups.

## 4. Primary Actors

| Actor | Main responsibilities |
|---|---|
| Customer | Discover services, submit requests, manage bookings, track jobs and provide feedback. |
| Institutional Customer | Submit organizational service requirements, coordinate with cooperatives and review delivery outcomes. |
| Worker | Maintain relevant profile information, manage availability where authorized, view assignments, perform jobs and update progress. |
| Cooperative Manager | Manage the cooperative's workforce and services, review requests, confirm worker assignments and oversee delivery. |
| State Administrator | Administer authorized state-level operations, oversee relevant cooperatives and review state-scoped information. |
| Platform Administrator | Manage authorized platform-wide settings, governance controls, access policies and operational oversight. |
| Additional Authorized Personnel | Perform specific functions such as verification, support, complaint handling or financial administration if separate responsibilities are required. |

Additional personnel may be represented as separate roles or permissions within an existing role. This decision will depend on the validated operating model.

The platform must distinguish between a person's account, their organizational affiliation, their role and the permissions granted to that role. A worker's association with a cooperative does not automatically establish employment status or ownership of the platform.

## 5. Core Business Workflows

### 5.1 Customer Household or Community Service Workflow

1. The customer accesses the platform and discovers available services.
2. The customer selects a service and provides the required request details.
3. The customer selects a cooperative where required by the service workflow.
4. The system validates the request and records it.
5. The relevant cooperative receives the request for review.
6. An authorized cooperative manager reviews the request and assesses its requirements.
7. The system identifies eligible workers and recommends suitable candidates according to the approved allocation rules.
8. The cooperative manager reviews the recommendations and confirms an assignment.
9. The customer receives the relevant booking and assignment updates.
10. The worker performs the service and updates its progress.
11. The service is marked complete after the required completion process.
12. The final status is recorded, and feedback or related follow-up is collected where applicable.

### 5.2 Worker Onboarding and Management Workflow

1. A worker's details are submitted through the approved onboarding process.
2. The relevant cooperative or authorized personnel review the submitted information.
3. Required verification and approval checks are completed.
4. The worker's cooperative association, skills and service eligibility are recorded.
5. The worker's profile becomes available for relevant operational use after approval.
6. The worker's availability and profile information are maintained over time.
7. Assignments, completion records and relevant work history are updated as jobs progress.
8. Changes in eligibility or participation status affect future recommendations and assignments according to defined rules.

### 5.3 Fair Job Allocation Workflow

1. A cooperative receives an accepted or reviewable service request.
2. The system determines the request's service, skill, schedule and other eligibility requirements.
3. The system filters out workers who do not meet mandatory requirements.
4. Eligible workers are assessed using the approved recommendation and fairness rules.
5. Relevant factors, such as current workload and previous opportunities, are considered where appropriate.
6. The system presents suitable worker recommendations to an authorized cooperative manager.
7. The manager confirms an eligible assignment or records an appropriate exception.
8. The system records the decision and updates the worker's assignment status.
9. The allocation history is retained for oversight and fairness analysis.
10. Allocation outcomes are periodically reviewed to identify systematic imbalances or unintended effects.

### 5.4 Institutional Service Workflow

1. An authorized institutional representative submits a service requirement.
2. The platform records the request and required service details.
3. The relevant cooperative reviews the requirement and assesses its capacity.
4. The institution and cooperative clarify the scope, schedule or workforce requirements where necessary.
5. The cooperative accepts, declines or requests changes to the proposed service.
6. Following acceptance, the cooperative organizes the required workforce and confirms assignments.
7. The service is delivered and monitored through the platform.
8. Completion is recorded and reviewed according to the applicable verification process.
9. The institution and cooperative can access the relevant service records.
10. Financial settlement, contractual closure or further follow-up occurs if those capabilities are supported and applicable.

### 5.5 Cooperative Operations Workflow

1. An authorized cooperative manager maintains the cooperative's profile, services and worker records.
2. Incoming requests are reviewed and prioritized according to defined business rules.
3. The manager assesses service feasibility and workforce availability.
4. Eligible workers are recommended and assignments are confirmed.
5. The manager monitors active work and addresses delays, cancellations or other exceptions.
6. Completed jobs and related operational records are reviewed.
7. The cooperative uses available reports to assess service delivery and workforce utilization.
8. Significant decisions and exceptions remain traceable through the platform's records.

### 5.6 Central and State Administration Workflow

1. The central platform establishes authorized platform-wide policies and administrative controls.
2. State administrators access the functions and records permitted for their scope.
3. Authorized state administrators oversee relevant cooperative operations.
4. Cooperative managers manage local workforce and service-delivery activities.
5. Administrative actions and changes to important records are logged where required.
6. Issues requiring broader intervention are escalated to the appropriate administrative level.
7. Oversight reports are produced according to role permissions and data-access rules.

### 5.7 Cancellation, Reassignment and Exception Workflow

1. A customer, worker or authorized manager initiates a permitted cancellation or reports an operational issue.
2. The platform validates the request against the applicable business rules.
3. The affected parties receive the relevant status update.
4. If the service remains viable, the cooperative assesses whether rescheduling or reassignment is appropriate.
5. Any replacement assignment is made using the same eligibility and fairness requirements.
6. The platform records the reason, decision and resulting status.
7. Complaints, disputes or unresolved exceptions are escalated according to the approved process.

## 6. Business Rules and Governance

### 6.1 Role and Organizational Boundaries

- Each user must have an authenticated identity before accessing protected functionality.
- Users may perform only actions permitted by their assigned roles and organizational scope.
- Cooperative managers must not automatically gain access to another cooperative's restricted records.
- State administrators must operate within their authorized state-level scope.
- Platform-wide access must be restricted to explicitly authorized administrative functions.
- Institutional access must be limited to the institution's permitted requests and related records.

### 6.2 Worker Eligibility and Assignment

- Only workers meeting the mandatory eligibility requirements may be recommended for a job.
- An assignment must not be confirmed if the worker is ineligible or unavailable under the applicable rules.
- Conflicting assignments must be prevented where the schedules or service requirements make them incompatible.
- System recommendations must not be treated as final assignments without the required manager confirmation.
- Reassignment must follow the same eligibility requirements as the original assignment.
- Assignment decisions and significant changes must be recorded.

### 6.3 Fairness and Equal Opportunity

- Fair opportunity must be an explicit consideration in job allocation.
- Workers must be assessed using documented, relevant and consistently applied criteria.
- Workload and previous allocations should be considered when defining an appropriate fairness mechanism.
- Mandatory skill, safety, availability and service requirements must not be bypassed merely to equalize allocation counts.
- The allocation process should avoid systematically favoring the same eligible workers without a justified operational reason.
- Managers must be able to handle justified exceptions, with appropriate recording and oversight.
- Allocation outcomes should be evaluated using defined indicators rather than relying solely on the stated intention of the rules.

The final fairness mechanism must balance equitable access with worker suitability, service quality, availability and customer requirements. Its formula and measurement criteria remain to be defined.

### 6.4 Request and Job Status Management

- Every request must have a unique identifier and a traceable status.
- Requests must follow defined and validated status transitions.
- Only authorized users may accept, reject, cancel, assign or close a request.
- Assignment and completion information must remain associated with the relevant service request.
- Completion must follow the approved recording or verification process.
- Material changes must preserve sufficient history for accountability.

### 6.5 Administrative Governance

- Administrative permissions must reflect the approved central, state and cooperative operating model.
- Important administrative changes must be attributable to the responsible user.
- Changes to common policies and allocation rules must be controlled and documented.
- Escalations must be directed to an authorized level of responsibility.
- Reports must disclose only information appropriate to the recipient's role and scope.

### 6.6 Data Protection and Operational Integrity

- The platform must collect and expose only the information necessary for authorized operations.
- Sensitive information must be protected against unauthorized access.
- Request, assignment and completion records must remain consistent.
- Financial records, if implemented, must be traceable and handled separately from assumptions about completed payments.
- Data retention, correction, deletion and audit requirements must be defined according to applicable obligations.

### 6.7 Business Policies Requiring Validation

The following decisions must be finalized before the corresponding requirements are treated as confirmed:

- Identity and organizational verification procedures.
- Worker acceptance or rejection of assignments.
- Exact allocation and fairness formula.
- Cancellation, rescheduling and reassignment rules.
- Service pricing, payment handling and settlement responsibilities.
- Institutional authorization and contract requirements.
- Job completion verification and dispute-resolution processes.
- Division of responsibilities between central and state administrators.
- Data retention, reporting and privacy policies.
- Applicable performance, availability and recovery targets.

## Scope Management Note

This document defines the intended full-platform scope at a working level. It does not establish that every capability listed above is already approved, legally validated or feasible for immediate implementation.

The requirements documents will elaborate the relevant workflows, permissions, business rules and acceptance criteria. After the full platform has been documented, the team will evaluate the feature inventory and select a coherent, feasible Version 1 scope.

The approved MVP boundary supports individual customers through the complete service workflow, from discovery and request submission through cooperative review, fair allocation, assignment, execution, completion and payment-status recording. Institutional customers and institutional service requests are deferred from MVP delivery; their full-platform scope remains documented for a later release. Institutional tenders, procurement and formal contract management remain conditional pending stakeholder validation.

Features excluded from Version 1 may remain part of the longer-term platform. Any feature deliberately excluded from the overall platform should have a documented rationale.

## 7. Important Decisions Pending

### Stakeholders and Roles
|Item	|Current status|
|---|---
|Central platform with state-level administration	        |Working direction established
|Society-level workforce and job management	                |Established in the scope
|Manager confirms system-recommended worker assignments	    |Established
|Household and basic institutional requests	                |Included in the intended platform
|Dedicated support or verification role	                    |Needs validation
|Exact permissions for each role	                        |To be specified
|Who operates the central platform	                        |Unresolved
|Whether federations require their own role and dashboard	|Unresolved

### Core Business Workflows
| Decision | Current status |
| --- | --- |
| Manager confirms system-recommended worker assignment | Established |
| Household service requests | Included |
| Basic institutional requests | Included |
| Worker onboarding and verification process | Unresolved |
| Worker acceptance or rejection of an assignment | Unresolved |
| Customer cancellation and rescheduling policy | Unresolved |
| Completion verification responsibility | Unresolved |
| Complaint and dispute escalation | Unresolved |
| Institutional contract and payment workflow | Unresolved |
| Exact central/state/cooperative authority boundaries | Unresolved |
