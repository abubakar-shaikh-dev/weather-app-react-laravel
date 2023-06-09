# Weather App

![Weather App](weather-app-screenshot.png)

Welcome to the Weather App repository! This project is a weather application built with React (front-end) and Laravel (back-end). The React application makes a GET request to the Laravel back-end, which fetches data from the OpenWeather API. Axios is used for data fetching in both the front-end and back-end.

## Installation

To get started with the Weather App, follow the steps below:

### Cloning the Repository

```shell
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### Front-end Setup

1. Navigate to the `frontend` directory:

   ```shell
   cd frontend
   ```

2. Install the required dependencies:

   ```shell
   npm install
   ```

3. Set the backend API URL as an environment variable by creating a `.env` file in the `frontend` directory. Add the following line to the `.env` file:

   ```shell
   VITE_API_URL=<backend-api-url>
   ```

   Replace `<backend-api-url>` with the URL of your Laravel back-end API.

   **Note:** It's important to create an account on OpenWeather and obtain an API key. The API key is necessary for the application to fetch weather data successfully.

4. Run the development server:

   ```shell
   npm run dev
   ```

   The React front-end will be served on [http://localhost:3000](http://localhost:3000).

### Back-end Setup

1. Navigate to the `backend` directory:

   ```shell
   cd backend
   ```

2. Install the required dependencies:

   ```shell
   composer install
   ```

3. Create a `.env` file in the `backend` directory and add the following lines:

   ```plaintext
   APP_NAME=Laravel
   APP_ENV=local
   APP_KEY=base64:Oop9WxSSYNcMOop4/WaRaJG3VSP94RLrTxnZSv+5lgA=
   APP_DEBUG=true
   APP_URL=http://localhost
   OPENWEATHER_API_KEY=<openweather-api-key>
   ```

   Replace `<openweather-api-key>` with the API key obtained from OpenWeather after creating an account.

4. Generate an application key:

   ```shell
   php artisan key:generate
   ```

5. Run the Laravel development server:

   ```shell
   php artisan serve
   ```

   The Laravel back-end will be served on [http://localhost:8000](http://localhost:8000).

## Usage

Once you have completed the installation steps, you can access the Weather App by opening [http://localhost:3000](http://localhost:3000) in your browser. The application will display the current weather information for a specified location.

Feel free to explore the codebase and customize the application to suit your needs. If you encounter any issues or have any questions, please don't hesitate to reach out.

Happy coding!
