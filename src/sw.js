export default function sw() {
	console.log("sw");
	chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
		console.log("sw request", message);
	});
}