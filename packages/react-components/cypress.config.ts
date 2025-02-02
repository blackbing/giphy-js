import { defineConfig } from 'cypress'

export default defineConfig({
    requestTimeout: 30000,
    defaultCommandTimeout: 10000,
    video: false,
    viewportWidth: 1080,
    projectId: 'zse12i',
    retries: {
        runMode: 2,
        openMode: 0,
    },
    component: {
        specPattern: ['cypress/**/*.spec.tsx', 'cypress/**/*.spec.ts'],
        devServer: {
            framework: 'react',
            bundler: 'webpack',
            webpackConfig: require('./cypress/webpack.config'),
        },
    },
})
