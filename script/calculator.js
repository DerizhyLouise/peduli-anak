const calcAgain = () => {
	const form = document.getElementById("calculator");
	const result = document.getElementById("calculatorResult");
	form.classList.add("block");
	form.classList.remove("hidden");
	result.classList.add("hidden");
	result.classList.remove("block");
	title.innerHTML = `Kalkulator Stunting`;

	window.location.href = "#";
};

const role = sessionStorage.getItem("role");
if (!role) {
	window.location.href = "./login.html";
}

const calculateAll = () => {
	const gender = document.querySelector('input[name="gender"]:checked').value;
	const height = parseFloat(document.getElementById("height").value);
	const weight = parseFloat(document.getElementById("weight").value);
	const age = parseFloat(document.getElementById("age").value);

	calculateStunting(gender, height, age);
	calculateWasting(gender, weight, age);

	document.getElementById("resultGender").innerText =
		gender == "male" ? "Laki-Laki" : "Perempuan";
};

const calculateStunting = (gender, height, age) => {
	const medianHeight = getMedianHeight(gender, age);
	const sdHeight = getStandardDeviationHeight(gender, age);
	const zScoreHeight = (height - medianHeight) / sdHeight;

	let stuntingResult = "";
	if (zScoreHeight < -3) {
		stuntingResult = "Sangat Stunting";
		document.getElementById("ifStunted").classList.remove("hidden");
	} else if (zScoreHeight < -2) {
		stuntingResult = "Stunting";
		document.getElementById("ifStunted").classList.remove("hidden");
	} else {
		stuntingResult = "Tidak Stunting";
		document.getElementById("ifStunted").classList.add("hidden");
	}

	document.getElementById("kesimpulan1").innerText = stuntingResult;
	document.getElementById("input1").innerText = height;
	document.getElementById("avg1").innerText = medianHeight;
	document.getElementById("sd1").innerText = sdHeight;
	document.getElementById("z1").innerText = zScoreHeight;
};

const calculateWasting = (gender, weight, age) => {
	const medianWeight = getMedianWeight(gender, age);
	const sdWeight = getStandardDeviationWeight(gender, age);
	const zScoreWeight = (weight - medianWeight) / sdWeight;
	let wastingResult = "";
	if (zScoreWeight < -3) {
		wastingResult = "Berat Badan Sangat Kurang";
		document.getElementById("ifWasted").classList.remove("hidden");
	} else if (zScoreWeight < -2) {
		wastingResult = "Berat Badan Kurang";
		document.getElementById("ifWasted").classList.remove("hidden");
	} else {
		wastingResult = "Berat Badan Normal";
		document.getElementById("ifWasted").classList.add("hidden");
	}

	document.getElementById("kesimpulan2").innerText = wastingResult;
	document.getElementById("input2").innerText = weight;
	document.getElementById("avg2").innerText = medianWeight;
	document.getElementById("sd2").innerText = sdWeight;
	document.getElementById("z2").innerText = zScoreWeight;
};

const getMedianHeight = (gender, age) => {
	const maleMedianHeights = [
		49.9, 54.7, 58.4, 61.4, 63.9, 65.9, 67.6, 69.2, 70.6, 72.0, 73.3, 74.5,
		75.7, 76.9, 78.0, 79.1, 80.2, 81.2, 82.3, 83.2, 84.2, 85.1, 86.0, 87.0,
		87.8, 88.7, 89.6, 90.4, 91.3, 92.1, 93.0, 93.8, 94.6, 95.4, 96.2, 97.0,
		97.7, 98.5, 99.2, 99.9, 100.6, 101.3, 102.0, 102.7, 103.4, 104.0, 104.7,
		105.3, 106.0, 106.6, 107.2, 107.8, 108.4, 109.0, 109.6, 110.2, 110.7,
		111.3, 111.9, 112.4,
	];
	const femaleMedianHeights = [
		49.1, 53.7, 57.1, 59.8, 62.1, 64.0, 65.7, 67.3, 68.7, 70.1, 71.5, 72.8,
		74.0, 75.2, 76.4, 77.5, 78.6, 79.7, 80.7, 81.7, 82.7, 83.7, 84.6, 85.5,
		86.4, 87.3, 88.2, 89.0, 89.9, 90.7, 91.5, 92.3, 93.1, 93.9, 94.7, 95.5,
		96.1, 96.8, 97.5, 98.1, 98.8, 99.4, 100.0, 100.6, 101.2, 101.8, 102.4,
		103.0, 103.6, 104.1, 104.7, 105.2, 105.7, 106.3, 106.8, 107.3, 107.8,
		108.3, 108.8, 109.3,
	];

	if (gender === "male") {
		return maleMedianHeights[age];
	} else {
		return femaleMedianHeights[age];
	}
};

const getStandardDeviationHeight = (gender, age) => {
	const maleSDHeights = [
		1.9, 1.9, 2.0, 2.1, 2.1, 2.2, 2.3, 2.3, 2.4, 2.4, 2.5, 2.5, 2.6, 2.6,
		2.7, 2.7, 2.8, 2.8, 2.9, 2.9, 2.9, 3.0, 3.0, 3.0, 3.1, 3.1, 3.1, 3.2,
		3.2, 3.2, 3.2, 3.3, 3.3, 3.3, 3.3, 3.4, 3.4, 3.4, 3.4, 3.5, 3.5, 3.5,
		3.5, 3.5, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.7, 3.7, 3.7, 3.7, 3.7,
		3.7, 3.7, 3.7, 3.8,
	];
	const femaleSDHeights = [
		1.9, 1.8, 1.9, 1.9, 2.0, 2.0, 2.1, 2.1, 2.2, 2.2, 2.3, 2.3, 2.4, 2.4,
		2.4, 2.5, 2.5, 2.6, 2.6, 2.6, 2.7, 2.7, 2.7, 2.8, 2.8, 2.8, 2.9, 2.9,
		2.9, 3.0, 3.0, 3.0, 3.1, 3.1, 3.1, 3.2, 3.2, 3.2, 3.2, 3.3, 3.3, 3.3,
		3.3, 3.3, 3.4, 3.4, 3.4, 3.4, 3.4, 3.4, 3.4, 3.5, 3.5, 3.5, 3.5, 3.5,
		3.5, 3.5, 3.5, 3.6,
	];

	if (gender === "male") {
		return maleSDHeights[age];
	} else {
		return femaleSDHeights[age];
	}
};

const getMedianWeight = (gender, age) => {
	const maleMedianWeights = [
		3.3, 4.5, 5.6, 6.4, 7.0, 7.5, 7.9, 8.3, 8.6, 8.9, 9.2, 9.4, 9.6, 9.8,
		10.0, 10.2, 10.4, 10.6, 10.9, 11.1, 11.3, 11.5, 11.8, 12.0, 12.2, 12.5,
		12.7, 12.9, 13.2, 13.4, 13.6, 13.8, 14.0, 14.2, 14.4, 14.6, 14.8, 15.0,
		15.2, 15.4, 15.6, 15.8, 16.0, 16.2, 16.4, 16.6, 16.8, 17.0, 17.2, 17.4,
		17.6, 17.8, 18.0, 18.2, 18.4, 18.6, 18.8, 19.0, 19.2, 19.4,
	];
	const femaleMedianWeights = [
		3.2, 4.2, 5.1, 5.8, 6.4, 6.9, 7.3, 7.7, 8.0, 8.3, 8.6, 8.9, 9.2, 9.4,
		9.6, 9.8, 10.0, 10.3, 10.5, 10.7, 10.9, 11.1, 11.3, 11.5, 11.8, 12.0,
		12.2, 12.4, 12.6, 12.8, 13.0, 13.2, 13.4, 13.6, 13.8, 14.0, 14.2, 14.4,
		14.6, 14.8, 15.0, 15.2, 15.4, 15.6, 15.8, 16.0, 16.2, 16.4, 16.6, 16.8,
		17.0, 17.2, 17.4, 17.6, 17.8, 18.0, 18.2, 18.4, 18.6, 18.8,
	];

	if (gender === "male") {
		return maleMedianWeights[age];
	} else {
		return femaleMedianWeights[age];
	}
};

const getStandardDeviationWeight = (gender, age) => {
	const maleSDWeights = [
		0.5, 0.6, 0.6, 0.7, 0.7, 0.8, 0.8, 0.8, 0.9, 0.9, 0.9, 0.9, 1.0, 1.0,
		1.0, 1.0, 1.1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.3,
		1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5,
		1.5, 1.5, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6,
		1.6, 1.6, 1.6, 1.6,
	];
	const femaleSDWeights = [
		0.5, 0.6, 0.6, 0.6, 0.7, 0.7, 0.7, 0.8, 0.8, 0.8, 0.8, 0.9, 0.9, 0.9,
		0.9, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.1, 1.1, 1.1, 1.1, 1.1, 1.2, 1.2,
		1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3,
		1.3, 1.3, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4,
		1.4, 1.4, 1.4, 1.4,
	];

	if (gender === "male") {
		return maleSDWeights[age];
	} else {
		return femaleSDWeights[age];
	}
};
