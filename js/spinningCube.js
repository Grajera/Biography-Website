function loadCanvas(id) {
// constants
    var r_tag = document.getElementById("R")
    var g_tag = document.getElementById("G")
    var b_tag = document.getElementById("B")
    var R = document.getElementById("R").value;
    var G = document.getElementById("G").value;
    var B = document.getElementById("B").value;
    var size_tag = document.getElementById("Size")
    var Size = document.getElementById("Size").value;
    var canvas_size_tag = document.getElementById("Canvas_Size_var")
    var Canvas_Size_var = document.getElementById("Canvas_Size_var").value;
    

    const SPEED_X = 0.10; // rps
    const SPEED_Y = 0.15; // rps
    const SPEED_Z = 0.10; // rps
    const POINT3D = function(x, y, z) { this.x = x; this.y = y; this.z = z; };

    // set up the canvas and context
    var canvas = document.createElement("canvas");
    div = document.getElementById(id); 
    //document.body.appendChild(canvas);
    div.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    
    
    // dimensions
    var h = Canvas_Size_var;
    var w = Canvas_Size_var;
    canvas.height = h;
    canvas.width = w;
    //color and size sliders on change commands

    r_tag.oninput = function()
    {
        div.removeChild(canvas);
        loadCanvas(id);
    }
    g_tag.oninput = function()
    {
        div.removeChild(canvas);
        loadCanvas(id);
    }
    b_tag.oninput = function()
    {
        div.removeChild(canvas);
        loadCanvas(id);
    }
    size_tag.oninput = function()
    {
        div.removeChild(canvas);
        loadCanvas(id);
    }
    canvas_size_tag.oninput = function()
    {
        div.removeChild(canvas);
        loadCanvas(id);
    }

    // colours and lines
    ctx.fillStyle = "black"
    ctx.strokeStyle = `rgb(${R}, ${G},${B})`;
    ctx.lineWidth = w / Size;
    ctx.lineCap = "round";

    // cube parameters
    var cx = w / 2;
    var cy = h / 2;
    var cz = 0;
    var size = h / 4;
    var vertices = [
        new POINT3D(cx - size, cy - size, cz - size),
        new POINT3D(cx + size, cy - size, cz - size),
        new POINT3D(cx + size, cy + size, cz - size),
        new POINT3D(cx - size, cy + size, cz - size),
        new POINT3D(cx - size, cy - size, cz + size),
        new POINT3D(cx + size, cy - size, cz + size),
        new POINT3D(cx + size, cy + size, cz + size),
        new POINT3D(cx - size, cy + size, cz + size)
    ];
    var edges = [
        [0, 1], [1, 2], [2, 3], [3, 0], // back face
        [4, 5], [5, 6], [6, 7], [7, 4], // front face
        [0, 4], [1, 5], [2, 6], [3, 7] // connecting sides
    ];

    // set up the animation loop
    var timeDelta, timeLast = 0;
    requestAnimationFrame(loop);

    function loop(timeNow) {

        // calculate the time difference
        timeDelta = timeNow - timeLast;
        timeLast = timeNow;

        // background
        ctx.fillRect(0, 0, w, h);

        // rotate the cube along the z axis
        let angle = timeDelta * 0.001 * SPEED_Z * Math.PI * 2;
        for (let v of vertices) {
            let dx = v.x - cx;
            let dy = v.y - cy;
            let x = dx * Math.cos(angle) - dy * Math.sin(angle);
            let y = dx * Math.sin(angle) + dy * Math.cos(angle);
            v.x = x + cx;
            v.y = y + cy;
        }

        // rotate the cube along the x axis
        angle = timeDelta * 0.001 * SPEED_X * Math.PI * 2;
        for (let v of vertices) {
            let dy = v.y - cy;
            let dz = v.z - cz;
            let y = dy * Math.cos(angle) - dz * Math.sin(angle);
            let z = dy * Math.sin(angle) + dz * Math.cos(angle);
            v.y = y + cy;
            v.z = z + cz;
        }

        // rotate the cube along the y axis
        angle = timeDelta * 0.001 * SPEED_Y * Math.PI * 2;
        for (let v of vertices) {
            let dx = v.x - cx;
            let dz = v.z - cz;
            let x = dz * Math.sin(angle) + dx * Math.cos(angle);
            let z = dz * Math.cos(angle) - dx * Math.sin(angle);
            v.x = x + cx;
            v.z = z + cz;
        }

        // draw each edge
        for (let edge of edges) {
            ctx.beginPath();
            ctx.moveTo(vertices[edge[0]].x, vertices[edge[0]].y);
            ctx.lineTo(vertices[edge[1]].x, vertices[edge[1]].y);
            ctx.stroke();
        }

        // call the next frame
        requestAnimationFrame(loop);
}
}