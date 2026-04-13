# Currency Converter

A simple React app built with Vite that converts one currency into two other currencies at the same time.

## What this project does

- Lets the user enter an amount and choose a currency to convert from.
- Converts that amount into two selected target currencies.
- Uses a free currency API to load exchange rates and currency names.
- Renders a clean UI with input boxes and dropdown selectors.

## Key React concepts used

- `useState`: Stores values that change over time, such as the amount, selected currencies, and conversion results.
- `useEffect`: Loads currency data from the API when the selected base currency changes.
- `useCallback`: Wraps the convert function to avoid recreating it on every render unless its inputs change.
- `useId`: Creates a stable HTML id for form inputs inside the `InputBox` component.
- Custom hook `useCurrencyInfo`: Fetches currency rates and currency labels, and keeps the data organized for the app.

## Main files

- `src/App.jsx`
  - The main app component.
  - Holds state for amount, source currency, two destination currencies, and converted output.
  - Uses `useCurrencyInfo` to fetch exchange rates.
  - Handles the form submit and swap button.

- `src/components/InputBox.jsx`
  - A reusable input field component.
  - Displays an amount input and a currency dropdown.
  - Supports disabling the amount input for result fields.

- `src/hooks/useCurrencyInfo.js`
  - Custom hook that fetches exchange rates from an API.
  - Returns a rate map and a label map for available currencies.

## How conversion works

1. The app loads currency data for the selected "from" currency.
2. The user enters an amount and chooses target currencies.
3. On submit, `convert()` multiplies the amount by each target currency rate.
4. Results are shown in the two output `InputBox` components.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open the shown local address in your browser.

## Notes

- The app uses Tailwind CSS for styling.
- The currency API is loaded from `cdn.jsdelivr.net`.
- The swap button switches the source and target currencies quickly.
