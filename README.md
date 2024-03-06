# Diabolocom Test Task

## Vue Application

### Installing dependencies

1. Pull the repository:
   - with SSH: `git clone https://github.com/mrWD/diabolocom-test-task-temp.git`
   - with HTTPS: `git clone https://github.com/mrWD/diabolocom-test-task-temp.git`
2. Run `npm ci` from the root folder.

### Running the application

1. Run `npm run dev` from the root folder.
2. Open `http://localhost:5173` in your browser.

### Running the tests

1. Run `npm run test` from the root folder.

### Building the application and use it as a web components

1. Run `npm run build` from the root folder.
2. Import `dist/diabolocom-web-components.umd.cjs` into your project and use it as a web component.

## Web Components integration

### Using the web components

1. Add `<script src="dist/diabolocom-web-components.umd.cjs"></script>` to your HTML file.

### Available web components

1. `<locale-picker-widget>` for the locale picker widget
2. `<counter-widget>` for the counter. Attributes:
   - `namespace`: string - the namespace of the counter's state
3. `<metrics-widget>` for the metrics widget. Attributes:
   - `namespace`: string - the namespace of the counter's state
4. `<reset-widget>` for the reset widget. Attributes:
   - `namespace`: string - the namespace of the counter's state

### Example of usage

You can find an example of usage in the `web-components-integration/index.html` file.
