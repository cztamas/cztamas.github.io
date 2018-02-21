const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const data1 = `
	<html>
		<body>
			<h1>This is data1</h1>
		</body>
	</html>
`;

const data2 = `
	<html>
		<body>
			<h1>This is data2</h1>
		</body>
	</html>
`;

button1.addEventListener("click", () => {
	window.parent.postMessage(data1, "*");
});

button2.addEventListener("click", () => {
	window.parent.postMessage(data2, "*");
});