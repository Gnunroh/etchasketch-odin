// Create containers inside the main div
let gridSize = 16;

for (let i = 1; i <= (gridSize*gridSize); i++) {
    const container = document.querySelector('#container');
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.setAttribute('style', 'background-color: white;');
    let panelWidth = 1/gridSize*100;
    let finalPanelWidth = parseFloat(panelWidth).toFixed(2)+"%";
    panel.style.width = finalPanelWidth;
    panel.style.paddingBottom = finalPanelWidth;
    panel.addEventListener('mouseover', function handleMouseOver() {panel.style.backgroundColor = 'black'});
    container.appendChild(panel);
}

function clearSketch () {  
    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel) => {
        panel.setAttribute('style', 'background-color: white;')
    });
    let gridSize = window.prompt("How large do you want your grid to be?: ");
    if (gridSize > 100) {
        alert("The max grid size is 100 x 100!")
        for (let i = 1; i <= 10000; i++) {
            const container = document.querySelector('#container');
            const panel = document.createElement('div');
            panel.classList.add('panel');
            panel.setAttribute('style', 'background-color: white;');
            let panelWidth = 1/100*100;
            let finalPanelWidth = parseFloat(panelWidth).toFixed(2)+"%";
            panel.style.width = finalPanelWidth;
            panel.style.paddingBottom = finalPanelWidth;
            panel.addEventListener('mouseover', function handleMouseOver() {panel.style.backgroundColor = 'black'});
            container.appendChild(panel);}
    } else {
        for (let i = 1; i <= (gridSize*gridSize); i++) {
            const container = document.querySelector('#container');
            const panel = document.createElement('div');
            panel.classList.add('panel');
            panel.setAttribute('style', 'background-color: white;');
            let panelWidth = 1/gridSize*100;
            let finalPanelWidth = parseFloat(panelWidth).toFixed(2)+"%";
            panel.style.width = finalPanelWidth;
            panel.style.paddingBottom = finalPanelWidth;
            panel.addEventListener('mouseover', function handleMouseOver() {panel.style.backgroundColor = 'black'});
            container.appendChild(panel);}
    };
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", clearSketch);


