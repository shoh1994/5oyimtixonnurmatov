const shoh1  = document.querySelector('.shoh11')
const shoh2  = document.querySelector('.flag-img')
const shoh3  = document.querySelector('.flag-population')
const shoh4  = document.querySelector('.flag-regin')
const shoh5  = document.querySelector('.flag-capital')
const shoh6  = document.querySelector('.inputqdruv')
const shoh7  = document.querySelector('.shoh12')



shoh6.addEventListener( "submit",  (e)=>{
    e.preventDefault()
    const cityName =shoh6.flag.value.trim()
    shoh6.reset()
    // console.log(cityName);
})  

const getshoh = async (item)=>{
    const data = await getData(item)
    console.log(data);
}




const getData =async()=>{
const req  = await fetch("https://countries-api-v7sn.onrender.com/countries?limit=250")
const data = await req.json()
return data

}

getData().then((data)=>{
data.data.forEach((item) => {
   const name = item.name.common
   const populeshion = item.population
      const rejion = item.region
    const shoh = item.capital[0]
    const flag = item.flags.svg
    // console.log(flag);
shoh7.innerHTML=`
<div class="shoh11">
<ul class="shoh12">

<img  src="${flag}" alt="">
    
    <h1 class="flag-name">name:${name}</h1>
    <li class="flag-population">Popolation:${populeshion}</li>
    <li class="flag-regin">Region: ${rejion}</li>
    <li class="flag-capital">CapitailL: ${shoh}</li>
</ul>
</div>`

});

})


