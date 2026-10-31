# oneFOUR IT Services — Internship Landing Page

A responsive HTML, CSS and JavaScript landing page using the oneFOUR logo and an orange / black / white palette.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a browser, or use the VS Code Live Server extension.

## Add your Google Forms links
1. Open `js/script.js`.
2. Find the `internships` array near the top.
3. Replace `ADD_GOOGLE_FORM_URL_HERE` with the relevant Google Form URL for each internship.
4. Save and refresh the page.

Each internship can have its own Google Form, or several internships can share one form. If using one form, add a required question asking which internship the student is applying for.

## Edit internship details
In the same `internships` array, edit:
- `title`
- `category`
- `duration`
- `mode`
- `level`
- `skills`
- `description`
- `applyUrl`

Add a new object to add another internship. Remove an object to remove a listing.

## Google Forms setup
Create your form in Google Forms and add fields such as name, email, phone, college, education/year, internship applied for, and a File upload question for the CV. Configure the form to collect responses in Google Sheets. Turn on new response email notifications in the form's Responses settings / notification options.

Google Forms file upload generally requires applicants to sign in to a Google account. Check the form's sharing and file-upload settings before publishing.

## Before publishing
- Replace every placeholder Google Form URL.
- Verify the internship descriptions, durations, eligibility and work modes.
- Test every Apply button on desktop and mobile.
- Publish the site using a static host such as GitHub Pages, Netlify or Vercel.
