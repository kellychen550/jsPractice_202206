let foodImages = [
"jsl1_random_selector/01.jpg",
"jsl1_random_selector/02.jpg",
"jsl1_random_selector/03.jpg"
];

$(function(){
    //console.log("y");
    $("input").on("click",function(){
        //alert("Hi");
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        //取得亂數結果,且會沿用至下面兩個
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr( "src",foodImages[randomChildNumber]);
        //按下按鈕會產生隨機結果+對應圖片(陣列內圖片順序要與清單相同)
        //取得圖片.attr(圖片的src,取得動態結果)
    });
});
//主結構通常只會寫一個=> $(function(){})
//document.write('<img src="01.jpg">');
//較好的寫法應該是設name,img src,取得name...
//有興趣可以做別的呈現效果,例如文字粗體,跑動...


