---
slug: An Organisation Architecture Group
title: An Organisation Architecture Group
author: Brendan Hulme
author_title: Technical Consultant
author_url: https://github.com/b-hulme
author_image_url: https://avatars3.githubusercontent.com/u/64170317?s=460&u=6869a9778ace6f2c221e49bde22b904797e84097&v=4
tags: [Enterprise Architecture, Architecture Governance]
---

Whilst working for a client recently, the issue of architectural governance came up.

Maintaining consistent architecture across a growing organisation is hard.
Products expand, teams grow and divide and whole new business areas are explored.

Allowing architectual autonomy across your teams allows for great deal of agility in product delivery however, without good governance and guidelines it can lead to chaos.

Architectural governance is about setting the rules, minimum standards and frameworks that tech teams can use to independently create technical architectures that work well together with other units in the business and also in line with company goals.

This governance works in a similar way to how a country is governed. Governments create rules and provide services so that the general population can get on and do what they want to do, while furthering the objectives of the country in question. 

Creating all those rules sounds like a big job. Fortunately we don't have to create them from scratch. A very popular and well known framework is the TOGAF specification and its associated ADM.

That said, the TOGAF specification and all its associated documents are huge and cover usage by a broad range of enterprises.
Quite often smaller companies could benefit from some of the basics but don't tend to dive in to this due to the complexity.

So, I thought I'd put together a little post on a basic, reduced set of guidelines derived from TOGAF and focused mostly on technical architectural governance.

## An Organisational Architecture Group
Just like a regular government, if we're going to set rules and standards, we need a central body to discuss, decide and approve these things.
This is where an Organisational Architecture Group (OAG) comes in *(Note: Other names for this group can be used - you have my poermission!)*.

### Purpose
The OAG is a governing committee responsible for coordinating technical and enterprise architecture.

It is responsible for agreeing and setting standards and frameworks around:

- Architecture storage and dissemination
- Minimum standards of architectural design
- Architecture change control
- Enterprise architectural goals and constraints, this includes:
   - Organisation wide Quality Attributes, metrics, and significant requirements
   - Evidence based analytics for goals and constraints
- Maintenance of organisational structure, including:
   - Reporting lines
   - Information flows
   - Application dependencies between areas of business (both internal and external)
- Architecture training and certification

The group also provides services around:
- Architecture design review
- Strategic technology planning
- Transformation planning
- Creating architecture artefact templates

### What it doesn't do
The group **IS NOT** responsible for individual architectural designs within the areas of business. That is the responsibility of the respective Solutiuon Architect or Tech Lead for that business area.

It is expected that Solution Architects working on a product that hasn't external dependencies will work with the architects in the dependent teams to ensure a consistent design within the bounds of the governance framework established.

This would probably include a design review from the OAG. Note that the OAG just reviews the design, it doesn't create it.

The group simply sets standards and requirements that must be followed and provides consultancy services to the rest of the business.

### Roles and Composition
The number of roles involved with the group is very much dependent on the organisation.

It may be that you want a architect present from each area of your business, to provide a diverse range of input to the group, however be careful here. Too many people in this group will cause issues around decision making and arranging times to convene. The group will thus become less effective.

As a minimum there should be:
|Role|Responsibility|
|--|--|
|Chief Architect|Facilitates group meetings, holds responsibility for maintaining agreed standards, frameworks and architectural storage control, casts deciding votes, champions new technology strategies|
|Business Architect|Responsible for maintaining organisation structure and architecting process flows. Champions governance strategies and change control methods. Liaises with the other groups to ensure organisation structure and processes are well designed and enable efficient product delivery|
|Solution Architect(s)|Responsible for the architecture of applications within the scope of the group. They must understand the needs and demands of each application within the various areas of the business|
|Security representative|Responsible for application and organisation security concerns and ensuring the security of data within the organisation|
|Product representative|Responsible for the product portfolio of the organisation and ensures that architectural Quality Attributes are aligned to business key results and outcomes|

These roles represent the cross section of activities related to product delivery in the organisation.

The number of Solution Architect(s) is variable based on need, however there should be at least one representing the technical architecture of the product systems.

An important part of such a group is to establish training standards in architecture within the organisation. This includes assessing the training standard of the memeber of the group.

A training assessment framework can be found on the [TOGAF website](https://pubs.opengroup.org/architecture/togaf9-doc/arch/chap46.html) which can be usefully adapted to your specific need.

The assessment framework is great tool to identify skill gaps in your core architecture team. This should not looked at as a form of humilation or punishment, but as identifying areas to provide training around.

## Initiation
Once you've decided on your group members and assessed that they have to skills necessary for the group, you need to organise the first meeting.

The following topics should be dealt with during the first few meetings of the group:
- Introduce everyone and explain the purpose of the group
- Define the scope of the group within the organisation. This simply means defining what areas of the business the group sets architectural governance for.
- Try to determine how often the group will meet and under what circumstances it should convened on demand.
- Agree on an Architecture Repository that will act as a single source of truth for architectural governance. This can be within an existing organisational governance repository if one exists.
   - Consider the need for documents to be reviewed and change to be controlled within the repository.
- Define the context of the business within scope of the group and define where the group sits within the wider organisation. This should include:
   - Various business units
   - Architecture stakeholders
   - Third party interactions
- Agree a template architectural framework to use (e.g. TOGAF ADM, EA6 etc).
   - Agree a model for architectural governance. For example, organisations seeking an agile culture should consider using a light-weight, federated model of governance.
- Create a glossary of business terms to form a unified language.
- Define governance change control procedures and record keeping. Ensure this is well documented within the architecture repository.
- Define the artefacts required as part of architecture design. Examples include, Solution Architecture Document, Decision Records, Dependency maps, Context diagrams, Flow diagrams etc.
   - Ensure you agree on there particular use cases
   - Create templates to use and example of their use.
- Define the technical strategy and goals for the organisation based on business objectives and outcomes.
- Develop a hierarchy of Quality Attributes, Architecturally Significant Requirements and Constraints at the top level of the organisation. This will ultimately filter down to the teams below and be embelished upon by the Solution Architects and Product Owners as necessary.
   - Ensure that should attributes and requirements are measurable and ideally evidence driven.
- Assess the current architectural maturity of the organisation. Identify gaps and work to fill them in.
- Agree on and organise a training program for architecture. Identify gaps in current knowledge and work to fill them in.

The group should continue to evolve its governance and processes over time. It should continually assess the organisation against its maturity model and work to wnsure any gaps continue to be filled. It should also reassess its technical strategy and goals on a regular basis to ensure it stays aligned with business gaols.

## Further reading
Most of this post is based on personal experience and the contains principles influenced from the [TOGAF 9.2 standard](https://pubs.opengroup.org/architecture/togaf9-doc/arch/).
If you've got time and need to understand Enterprise Architecture in depth then feel free to give it a read.

As good and useful as the information is, it really does act as a wonderful cure to insomnia.

There are also a number of other standards that can be considered in this field.
[Wikipedia](https://en.wikipedia.org/wiki/Enterprise_architecture_framework) also has a nice article covering EA standards and frameworks.
