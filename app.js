async function selCountry() {
    let country = document.getElementById("country").value;
    if (country !== "") {
        let url =(`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=3de20187dd2244d884515e79bbadfa09`)
        axios.get(url)
            .then(res => {
                console.log(res)
                let News = res.data.articles;
                console.log(News);
                var newsContent = '';
                for (var i in News) {
                    newsContent +=
                    `<div class="newsContent">
                    <img  src="${News[i].urlToImage}">
                    <div class="title">
                    <h6>${News[i].title}</h6>
                    </div>
                    <div class="des">
                    <p>${News[i].description}</p>
                    </div>
                    <div class="btn">
                    <a href="${News[i].url}">READ MORE</a>
                    </div>
                    </div>`;
                }
                document.getElementById('newscontent').innerHTML = newsContent;
            })
            .catch(err => {
                console.log(err)
            })
    }
}