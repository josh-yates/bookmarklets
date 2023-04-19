const tables = document.querySelectorAll('table');

let selectedTable: HTMLTableElement;
let tableToolbar: HTMLDivElement;
let originalBorder: string;

tables.forEach(t => {
    const triggerButton = document.createElement('button');

    triggerButton.innerText = 'Tools'

    triggerButton.style.position = 'absolute';
    triggerButton.style.top = '0';
    triggerButton.style.left = '0';
    triggerButton.style.fontFamily = 'monospace';
    triggerButton.style.fontSize = '1rem';
    triggerButton.style.border = '2px solid black';
    triggerButton.style.borderRadius = '0.5rem';

    triggerButton.addEventListener('click', () => {
        if (!!selectedTable) selectedTable.style.border = originalBorder;
        originalBorder = t.style.border;
        t.style.border = '2px solid orange';

        selectedTable = t;
        showToolbar();
    });

    t.style.position = 'relative';

    t.appendChild(triggerButton);
})

function showToolbar() {
    if (!!tableToolbar) return;

    tableToolbar = document.createElement('div');

    tableToolbar.style.position = 'fixed';
    tableToolbar.style.top = '0';
    tableToolbar.style.left = '0';
    tableToolbar.style.width = '100%';
    tableToolbar.style.height = '2rem';
    tableToolbar.style.background = 'orange';
    tableToolbar.style.display = 'flex';

    const downloadCSVButton = document.createElement('button');

    downloadCSVButton.addEventListener('click', () => {
        const csv = Array
            .from(selectedTable.querySelectorAll('tr'))
            .filter(r => r.style.display !== 'none')
            .map(r => Array
                .from(r.querySelectorAll('th,td'))
                .map(el => (el as HTMLElement).innerText)
                .join(','))
            .join('\r\n');

        const blob = new Blob([csv], {
            type: "text/csv",
        });
        const url = URL.createObjectURL(blob);

        const downloadElement = document.createElement("a");

        downloadElement.download = 'table.csv';
        downloadElement.href = url;
        downloadElement.click();

        downloadElement.remove();
    });

    downloadCSVButton.innerText = 'Download CSV';

    tableToolbar.appendChild(downloadCSVButton);

    document.body.appendChild(tableToolbar);
}