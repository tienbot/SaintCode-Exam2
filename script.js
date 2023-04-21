//Получаем категории новостей из БД
function categoryNews(){
    for(i=103; i<=106; i++){
        fetch(`http://24api.ru/rest-news-category/${i}`, {
        "method": "GET"
        })
        .then(data => data.json())
        .then(data => categoryAtSite(data))
    }
}
categoryNews()

//Отрисовываем категории
function categoryAtSite(obj) {
    const container = document.body.querySelector(".category__wrapper")
    const category = document.createElement('div')
    category.classList.add('category')
    //Слушатель категорий
    category.addEventListener('click', () =>{
        let allCategory = document.querySelectorAll('.category')
        allCategory.forEach(el => {
            el.classList.remove('active')
        })

        container.parentNode.children[1].innerHTML=''
        category.classList.add('active')
        news(obj.id) //передаем id категории в функцию news
    })

    const p = document.createElement('p')
    p.innerText = obj.name

    container.append(category)
    category.append(p)
}

//Получаем новости из БД
function news(id){ //принимаем id категории...
    for(i=11; i<=20; i++){
        fetch(`http://24api.ru/rest-news/${i}`, {
        "method": "GET"
        })
        .then(data => data.json())
        .then(data => newsAtSite(data, id)) //... и передаем его в функцию newsAtSite вместе с данными
    }
}

//Отрисовываем новости на сайте
function newsAtSite(obj, numb){ //получаем данные и id категории (numb)...
    if(obj.category_id == numb){ // если категория новости та же, что мы передаем - отображаем ее на сайте
        const container = document.body.querySelector(".news__wrapper")

        const news = document.createElement('div')
        news.classList.add(`news`)

        const title = document.createElement('p')
        title.classList.add('text')

        const text = document.createElement('p')
        text.innerText = obj.body

        container.append(news)
        news.append(title, text)
    }
}

function notActive(obj){
    obj.classList.remove('active')
}