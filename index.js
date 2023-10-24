function waveCreator(color, opacity){
    const svgWidth = window.innerWidth;
    const svgHeight = 400;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svg.setAttribute("width", svgWidth);
    svg.setAttribute("height", svgHeight);

    const frequency = Math.random() * ((0.02 - 0.009) + 0.009);
    const amplitude = Math.random() * 80;
    const phase = Math.random()*10;

    let pathData = `M 0 ${svgHeight/2}`

    for (let x=0; x<svgWidth; x++){
        const y = amplitude * Math.sin(frequency * x + phase) + svgHeight/2;
        pathData +=  `L ${x} ${y}`;
    }
    
    pathData += `L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`
    
    path.setAttribute("d", pathData);
    svg.appendChild(path);
    const waveContainer = document.getElementById("wave-container");
    waveContainer.appendChild(svg);
    path.setAttribute("fill", color);
    path.setAttribute("opacity", opacity)

    // path.setAttribute("stroke", "black");

 
}


// The function takes 'color' and 'opacity' as params. 
waveCreator("blue", "0.4");
