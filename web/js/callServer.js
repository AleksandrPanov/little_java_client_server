function callServer(a, b, c){
    var url="/server?a="+a+"&b="+b+"&c="+c;
    var ajaxReq=new XMLHttpRequest();
    ajaxReq.onreadystatechange=function(){
        parseResponce(ajaxReq,a,b,c);
    };
    ajaxReq.open("GET", url, true);
    ajaxReq.send("");
}



function parseResponce(ajaxReq,a,b,c){
    if (ajaxReq.readyState==4)
        if (ajaxReq.status==200){
            var strRes=ajaxReq.responseText;
            pushNewRow(a,b,c,strRes);         
        }
        else
		{
			alert("Ошибка соединения с сервером");
		}
}

function pushNewRow(a, b, c, col2)
{
	var tr1 = '<tr class ="row" onclick="deleteRow(this)">';
	var tr2 = '</tr>';
	var td1 = '<td>';
	var td2 = '</td>';
	var col1 = ''+a+'x<sup>2</sup>+'+b+'x + '+c+' = 0';
	$('#myTable > tbody:last').append(tr1+td1+col1+td2+td1+col2+td2+tr2);
}