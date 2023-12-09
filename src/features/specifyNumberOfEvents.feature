Feature: Specify Number of Events

 Scenario: The default number of events shown is 32
  Given the user hasn't specified the number of events
  When the user sees the list of events
  Then the default number of events displayed will be 32

 Scenario: User can specify number of events returned as search results
  Given the list of events has been loaded
  When the user enters a value in the Number of Events dropdown
  Then the number of events returned in the search results will be adusted to match the user-specified number