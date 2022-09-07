module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_EtObraYAb3MuYM04cwjrBJiW19Hj/2TZY2fqCVu",
        apiToken: "FPlPSSauMRHh5EueQpPQir67",
        appFilter: "strapi",
        teamFilter: "",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
    'cloudflare-pages': {
        enabled: true,
        config: {
            instances: [
                {
                name: "production website",
                hook_url: 'https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/6ee1187b-287e-4470-9251-ff072b219f0b'
                },
            ]
        }
      }
  });