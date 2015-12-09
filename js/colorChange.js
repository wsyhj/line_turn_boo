function RGB2RGBA(rgb_color,alp){
	//注：rgb_color的格式为#FFFFFFF
	var r = parseInt("0x" + rgb_color.substr(1,2));
	var g = parseInt("0x" + rgb_color.substr(3,2));
	var b = parseInt("0x" + rgb_color.substr(5,2));
	var a = alp;
	return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

function RGBA2RGB(rgba_color){
	//注：rgba_color的格式为rgba(0,0,0,0.1)
	var BGcolur = 1;
	var arr = rgba_color.split("(")[1].split(")")[0].split(",");
	var a = arr[3];
	var r = BGcolur * (1 - a) + arr[0] * a;
	var g = BGcolur * (1 - a) + arr[1] * a;
	var b = BGcolur * (1 - a) + arr[2] * a;
	return "rgb(" + r + "," + g + "," + b +")";
}