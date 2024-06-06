export const config = {
    //runner: 'local',
    //port: 4723,

    user: 'oauth-brukalschne-3ff1d',
    key: 'eb1979e3-e77c-4abe-b1ec-dccfcbad9aca',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
       
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
        /*{
        platformName: 'Android',
        'appium:deviceName': 'ebac',
        'appium:platformVersion': '14.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/ebacshop.apks` ,
        'appium:appWaitActivity': '.MainActivity',
       'appium:disableIdLocatorAutocompletion': true
    }*/

    {
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:disableIdLocatorAutocompletion': true,
        'sauce:options': {
           build: 'appium-build-teste-ebacshop',
           name: 'Ebac Shop Teste',
           deviceOrientation: 'PORTRAIT',
           appiumVersion: '2.0.0'
         },
       }
],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}