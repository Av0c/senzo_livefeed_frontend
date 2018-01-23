# senzoit-frontend
User client for Senzoit office space utilization solution.
Base on futurice/senzoit-client project

# Installing
1. Download NodeJS.
2. Clone code from this repository
3. Run `npm install` to install dependencies
4. Run `npm start` to start local development server
5. Access localhost:1337 to connect to the development server

# Styleguide

Some general rules to follow when styling the application.

### Concept:
The style we are following is called [**Material Design**](https://material.io/), some of the main principles are:
- **Flat design**:
    - No "3d effect" (bevel, edge) on items.
    - Thin or no border, with small border radius.
    - Small box shadow, with small blur amount and offset.
    - Spacing (margin, padding) should be big enough to avoid clumping, provide a clear visual.
- **Light, elegant color**:
    - Do not use color with too much saturation, opt for pastel colors instead.
    - Primary and accent items should have contrast colors.
- **Minimal information with maximum usability**:
    - All texts should be clear, accurate and concise.
    - UI elements should be straight-forward and intuitive, avoid having to give extra explanations.
- **An overally "polite" user-experience**:
    - First-time users should not have to spend much effort learning the interface.
    - Returning users can always apply the same logics for all our applications.

**Material Design** gives both the impressions of user-friendliness and professionalism. It's the latest trend in UI design for web application that should corporates our application well into the market.

### Color:
 - Main theme is **green**, **grey** and **white**
    - Green: ![#7ec443](https://placehold.it/15/7ec443/000000?text=+) `#7ec443` - `rgba(126, 196, 67, 1)`
    - Gray: ![#616161](https://placehold.it/15/616161/000000?text=+) `#616161` - `rgba(97, 97, 97, 1)`
    - *Use `rgba(red, green, blue, alpha)` format for darker/lighter shades as needed.*
 - Always make sure text and background have different contrast and are clearly legible.
 - If additional colors are needed, consult this [Material Color Palletes](https://material.io/guidelines/style/color.html#color-color-palette) and [Color Picker/Changer](https://www.w3schools.com/colors/colors_picker.asp)

### Icon:
 - Icons should always be used to improve visual understandability.
 - Avoid making icons too big compared to neighboring texts.
 - To use icons, use the `<i className="material-icons">icon_name</i>` tag, where `icon_name` should be replaced with the suitable icon from the [icon library](https://material.io/icons/).
 - Examples:
   - `<i class="material-icons">face</i>` will render as ![face](https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_face_black_24px.svg)
   - `<i class="material-icons">location_city</i>` will render as ![face](https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_location_city_black_24px.svg)

### Font:
 - Font usage should be as consistent as possible, avoid using more than 2 fonts.
 - The main font used is called **"Roboto"**, from the *san-serif* family .
 - Font weight can be used to emphasize texts as needed.
 - When specifying `font-family`, always use a fallback font: `font-family: "Roboto", sans-serif`
