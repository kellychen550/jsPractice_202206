
$(function () {
    //儲存目前作答到第幾題
    let currentQuiz = null;
    //按下按鈕時要做的事情
    $("#startButton").on("click", function () {
        if (currentQuiz == null) {
            //開始作答,從第0題開始
            currentQuiz = 0;
            //顯示題目
            $("#question").text(questions[0].question);
            //將選項清空(應該是寫到後面發現有bug才回來補)
            $("#options").empty();
            //將選項逐個加入(使用for-each)
            questions[0].answers.forEach(function (element, index, array) {
                //陣列.forEach(function(參數1,參數2,參數3))參數可自己命名
                //array顏色不同是因為括號內沒有用到
                //將每個選項送到網頁讓user選取
                $("#options").append(`<input name='options' type='radio' value='${index
                    }'><label>${element[0]}</label><br><br>`);
            });
            //修改按鈕上的文字為Next
            $("#startButton").attr("value", "Next");

        } else {
            //已經開始作答從這邊繼續
            //需要知道哪個選項被選取
            $.each($(":radio"), function (i, val) {
                if (val.checked) {
                    if (isNaN(questions[currentQuiz].answers[i][1])) {
                        let finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz = null;
                        $("#startButton").attr('value', '重新開始');

                        //已經要通往最終結果(A~D)
                    } else {
                        //正常跳下一題(原始資料為紙本資料, -1是要對照JS陣列)
                        currentQuiz = questions[currentQuiz].answers[i][1] - 1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function (element, index, array) {
                            $("#options").append(`<input name='options' type='radio' value='${index
                                }'><label>${element[0]}</label><br><br>`);

                        });

                    }

                    return false;

                }
            });


        }
    });
});