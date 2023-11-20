This app is designed to provide users with a list of events that they can filter depending on different criteria, such as city and event size. 

User stories and Gherkin syntax for this app are below:

User Stories

As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.

As a user,
I should be able to show/hide event details
So that I can get more information about each event

As a user,
I should be able to specify the number of events that the search returns
So that I can get a more manageable list of events to consider

As a user,
I should be able to use the app when offline
So that I can still connect with others even if I don’t have internet connection

As a user,
I should be able to add an app shortcut to my home screen
So that I can navigate to the app more quickly and efficiently

As a user,
I should be able to display charts visualizing event details
So that I can obtain detailed analytics about events to help me better decide which event to go to



Gherkin Syntax

Scenario: User can filter events by city
Given the list of events has been loaded
When the user enters city name into “filter by city” text box
Then the list of events will be filtered to only the events within a given radius of the user-specified city

Scenario: User can expand an event to see its details
Given the list of events has been loaded
When user clicks on “Show details” button for an event
Then the event element will be expanded to show the event details

Scenario: User can specify number of events returned as search results
Given the list of events has been loaded
When the user chooses an option from “number of events” dropdown
Then the number of events returned in the search results will be decreased to the user-specified number

Scenario: User wants to use the app when offline
Given the list of events has been loaded AND the user does not have internet connection
When the user opens the app
Then the app will function normally as if the user had internet connection

Scenario: User wants to add a shortcut to the app to their home screen
Given the user does not currently have a shortcut added
When the user adds a shortcut to the app and clicks on it
Then the app will launch normally

Scenario: User wants more detailed information/analytics about each event
Given the list of events has been loaded
When the user clicks on the event details
Then various charts visualizing the event details will pop up
