const { readFileSync } = require("fs");
const path = require("path");

const configuration = {
    types: {
        repository: "./types",
        files: ["Bike", "KindOfBike", "PointOfSale", "Rent"]
    },
    queries: {
        repository: "./",
        files: ["Query"]
    },
    mutations: {
        repository: "./",
        files: ["Mutation"]
    }
};

// Fonction pour lire des fichiers de manière synchrone :
function read(type) {
    const { repository, files } = configuration[type];
    return files.map(file => readFileSync(path.join(__dirname, repository, `${file}.graphql`))).join("\n");
}

// Les schémas/types utilisés dans l'API GraphQL :
const types = read("types");
const queries = read("queries");
const mutations = read("mutations");

// Le schéma GraphQL est construit en combinant les fichiers lus précédemment.
const typeDefs = `#graphql
    ${types}
    ${queries}
    ${mutations}
`;

module.exports = typeDefs;
