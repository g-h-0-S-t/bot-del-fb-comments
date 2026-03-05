# Facebook Comment Deletion Script

This repository contains a small browser-console script to help you bulk-delete your own comments from Facebook’s Activity Log “Comments” view.

The script is meant to be run manually from your browser DevTools on the desktop web version of Facebook.

---

## What it does

The script automates three basic steps in a loop.

It clicks every visible “More options” / “Action options” button for each activity item.  
In the opened menus, it clicks the menu items that correspond to deleting or removing comments.  
Optionally it clicks confirmation buttons (for example “Delete”, “Remove”, “Move to trash”) if a dialog appears.

It repeats this on a timer, so you can scroll periodically to load more comments while it continues working.

---

## Requirements

You need a desktop browser such as Chrome, Firefox, or Edge.  
You must be logged into Facebook on the account whose comments you want to delete.  
It is recommended to set your Facebook language to English so that the text and accessibility labels match what the script expects.

---

## How to use

Open the **Comments** activity page for your profile, for example:

`https://www.facebook.com/your_profile_id/allactivity/?category_key=COMMENTSCLUSTER`

Make sure the list of your comments is visible and you can delete at least one manually.

Open **Developer Tools**:

- Chrome or Edge: `Ctrl+Shift+J` (Windows or Linux) or `Cmd+Option+J` (macOS).  
- Firefox: `Ctrl+Shift+K` or `Cmd+Option+K`.

Go to the **Console** tab.

Paste the script from this repository into the console and press Enter.

Leave the tab open and occasionally scroll down so Facebook loads more comments.  
The script will keep opening menus and clicking delete or remove options.

After some time, check that comments are actually being removed.  
You can stop the script at any time by refreshing the page or by calling the appropriate stop function documented with the script.

---

## Customization

You can change the interval speed that controls how often the script runs a deletion cycle.  
If Facebook is not keeping up or shows errors or temporary blocks, increase the interval value (for example 1500–2000 ms).  
If it is stable, you can try lowering it for faster deletion.

You can change the total run duration so the script stops automatically after a different amount of time.  
Adjust the duration value if you want the script to run longer or shorter.

If your user interface uses different labels, such as “Move to trash” only, a different language, or different button names, you need to update the selectors and text checks inside the script.  
To find the right labels, right-click the relevant buttons in DevTools and choose Inspect, then look at their accessibility attributes and text content.

---

## Limitations and disclaimers

This script relies on Facebook’s current HTML structure and accessibility attributes, and any user interface change by Facebook can break it.  
You use it at your own risk, and deletion is permanent and cannot be undone.  
It is intended only for deleting your own content on your own account and should not be used on accounts you do not own.
