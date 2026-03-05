// Run this in the console.
// Recommended: change Facebook language to English first.

const INTERVAL = 1200;   // tweak if FB starts rate-limiting
const RUN_TIME = 5 * 60 * 1000; // optional: stop after 5 minutes

const timer = setInterval(() => {
  // 1. Click all visible "More options" / "Action options" menus
  document
    .querySelectorAll('div[aria-label="More options"], div[aria-label="Action options"]')
    .forEach(btn => {
      if (btn.offsetParent !== null) btn.click();
    });

  // 2. In the menus, click only items that *are* delete/remove actions
  document
    .querySelectorAll('div[role="menuitem"]')
    .forEach(item => {
      const txt = item.textContent.trim().toLowerCase();
      if (txt === 'delete' || txt === 'remove' || txt === 'remove comment') {
        item.click();
      }
    });

  // 3. Confirm dialogs if they appear (optional; depends on your UI)
  document
    .querySelectorAll('div[aria-label="Delete"], div[aria-label="Remove"], div[aria-label="Move to trash"]')
    .forEach(btn => {
      if (btn.offsetParent !== null) btn.click();
    });

}, INTERVAL);

// Optional: stop automatically
setTimeout(() => clearInterval(timer), RUN_TIME);
