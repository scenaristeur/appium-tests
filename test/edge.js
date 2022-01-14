// https://www.selenium.dev/documentation/legacy/json_wire_protocol/
// https://github.com/admc/wd/blob/master/lib/main.js

import wd from 'wd';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import * as cv from 'opencv-bindings'
// Define a global variable 'Module' with a method 'onRuntimeInitialized':
// let Module = {
//   onRuntimeInitialized() {
//     // this is our application:
//     console.log(cv.getBuildInformation())
//   }
// }
// Load 'opencv.js' assigning the value to the global variable 'cv'

// cv = require('../opencv.js')

// import { startServer } from 'appium-windows-driver/lib/server.js';
// import { isAdmin } from 'appium-windows-driver/lib/installer.js';
// import { /*driver,*/ By2, /* windowsAppDriverCapabilities*/ } from 'selenium-appium'

chai.should();
chai.use(chaiAsPromised);

const TEST_PORT = 4723//4788;
const TEST_HOST = 'localhost';


var browser = wd.remote();

// optional extra logging
browser.on('status', function(info) {
  console.log(info.cyan);
});
browser.on('command', function(eventType, command, response) {
  console.log(' > ' + eventType.cyan, command, (response || '').grey);
});
browser.on('http', function(meth, path, data) {
  console.log(' > ' + meth.magenta, path, (data || '').grey);
});


// async function getCalculatorResultText() {
//   const text = await By2.nativeAccessibilityId('CalculatorResults').getText();
//   return text.replace('Display is', '').trim();
// }

// function getAllMethods(obj = this) {
//           return Object.keys(obj)
//               .filter((key) => typeof obj[key] === 'function')
//               .map((key) => obj[key]);
//       }


describe('edge se lance', async function () {
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
  //  console.log("afterEach")
    if (driver) {
      await driver.quit();
    }
    driver = null;
  });

  it('should run a basic session using a real client', async function () {
    await driver.init({
      app: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
      platformName: 'Windows',
    });

    //DRIVER
   console.log(driver)
//SOURCE
// let source = await driver.source()
// console.log("source", source)

//ELEMENTS
await driver.sleep(1000)


// let elements = await driver.elements("xpath",'//*')
// await driver.sleep(1000)
//  console.log(elements.length , " elements")
// console.log("use FOR await")
// for await (const e of elements){
//   let el ={}
//   el.tagName = await e.getTagName()
//   el.text = await e.text()
//    el.name = await e.getAttribute("name")
//    el.id = await e.getAttribute("id")
//    el.href = await e.getAttribute("href")
//    el.string = await e.toString()
//    el.json = await e.toJSON()
//    el.placeholder = await e.getAttribute("placeholder")
//   // let attrs = await driver.safeExecuteAsync("return arguments[0].attributes", e)
//
//   //console.log(s)
//   console.log(el.tagName)
// //    if(el.text == "Entrez votre terme de recherche"){
// //      await el.type("hello world!")
// // // await element.type(Key.Enter)
// // console.log("saisie ok")
// //      await driver.sleep(1000)
// //    }
// }


//await saisie(driver)
driver.settings({"getMatchedImageResult": true})
let test = await driver.element('-image', "C:\\Users\\psn\\dev\\appium\\monapp\\images\\jenkins.jpg" )
let b64 = test.getAttribute('visual')
console.log("b64",b64)
//console.log("test jenkins",test)
//await test.click()


console.log(elements.length , " elements")

// let title = await driver.executeAsync('document.title')
// //  let s = e.source()
// console.log("title",title)
// elements.forEach((e, i) => {
//
//   let tagName = await e.getTagName()
//  // let t = await e.text()
//  // let n = await e.getAttribute("name")
//  //  let i_d = await e.getAttribute("id")
//  //  console.log(i,t, n, i_d)
//  console.log(i, tagName)
// });

// await driver.get("http://appium.io/")
// it('Addition', async () => {
  // Find the buttons by their names and click them in sequence to perform 1 + 7 = 8
  //"/Pane[@ClassName=\"#32769\"][@Name=\"Bureau 1\"]/Window[@ClassName=\"ApplicationFrameWindow\"][@Name=\"Calculatrice\"]/Window[@ClassName=\"Windows.UI.Core.CoreWindow\"][@Name=\"Calculatrice\"]/Group[@ClassName=\"LandmarkTarget\"]/Group[@Name=\"Pavé numérique\"][@AutomationId=\"NumberPad\"]/Button[@Name=\"Sept\"][@AutomationId=\"num7Button\"]"

//  await driver.elementByAccessibilityId("num7Button").click()
//  await driver.elementByAccessibilityId("num9Button").click()
//  await driver.elementByAccessibilityId("num9Button").click()
//  await driver.elementByAccessibilityId("multiplyButton").click()
//  await driver.elementByAccessibilityId("num4Button").click()
//  await driver.elementByAccessibilityId("num5Button").click()
//  await driver.elementByAccessibilityId("num9Button").click()
 // await driver.elementByAccessibilityId("view_").click()
// await driver.sleep(3000)
//  await driver.elementByAccessibilityId("clearEntryButton").click()
await driver.sleep(3000)


  // await By2.nativeName('One').click();
  // await By2.nativeName('Plus').click();
  // await By2.nativeName('Seven').click();
  // await By2.nativeName('Equals').click();
  // expect(await getCalculatorResultText()).toBe('8');
// });

  });
});


async function saisie(driver){
console.log("saisie")
// LeftClick on Pane "" at (451,104)
console.log("LeftClick on Pane \"\" at (451,104)");
let  xpath_LeftClickPane_451_104 = "/Pane[@ClassName=\"#32769\"][@Name=\"Bureau 1\"]/Window[@ClassName=\"Chrome_WidgetWin_1\"][@Name=\"Nouvel onglet - Profil 1 – Microsoft​ Edge\"]/Pane[@ClassName=\"BrowserRootView\"][@Name=\"Nouvel onglet - Microsoft Edge\"]/Pane[@ClassName=\"NonClientView\"][@Name=\"Microsoft Edge\"]/Pane[@ClassName=\"GlassBrowserFrameView\"]/Pane[@ClassName=\"BrowserView\"]/Pane[@ClassName=\"View\"]/Pane[@ClassName=\"View\"]/Pane[@ClassName=\"View\"]";
var winElem_LeftClickPane_451_104 = await driver.element("xpath", xpath_LeftClickPane_451_104);
if (winElem_LeftClickPane_451_104 != null)
{
  console.log("click")
  await  winElem_LeftClickPane_451_104.click();
}
else
{
    console.log("Failed to find element using xpath: {xpath_LeftClickPane_451_104}");
    //return;
}


// KeyboardInput VirtualKeys=""test"Keys.Return + Keys.Return" CapsLock=False NumLock=True ScrollLock=False
console.log("KeyboardInput VirtualKeys=\"\"test\"Keys.Return + Keys.Return\" CapsLock=False NumLock=True ScrollLock=False");
await driver.sleep(100)
await winElem_LeftClickPane_451_104.type("test");
await winElem_LeftClickPane_451_104.type(Keys.Return + Keys.Return);


// LeftClick on Button "WinAppDriverUIRecorder.exe - 1 fenêtre en cours d’exécution" at (21,21)
console.log("LeftClick on Button \"WinAppDriverUIRecorder.exe - 1 fenêtre en cours d’exécution\" at (21,21)");
let  xpath_LeftClickButtonWinAppDriv_21_21 = "/Pane[@ClassName=\"#32769\"][@Name=\"Bureau 1\"]/Pane[@ClassName=\"Shell_TrayWnd\"][@Name=\"Barre des tâches\"]/ToolBar[@ClassName=\"MSTaskListWClass\"][@Name=\"Applications en cours d’exécution\"]/Button[@Name=\"WinAppDriverUIRecorder.exe - 1 fenêtre en cours d’exécution\"][starts-with(@AutomationId,\"C:\\Users\\psn\\dev\\WinAppDriverUIRecorder\\WinAppDriverUiRecorder.e\")]";
var winElem_LeftClickButtonWinAppDriv_21_21 = await driver.element("xpath", xpath_LeftClickButtonWinAppDriv_21_21);
if (winElem_LeftClickButtonWinAppDriv_21_21 != null)
{
  console.log("click")
    winElem_LeftClickButtonWinAppDriv_21_21.Click();
}
else
{
    console.log("Failed to find element using xpath: {xpath_LeftClickButtonWinAppDriv_21_21}");
    // return;
}


await driver.sleep(100)

  console.log("fin saisie")
}
