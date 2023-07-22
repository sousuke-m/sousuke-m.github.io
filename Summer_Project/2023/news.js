var news_data = [
    /*
    {
        title : "test news ",
        day :"test/test/test",
        text_ : "テスト用ニュースです。<br>削除予定です。"
    },
    */
    {
        title : "マイページアプリ完成",
        day :"2023/7/21",
        text_ : "マイページアプリが2023/7/21に完成しました。"
    },
    {
        title : "タブ追加",
        day :"2023/7/21",
        text_ : "新しくニュースタブを2023/7/21に追加しました。"
    }
];
for(let i = 0;i < news_data.length;i++){
    console.log(document.querySelector("body > div > ul"));
    console.log(`<li>${news_data[i].title}</li>`);
    document.querySelector("body > main > div > ul").innerHTML += `<li onclick="news_v(${i});">${news_data[i].title}</li>`;
};
function news_v(n){
    document.querySelector("body > div").innerHTML = `<button onclick="news_n();">閉じる</button><h1>${news_data[n].title}</h1>
<small>${news_data[n].day}</small><br>${news_data[n].text_}`;
    document.querySelector("body > div").classList.remove("hide");
}
function news_n(){
    document.querySelector("body > div").classList.add("hide");
}