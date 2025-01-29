const completionSpec: Fig.Spec = {
  name: "+",
  description: "Project shortcuts",
  additionalSuggestions: [
    {
      icon: "fig://icon?type=command",
      name: "Trinity server",
      priority: 100,
      insertValue:
        "\b\bcd ~/parasut/trinity/ && nvm use 8.16.0 && yarn run ember s\n",
      description: "Start trinity server",
    },
    {
      icon: "fig://icon?type=npm",
      name: "Trinity install deps",
      priority: 39,
      insertValue:
        "\b\bcd ~/parasut/trinity/ && nvm use 8.16.0 && yarn install\n",
      description: "Install trinity deps",
    },
    {
      icon: "fig://icon?type=command",
      name: "Client server",
      priority: 100,
      insertValue:
        "\b\bcd ~/parasut/client/ && nvm use 0.11 && ./node_modules/ember-cli/bin/ember serve\n",
      description: "Start client server",
    },
    {
      icon: "fig://icon?type=command",
      name: "Shared-logic server",
      priority: 100,
      insertValue:
        "\b\bcd ~/parasut/shared-logic/ && nvm use 8.16.0 && yarn run ember s -p 4217\n",
      description: "Start shared-logic server",
    },
    {
      icon: "fig://icon?type=npm",
      name: "Shared-logic install deps",
      priority: 19,
      insertValue:
        "\b\bcd ~/parasut/shared-logic/ && nvm use 8.16.0 && npm install\n",
      description: "Install shared-logic deps",
    },
    {
      icon: "fig://icon?type=command",
      name: "Shared-logic release",
      priority: 49,
      insertValue:
        "\b\bcd ~/parasut/shared-logic/ && nvm use 8.16.0 && yarn run ember release\n",
      description: "Release shared-logic",
    },
    {
      icon: "fig://icon?type=command",
      name: "Shared-logic minor release",
      priority: 49,
      insertValue:
        "\b\bcd ~/parasut/shared-logic/ && nvm use 8.16.0 && yarn run ember release -l --prerelease",
      description: "Minor Release shared-logic",
    },
  ],
};
export default completionSpec;
