/*
* Function to handle tab selection and display content.
* @param {Event} event - The click event from the tab.
* @param {string} tabId - The ID of the tab content to show.
*/
function selectTab(event, tabId) {
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.tab-pane').forEach(content => {
        content.classList.remove('active');
    });

    event.currentTarget.classList.add('active');

    document.getElementById(tabId).classList.add('active');
}