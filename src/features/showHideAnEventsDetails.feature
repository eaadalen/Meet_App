Feature: Show/Hide Event Details

 Scenario: Event details are collapsed by default
  Given the user has opened the app
  When the user receives the list of events
  Then all events will be collapsed by default

 Scenario: User can expand an event to see its details
  Given the list of events has been loaded
  When the user clicks on “Show details” button for an event
  Then the event element will be expanded to show the event details

 Scenario: User can collapse an event to hide its details
  Given the event details are currently expanded
  When the user clicks on “Hide details” button for an event
  Then the event element will be collapsed to hide the event details