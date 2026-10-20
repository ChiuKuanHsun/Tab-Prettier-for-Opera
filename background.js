// Opera ignores chrome_url_overrides, so replace its Speed Dial with Tab Prettier as each new tab opens.
// Opera blocks navigating the Speed Dial tab itself to an extension page, so open a fresh tab in its
// place and close the Speed Dial one.
// The ID of Tab Prettier from the Chrome Web Store; an unpacked copy has its own (see opera://extensions).
const TAB_PRETTIER_ID = 'fnacfhfopcdcgidgjllgngoigaajbapi';
const TARGET = `chrome-extension://${TAB_PRETTIER_ID}/newtab.html`;
const SPEED_DIAL = /^(chrome|opera):\/\/(startpageshared|startpage)\/?$/;
const ZH = chrome.i18n.getUILanguage().startsWith('zh');

const isOn = async () => (await chrome.storage.local.get({ enabled: true })).enabled;

// The toolbar button turns it on and off; "OFF" on the badge while it is off.
const show = (on) => {
  chrome.action.setBadgeText({ text: on ? '' : 'OFF' });
  chrome.action.setBadgeBackgroundColor({ color: '#777' });
  chrome.action.setTitle({
    title: ZH
      ? `Tab Prettier 新分頁：${on ? '開啟' : '關閉'}（點一下切換）`
      : `Tab Prettier on new tabs: ${on ? 'on' : 'off'} (click to switch)`,
  });
};

const toggle = async () => {
  const on = !(await isOn());
  await chrome.storage.local.set({ enabled: on });
  show(on);
};

const replace = async (tab) => {
  await chrome.tabs.create({ url: TARGET, index: tab.index, windowId: tab.windowId, active: tab.active });
  await chrome.tabs.remove(tab.id);
};

chrome.action.onClicked.addListener(() => void toggle());
chrome.runtime.onStartup.addListener(async () => show(await isOn()));
chrome.runtime.onInstalled.addListener(async () => show(await isOn()));

chrome.tabs.onCreated.addListener(async (tab) => {
  if (SPEED_DIAL.test(tab.pendingUrl || tab.url || '') && (await isOn())) replace(tab).catch(() => {});
});
