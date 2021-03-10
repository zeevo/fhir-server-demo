const { resolveSchema } = require("@asymmetrik/node-fhir-server-core");

const Patient = resolveSchema("4_0_0", "Patient");
const Bundle = resolveSchema("4_0_0", "Bundle");

module.exports = {
  async search() {
    return new Bundle({
      resourceType: "Patient",
      page: 1,
      pageSize: 1,
      fhirVersion: "4_0_0",
      total: 1,
      entry: [
        {
          resource: new Patient({
            id: "foobar",
            name: [
              {
                family: "smith",
                given: ["john"],
              },
            ],
          }),
        },
      ],
    });
  },
};
