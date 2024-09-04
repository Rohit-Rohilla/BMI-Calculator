const form=document.querySelector('form');
 form.addEventListener('submit',function(e){
    e.preventDefault();

    const height= parseInt(document.querySelector("#height").value);
    const weight= parseInt(document.querySelector("#weight").value);
    const results=document.querySelector("#results");

    if(height ===" " || height <= 0 || isNaN(height)){
        results.innerHTML ="Please enter valid height";
    }else if(weight ===" " || weight <= 0 || isNaN(weight)){
        results.innerHTML ="Please enter valid weight";
    }else{
        const BMI=(weight/((height*height)/10000)).toFixed(2);
        // results.innerHTML=`<span>${BMI}</span>`;

        if(BMI<=18.6){
            results.innerHTML=`<span>BMI= ${BMI}<br>According to the BMI index,your weight is underweight</span>`
        }else  if(BMI>=24.9){
            results.innerHTML=`<span>BMI= ${BMI}<br>According to the BMI index,your weight is overweight</span>`
        }else{
            results.innerHTML=`<span>BMI= ${BMI}<br>According to the BMI index,your weight is normalweight</span>`
        }
    
    }

   

 })