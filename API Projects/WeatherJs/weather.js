class Weather {
    constructor(city, state){
        this.apiKey = 'api key goes here';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`url goes here ${'the api key'}`);

        const responseData = await response.json();

        return responseData.current_observation;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}