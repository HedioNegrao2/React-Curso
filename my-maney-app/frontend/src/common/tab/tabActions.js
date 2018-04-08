export function selectTab(tabid){
    
    return {
        type: 'TAB_SELECTED',
        payload: tabid
    }
}


export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}