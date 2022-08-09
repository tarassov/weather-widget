declare const geoApi: {
    getCityList: (cityName: string, limit?: number | undefined) => Promise<TCity[]>;
};
export default geoApi;
