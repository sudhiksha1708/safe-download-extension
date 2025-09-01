chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules(
    {
      removeRuleIds: [1, 2, 3],
      addRules: [
        {
          id: 1,
          priority: 1,
          action: { type: "block" },
          condition: {
            urlFilter: "darkweb.xyz",
            resourceTypes: ["main_frame"]
          }
        },
        {
          id: 2,
          priority: 1,
          action: { type: "block" },
          condition: {
            urlFilter: "phishyfiles.com",
            resourceTypes: ["main_frame"]
          }
        },
        {
          id: 3,
          priority: 1,
          action: { type: "block" },
          condition: {
            urlFilter: "badsoftware.net",
            resourceTypes: ["main_frame"]
          }
        }
      ]
    }
  );
});