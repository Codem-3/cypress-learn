# Cypress Learning Repository

This repository serves as a comprehensive learning resource for Cypress, featuring examples of various testing scenarios and best practices.

## Repository Structure

```
cypress/
├── e2e/                    # Test files
│   ├── basic-examples.cy.js  # Basic Cypress features
│   └── ...                  # More example files
├── fixtures/               # Test data
├── support/                # Support files
│   ├── commands.js         # Custom commands
│   └── e2e.js             # Support file
└── downloads/             # Downloaded files
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Open Cypress Test Runner:

   ```bash
   npm run cypress:open
   ```

3. Run tests in headless mode:

   ```bash
   npm run cypress:run
   ```

## Features Demonstrated

- Basic element selection and interaction
- Form handling
- API testing
- File handling
- Iframe handling
- Custom commands
- Aliases
- Timeouts and retries
- Assertions and validations

## Custom Commands

The repository includes several custom commands:

- `cy.login(username, password)`: Handles login functionality
- `cy.have.validTableData`: Validates table structure
- `cy.waitForElement(selector)`: Waits for element visibility
- `cy.clearAndType(text)`: Clears and types in input fields
- `cy.elementExists(selector)`: Checks if element exists

## Best Practices

1. Use descriptive test names
2. Group related tests using `describe` blocks
3. Use `beforeEach` for common setup
4. Implement custom commands for repetitive tasks
5. Use aliases for complex selectors
6. Implement proper error handling
7. Use environment variables for configuration
