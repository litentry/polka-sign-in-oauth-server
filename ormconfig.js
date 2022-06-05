const extension = process.argv[1].split(".").pop();

const config = [
  {
    name: "default",
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    timezone: "Z",
    logging: ["query", "error"],
    entities:
      extension === "js" ? ["lib/entities/**/*.js"] : ["src/entities/**/*.ts"],
    cli: {
      entitiesDir: "entities",
    },
  },
];

module.exports = config;
