import wd from 'wd';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
// import { startServer } from 'appium-windows-driver/lib/server.js';
// import { isAdmin } from 'appium-windows-driver/lib/installer.js';
// import { /*driver,*/ By2, /* windowsAppDriverCapabilities*/ } from 'selenium-appium'

chai.should();
chai.use(chaiAsPromised);

const TEST_PORT = 4723//4788;
const TEST_HOST = 'localhost';

// async function getCalculatorResultText() {
//   const text = await By2.nativeAccessibilityId('CalculatorResults').getText();
//   return text.replace('Display is', '').trim();
// }


describe('calc se lance', async function () {
  this.timeout(50000)
  // if (!await isAdmin()) {
  //   return;
  // }

  // let server;
  let driver;

  before(async function () {
    // server = await startServer(TEST_PORT, TEST_HOST);
    // console.log("server ok", server)
  });

  // after(async function () {
  //   if (server) {
  //     await server.close();
  //   }
  //   server = null;
  // });

  beforeEach(function () {
    // if (server) {
      driver = wd.promiseChainRemote(TEST_HOST, TEST_PORT);
    // }
  });

  afterEach(async function () {
    console.log("afterEach")
    if (driver) {
      await driver.quit();
    }
    driver = null;
  });

  it('should run a basic session using a real client', async function () {
    await driver.init({
      app: 'Microsoft.WindowsCalculator_8wekyb3d8bbwe!App',
      platformName: 'Windows',
    });
    console.log(driver)
//    await driver.source().should.eventually.be.not.empty;
// let source = await driver.source()
// console.log("source", source)
// it('Addition', async () => {
  // Find the buttons by their names and click them in sequence to perform 1 + 7 = 8
  //"/Pane[@ClassName=\"#32769\"][@Name=\"Bureau 1\"]/Window[@ClassName=\"ApplicationFrameWindow\"][@Name=\"Calculatrice\"]/Window[@ClassName=\"Windows.UI.Core.CoreWindow\"][@Name=\"Calculatrice\"]/Group[@ClassName=\"LandmarkTarget\"]/Group[@Name=\"Pavé numérique\"][@AutomationId=\"NumberPad\"]/Button[@Name=\"Sept\"][@AutomationId=\"num7Button\"]"

 await driver.elementByAccessibilityId("num7Button").click()
 await driver.elementByAccessibilityId("num9Button").click()
 await driver.elementByAccessibilityId("num9Button").click()
 await driver.elementByAccessibilityId("multiplyButton").click()
 await driver.elementByAccessibilityId("num4Button").click()
 await driver.elementByAccessibilityId("num5Button").click()
 await driver.elementByAccessibilityId("num9Button").click()
 await driver.elementByAccessibilityId("equalButton").click()
await driver.sleep(3000)
 await driver.elementByAccessibilityId("clearEntryButton").click()
await driver.sleep(3000)


  // await By2.nativeName('One').click();
  // await By2.nativeName('Plus').click();
  // await By2.nativeName('Seven').click();
  // await By2.nativeName('Equals').click();
  // expect(await getCalculatorResultText()).toBe('8');
// });

  });
});
