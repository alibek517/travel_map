let ban = document.getElementById('ban')
let ban2 = document.getElementById('ban2')
let divban = document.getElementById('divban')

ban.addEventListener('click', (e)=>{
e.preventDefault()
divban.classList.remove("non");
ban2.classList.remove("non");
ban.classList.add("non");
})

ban2.addEventListener('click', (e)=>{
    e.preventDefault()
    divban.classList.add("non");
    ban2.classList.add("non");
    ban.classList.remove("non");
    })