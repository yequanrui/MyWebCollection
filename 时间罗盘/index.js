/**
 * 创建出每个装时间的盒子
 * 包括：
 * 秒/分钟/小时/日/月/年
 */
const box = document.getElementById("box");

/**
 * 创建出每个装时间的盒子
 * @param {String} labelName 创建的标签的 class 名称
 */
function addBigBox(labelName) {
  const newLabel = document.createElement("div");
  newLabel.setAttribute("class", labelName);
  box.appendChild(newLabel);
}

addBigBox("secondBox");
addBigBox("branchBox");
addBigBox("hourBox");
addBigBox("NumberBox");
addBigBox("monthBox");
addBigBox("year");

/**
 * 获取到所有装时间的盒子
 */
const secondBox = document.querySelector(".secondBox");
const branchBox = document.querySelector(".branchBox");
const hourBox = document.querySelector(".hourBox");
const NumberBox = document.querySelector(".NumberBox");
const monthBox = document.querySelector(".monthBox");
const year = document.querySelector(".year");
// 设置默认年份
year.innerHTML = "2022";

/**
 * 渲染时间的标签内容
 * @param {String} PointerName 指针的名称
 * @param {Object} bigTabName 需要放到的盒子 DOM 元素
 * @param {String} explain 说明文字
 * @param {Number} number 循环次数
 * @param {Number} deg 旋转度数
 */
function Rendering(PointerName, bigTabName, explain, number, deg) {
  for (let i = 1; i < number; i++) {
    // 新建一个 div 标签 设置 class 名称和旋转角度
    const Pointer = document.createElement("div");
    Pointer.setAttribute("class", PointerName);
    Pointer.style.transform = `rotate(${i * deg}deg)`;
    // 把新建的 div 都放在大盒子中
    bigTabName.appendChild(Pointer);
    // 里面分别新建两个 span 标签用来显示时间内容描述
    const newSpan1 = document.createElement("span");
    const newSpan2 = document.createElement("span");
    newSpan1.innerHTML = i + (number - 1) + explain;
    newSpan2.innerHTML = i + explain;
    // 给新建的 span 标签设置 class 值 并将 span 标签放到新建的 div 中
    newSpan1.setAttribute("class", "tra");
    Pointer.appendChild(newSpan1);
    Pointer.appendChild(newSpan2);
  }
}

Rendering("second", secondBox, "秒", 31, 6);
Rendering("branch", branchBox, "分", 31, 6);
Rendering("hour", hourBox, "时", 7, 30);
Rendering("Number", NumberBox, "号", 17, 11.25);
Rendering("month", monthBox, "月", 7, 30);

/**
 * 清空指针的 60 分钟
 * 清空指针的 60 秒
 * 清空指针的 32 号
 * @param {String} className Class 值
 */
function subItem(className) {
  const item = document.querySelectorAll(className);
  item[item.length - 1].children[0].innerHTML = "";
}

subItem(".second");
subItem(".branch");
subItem(".Number");

/**
 * 等待1.4秒后css动画结束后再获取时间
 */
setTimeout(() => {
  setInterval(() => {
    const now = new Date();
    const s = now.getSeconds(); // 秒
    const m = now.getMinutes(); // 分
    const h = now.getHours() % 12; // 小时
    const d = now.getDate(); // 日
    const y = now.getMonth() + 1; // 月
    const n = now.getFullYear(); // 年
    secondBox.style.transform = `rotate(-${s * 6}deg)`; // 秒
    branchBox.style.transform = `rotate(-${m * 6}deg)`; // 分
    hourBox.style.transform = `rotate(-${h * 30}deg)`; // 时
    NumberBox.style.transform = `rotate(-${d * 11.25}deg)`; // 日
    monthBox.style.transform = `rotate(-${y * 30}deg)`; // 月
    year.innerHTML = n; // 年
  }, 1000);
}, 1400);
