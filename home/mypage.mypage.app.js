function tab(tab_name){
    const URL_data = {
        home :"home.html",
        news :"news.html",
        chat :"chat.html"
    };
    const tab_id_data = {
        home :"tab1",
        news :"tab2",
        chat :"tab3"
    };
    document.querySelector("body > main > object").data = URL_data?.[tab_name];
    const tab_id = "#" + tab_id_data?.[tab_name];
    console.log(tab_id_data?.[tab_name]);
    console.log(tab_id);
    console.log(document.querySelector(tab_id));
    const tab = document.querySelector(tab_id);
    console.log(tab);
    document.querySelector("#tab1").style.backgroundColor = "#f5f5f5";
    document.querySelector("#tab2").style.backgroundColor = "#f5f5f5";
    document.querySelector("#tab3").style.backgroundColor = "#f5f5f5";
    document.querySelector("#tab4").style.backgroundColor = "#f5f5f5";
    tab.style.backgroundColor = "#808080";
}