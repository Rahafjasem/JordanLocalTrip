# Jordan Local Trip

A multi-page static website for a travel and tour business in Jordan. It presents the company's tour packages, services and contact details, built with plain HTML, CSS and a little JavaScript.

## Features

- **Home page** with a hero section and cards for the three tour packages (prices, duration, and a link to each tour's details).
- **Tour pages** for each package, with an expandable day-by-day itinerary, an overview, and "Price includes / Price excludes" sections:
  - 1 day: Amman, Umm Qais, Ajloun Castle and Jerash
  - 2 days: Petra, Wadi Rum and the Dead Sea
  - 3 days: Amman, Dead Sea, Aqaba, Wadi Rum and Petra
- **Our Services** page listing the services offered (airport transfers, private transportation, customized tours, local guides, and more).
- **Contact Us** page with phone, email and location.
- **Sign In** page with client-side form validation (demo only, no real authentication).
- Consistent navigation bar across all pages.

## Technologies

- HTML5
- CSS3 (Flexbox)
- JavaScript (accordion itinerary and sign-in form validation)

## Project Structure

```
.
├── Home.html
├── Services.html
├── contact.html
├── signin.html
├── 1day.html
├── 2days.html
├── 3days.html
├── style.css
└── img/
```

## How to Run

1. Download or clone the repository.
2. Keep all files and the `img` folder together in the same directory.
3. Open `Home.html` in any web browser.

No build step or server is required.

## Notes

- The sign-in page is a front-end demo only. The credentials are hard-coded in the script and there is no backend.
- This is a university project for learning web development basics.
