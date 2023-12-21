document.getElementById("regbtn").addEventListener("click",senddriver)
async function senddriver(e){
    e.preventDefault()
        let name=document.getElementById("name").value
        let age=document.getElementById("age").value
        let experience=document.getElementById("experience").value
        let cnumber=document.getElementById("cnumber").value
        let email=document.getElementById("email").value
    try{
        confirm("Thanks for joining us")
        const myInit={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name:name,age:age,experience:experience,contactnumber:cnumber,email:email}),
        }
        const res=await fetch("http://localhost:5000/api/drivers",myInit)
         if(!res.ok){
             throw new Error(res.statusText)
         }
        const data= await res.json()
        console.log(data)

     }catch(error)
     {
         console.log(error)
     }

}

// document.getElementById("bookbtn").addEventListener("click",sendcustomer)
// async function sendcustomer(e){
//     e.preventDefault()
//         let name=document.getElementById("cname").value
//         let age=document.getElementById("cage").value
//         let cnumber=document.getElementById("cphone").value
//         let email=document.getElementById("cemail").value
//     try{
//        console.log("button")
//         const myInit={
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body: JSON.stringify({name:name,age:age,contactnumber:cnumber,email:email}),
//         }
//         const res=await fetch("http://localhost:5000/api/cars",myInit)
//          if(!res.ok){
//              throw new Error(res.statusText)
//          }
//         const data= await res.json()
//         console.log(data)

//      }catch(error)
//      {
//          console.log(error)
//      }

// }