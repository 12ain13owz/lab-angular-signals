# Angular Signals & PrimeNG Lab

A comprehensive starter project designed to Angular Signals (v18+) integrated with PrimeNG and Tailwind CSS. This lab demonstrates how to build high-performance, reactive modern web applications with cleaner state management.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Features

This project is organized into dedicated labs, each focusing on a core pillar of modern Angular development:

### 1. Counters Lab (Signal Fundamentals)

- **Reactive State:** Managing data using `signal()`, `set()`, and `update()`.
- **Computed Power:** High-performance derived state using `computed()` for real-time calculations (e.g., Total Price).
- **Effect & Untracked:** Triggering side effects (Toasts) via `effect()` and utilizing `untracked()` to prevent unnecessary dependency tracking and infinite loops.

### 2. Form Management (Reactive Forms)

- **Typed Forms:** Implementing 100% Type Safe forms with `FormGroup<T>` and `FormControl<T>`.
- **Model Signals:** Utilizing the new `model()` API for seamless two-way binding between Parent and Child components.
- **toSignal (Live Preview):** Converting Form `valueChanges` into a Signal to create real-time data previews without manual `.subscribe()`.
- **Smart Patching:** Efficiently patching data into edit forms using RxJS Interop (`toObservable` + `take(1)`), ensuring a clean and memory-safe initialization.

### 3. DOM Access Lab (Signal-based ViewChild)

- **Modern ViewChild:** Moving away from `@ViewChild` to the signal-based `viewChild()` API for more predictable DOM access.
- **Lifecycle Handling:** Managing DOM interactions (e.g., Video controls, Input auto-focus) within `effect()` instead of traditional `ngAfterViewInit` hooks.

## Development server

```bash
# Navigate to the lab-angular-signals directory
cd ./lab-angular-signals

# Install dependencies (if not already done)
npm install

# Serve the application
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Using Docker

This project includes a Dockerfile for containerized deployment and testing.

#### Building the Docker image

```bash
# Navigate to the lab-angular-signals directory
cd ./lab-angular-signals

# Build the Docker image
docker build -t lab-angular-signals-example .
```

#### Running the Docker container

```bash
# Run the container
docker run -d -p 4200:80 --name lab-angular-signals lab-angular-signals-example
```

The application will be accessible at `http://localhost:4200`.

#### Stopping the container

```bash
docker stop lab-angular-signals
docker rm lab-angular-signals
```

## Docker Configuration

The included Dockerfile:

- Uses a multi-stage build process
- Stage 1: Builds the Angular application using Node.js
- Stage 2: Serves the built application using Nginx
- Includes custom Nginx configuration for proper Angular routing
- Exposes port 80 for the web server
- Maps to port 4200 when running the container

### Nginx Configuration

The Dockerfile includes a custom Nginx configuration that:

- Properly handles Angular's client-side routing with HTML5 pushState
- Configures the `try_files` directive to redirect all routes to index.html
- Ensures that deep-linking works correctly in the Angular application
- Sets up appropriate error page handling

This configuration is essential for Single Page Applications (SPAs) like Angular to work correctly when deployed with Nginx.

## Resources

- **Framework:** [Angular 21+](https://angular.dev/)
- **UI Components:** [PrimeNG](https://primeng.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** Angular Signals & RxJS Interop
