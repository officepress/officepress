# OfficePress

A suite of self hosted office solutions

## File Structure

This suite is broken down into 4 layers.

### Infrastructure Systems (7)

Cloud systems are stateless services that usually manages 3rd party 
APIs and offers system level support via APIs primarily to apps WE 
develop. Integrating apps need API tokens for direct access 
(2-legged OAuth 2).

 - `infra/geo` - GEO tools
 - `infra/logs` - System Log Management
 - `infra/auth` - Auth and Account Information
 - `infra/messages` - Message Transfer Protocol
 - `infra/products` - Product Information Cache
 - `infra/profiles` - Profile Information Cach
 - `infra/deploy` - AWS Lambda Deployer

### Office Apps (5)

The following services are business process related.

 - `office/tables` - spreadsheets that convert directly to PostgreSQL
 - `office/drive` - local hosted files or connect to a CDN
 - `office/forms` - Form Builder and Response Gathering
 - `office/shorts` - URL Shortener Links
 - `office/sign` - URL Shortener Links

### Operation Apps (8)

The following services are specific business process related.

 - `operations/accounting` - Accounting Operations Tool
 - `operations/approvals` - Approval Workflow Platform
 - `operations/clients` - Customer Relation Management
 - `operations/content` - Content Management System
 - `operations/marketing` - Digital Marketing Analytics
 - `operations/resourcing` - Human Resource Management
 - `operations/support` - Support Ticket Tracker
 - `operations/vendors` - Vendor Management Systemr

### Commerce Apps (4)

The following services are commerce operations related.

 - `commerce/cart` - Cart and Checkout
 - `commerce/inventory` - Inventory Management System
 - `commerce/offers` - Product Information Management
 - `commerce/orders` - Order Processing System

## Database Strategy

Each service and app need to treat each other as strangers. Similar to 
how we treat third-party APIs like Facebook, Google, etc. Since we copy 
their user data into our app database, we are essentially duplicating 
data across the net. The following pros/cons have been considered.

 - Duplicate data making the entire architecture more expensive
   - On the other hand, if a data dependent service fails, will cause 
     depending apps to fail as well.
   - Makes each app and service separately saleable. Like if another 
     company wants to buy our underlying tech, but not all of it.
   - Makes app more flexible to switch out parts where available
   - Removes long term separate dev team dependency for their app to 
     work all the time. For example if Facebook fails, it's not the end 
     of the world.
 - Syncing data when data changes. 
   - Refer to strategies if Facebook/Google data changes... We would 
     basically have to provision cases like that as well.
   - We can sync changes using webhooks and event managers
   - We can sync changes using `logs` + webhooks
   - For systems that recently recovered, can rely on `logs` service 
     or call each service to resync up.
