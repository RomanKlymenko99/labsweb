function calculateArea() {
    let sideA = parseFloat(document.getElementById("sideA").value);
    let sideB = parseFloat(document.getElementById("sideB").value);
    let sideC = parseFloat(document.getElementById("sideC").value);

    let s = (sideA + sideB + sideC) / 2;

    let area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    document.getElementById("result").innerHTML = "Площа трикутника " + area.toFixed(2); }

function calculateArea1() {
    let sideA = parseFloat(document.getElementById("sideA").value);
    let sideB = parseFloat(document.getElementById("sideB").value);
    let angle = parseFloat(document.getElementById("angle").value);

    let angleInRadians = (angle * Math.PI) / 180;

   let area = 0.5 * sideA * sideB * Math.sin(angleInRadians);

    document.getElementById("result1").innerHTML = "Площа трикутника " + area.toFixed(2);}

function calculateArea2() {
    let side = parseFloat(document.getElementById("side").value);
    let height = parseFloat(document.getElementById("height").value);

    let area = 0.5 * side * height;
    document.getElementById("result2").innerHTML = "Площа трикутника " + area.toFixed(2);}

function calculateArea3() {
    letsideA = parseFloat(document.getElementById("sideA").value);
    let sideB = parseFloat(document.getElementById("sideB").value);
    let sideC = parseFloat(document.getElementById("sideC").value);
    let radius = parseFloat(document.getElementById("radius").value);

    let s = (sideA + sideB + sideC) / 2;
    let triangleArea = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    let circleRadius = (sideA * sideB * sideC) / (4 * triangleArea);

    document.getElementById("result3").innerHTML = "Площа трикутника " + triangleArea.toFixed(2) + "<br>Радіус описаного кола " + circleRadius.toFixed(2);}

function calculateFibonacci() {
    let index = parseInt(document.getElementById("fibonacciIndex").value);

    let result = fibonacci(index);

    document.getElementById("result4").innerHTML = "Число Фібоначчі " + result;
}
function fibonacci(n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }

    function checkFibonacci() {
        let number = parseInt(document.getElementById("fibonacciNumber").value);
        let isFibonacci = isPerfectSquare(5 * number * number + 4) || isPerfectSquare(5 * number * number - 4);

        document.getElementById("result5").innerHTML = isFibonacci
            ? "Число належить послідовності Фібоначчі."
            : "Число не належить послідовності Фібоначчі.";
    }
    function isPerfectSquare(n) {
        let sqrt = Math.sqrt(n);
        return (sqrt - Math.floor(sqrt)) === 0;
    }