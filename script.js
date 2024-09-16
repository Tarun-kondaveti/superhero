const newbutton=document.getElementById('newbutton')
const namebutton=document.getElementById('namebutton')
const heroimage=document.getElementById('newimage')
const namesearch=document.getElementById('searchname')
const GetNewHero = (id)  => {
fetch(`https://superheroapi.com/api.php/4e501c7f07d09f9979d708440a299f96/${id}`)
.then(response => response.json())
.then( json => {
heroimage.innerHTML =`<img src="${json.image.url}" height=250 /> <h2> ${json.name}</h2><br><h2>${HeroStats(json)}</h2><br> `
})
}
newbutton.onclick = () =>  GetNewHero(Math.floor(Math.random()*500))
GetNewHero(Math.floor(Math.random()*500))
namebutton.onclick = () => GetNewHeroByName(namesearch.value)
const GetNewHeroByName = (name)  => {
fetch(`https://superheroapi.com/api.php/4e501c7f07d09f9979d708440a299f96/search/${name}`)
.then(response => response.json())
.then( json => {
const hero=json.results[0]
heroimage.innerHTML =`<img src="${hero.image.url}" height=250 /> <h2> ${hero.name}</h2><br><h2>${HeroStats(hero)}</h2><br> `
})
}
const emoji ={
    intelligence : '🧠',
    strength:'💪',
    speed : '💥',
    durability : '⌛',
    power : '👊',
    combat : '⚔'
}    
const HeroStats = (ch)=> {
    const stats=Object.keys(ch.powerstats).map(stat => {
        return `<p> ${emoji[stat]} ${stat.toUpperCase()}:${ch.powerstats[stat]}</p>`
    })
    return stats.join('')
}