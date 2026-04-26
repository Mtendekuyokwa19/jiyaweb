# Data Deletion Page Design

**Date:** 2026-04-26

## Overview
Add a data deletion request page to comply with Google Play policy, allowing users to request either data export or account deletion.

## Page Location
- `/app/data-deletion/page.tsx` (new route)

## UI Layout
- Clean, centered form matching existing privacy/terms page style
- Two radio button options:
  1. **Export my data** - Download a copy of profile data (name, email, phone)
  2. **Delete my account** - Permanently delete account and all associated data

- Form fields:
  - Email address (required - to verify identity)
  - Reason (optional text area)
  - Submit button

## Form Submission
- Form submits to API endpoint `/api/data-deletion-request`
- Endpoint sends email to `mtendekuyokwa19@gmail.com` with:
  - Request type (export/delete)
  - User email
  - Timestamp

## Links
1. **Footer** - Add "Data Deletion" link alongside Privacy Policy & Terms
2. **Navbar** - Add link in navigation menu

## Implementation Notes
- Use existing UI components and styling conventions
- Form validation: email required, valid format
- Show success message after submission