import wd from 'wd';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
// import { startServer } from 'appium-windows-driver/lib/server.js';
// import { isAdmin } from 'appium-windows-driver/lib/installer.js';

chai.should();
chai.use(chaiAsPromised);

const TEST_PORT = 4723//4788;
const TEST_HOST = 'localhost';

describe('calc se lance', async function () {
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
//    await driver.source().should.eventually.be.not.empty;
let source = await driver.source()
// console.log("source", source)
console.log("one")
await driver.findElementByName("One").click()

console.log("one")
await driver.findElementByName("One").click()
console.log("one")
await driver.findElementByName("One").click()
console.log("one")
await driver.findElementByName("One").click()

  });
});
