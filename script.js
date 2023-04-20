function categoryNews(){
    for(i=11; i<15; i++){
        fetch(`http://24api.ru/rest-news-category/${i}`, {
        "method": "GET"
        })
        .then(data => data.json())
        .then(data => categoryAtSite(data))
    }
}
categoryNews()

function news(){
    for(i=3; i<8; i++){
        fetch(`http://24api.ru/rest-news/${i}`, {
        "method": "GET"
        })
        .then(data => data.json())
        .then(data => newsAtSite(data))
    }
}
news()

function categoryAtSite(obj) {
    const container = document.body.querySelector(".category__wrapper")
    
    const category = document.createElement('div')
    category.classList.add(`category`)

    const p = document.createElement('p')
    p.innerText = obj.name

    container.append(category)
    category.append(p)
}

function newsAtSite(obj){
    const container = document.body.querySelector(".news__wrapper")

    const news = document.createElement('div')
    news.classList.add(`news`)

    const title = document.createElement('p')
    title.classList.add('title')
    title.innerText = obj.title
    const text = document.createElement('p')
    title.classList.add('text')
    text.innerText = obj.body

    container.append(news)
    news.append(title, text)
}

// let categoryA = document.querySelectorAll('.category')

// function click (element){
//     element.forEach( el => {
//         // el.classList.remove('active')
//         el.addEventListener('click', () =>{
//             el.classList.toggle('active')
//         })
//     })
// }