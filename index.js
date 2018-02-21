const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", () => {
	window.parent.postMessage("data1", "*");
});

button2.addEventListener("click", () => {
	window.parent.postMessage("data2", "*");
});