declare const weatherApi: {
    getByCity: (city: TCity) => Promise<TWeatherData>;
    getByCityMocked: (city: TCity) => Promise<TWeatherData>;
    getImageLink: (code: string) => string;
};
export default weatherApi;
