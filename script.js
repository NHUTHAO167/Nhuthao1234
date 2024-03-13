const aInput = document.getElementById('a');
const bInput = document.getElementById('b');
const resultEl = document.getElementById('result');

const solveBtn = document.getElementById('solve-btn');
solveBtn.addEventListener('click', () => {
    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);

    // Giải phương trình
    const x = -b / a;

    // Hiển thị kết quả
    resultEl.textContent = `Nghiệm x = ${x}`;
});