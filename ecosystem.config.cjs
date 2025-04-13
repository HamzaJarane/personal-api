module.exports = {
    apps: [
        {
            name: "personal_api",
            script: "node",
            args: "./build/bin/server.js",
            instances: 1,
            autorestart: true,
            watch: false,
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};