const consolePods: Fig.Generator = {
  // script: "kubectl get pods -n parasut-console --output=name",
  script: ["kubectl", "get", "pods", "-n", "parasut-console", "--output=name"],
  postProcess: (output) => {
    console.log(output);
    return output.split("\n").map((pod) => {
      const regexPod = /pod\//gi;
      const name = pod.replace(regexPod, "");

      const regexTrim = /-console.*/gi;
      const displayName = name.replace(regexTrim, "");

      return {
        name: name,
        displayName: displayName,
        description: "Pod",
        // insertValue: `\b\bconsole ${name}\n`
        insertValue: `\b\bkubectl exec ${name} -it -n parasut-console -- sh\n`,
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "c",
  args: {
    name: "Pod",
    description: "The pod you want to connect",
    generators: consolePods,
  },
};

export default completionSpec;
