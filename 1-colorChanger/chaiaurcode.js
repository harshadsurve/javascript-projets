const buttons = document.querySelectorAll('.button')
// console.log(buttons);

const body = document.querySelector("body")

buttons.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click', (e)=>{
        console.log(e);
        console.log(e.target);

        body.style.backgroundColor = e.target.id

        // if(e.target.id === "grey"){
        //     body.style.backgroundColor = e.target.id
        // }

        // if(e.target.id === "white"){
        //     body.style.backgroundColor = e.target.id
        // }

        // if(e.target.id === "blue"){
        //     body.style.backgroundColor = e.target.id
        // }

        // if(e.target.id === "yellow"){
        //     body.style.backgroundColor = e.target.id
        // }

        // if(e.target.id === "orange"){
        //     body.style.backgroundColor = e.target.id
        // }

        // if(e.target.id === "pink"){
        //     body.style.backgroundColor = e.target.id
        // }


    //    switch (e.target.id) {
    //     case e.target.id:
    //         body.style.backgroundColor=e.target.id
    //         break;
       
    //     default:
    //         break;
    //    }

//    switch(e.target.id){
//     case "grey":
//         body.style.backgroundColor = e.target.id
//         break;
//     case "white":
//         body.style.backgroundColor = e.target.id
//         break;
//     case "blue":
//         body.style.backgroundColor = e.target.id
//         break;
//     case "yellow":
//         body.style.backgroundColor = e.target.id
//         break;
//     case "orange":
//         body.style.backgroundColor = e.target.id
//         break;
//     case "pink":
//         body.style.backgroundColor = e.target.id
//         break;
    
//    }
    
    })
})