# RESTaurants Client Application
### Or Wouldst Thou Like to Live Deliciously
=======================================================
NOTE: You are currently viewing the repo for the client-side application. Please visit the link below for detail on the API.

[Link to API Repo](https://github.com/agregthomas/restaurant-project)

=======================================================

## Technologies Used
* HTML
  - HTML5 DOM traversal/manipulation methods
  - Semantic elements in index.html
* CSS
  - SASS
  - Bootstrap
* JavaScript
  - jQuery Library
  - GA library (getFormFields!)
  - Handlebars
* Ruby
  - Rails
  - CSV standard library
  - RSpec
* PostgreSQL
=======================================================
## Planning
Planning began with a thorough review of the requirements for building a full-stack application using the prescribed SDK. These requirements were subsequently broken up into high-level categories with mid-level sub-categories:
* **Design**
  * [User Stories](../planning/user-stories.md)
  * [Wireframes](../planning/wireframes.jpg)
  * [Entity Relationship Diagram](../planning/erd.jpg)
* **API Development**
  * Resources and relationships (refer to the [ERD](../planning/erd.jpg) for more details)
  * Use Rails to generate resources, migrate the schema, and model/control/serialize the resources
  * Test using both CURL scripts and automated feature/unit tests
  * Implent user "ownership" of resources back-end authentication before certain commands
* **Front-End Design**
  - UX-minded design (e.g. convenient placement of buttons)
  - Conditional display of features based on ownership of returned resource (e.g. delete and update buttons)
  - Form locking/unlocking on button click

Building the modules followed a linear progression based on the categories above. The project began with four simple files:
* **index.html** = page source
* **app.js** = all event listeners for authentication AND game logic
* **config.js** = path to the dev and production URLs
* **store.js** = storage for temporary variables used in front-end calculations

Two directories were created: one for authentication modules and the other for resource modules. Each of the directories had the following modules:
* **api.js** = calls made to the API (e.g. GET, PATCH, DELETE)
* **events.js** = event handlers
* **ui.js** = page manipulation and front-end calculations (e.g. writing to the store variable)

Custom handling for serialized responses from the api were implemented as handlebars templates and called through the relevant handlers.

Last but not least, several style sheet files were created. Most of which have not been fully integrated!

=======================================================
## Remaining Items

### Stretch Goals
* Seed data from personal restaurant list
* Expose all resource fields to user (currently only two)
* Implement Favorites (many-to-many with Restaurants, one-to-many with Users)
* Implement Reviews (many-to-many with Restaurants, one-to-many with Users)
* Search restaurants by query on different fields (use .keyup() listener for dynamic sorting)
* Use lookup tables to govern Category, Neighborhood, etc. and have those values populate dropdown options on the front-end
* Gamify User Profile (e.g. 5 Reviews = Trusted User)
