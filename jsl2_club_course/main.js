let myDate = document.getElementById("myDate");
//let skip = topic.indexOf("暫停");




$(function () {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    let topicCount = topic.length;
    let millisecsPerDay = 24*60*60*1000;
    //計算每天的毫秒數
    for (let x=0; x <topicCount; x++) {
        $("#courseTable").append(
        `<tr><td>${x+1}</td><td>${new Date(startDate.getTime()+7*x*millisecsPerDay).toLocaleDateString().slice(5)}</td><td>${topic[x]}</td></tr>`
        );
      
    
    };


        //$("#courseTable").on("mouseover",function(){$(skip).css("color","gray")});
        //增加判斷,套用class

        $("#myDate").val();
        
        /*onchange(
            setMonthAndDay().getElementByName("myDate");
            );*/
//找到元件取值$().val(),但取出的type是string
//當onchange時,套用為新的日期

});



