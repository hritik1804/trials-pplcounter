function showtime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM"

    if(h==0)
    {
        h = 12; //12 hour format
    }
    if(h>12)
    {
        h = h - 12;
        session = "PM";//sets to pm
    }
    // if(h<10)
    // {
    //     h = "0"+h;
    // }
    // if(m<10)
    // {
    //     h = "0"+m;
    // }
    // if(s<10)
    // {
    //     h = "0"+s;
    // }
    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;

    document.getElementById("digital_clock").innerHTML = h + ":" + m + ":" + s + " " + session;

    setTimeout(showtime,1000);//referhes every millisecond 
}
showtime();