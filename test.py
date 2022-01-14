# Python3 + PyTest
import pytest

from appium import webdriver


def generate_caps():
    common_caps = {
        'platformName': 'Windows',
        # automationName capability presence is mandatory for Appium Windows Driver to be selected
        'automationName': 'Windows',
    }
    uwp_caps = {
        **common_caps,
        # How to get the app ID for Universal Windows Apps (UWP):
        # https://www.securitylearningacademy.com/mod/book/view.php?id=13829&chapterid=678
        'app': 'Microsoft.WindowsCalculator_8wekyb3d8bbwe!App',
    }
    classic_caps = {
        **common_caps,
        'app': 'C:\\Windows\\System32\\notepad.exe',
        # Make sure arguments are quoted/escaped properly if necessary:
        # https://ss64.com/nt/syntax-esc.html
        'appArguments': 'D:\\log.txt',
        'appWorkingDir': 'D:\\',
    }
    use_existing_app_caps: {
        **common_caps,
        # Active window handles could be retrieved from any compatible UI inspector app:
        # https://docs.microsoft.com/en-us/windows/win32/winauto/inspect-objects
        # or https://accessibilityinsights.io/.
        # Also, it is possible to use the corresponding WinApi calls for this purpose:
        # https://referencesource.microsoft.com/#System/services/monitoring/system/diagnosticts/ProcessManager.cs,db7ac68b7cb40db1
        #
        # This capability could be used to create a workaround for UWP apps startup:
        # https://github.com/microsoft/WinAppDriver/blob/master/Samples/C%23/StickyNotesTest/StickyNotesSession.cs
        'appTopLevelWindow': hex(12345),
    }
    return [uwp_caps, classic_caps, use_existing_app_caps]


@pytest.fixture(params=generate_caps())
def driver(request):
    drv = webdriver.Remote('http://localhost:4723/wd/hub', request.param)
    yield drv
    drv.quit()


def test_app_source_could_be_retrieved(driver):
    assert len(driver.page_source) > 0
