const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === "" || height<=0 || isNaN(height)){
        results.innerHTML=`please enter the valid height ${height}`
    }
    else if(weight === "" || weight<=0 || isNaN(weight)){
        results.innerHTML=`please enter the valid weight ${weight}`
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)

        if(bmi<18.6){
        results.innerHTML = `<span>you are under weight ${bmi}</span>`
        }
        else if( bmi<24.9  &&  bmi>18.6){
        results.innerHTML = `<span>you are weight perfect ${bmi}</span>`
        }
        else{
        results.innerHTML = `<span>you are overweight weight ${bmi}</span>`
        }
    }
})