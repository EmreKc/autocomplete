const completionSpec: Fig.Spec = {
  name: "dc",
  description: "Client deploys",
  additionalSuggestions: [
    {
      icon: "fig://icon?type=command",
      name: "Staging - Lists client deploys",
      insertValue:
        "\b\b\bPARASUT_CLIENT_STAGING_REDIS=redis://default:JKKoFgNzleJUDNo0athVG3F9k6Q6Yjyy@redis-10101.c6.eu-west-mz.1.ec2.cloud.redislabs.com:10101 ./node_modules/ember-cli/bin/ember deploy:list --environment staging\n",
      description: "Staging - Lists client deploys",
    },
    {
      icon: "fig://icon?type=command",
      name: "Staging - Deploys client",
      insertValue:
        "\b\b\bPARASUT_CLIENT_STAGING_REDIS=redis://default:JKKoFgNzleJUDNo0athVG3F9k6Q6Yjyy@redis-10101.c6.eu-west-mz.1.ec2.cloud.redislabs.com:10101 ./node_modules/ember-cli/bin/ember deploy --environment staging\n",
      description: "Staging - Deploys client",
    },
    {
      icon: "fig://icon?type=command",
      name: "Staging - Activates client deploy",
      insertValue:
        "\b\b\bPARASUT_CLIENT_STAGING_REDIS=redis://default:JKKoFgNzleJUDNo0athVG3F9k6Q6Yjyy@redis-10101.c6.eu-west-mz.1.ec2.cloud.redislabs.com:10101 ./node_modules/ember-cli/bin/ember deploy:activate --revision REVISION --environment staging",
      description: "Staging - Activates client deploy",
    },
    {
      icon: "fig://icon?type=command",
      name: "Production - Lists client deploys",
      insertValue:
        "\b\b\bPARASUT_CLIENT_PRODUCTION_REDIS=$(heroku config:get FRONTEND_REDIS_URL --app parasut-production) ./node_modules/ember-cli/bin/ember deploy:list --environment production\n",
      description: "Production - Lists client deploys",
    },
    {
      icon: "fig://icon?type=command",
      name: "Production - Deploys client",
      insertValue:
        "\b\b\bPARASUT_CLIENT_PRODUCTION_REDIS=$(heroku config:get FRONTEND_REDIS_URL --app parasut-production) ./node_modules/ember-cli/bin/ember deploy --environment production\n",
      description: "Production - Deploys client",
    },
    {
      icon: "fig://icon?type=command",
      name: "Production - Activates client",
      insertValue:
        "\b\b\bPARASUT_CLIENT_PRODUCTION_REDIS=$(heroku config:get FRONTEND_REDIS_URL --app parasut-production) ./node_modules/ember-cli/bin/ember deploy:activate --revision REVISION --environment production",
      description: "Production - Activates client",
    },
  ],
};
export default completionSpec;
