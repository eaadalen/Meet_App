import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
    test('The default number of events shown is 32', ({ given, when, then }) => {
        let AppComponent;
        let eventList;
        given('the user hasn\'t specified the number of events', () => {
            AppComponent = render(<App/>);
        });
        when('the user sees the list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
        });
        then(/^the default number of events displayed will be (\d+)$/, (arg0) => {
            expect(eventList.length).toEqual(32);
        });
    });
    test('User can specify number of events returned as search results', ({ given, when, then }) => {
        let AppComponent;
        given('the list of events has been loaded', async () => {
            AppComponent = render(<App/>);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
              const eventList = within(AppDOM).queryAllByRole('listitem');
              expect(eventList[0]).toBeTruthy();
            });
        });
        when('the user enters a value in the Number of Events dropdown', async () => {
            const inputField = AppComponent.queryByTestId('numberOfEventsInput');
            await userEvent.type(inputField, '{backspace}{backspace}10');
        });
        then('the number of events returned in the search results will be adusted to match the user-specified number', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList.length).toEqual(10);
        });
    });
});