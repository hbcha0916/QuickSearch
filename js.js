let quick_link_args_count = null;
let newtab = null;
let remove_enable = false;

$(document).ready(function(){
    $("#msg_invalid").hide();
    $(".setting_window").hide();
    load_local_storage();

});

function load_local_storage(){
    //quickLink 불러오기작업
    $('.MainMenu_table th').remove();
    $('.set_MainMenu_table th').remove();
    quick_link_args_count = Number(localStorage.getItem("quick_link_args_count"));
    if (quick_link_args_count==null || quick_link_args_count==0){ 
        quick_link_args_count = 0;
    }else{
        console.log(quick_link_args_count);
        for(var i = 0; i<quick_link_args_count;i++){

            var link = localStorage.getItem("quick_link_arg_"+i+"_link");
            var name = localStorage.getItem("quick_link_arg_"+i+"_name");
            $('.MainMenu_table').append("<th class=\"MainMenu_table_th\" onclick=\"window.open('"+link+"')\">"+name+"</th>");
            // $('.set_MainMenu_table').append("<th class=\"MainMenu_table_th\" onclick=\"edit_quick_link("+link+","+name+")\">"+name+"</th>");
            $('.set_MainMenu_table').append("<th class=\"set_MainMenu_table_th\" onclick=\"edit_quick_link("+i+",'"+link+"',"+"\'"+name+"\'"+")\">"+name+"</th>");

        }
    }
    // console.log(quick_link_args_count);
    // 새탭여부 불러오기
    newtab = Boolean(localStorage.getItem("newTabEnable"));
    if (newtab){
        $("#newTabEnable").prop("checked", true);
    }else if (!newtab){
        $("#newTabEnable").prop("checked", false);
    }else{
        $("#newTabEnable").prop("checked", true);
        localStorage.setItem("newTabEnable","true");
    }

}

function edit_quick_link(number,link,name){
    var modify_value_arg_name;
    var modify_value_arg_link;
    if (remove_enable){
        localStorage.removeItem("quick_link_arg_"+number+"_link",modify_value_arg_link);
        localStorage.removeItem("quick_link_arg_"+number+"_name",modify_value_arg_name);
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
})

window.addEventListener('paste', ({ clipboardData: { items } }) => {
    for (const item of items) {
        if (item.type.includes('image')) {
            msg_invalidMessage("이미지는 붙여놓기를 지원하지 않습니다.");
            // const blob = item.getAsFile();
        }

        if (item.type === 'text/plain') {
            item.getAsString((text) => {
                console.log(text);
                go_search(text,"g");
                // window.open("https://www.google.com/search?q="+text,'_blank');
            });
        }
    }
});

var columnCount = $('.MainMenu_table').find('th').length;
console.log(columnCount);


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
        }

        if (i==maxDataIDX-1){
            localStorage.setItem("quick_link_args_count",data[i].quick_link_args_count);
        }
    }
    load_local_storage();
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
                if(newtab){
                    window.open("https://www.google.com/search?q="+text,'_blank');
                }else{
                    location.href = "https://www.google.com/search?q="+text;
                }

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