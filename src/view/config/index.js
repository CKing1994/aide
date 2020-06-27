
const { default: person } = require("./person");
const { default: bblist } = require("./bblist");

const config = {
    ...person,
    ...bblist
}

export default config;