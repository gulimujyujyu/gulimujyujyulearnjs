Chapter 1.
===

Keypoints
---

* font-family. face of font.
	* serif. _Times New Roman_
	* sans-serif. _Helvetica_
	* cursive. _Zapf-Chancery_
	* monospace. _Courier_
	* fantasy. _Western_
* font-style. italic.
* font-weight. 
* font-variant. small-caps?
* font-size. 
	* font size cannot make every line of the same height, but _line_height_ can.
 	* h1:xx-large, h6:x-small, h4:medium.
	* 1em == 100%.
	* default: 16px == font-size of body.
	> So normally, we will set 
	> body {
	>	 font-size: 10px;		
	> }
	> Then _1em_ will be 10px.
* font. [ (font-style || font-variant || font-weight)? font-size (/ line-weight)? font-family]
	* only font-family contains comma.