function reload_(news_data){
    document.querySelector("body > main > div > ul").innerHTML = '';
    for(let i = 0;i < news_data.news_data.length;i++){
        console.log(document.querySelector("body > main > div > ul"));
        console.log(`<li>${news_data.news_data[i].title}</li>`);
        document.querySelector("body > main > div > ul").innerHTML += `<li onclick='
news_v(${i},${JSON.stringify(news_data)})
'>${news_data.news_data[i].title}</li>`;
    };
};
function news_v(n,news_data){
    document.querySelector("body > div").innerHTML = `<button onclick="news_n();">閉じる</button><h1>${news_data.news_data[n].title}</h1>
<small>${news_data.news_data[n].day}</small><br>${news_data.news_data[n].text_}`;
    document.querySelector("body > div").classList.remove("hide");
};
function news_n(){
    document.querySelector("body > div").classList.add("hide");
};
function load_(){
    fetch('news_data.json')
        .then((data) => data.json())
        .then((obj) => {
            reload_(obj);
        });
}
