function printBrowserHistory(browserData, actions) {
    // Destructure the browserData object
    let { "Browser Name": browserName, "Open Tabs": openTabs, "Recently Closed": recentlyClosed, "Browser Logs": browserLogs } = browserData;

    // Process each action
    actions.forEach(action => {
        if (action === "Clear History and Cache") {
            // Reset the browser data
            browserName = "";
            openTabs = [];
            recentlyClosed = [];
            browserLogs = [];
        } else if (action.startsWith("Open ")) {
            // Extract the site from the action
            const site = action.substring(5);

            // Add site to open tabs if it's not already there
            if (!openTabs.includes(site)) {
                openTabs.push(site);
            }

            // Log the action
            browserLogs.push(action);
        } else if (action.startsWith("Close ")) {
            // Extract the site from the action
            const site = action.substring(6);

            // Move site from open tabs to recently closed if it's currently open
            const index = openTabs.indexOf(site);
            if (index !== -1) {
                openTabs.splice(index, 1);
                recentlyClosed.push(site);
            }

            // Log the action
            browserLogs.push(action);
        }
    });

    // Print the final result
    console.log(browserName);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
    console.log(`Browser Logs: ${browserLogs.join(', ')}`);
}

// Example usage
printBrowserHistory(
    {
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);