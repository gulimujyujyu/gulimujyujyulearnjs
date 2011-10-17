Chapter 1.
===

Keypoints
---

* float.
	* shrink-to-fit vs. expand-to-fit
	* no collapse occurs.
	* all element will be block as default.
* clear.
* vertical-align. (sub, super) (top, middle, bottom) (text-top, text-bottom) (percentage) different in height.
	* inline context.
	* table cell.
* deal with IE6
	* Conditional Comments
> <!--[if lte IE 6]-->
> <![endif]-->
	* _ for IE6, * for IE6, IE7

Bugs in IE6
---

* peek-a-boo. disappears sometime and reappears occasionally.
* guillotine. content cut in half.
* three-pixel jog. 3 pixels appear.
* double-margin. left or right margin doubles.