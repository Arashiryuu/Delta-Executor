//META{"name":"hashTagging"}*//

function hashTagging() {}

function processChat() {
	setTimeout(function() {
		$(".comment .body .markup:not(.line-scanned), .comment .markup>span:not(.line-scanned)").each(function() {
			var tagRegex = /#\w+/igm;
			var html = $(this).html();
			$(this).html(html.replace(tagRegex, `<span style='color: #3898FF;'>$&</span>`));
		}).addClass("line-scanned");
	},250);
};

hashTagging.prototype.load = function() {};

hashTagging.prototype.unload = function() {};

hashTagging.prototype.start = function () { processChat(); };	

hashTagging.prototype.onMessage = function () { processChat(); };	

hashTagging.prototype.onSwitch = function () { processChat(); };	

hashTagging.prototype.stop = function () {};

hashTagging.prototype.getName = function () {
    return "hashTagging";
};

hashTagging.prototype.getDescription = function () {
    return "Send a message with \"#\" at the start to hashtag.";
};

hashTagging.prototype.getVersion = function () {
    return "1.0a";
};

hashTagging.prototype.getAuthor = function () {
    return "Arash";
};

hashTagging.prototype.getSettingsPanel = function () {
};
/*@end @*/
