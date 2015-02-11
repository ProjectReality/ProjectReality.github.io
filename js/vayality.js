var date = new Date();
var userlang = window.navigator.language 

var load_lang = function (langstr) {
	$.getScript('js/lang.'+langstr+'.js', function(){
		for (var langid in lang) {
			$(".lang-"+langid).each(function(){$(this).html(lang[langid]);});
		}
	});
}

$( document ).ready(function() {
	$("#cur-year").html(date.getFullYear());
	$("#add-mail").html("<a href='mailto:contact@reality-project.org'>contact@reality-project.org</a>")

	if (userlang.indexOf("fr") > -1) {
		load_lang("fr");
	} else load_lang("en");

	$("#switch-lang-fr").click(function () {load_lang("fr");})
	$("#switch-lang-en").click(function () {load_lang("en");})
});

