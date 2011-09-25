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
	}
}