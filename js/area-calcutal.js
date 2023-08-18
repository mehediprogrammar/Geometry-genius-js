function calculateTraingleArea(){
      // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value ;
    const baseValue = parseFloat(baseValueText );
    
    // get triangle base value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const heightValue = parseFloat(heightValueText);
    const area = 0.5 * baseValue * heightValue;
    console.log(area)
//      show triangle area 
  const areaSpan = document.getElementById('translate-area');
  areaSpan.innerText = area;

}