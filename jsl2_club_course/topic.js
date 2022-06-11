let topic = [
    "暫停-尚未開學",
    "暫停-國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];


let startDate = new Date();
//網頁執行到此會取得此刻的時間點

function setMonthAndDay(startMonth, startDay) {
    //此function讓我們可設定月份(0~11)和日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    //使用此函數設定月日(月份-1換成一般對應)
    //時(不需要)/分(不需要)/秒(不需要)
};
//let format = new simpleDateFormat("yyyy-MM-dd");會出現錯誤,可能跟jQuery不合,或者需要import,或語法錯誤
//format.format(setMonthAndDay(2,21));
setMonthAndDay(2,21);