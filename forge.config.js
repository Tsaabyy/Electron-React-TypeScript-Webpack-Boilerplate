const path = require('path');

module.exports = {
    packagerConfig: {
        icon: './build/appIcon.ico',
        executableName: 'ElectronApp',
    },
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name: 'Electron-App',
                iconURL: '',
                setupIcon: '',
            },
        },
    ],
    plugins: [
        [
            '@electron-forge/plugin-webpack',
            {
                mainConfig: './webpack.main.config.js',
                renderer: {
                    config: './webpack.renderer.config.js',
                    entryPoints: [
                        {
                            html: './public/index.html',
                            js: './src/renderer/renderer.tsx',
                            name: 'main_window',
                        },
                    ],
                },
            },
        ],
    ],
};
