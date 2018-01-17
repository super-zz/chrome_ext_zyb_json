console.log('执行init');
console.log(document.title);


function mcookie() {
	setCookie('FIS_DEBUG_DATA', '4f10e208f47bfb4d35a5e6f115a6df1a');
	location.reload();
};
if (!getCookie('FIS_SET')) {
	if(!getCookie('FIS_GET')){
		mcookie();	
		setCookie('FIS_GET', 1);
	}else{
		if (document.getElementById('json').checked) {

			delCookie('FIS_DEBUG_DATA');
			document.getElementById('render-btn').click();
			setCookie('FIS_SET', 1)
		}else{
			document.getElementById('json').click();
		}
	}
}

function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}

function setCookie(name,value)
{
	var Days = 30;
	var d = new Date();
	d.setFullYear(d.getFullYear() + 1);
	document.cookie = name + "="+ escape (value) + ";expires=" + d.toGMTString()+'path=/;';
}

function delCookie(name)
{
	var d = new Date();
	d.setTime(d.getTime() - 1);
	var cval = getCookie(name);
	if(cval != null)
	document.cookie = name + "="+cval+";expires="+d.toGMTString();
}