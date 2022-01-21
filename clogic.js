const getMonth = () =>{
    let month = document.getElementById("months").value;
    console.log(month);
    var m,q;
    switch (month){
        case "jan":
            m = "JANUARY";
            q = "Success is getting what you want. Happiness is wanting what you get";
            const jan= [["","","","","",1,2],[3,4,5,6,7,8,9],[10,11,12,13,14,15,16],[17,18,19,20,21,22,23],[24,25,26,27,28,29,30],[31,"","","","","",""]];
            callMe(jan,m,q);
            break;
        case "feb":
            m = "FEBRUARY";
            q = "If you fell down yesterday, stand up today";
            const feb=[["",1,2,3,4,5,6],[7,8,9,10,11,12,13],[14,15,16,17,18,19,20],[21,22,23,24,25,26,27],[28,"","","","","",""]]; 
            callMe(feb,m,q);
            break;
        case "mar":
            m = "MARCH";
            q = "We have plenty of tomorrows to compensate for the wrongs made yesterday";
            const mar=[["",1,2,3,4,5,6],[7,8,9,10,11,12,13],[14,15,16,17,18,19,20],[21,22,23,24,25,26,27],[28,29,30,31,"","",""]];
            callMe(mar,m,q);
            break;
        case "apr":
            m = "APRIL";
            q = "I have not failed. I've just found 10,000 ways that won't work";
            const apr=[["","","","",1,2,3],[4,5,6,7,8,9,10],[11,12,13,14,15,16,17],[18,19,20,21,22,23,24],[25,26,27,28,29,30,""]];
            callMe(apr,m,q);
            break;
        case "may":
            m = "MAY";
            q = "It is never too late to be what you might have been";
            const may=[["","","","","","",1],[2,3,4,5,6,7,8],[9,10,11,12,13,14,15],[16,17,18,19,20,21,22],[23,24,25,26,27,28,29],[30,31,"","","","",""]];
            callMe(may,m,q);
            break;
        case "jun":
            m = "JUNE";
            q = "If there is no struggle, there is no progress";
            const jun=[["","",1,2,3,4,5],[6,7,8,9,10,11,12],[13,14,15,16,17,18,19],[20,21,22,23,24,25,26],[27,28,29,30,"","",""]];
            callMe(jun,m,q);
            break;
        case "jul":
            m = "JULY";
            q = "No matter what happens, or how bad it seems today, life does go on, and it will be better tomorrow";
            const jul=[["","","","",1,2,3],[4,5,6,7,8,9,10],[11,12,13,14,15,16,17],[18,19,20,21,22,23,24],[25,26,27,28,29,30,31]];
            callMe(jul,m,q);
            break;
        case "aug":
            m = "AUGUST";
            q = "Let go of the past. Embrace the new month. May you have beautiful days ahead";
            const aug=[[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21],[22,23,24,25,26,27,28],[29,30,31,"","","",""]];
            callMe(aug,m,q);
            break;
        case "sep":
            m = "SEPTEMBER";
            q = "Here’s to a month of possibilities, overcoming challenges and all-round success";
            const sep=[["","","",1,2,3,4],[5,6,7,8,9,10,11],[12,13,14,15,16,17,18],[19,20,21,22,23,24,25],[26,27,28,29,30,"",""]];
            callMe(sep,m,q);
            break;
        case "oct":
            m = "OCTOBER";
            q = "This month, expect to be victorious, expect to win, and expect to shine";
            const oct=[["","","","","",1,2],[3,4,5,6,7,8,9],[10,11,12,13,14,15,16],[17,18,19,20,21,22,23],[24,25,26,27,28,29,30],[31,"","","","","",""]];
            callMe(oct,m,q);
            break;
        case "nov":
            m = "NOVEMBER";
            q = "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning";
            const nov=[["",1,2,3,4,5,6],[7,8,9,10,11,12,13],[14,15,16,17,18,19,20],[21,22,23,24,25,26,27],[28,29,30,"","","",""]];
            callMe(nov,m,q);
            break;
        case "dec":
            m = "DECEMBER";
            q = "It’s the possibility of having a dream come true that makes life interesting";
            const dec=[["","","",1,2,3,4],[5,6,7,8,9,10,11],[12,13,14,15,16,17,18],[19,20,21,22,23,24,25],[26,27,28,29,30,31,""]];
            callMe(dec,m,q);
    }
}


function callMe(val,m,q){
    console.log(m);
    document.getElementById("mon").innerHTML = m;
    document.getElementById("quot").innerHTML = "<q>"+q+"</q>";
    var res = ""
    for (var i = 0; i < val.length; i++) {
    res += "<tr>";
    var numbers2 = val[i]
    for (var j = 0; j < numbers2.length; j++) {
        res +="<td class='p-3 fw-bold'>" + numbers2[j] + "</td>";
    }

    res += "<tr>";
    }
    document.getElementById("caldates").innerHTML = res;
}
