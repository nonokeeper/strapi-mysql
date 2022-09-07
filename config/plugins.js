module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_EtObraYAb3MuYM04cwjrBJiW19Hj/2TZY2fqCVu",
        apiToken: "FPlPSSauMRHh5EueQpPQir67",
        appFilter: "strapi",
        teamFilter: "strapi-team",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });