# USER STORIES

## All Users

## Logged-in Users

## Not Logged in Users

# SCREEN MOCKUPS

# IMPLEMENTATION REQUIREMENTS
Review engineering standards at https://gitlab.rivergon.deltazigma.com/software-engineering-standards/wiki/wikis/home

## Angular
1.  The components must be loaded dynamically, lazily and only when needed
1.  Re-use existing SmartAdmin components, widgets as much as possible
1.  Use Angular 4 as much as possible

### Authentication and Authorization
All features must be protected by proper authentication/authorization with the following option:
1. If the users is allowed to use the feature/function, active the feature and function
1. If the user is not allowed to use the feature/function, the feature and function can be either hidden or deactivated and shown as "grayed out"
  1.  It should be easy to choose "hidden" or "grayed out"
  
#### Reference Material
1.  https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9
1.  https://gitlab.rivergon.deltazigma.com/oneglobalhost/webui/request-for-quote/issues/3

### SmartAdmin Angular 4 Full Application Template
1.  The UI is built based on the SmartAdmin Angular 4 Full Application Template.
1.  Reuse SmartAdmin components, directives, html, js, css, etc. as much as possible and only write custom stuff as necessary and appropriate
1.  Use the Bootstrap 3 grid layout. Do NOT use smart-form grid

Use the link below to see a live demo of SmartAdmin

https://wrapbootstrap.com/theme/smartadmin-responsive-webapp-WB0573SK0

### Name of Component 1

### Name of Component 2

## WebUi Services
These Angular services are used by Angular components and executed in the browser

### SampleWebUiService
The service SampleWebUiService provides the following apis to support the requirements of this issue:

1.  getAbc 
  1.  Input parameters: <describe>
  1.  Returns: <describe json>
  
There is no need to hook-up the back-end. The implementation is a mocked up version that uses a json file as its data source

# Request for Quote Process
Please read: https://gitlab.rivergon.deltazigma.com/oneglobalhost/webui/request-for-quote/wikis/home
