var path = require("path");
module.exports = [
    {   // Main App Build
        entry: [
            "babel-polyfill",
            "./Scripts/app.js"
        ],
        output: {
            publicPath: "/js/",
            path: path.join(__dirname, "/wwwroot/js/"),
            filename: "app.build.js"
        },
        module: {
            loaders: [
                {
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {
                        presets: ["es2015", "stage-1"]
                    }
                }
            ]
        },
        resolve: {
            alias: {
                vue: "vue/dist/vue.js"
            }
        }
    }
    ];