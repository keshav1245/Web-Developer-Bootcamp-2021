const form = document.querySelector('#myForm')

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     console.log("Submitted !!")

//     const query = form.elements.q.value
//     console.log(query)

//     axios.get('https://api.tvmaze.com/singlesearch/shows?q='+query)
//     .then((res)=>{
//         let img = document.createElement('img')
//         if(res.data.length > 0){
//             img.src = res.data[0].show.image.medium
//         }else{
//             img.src = res.data.image.medium    
//         }
//         document.body.appendChild(img)
//     })
//     .catch((err)=>{
//         console.log('Error Occured : '+err)
//     })

// })

form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    console.log("Submitted !!")

    const query = form.elements.q.value
    console.log(query)

    try{
        const params = {
            q : query
        }
        let res = await axios.get('https://api.tvmaze.com/singlesearch/shows',{params})
        console.log(res)
        let img = document.createElement('img')
        if(res.data.length > 0){
            img.src = res.data[0].show.image.medium
        }else{
            img.src = res.data.image.medium    
        }
        document.body.appendChild(img)
    }catch(err){
        console.log('Error Occured : '+err)
    }
    
    

})