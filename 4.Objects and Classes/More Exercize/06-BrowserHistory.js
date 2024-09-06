function printBrowserHistory(input, actions) {

    let browser = {
        "Browser Name": browserName,
        "Open Tabs": openTabs,
        "Recently Closed": recentlyClosed,
        "Browser Logs": browserLogs
    } = input;
    actions.forEach(element => {
        if (element === 'Clear History and Cache') {
            openTabs = [];
            recentlyClosed = [];
            browserLogs = [];
        } else if (element.startsWith('Open ')) {
            const [_, site] = element.split(' ');
            if (!openTabs.includes(site)) {
                openTabs.push(site);
            }
            browserLogs.push(element);
        } else if(element.startsWith('Close ')){
            const [_,site] = element.split(' ');
            const index = openTabs.indexOf(site);
            if (index !== -1) {
                openTabs.splice(index, 1);
                recentlyClosed.push(site);
            }
            browserLogs.push(element);
        } 
        
    });
    console.log(browserName);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
    console.log(`Browser Logs: ${browserLogs.join(', ')}`);
}



printBrowserHistory({"Browser Name":"Google Chrome"
                    ,"Open Tabs":["Facebook","YouTube","Google Translate"]
                    ,"Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);