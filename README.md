# WeekPlanner UI

This project contains an HTML page designed for submitting weekly reports through a web interface.

## Features

1. **Navbar** - The navigation bar includes links to various sections, with a distinct style for the active and hover states.
2. **Date Selection** - Users can select a start and end date for the report period. Input validation ensures only valid dates are accepted.
3. **Weekly Report Text Area** - A text area where users can type in their weekly report. An error message appears if the text area is left empty.
4. **File Attachment Section** - Users can attach files to their report. The section displays file details and shows a warning if attachment limits are exceeded.
5. **Submit Button** - A violet button that submits the form. It includes animations for hover and click states, and becomes inactive if required fields are not filled.

## Installation

1. Clone the repository.
2. Include the CSS and JS files in the appropriate folders as referenced in the HTML.

## Usage

1. Open the HTML file in a browser.
2. Fill out the form, attach files, and submit the report.
3. If any required fields are incomplete, error messages will display.

## HTML Structure Overview

The HTML structure includes the following main sections:
- **Header**: Contains the navbar with navigation links.
- **Form**: Includes fields for date selection, weekly report, and file attachment.
- **Footer**: Displays the copyright notice.

## Requirements

- HTML5-compliant browser
- CSS styling linked from `../css/style.css`
- Javascript: `index.js` for interactive elements

## Styling

The styles for this UI are located in `style.css` and include various hover and focus states for elements like the navbar, form fields, and buttons.

---

Enjoy using the WeekPlanner UI to organize your weekly reports!
