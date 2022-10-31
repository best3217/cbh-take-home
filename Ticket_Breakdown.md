# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Add the ability for the user add a 'custom_id' in an Agent in the Back-end:
    # Tasks: 
        - Add the 'custom_id' field in the Agent model as a string or varchar(255) (required or not based on the business logic).
        - Add the code to insert the field in the database on the "method" (name of the method) utilized by the endpoint in the AgentsController when we're creating / updating the Agent.
        - Modify the tests to check if the data it's being inserted / updated properly in the database.
    # Info:
        - Time: 2 hours
        - Effort: Low
# Add the ability for the user to add a 'custom_id' in an Agent in the Front-End:
    # Tasks:
        - Add the 'custom_id' input in the Agent form (required or not based on the business logic).
        - Send the 'custom_id' in the post / put request to the update agent endpoint.
        - Modify the tests to deal with the new input if it's necessary.
    # Info:
        - Time: 2 hours
        - Effort: Low
# Add the 'custom_id' in the Agent object of the 'getShiftsByFacility' method in the BE (probably):
    # Tasks:
        - Make sure we get the 'custom_id' from the database in the query for getting the Agents that worked in the facility.
        - After adding the field, modify the tests to verify if the property it's on the return object.
    # Info:
        - Time: 1 hour
        - Effort: Low
# Add the 'custom_id' in the 'generateReport' method in the BE / FE (it depends code):
    # Tasks:
        - Add test to make sure we're getting the 'custom_id' property in the agent object returned by the 'getShiftsByFacility' method.
    # Info:
        -  Time: 1 hour
        -  Effort: Low

# Observations:
    - I've added 1 hour as a "safe" estimation but they probably will be faster.
    - The effort Low could be any metric your guys use, eg: 1 to 5, 5 to 1, etc.
    - Everything in parentheses it's observations that I made because of my lack of knowledge about the project.
    - BE: Back-end.
    - FE: Front-end.

