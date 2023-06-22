let quick_link_args_count = null;
let newtab = null;
let remove_enable = false;
let serach_engine = "g";
let focusClip = null;
let bgswitch = "true";
let bg_custom_url_white = null;
let bg_custom_url_dark = null;

$(document).ready(function(){
    $("#msg_invalid").hide();
    $(".setting_window").hide();
    load_local_storage();
    if ($('#Search_Bar_Entity').val()==undefined || $('#Search_Bar_Entity').val()==null || $('#Search_Bar_Entity').val()==""){
        $('.autoComArea').hide();
    }else{
        $('.autoComArea').show();
    }
});

function load_local_storage(){
    //배경
    bgswitch = localStorage.getItem("bg_default");
    bg_custom_url_white = localStorage.getItem("bg_custom_url_white");
    bg_custom_url_dark = localStorage.getItem("bg_custom_url_dark");
    if (bgswitch==null || bgswitch == undefined || bgswitch == "true"){
        localStorage.setItem("bg_default","true");
        $("#default_BG").prop("checked", true);
        $('#bg_url_dark').val(bg_custom_url_dark);
        $('#bg_url_white').val(bg_custom_url_white);
        $('html').css("background-image","url(\"./resource/BGIW.png\")");
        $('html.dark').css("background-image","url(\"./resource/BGIB.png\")");
    }else if(bgswitch == "false"){
        $("#custom_BG").prop("checked", true);
        $('#bg_url_dark').val(bg_custom_url_dark);
        $('#bg_url_white').val(bg_custom_url_white);
        $('html').css("background-image","url(\""+$('#bg_url_white').val()+"\")");
        $('html.dark').css("background-image","url(\""+$('#bg_url_dark').val()+"\")");
    }

        // 새탭여부 불러오기
    newtab = localStorage.getItem("newTabEnable");
    serach_engine = localStorage.getItem("serach_engine");
    if (serach_engine==null || serach_engine==undefined){
        serach_engine="g";
        localStorage.setItem("serach_engine","g");
    }

    if (newtab=="true"){
        newtab = Boolean(true);
    }else{
        newtab = Boolean(false);
    }

    focusClip = localStorage.getItem("focusClipEnable");
    if (focusClip=="true"){
        focusClip = Boolean(true);
        $("#focusClipEnable").prop("checked", true);
    }else if(focusClip=="false"){
        focusClip = Boolean(false);
        $("#focusClipEnable").prop("checked", false);
    }else{
        focusClip = Boolean(true);
        $("#focusClipEnable").prop("checked", true);
        localStorage.setItem("focusClipEnable","true");
    }

    // console.log("newtab:"+newtab);
    if (newtab==true){
        $("#newTabEnable").prop("checked", true);
    }else if (newtab==false){
        $("#newTabEnable").prop("checked", false);
    }else{
        $("#newTabEnable").prop("checked", true);
        localStorage.setItem("newTabEnable","true");
    }

    //검색엔진
    var engine_list = ['#google','#naver','#stackoverflow','#youtube'];
    for (var i in engine_list){
        $(engine_list[i]).removeAttr('style');
    }
    switch(serach_engine){
        case "g":
            $('#google').css({
                'color': 'purple'
            });
            break;
        case "n":
            $('#naver').css({
                'color': 'green'
            });
            break;
        case "s":
            $('#stackoverflow').css({
                'color': 'orange'
            });
            break;
        case "y":
            $('#youtube').css({
                'color': 'red'
            });
            break;

    }

    //quickLink 불러오기작업
    $('.MainMenu_table th').remove();
    $('.set_MainMenu_table th').remove();
    quick_link_args_count = Number(localStorage.getItem("quick_link_args_count"));
    if (quick_link_args_count==null || quick_link_args_count==0){ 
        quick_link_args_count = 0;
    }else{
        // console.log(quick_link_args_count);
        for(var i = 0; i<quick_link_args_count;i++){
            var link = localStorage.getItem("quick_link_arg_"+i+"_link");
            var name = localStorage.getItem("quick_link_arg_"+i+"_name");
            if(newtab==true){
                $('.MainMenu_table').append("<th class=\"MainMenu_table_th\" onclick=\"window.open('"+link+"')\">"+name+"</th>");
            }else{
                $('.MainMenu_table').append("<th class=\"MainMenu_table_th\" onclick=\"location.href='"+link+"'\">"+name+"</th>");
            }
            
            
            // $('.set_MainMenu_table').append("<th class=\"MainMenu_table_th\" onclick=\"edit_quick_link("+link+","+name+")\">"+name+"</th>");
            $('.set_MainMenu_table').append("<th class=\"set_MainMenu_table_th\" onclick=\"edit_quick_link("+i+",'"+link+"',"+"'"+name+"'"+")\">"+name+"</th>");

        }
    }
    // console.log(quick_link_args_count);


}

function edit_quick_link(number,link,name){
    var modify_value_arg_name;
    var modify_value_arg_link;
    if (remove_enable==true){
        if(confirm("해당 내용이 지워집니다. 계속 하시겠습니까?")){
            for(var i = Number(number);i<Number(quick_link_args_count);i++){
                if (i==Number(quick_link_args_count)-1){
                    localStorage.removeItem("quick_link_arg_"+i+"_name");
                    localStorage.removeItem("quick_link_arg_"+i+"_link");
                }
                var temp_name = localStorage.getItem("quick_link_arg_"+(i+1)+"_name");
                var temp_link = localStorage.getItem("quick_link_arg_"+(i+1)+"_link");
                localStorage.setItem("quick_link_arg_"+i+"_name",temp_name);
                localStorage.setItem("quick_link_arg_"+i+"_link",temp_link);

            }
            quick_link_args_count-=1;
            localStorage.setItem("quick_link_args_count",quick_link_args_count);
        }
        
    }else{
        modify_value_arg_name = prompt("\""+name+"\"의 이름을 수정해 주세요.",name);
        modify_value_arg_link = prompt("\""+modify_value_arg_name+"\"의 링크를 수정해 주세요.",link);
    
        localStorage.setItem("quick_link_arg_"+number+"_link",modify_value_arg_link);
        localStorage.setItem("quick_link_arg_"+number+"_name",modify_value_arg_name);
    }


    load_local_storage();
}

function append_quick_link(){
    var append_value_arg_name;
    var append_value_arg_link;

    append_value_arg_name = prompt("이름을 추가해 주세요.");
    append_value_arg_link = prompt("링크를 추가해 주세요.");

    $('.MainMenu_table').append("<th class=\"MainMenu_table_th\" onclick=\"window.open('"+append_value_arg_link+"')\">"+append_value_arg_name+"</th>");
    $('.set_MainMenu_table').append("<th class=\"set_MainMenu_table_th\" onclick=\"edit_quick_link("+quick_link_args_count+","+append_value_arg_link+","+append_value_arg_name+")\">"+append_value_arg_name+"</th>");

    localStorage.setItem("quick_link_arg_"+quick_link_args_count+"_link",append_value_arg_link);
    localStorage.setItem("quick_link_arg_"+quick_link_args_count+"_name",append_value_arg_name);

    quick_link_args_count += 1;

    localStorage.setItem("quick_link_args_count",quick_link_args_count);

    load_local_storage();
}

function remove_quick_link(){
    if ($("#remove_link").prop("checked")){
        remove_enable = true;
    }else{
        remove_enable = false;
    }
}

const storedTheme = localStorage.getItem("darkTheme");

if (storedTheme !== null) {
    if (storedTheme === "true") {
        document.documentElement.classList.add("dark");
    }
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
}

document.getElementById("toggleTheme").addEventListener("click",() => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("darkTheme", "false");
    } else {
        html.classList.add("dark");
        localStorage.setItem("darkTheme", "true");
    }

    load_local_storage();
})

window.addEventListener('paste', ({ clipboardData: { items } }) => {
    for (const item of items) {
        if (item.type.includes('image')) {
            msg_invalidMessage("이미지는 붙여놓기를 지원하지 않습니다.");
            // const blob = item.getAsFile();
        }

        if (item.type === 'text/plain' && focusClip==true) {
            item.getAsString((text) => {
                go_search(text,serach_engine);
            });
        }
    }
});

var columnCount = $('.MainMenu_table').find('th').length;
// console.log(columnCount);


//시계부분
function clock_fun_write(){
    clock_fun(5);
}
function clock_fun(returnNUMBER){
    var date = new Date();
    var YYYY = String(date.getFullYear());
    var MM = String(date.getMonth() + 1);
    var DD = Zero(date.getDate());
    var hh = Zero(date.getHours());
    var mm = Zero(date.getMinutes());
    var ss = Zero(date.getSeconds());
    var Week = Weekday();


   //시계에 1의자리수가 나올때 0을 넣어주는 함수 (ex : 1초 -> 01초)

    function Zero(num) {
        return (num < 10 ? '0' + num : '' + num); //10보다작을경우 앞에 0을 붙여준다.
    }
    function Weekday() {
        var Week = ['일', '월', '화', '수', '목', '금', '토'];
        var Weekday = date.getDay();
        return Week[Weekday];
    }
    switch(returnNUMBER){
        case 1:
            return MM+"/"+DD+ " "+ "("+ Week + ") "+ hh +":"+ mm +"";

        case 2:
            return MM+"/"+DD+ "/"+ Week + "/"+ hh +":"+ mm +"."+ss;

        case 3:
            return YYYY+"_"+MM+"_"+DD+"_"+hh+"_"+mm+"_"+ss;

        case 4:
            return MM+"/"+DD+ "\n"+ hh +":"+ mm +"";
        
        case 5:
            Write(YYYY, MM, DD, hh, mm, ss, Week);
            break;
            
    }
    function Write(YYYY, MM, DD, hh, mm, ss, Week){
        $("#Clockday").text(YYYY + ' 년 ' + MM + ' 월 ' + DD + ' 일 ' +'\n'+' (' + Week + ')');
        $("#Clock").text(hh + ':' + mm + ':' + ss);

    }
}

//저장

function export_settings(){

    var data = [];

    for (var i=0; i<quick_link_args_count; i++){
        item = {
            arg_name: localStorage.getItem("quick_link_arg_"+i+"_name"),
            arg_link: localStorage.getItem("quick_link_arg_"+i+"_link")
        };
        data.push(item);
    }

    var backup_day = {
        backup_day: String(clock_fun(3))
    };

    data.push(backup_day);

    var bak_newtab ={
        newtab: newtab
    };

    data.push(bak_newtab);

    var bak_focusClip ={
        focusClip: focusClip
    }

    data.push(bak_focusClip);

    var bak_serach_engine={
        serach_engine: serach_engine
    }

    data.push(bak_serach_engine);

    var bak_bgswitch ={
        bgswitch: bgswitch
    };

    data.push(bak_bgswitch);

    var bak_bg_custom_url_white = {
        bg_custom_url_white: bg_custom_url_white
    };

    data.push(bak_bg_custom_url_white);

    var bak_bg_custom_url_dark = {
        bg_custom_url_dark: bg_custom_url_dark
    };

    data.push(bak_bg_custom_url_dark);

    var quick_link_args_count_bak ={
        quick_link_args_count: quick_link_args_count
    };

    data.push(quick_link_args_count_bak);

    var json_Data = JSON.stringify(data,null,4);
    // console.log(json_Data);

    const out_all_backup = () => {
        let contents = json_Data;
            let fileDown =
            "data:text;charset=utf-8," + contents;
            
            let encodedUri = encodeURI(fileDown);
            let link = document.createElement("a");
              
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", String(clock_fun(3)+"_all_backup.json"));
              
            document.body.appendChild(link);
          
            link.click();
          
            document.body.removeChild(link);

    }

    out_all_backup();
}

//복원

const fileInput = $("#file").get(0);
fileInput.onchange = () => {
    const selectedFile = fileInput.files[0];
    // console.log(selectedFile);
    var fr = new FileReader();
    fr.readAsText(selectedFile, "utf-8");
    fr.onload = () => {
        parJSON(fr.result);
    }
};

function parJSON(json){
    data = JSON.parse(json);
    maxDataIDX = data.length;

    for (var i=0; i<maxDataIDX;i++){
        if (data[i].arg_name!=null || data[i].arg_name!=undefined){
            localStorage.setItem("quick_link_arg_"+i+"_name",data[i].arg_name);
            localStorage.setItem("quick_link_arg_"+i+"_link",data[i].arg_link);
        }else if(data[i].newtab!=null || data[i].newtab!=undefined){
            localStorage.setItem("newTabEnable",String(data[i].newtab));
        }else if(data[i].focusClip!=null || data[i].focusClip!=undefined){
            localStorage.setItem("focusClipEnable",String(data[i].focusClip));
        }else if(data[i].serach_engine!=null || data[i].serach_engine!=undefined){
            localStorage.setItem("serach_engine",String(data[i].serach_engine));
        }else if(data[i].bg_custom_url_dark!=null || data[i].bg_custom_url_dark!=undefined){
            localStorage.setItem("bg_custom_url_dark",String(data[i].bg_custom_url_dark));
        }else if(data[i].bg_custom_url_white!=null || data[i].bg_custom_url_white!=undefined){
            localStorage.setItem("bg_custom_url_white",String(data[i].bg_custom_url_white));
        }else if(data[i].bgswitch!=null || data[i].bgswitch!=undefined){
            localStorage.setItem("bg_default",String(data[i].bgswitch));
        }

        if (i==maxDataIDX-1){
            localStorage.setItem("quick_link_args_count",data[i].quick_link_args_count);
        }
    }
    load_local_storage();
}

function press_enter(){
    go_search($('#Search_Bar_Entity').val(),serach_engine);
}

function go_search(text,engine){
    if (newtab){
        run_search(text,engine,true);
    }else{
        run_search(text,engine,false);
    }
    function run_search(text,engine,newtab){
        switch(engine){
            case "g":
                if(newtab==true){
                    window.open("https://www.google.com/search?q="+text,'_blank');
                }else{
                    location.href = "https://www.google.com/search?q="+text;
                }
                break;
            case "n":
                if(newtab==true){
                    window.open("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query="+text,'_blank');
                }else{
                    location.href = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query="+text;
                }
                break;
            case "s":
                if(newtab==true){
                    window.open("https://stackoverflow.com/search?q="+text,'_blank');
                }else{
                    location.href = "https://stackoverflow.com/search?q="+text;
                }
                break;
            case "y":
                if(newtab==true){
                    window.open("https://www.youtube.com/results?search_query="+text,'_blank');
                }else{
                    location.href = "https://www.youtube.com/results?search_query="+text;
                }
                break;

        }
    }
}

function newtabcheck(){
    if ($("#newTabEnable").prop("checked")){
        localStorage.setItem("newTabEnable","true");
        newtab = true;
    }else{
        localStorage.setItem("newTabEnable","false");
        newtab = false;
    }
    load_local_storage();
}

function searchEngine(engine){
    switch(engine){
        case "g":
            serach_engine="g";
            localStorage.setItem("serach_engine","g");
            break;
        case "n":
            serach_engine="n";
            localStorage.setItem("serach_engine","n");
            break;
        case "s":
            serach_engine="s";
            localStorage.setItem("serach_engine","s");
            break;
        case "y":
            serach_engine="y";
            localStorage.setItem("serach_engine","y");
            break;
    }
    load_local_storage();

}

function focusClipEnable(){
    if ($("#focusClipEnable").prop("checked")){
        localStorage.setItem("focusClipEnable","true");
        focusClip = true;
    }else{
        localStorage.setItem("focusClipEnable","false");
        focusClip = false;
    }
    load_local_storage();
}

//자동완성
document.cookie = "safeCookie1=foo; SameSite=Lax"; 
document.cookie = "safeCookie2=foo"; 
document.cookie = "crossCookie=bar; SameSite=None; Secure";
$('#Search_Bar_Entity').keyup(function(){
    $.ajax({
        url: "https://suggestqueries.google.com/complete/search?output=chrome&hl=ko&q="+$('#Search_Bar_Entity').val(),
        dataType: "jsonp",
        method: "GET"   
    })
    .done(function(json) {
        $('.autoComArea').show();
        $('.autoCom').empty();
        // console.log(json[1].length);
        // console.log(json[1]);
        // console.log(json[1][1]);
        var lengJson = 5;
        if (lengJson>json[1].length){
            lengJson = json[1].length;
        }
        for (var i = 0; i <lengJson ; i++){
            // $('.tables').append(json[1][i]);
            if (json[1][i]!=undefined || json[1][i]!=null || json[1][i]!=""){
                $('.autoCom').append("<th class=\"MainMenu_table_th\" onclick=\"$('#Search_Bar_Entity').val(\'"+json[1][i]+"\'); press_enter(); \">"+json[1][i]+"</th>");
            }
        }
        if (json[1].length==0){
            $('.autoComArea').hide();
        }

    })
});

//배경변경
function set_BGimg(){
    if($('input[name="sel_BG"]:checked').val()=="default_BG"){
        localStorage.setItem("bg_default","true");
        $('html').css("background-image","url(\"./resource/BGIW.png\")");
        $('html.dark').css("background-image","url(\"./resource/BGIB.png\")");
    }else if($('input[name="sel_BG"]:checked').val()=="custom_BG"){
        localStorage.setItem("bg_default","false");
        $('html').css("background-image","url(\""+$('#bg_url_white').val()+"\")");
        $('html.dark').css("background-image","url(\""+$('#bg_url_dark').val()+"\")");
        localStorage.setItem("bg_custom_url_white",$('#bg_url_white').val());
        localStorage.setItem("bg_custom_url_dark",$('#bg_url_dark').val());
    }
    load_local_storage();
}

//오류 메시지 출력
function msg_invalidMessage(msg){
    var time = 3000
    if ($("#msg_invalid").css("display") == 'none'){
        $("#msg_invalid").show();
        $("#msg_invalid").text(msg);
        setTimeout(function(){$("#msg_invalid").hide();}, time);
    }else{
        $("#msg_invalid").text(msg);
    }
}


setInterval(clock_fun_write, 1000);