# Carbon Map JS Web App

A web application designed to display carbon intensity data on a map. This project provides users with real-time information about carbon emissions and energy consumption, helping individuals and organizations make environmentally-conscious decisions.

## Features

- **Real-time Carbon Intensity Data**: View current carbon emissions levels across different regions.
- **Map Integration**: Visualize data on an interactive map using geographical data.
- **Data Filters**: Filter and explore carbon intensity data based on specific parameters.
- **Responsive Design**: Access the application on various devices with ease.

## Technologies Used

- **React.js**: JavaScript library for building the user interface.
- **Mapbox**: Map rendering and geospatial data.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Chart.js**: Display data in visual formats like bar charts and line graphs.
- **API Integration**: Fetches real-time carbon intensity data.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**
- **npm** or **yarn**

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sriram3159/Carbon-Map-JS-Web-App.git
    cd Carbon-Map-JS-Web-App
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

    or if you are using yarn:

    ```bash
    yarn install
    ```

3. Set up your environment variables (e.g., Mapbox access token). Create a `.env` file in the root of your project and add:

    ```bash
    REACT_APP_MAP_ACCESS_TOKEN=your_mapbox_token_here
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    or with yarn:

    ```bash
    yarn start
    ```

   This will open the application in your browser at `http://localhost:3000`.

## Environment Variables

- `REACT_APP_MAP_ACCESS_TOKEN`: Your Mapbox access token for rendering maps.

## Contributing

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature-name
    ```

3. Make your changes.
4. Commit your changes:

    ```bash
    git commit -am 'Add new feature'
    ```

5. Push to the branch:

    ```bash
    git push origin feature-name
    ```

6. Create a new Pull Request.

