const completionSpec: Fig.Spec = {
  name: "dt",
  description: "Trinity deploys",
  additionalSuggestions: [
    {
      icon: "fig://icon?type=command",
      name: "Staging - Lists deploys",
      insertValue:
        "\b\bSTAGING_REDIS_URL=redis://default:JKKoFgNzleJUDNo0athVG3F9k6Q6Yjyy@redis-10101.c6.eu-west-mz.1.ec2.cloud.redislabs.com:10101 yarn run ember deploy:list staging\n",
      description: "Staging - Lists deploys",
    },
    {
      icon: "fig://icon?type=command",
      name: "Staging - Deploys",
      insertValue:
        "\b\bSTAGING_REDIS_URL=redis://default:JKKoFgNzleJUDNo0athVG3F9k6Q6Yjyy@redis-10101.c6.eu-west-mz.1.ec2.cloud.redislabs.com:10101 yarn run ember deploy staging\n",
      description: "Staging - Deploys",
    },
    {
      icon: "fig://icon?type=command",
      name: "Staging - Activates deploy",
      insertValue:
        "\b\bSTAGING_REDIS_URL=redis://default:JKKoFgNzleJUDNo0athVG3F9k6Q6Yjyy@redis-10101.c6.eu-west-mz.1.ec2.cloud.redislabs.com:10101 yarn run ember deploy:activate staging --revision=",
      description: "Staging - Activates deploy",
    },
    {
      icon: "fig://icon?type=command",
      name: "Production - Lists deploys",
      insertValue:
        "\b\bPRODUCTION_REDIS_URL=$(heroku config:get FRONTEND_REDIS_URL --app parasut-production) yarn run ember deploy:list production\n",
      description: "Production - Lists deploys",
    },
    {
      icon: "fig://icon?type=command",
      name: "Production - Deploy",
      insertValue:
        "\b\bPRODUCTION_REDIS_URL=$(heroku config:get FRONTEND_REDIS_URL --app parasut-production) yarn run ember deploy production\n",
      description: "Production - Deploy",
    },
    {
      icon: "fig://icon?type=command",
      name: "Production - Activate",
      insertValue:
        "\b\bPRODUCTION_REDIS_URL=$(heroku config:get FRONTEND_REDIS_URL --app parasut-production) yarn run ember deploy:activate production --revision=",
      description: "Production - Activate",
    },
  ],
};
export default completionSpec;
