const path = require("path");
const { initialize, constants } = require("@asymmetrik/node-fhir-server-core");
const { VERSIONS } = constants;

const port = 3000;
const server = initialize({
  server: {
    port: port,
  },
  logging: {
    level: "debug",
  },
  profiles: {
    patient: {
      service: path.resolve("./src/patient.service"),
      versions: [VERSIONS["4_0_0"]],
    },
  },
});

server.listen(() => {
  console.log(`Server listening on ${port}`);
});
