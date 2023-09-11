//function to calculate the results after user input
function calculate() {
    //assignes value input by user to variables
    let lengthInput = parseFloat(document.getElementById("length").value);
    let heightInput = parseFloat(document.getElementById("height").value);
    //checks if height input is too high
    if (heightInput > 1.80) {
        alert("The maximum safe height should be no more than 1.5 meters!")
    }
    //checks if lenght input is too high
    else if (lengthInput > 299999999999999999) {
        alert("Wow that's a really big wall, it would unfortunately break this calculator though :)")
    }
    //runs if input are within range
    else {
    //calculates surface     
    let surface = lengthInput * heightInput;
    //avarage min and max values for materials and labour
    let minAvarageMaterials = 160;
    let maxAvarageMaterials = 200;
    let minAvarageLabour = 100;
    let maxAvarageLabour = 150;
    //tonnes required for the project
    let tonnes = surface;
    //calculations for avarage costs for material and labour
    let minMaterialsResult = surface * minAvarageMaterials;
    let maxMaterialsResult = surface * maxAvarageMaterials;
    let minLabourResult = surface * minAvarageLabour;
    let maxLabourResult = surface * maxAvarageLabour;
    //stores the results in the result box to show on the screen
    document.getElementById("surface-p").innerHTML = "The surface area indicated is: " + surface+" square meters";
    document.getElementById("tonnes-p").innerHTML = "Avarage weight of the materials is : " + surface+" tonnes";
    document.getElementById("materials-p").innerHTML = "The cost of materials can range from £"+ minMaterialsResult+ " to £" + maxMaterialsResult;
    document.getElementById("labour-p").innerHTML = "The cost of labour can range from £"+minLabourResult+" to £" + maxLabourResult;
    }
}