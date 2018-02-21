const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const data1 = `
	<html>
		<body>
			<h1>This is an Arnold</h1>
			<img src="https://chamaileon.io/img/team/arnold.png" />
		</body>
	</html>
`;

const data2 = `
	<html>
		<body>
			<h1>This is not an Arnold</h1>
			<img src="http://impressivemagazine.com/wp-content/uploads/2013/10/beer_glasses.jpeg" />
		</body>
	</html>
`;

button1.addEventListener("click", () => {
	window.parent.postMessage(data1, "*");
});

button2.addEventListener("click", () => {
	window.parent.postMessage(data2, "*");
});