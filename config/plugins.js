module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_strapi-mysql",
        apiToken: "token-mysql",
        appFilter: "strapi",
        teamFilter: "strapi-team",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
});