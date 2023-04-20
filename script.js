function categoryNews(){
    // const category = {
    //     "id": null,
    //     "name": "Cinema"
    // }
    
    // // // POST
    // fetch("https://virtserver.swaggerhub.com/a-berezhkov/todo_app_sc_bc/1.0.0/rest-news-category", {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(category)
    // })
    //     .then(data => console.log(data))
    
    // GET
    fetch("https://virtserver.swaggerhub.com/a-berezhkov/todo_app_sc_bc/1.0.0/rest-news-category", {
        "method": "GET"
    })
        .then(data => data.json())
        .then(data => console.log(data))
}
// categoryNews()


function news(){
    const news = {
        "id": null,
        "title": "новость1",
        "body": "Текст про новость1",
        "created_at": "2022-02-18",
        "updated_at": "2022-02-18",
        "updated_by": "1",
        "category_id": "0"
    }
    
    // POST
    // fetch("https://virtserver.swaggerhub.com/a-berezhkov/todo_app_sc_bc/1.0.0/rest-news", {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(news)
    // })
    //     .then(data => console.log(data))
    
    // GET
    fetch("https://virtserver.swaggerhub.com/a-berezhkov/todo_app_sc_bc/1.0.0/rest-news", {
        "method": "GET"
    })
        .then(data => data.json())
        .then(data => console.log(data))
}
news()


