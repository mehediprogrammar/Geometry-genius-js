function calculateTraingleArea(){
      // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value ;
    const baseValue = parseFloat(baseValueText );
    
    // get triangle base value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const heightValue = parseFloat(heightValueText);
   // CalculateBuy

    const area = 0.5 * baseValue * heightValue;
 
//      show triangle area 
  const areaSpan = document.getElementById('translate-area');
  areaSpan.innerText = area;

}

function calculateRectangleArea(){
 // get rectangle width value
   const  widthField = document.getElementById('rectangle-width');
   const widthValueText = widthField.value ;
   const width = parseFloat(widthValueText);


   // get rectangle length value
   const lengthField = document.getElementById('rectangle-length');
   const lengthValueText = lengthField.value ;
   const length = parseFloat(lengthValueText);

   //CalculateBuy
   const area2 = width * length;

//      show triangle area 
     const areaSpan2 = document.getElementById('rectangle-area');
     areaSpan2.innerText = area2

}


function calculateParallelogramArea(){
   const parallelogramBase = getInputField('parallelogram-base');
   const parallelogramHeight = getInputField('parallelogram-height');
   const area = parallelogramBase * parallelogramHeight;
     setInputElement('parallelogram-area', area);
  
}

function getInputField(InputField){
    const InputFieldText = document.getElementById(InputField);
  const getInputValueText= InputFieldText .value;
  const value = parseFloat(getInputValueText);
  return value;
}

function setInputElement(Element, newInput){
   const allElementText = document.getElementById(Element);
   allElementText.innerText = newInput;
}