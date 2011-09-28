var glm = {
	io:{}
};
glm.io = {
	println:function(str) {
		document.write(str+"<BR>");
		console.log(str);
	},
	printsp:function(str) {
		document.write(str+"&nbsp;");
		console.log(str);
	},
	printdv:function(str) {
		div = document.getElementById("result");
		div.innerHTML = str;
		console.log(str);
	},
	printst:function(str) {
		document.status = str;
		console.log(str);
	},
	println_doc:function(str) {
		document.write(str+"<BR>");
	},
	printsp_doc:function(str) {
		document.write(str+"&nbsp;");
	},
	print_array:function(ar) {
		this.println(ar.length+":\t"+ar.join("\t"));
	},
	print_date:function(d) {
		this.println(d.toString());
	},
	print_to_bt:function(bt,str) {
		bt.value = str;
	},
	print_to_div: function(dv, str) {
		div = document.getElementById(dv);
		div.innerHTML = str;
	}
}