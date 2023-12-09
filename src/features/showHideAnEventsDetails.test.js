import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('Event details are collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        given('the user has opened the app', () => {
          AppComponent = render(<App />);
        });
        when('the user receives the list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems =
                within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
          }
        );
        then('all events will be collapsed by default', () => {
          const EventDOM = AppComponent.container.firstChild;
          const details = EventDOM.querySelector('.details');
          expect(details).not.toBeInTheDocument();
        });
      });
    test('User can expand an event to see its details', ({given,when,then,}) => {
        let AppComponent;
        given('the list of events has been loaded', async () => {
          AppComponent = render(<App/>);
          const AppDOM = AppComponent.container.firstChild;
          await waitFor(() => {
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList[0]).toBeTruthy();
          });
        });
        when("the user clicks on “Show details” button for an event", async () => {
          const button = AppComponent.queryAllByText('Show Details')[0];
          await userEvent.click(button);
        });
        then('the event element will be expanded to show the event details', () => {
          const EventDOM = AppComponent.container.firstChild;
          const details = EventDOM.querySelector('.details-btn');
          expect(details).toBeInTheDocument();
        });
      });
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let AppComponent;
        let button;
        given('the event details are currently expanded', async () => {
            AppComponent = render(<App/>);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
            button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details-btn');
            expect(details).toBeInTheDocument();
        });

        when('the user clicks on “Hide details” button for an event', async () => {
            await userEvent.click(button);
        });

        then('the event element will be collapsed to hide the event details', () => {
            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();
        });
    });
});