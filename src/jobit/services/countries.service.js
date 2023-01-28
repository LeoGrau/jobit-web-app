class CountriesService {
  getAllCountries() {
    return fetch("../../../src/assets/jsons/countries.json").then((res) =>
      res.json()
    );
  }
}

export default new CountriesService();
