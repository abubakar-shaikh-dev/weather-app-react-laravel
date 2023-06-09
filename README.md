# Weather App - React and Laravel

Welcome to the Weather App repository! This project combines React for the frontend and Laravel for the backend. The React frontend makes a GET request to the Laravel backend, which fetches data from the OpenWeather API. This Markdown file will guide you through the installation steps and provide important information about setting up and using the project.

## Installation

To get started with the Weather App, please follow the steps below:

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/abubakar-shaikh-dev/weather-app-react-laravel.git
   ```

### Frontend (React)

2. Navigate to the `client` directory:
   ```
   cd weather-app-react-laravel/client
   ```

3. Install the required dependencies using npm:
   ```
   npm install
   ```

4. Create a `.env` file in the `client` directory and add the following configuration:
   ```dotenv
   VITE_API_URL=http://127.0.0.1:8000/api
   ```
   This configuration sets the API URL for the React frontend to communicate with the Laravel backend.

5. Build and run the development server:
   ```
   npm run dev
   ```

   The React frontend will be accessible at [http://localhost:5173](http://localhost:5173).

### Backend (Laravel)

6. Open a new terminal window and navigate to the `server` directory:
   ```
   cd weather-app-react-laravel/server
   ```

7. Install the required dependencies using composer:
   ```
   composer install
   ```

8. Create `.env` file:
   ```
   touch .env
   ```

9. Generate a unique application key:
   ```
   php artisan key:generate
   ```

10. Create an OpenWeather account and obtain an API key:

    - Visit the OpenWeather website: [https://openweathermap.org](https://openweathermap.org).
    - Click on the "Sign Up" button located at the top right corner of the page.
    - Fill in the required details and create your account.
    - After successfully creating the account, log in to the OpenWeather website.
    - Go to your account dashboard and locate the API keys section.
    - Generate a new API key by providing a name for your key and selecting the appropriate subscription plan.
    - Copy the generated API key.

11. Open the `.env` file in the `server` directory and update the following configurations:

    ```dotenv
    APP_NAME=Laravel
    APP_ENV=local
    APP_KEY=[Generated App Key]
    APP_DEBUG=true
    APP_URL=http://localhost:8000
    OPENWEATHER_API_KEY=[OpenWeather API Key]
    ```

    Replace `[Generated App Key]` with the application key generated in step 9 and `[OpenWeather API Key]` with the copied API key from step 10.

12. Run the database migrations:
    ```
    php artisan migrate
    ```

13. Start the Laravel development server:
    ```
    php artisan serve
    ```

    The Laravel backend will be running at [http://localhost:8000](http://localhost:8000).

## Usage

Once you have completed the installation and setup process, you can start using the Weather App. Follow the steps below to retrieve weather information:

1. Open your web browser and go to [http://localhost:5173](http://localhost:5173) to access the React frontend.

2. Enter the name of a city or location in the search bar and press Enter or click the "Search" button.

3. The Weather App will make a request

 to the backend, which will fetch data from the OpenWeather API and return the weather information for the specified location.

4. The weather details will be displayed on the screen, including the temperature, humidity, wind speed, and weather conditions.

   **Note:** Make sure you have a stable internet connection to retrieve accurate weather information.

That's it! You have completed the installation, setup, and usage process for the Weather App. If you encounter any issues or have further questions, please don't hesitate to reach out for assistance at [shaikhabubakar2380@gmail.com].

Enjoy using the Weather App and stay informed about the weather conditions in your desired locations!
