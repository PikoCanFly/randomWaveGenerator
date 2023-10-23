function generateRandomSinusoidalSVG() {
    // Calculate the width of the SVG based on the screen width
    const screenWidth = window.innerWidth;
    const svgWidth = screenWidth;
    const svgHeight = 400; // Set a fixed height

    // Create an SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", svgWidth);
    svg.setAttribute("height", svgHeight);
    const amplitude = 50; // Random amplitude

    // const amplitude = Math.random() * 100; // Random amplitude
    const frequency = 0.01; // Random frequency
    const phase = Math.random() * 2 * Math.PI; // Random phase

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let pathData = `M0 ${svgHeight / 2} `;

    for (let x = 0; x < svgWidth; x++) {
      const y = amplitude * Math.sin(frequency * x + phase) + svgHeight / 2;
      pathData += `L${x} ${y} `;
    }
    pathData += `L${svgWidth} ${svgHeight} L0 ${svgHeight} Z`;

    
    path.setAttribute("d", pathData);
    path.setAttribute("fill", "pink");
    path.setAttribute("stroke", "black");

    svg.appendChild(path);

    return svg;
  }

  // Function to update the SVG element in the container
  function updateSVG() {
    const svgContainer = document.getElementById('svg-container');
    svgContainer.innerHTML = ''; // Clear the previous content
    const svgElement = generateRandomSinusoidalSVG();
    svgContainer.appendChild(svgElement);
  }

  // Initially display the SVG
  updateSVG();