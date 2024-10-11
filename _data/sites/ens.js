module.exports = {
  name: "Ens", // optional, falls back to object key
  description: "Ens paris sacly site preprod",
  options: {
    runs: 1,
    frequency: 1, // (in minutes)
  },
  urls: [
    "https://ens-paris-saclay-preprod.ci.itdev.fr/",
    "https://ens-paris-saclay-preprod.ci.itdev.fr/empty-page",
  ]
};
