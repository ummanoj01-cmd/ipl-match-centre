# IPL Match Centre

A responsive IPL-themed match centre built for Activity 8 using semantic HTML,
CSS Flexbox and Grid, responsive media queries, and vanilla JavaScript.

## Run locally

Open `index.html` in a browser, or use VS Code Live Server.

## Features

- Responsive header with a keyboard-accessible mobile navigation menu
- IPL fixture cards with a team filter and grid/list view toggle
- Fan guidelines in a three-column desktop layout
- Visible focus states and semantic labels

## Evidence

Full-page desktop and mobile screenshots, the repository screenshot, and a
PDF containing the screenshots and repository URL are in the
[`evidence`](./evidence) folder.

## Activity 11 – IPL Ticket Booking

Activity 11 adds IPL ticket booking documentation and evidence for a React +
Supabase implementation.

### Features documented

- Supabase database setup using SQL.
- Matches and bookings database tables.
- React and Supabase integration.
- Fetching matches from Supabase.
- Displaying available seats.
- Real-time match updates.
- IPL ticket booking functionality.
- Successful booking confirmation.
- Database booking verification.

### Evidence details

- Supabase SQL execution: `setval = 6`.
- Six match records in the matches table.
- MI vs KKR booking successfully completed.
- One General ticket booked for ₹1,200.
- Database verification confirms booking ID 2 and 4,999 available seats.
- Evidence packet: [`Activity_11_Evidence/Activity11_Evidence_Packet.pdf`](./Activity_11_Evidence/Activity11_Evidence_Packet.pdf).

### Notes

- The Activity 11 React/Supabase source project files were not found in the
  local workspace or Downloads at the time this documentation/evidence was
  added, so they are not included in this commit.
- Supabase credentials were not committed to the repository. Use environment
  variables (for example `.env` excluded by `.gitignore`) for any project keys.