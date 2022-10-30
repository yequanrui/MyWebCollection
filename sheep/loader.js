const app = document.getElementById("app");
const $width = 50;
const $height = 50;
// 游戏结束
var gameOver = false;
// 多少组一组3个
const BlockNums = 15;
// 消消乐元素
const IMGS = [
  "./img/key1.jpeg",
  "./img/key2.jpeg",
  "./img/key3.jpeg",
  "./img/key4.jpeg",
  "./img/key5.jpeg",
  "./img/key6.jpeg",
  "./img/key7.jpeg",
];
// 计算出 app 模型在 document 的 x,y的坐标
// 计算出 绘制区域的 x起点  和 y起点
// 并且渲染的区域和大盒子要有20px的间距
function calculationOfPosition() {
  const { left: x, top: y } = app.getBoundingClientRect();
  // 绘制的开始端和结束端
  const AppPosition = {
    x,
    y,
    drawStartX: 20,
    drawStartY: 20,
    drawEndX: app.offsetWidth - 70,
    drawEndY: app.offsetHeight - 200,
  };

  return AppPosition;
}
// 全局公用坐标
const AppPosition = calculationOfPosition();

// Blcok块类
class Block {
  // i 当前图片在数组中的下表 i 一旦生成 不会改变
  constructor(src, i) {
    this.width = $width;
    this.height = $height;
    // n用于当选中图片时 判断 src 是否相同 如果src相同即可
    this.n = src;
    // 当前图片生成的位置 （用于判断是否被遮盖 0被1遮盖， 1被2遮盖）
    this.index = i;
    // 图片路径
    this.src = src;
    // x 坐标
    this.x = randomPosition(AppPosition.drawStartX, AppPosition.drawEndX);
    // y 坐标
    this.y = randomPosition(AppPosition.drawStartY, AppPosition.drawEndY);
    // 是否被隐藏 默认被隐藏 (false隐藏. true高亮)
    this.blockState = false;
  }
  // 是否被遮挡
  // 判断逻辑: 从我这里开始算起，判断后续的Block是否有与我 x,y 交叉的节点，有就说明我被覆盖
  isCover() {
    var thatBlock;
    var coverState = false;
    for (let index = 0; index < allBlock.length; index++) {
      // 找到他的位置
      if (allBlock[index].index === this.index) {
        thatBlock = allBlock[index];
      } else if (thatBlock) {
        // console.log("thatBlock ==> ", thatBlock);
        // 目标元素
        const target = allBlock[index];
        // 找到当前 this.index 在数组中的位置
        // 碰撞逻辑
        var xLeft = target.x;
        var xRight = target.x + target.width;
        var yTop = target.y;
        var yBottom = target.y + target.height;
        //只要thatBlock在这4个临界值内 那么就说明发生了碰撞
        if (
          !(
            thatBlock.x > xRight ||
            thatBlock.x + thatBlock.width < xLeft ||
            thatBlock.y > yBottom ||
            thatBlock.y + thatBlock.height < yTop
          )
        ) {
          coverState = true;
          break;
        }
      }
    }
    return coverState;
  }

  // 绘制块
  draw() {
    const imgDom = new Image();
    imgDom.src = this.src;
    imgDom.id = this.index;
    imgDom.onclick = clickBlock.bind(null, imgDom, this);
    // noSelect 用于区分 是否已经被收集 被收集后变成 isSelect
    imgDom.classList = "noSelect imgGlobal";
    // 获取位置
    let style = {
      left: this.x + "px",
      top: this.y + "px",
      width: this.width + "px",
      height: this.height + "px",
    };
    // 判断是否被遮挡
    if (this.isCover()) {
      imgDom.classList.add("imgFilter");
      this.blockState = false;
    } else {
      imgDom.classList.remove("imgFilter");
      this.blockState = true;
    }
    setStyle(imgDom, style);
    return imgDom;
  }
}
// 覆盖逻辑如下
// 按照顺序 0 - 100 存放叠加的block块
const allBlock = [];
// 收集盒: 收集 target和实例化的new Block()
const hasBeenStored = [];

const storageBox = document.getElementById("storageBox");
const borderWidth = 10;
// 插入
// 插入时 删除数组数据 不删除Dom
var StpragePosition;
var startLeft;
function computedBoxPosition(target, targetDomClass) {
  // 将元素设置为最顶层 否则无法查看滚动弧
  setStyle(target, {
    zIndex: 9999,
  });
  // 获取元素四周的位置
  StpragePosition = storageBox.getBoundingClientRect();
  // 计算StpragePosition的盒子内容的0,0的位置 (盒子的坐标-外部的坐标(app四周的空白) + 边框)
  startLeft = StpragePosition.x - AppPosition.x + borderWidth;
  // top 是固定的因为是水平排列都在一条线上
  const top = StpragePosition.y - AppPosition.y + borderWidth + "px";
  // 每一项的解构 (target节点和 targetDomClass类)
  const Item = {
    targetDomClass,
    target,
  };
  // debugger;
  // 如果盒子是空的,就存放到0,0
  // 如果盒子数量小于3 就直接存放
  if (!hasBeenStored.length) {
    setStyle(target, {
      left: startLeft + "px",
      top,
    });
    targetDomClass.left = startLeft;
    // 在最后面叠加直接push
    hasBeenStored.push(Item);
  } else {
    // 查找是否有同样的元素存在
    const hasIndex = hasBeenStored.findIndex(
      (v) => v.targetDomClass.n == targetDomClass.n
    );
    // 没有同类型的盒子
    if (hasIndex === -1) {
      // 在后面叠加
      const left = startLeft + hasBeenStored.length * targetDomClass.width;
      setStyle(target, {
        left: left + "px",
        top,
      });
      // 修改绑定的实例链
      targetDomClass.left = left;
      // 在最后面叠加直接push
      hasBeenStored.push(Item);
    } else {
      // 有同类型的盒子
      // 插入进来,将后面全部的挪动一个块的位置
      // 处理指定下标后面的
      for (let index = hasBeenStored.length - 1; index >= hasIndex; index--) {
        // 从最后面开始挪动
        const newLeft = startLeft + (index + 1) * $width;
        setStyle(hasBeenStored[index].target, {
          left: newLeft + "px",
        });
        hasBeenStored[index].targetDomClass.left = newLeft;
      }
      // 插入新的到指定位置
      //  hasIndex 默认如果在最前面会是0 所以在他的后方+1
      setStyle(target, {
        left: startLeft + hasIndex * targetDomClass.width + "px",
        top,
      });
      // 同步实例链上得值
      targetDomClass.left = startLeft + hasIndex * targetDomClass.width;
      // 因为这里是把后面的向后移动,所以需要使用splice
      hasBeenStored.splice(hasIndex, 0, Item);
    }
  }
  // 删除target的 noSelect 换成 isSelect
  Item.target.classList.remove("noSelect");
  Item.target.classList.add("isSelect");
  // 将Item从数组中移除 因为已经加入到 收集盒Box下
  const removeIndex = allBlock.findIndex(
    (v) => v.index == Item.targetDomClass.index
  );
  allBlock.splice(removeIndex, 1);
  // 暴力高亮 重新渲染
  const noSelect = document.querySelectorAll(".noSelect");
  // 全部移除Dom元素
  for (var i = 0; i < noSelect.length; i++) {
    app.removeChild(noSelect[i]);
  }
  // 重新渲染
  createBlockToDocument();
}

// 验证组判断和清除 （是否已达成三个一组）
function checkBox() {
  const checkMap = {};
  hasBeenStored.forEach((v, i) => {
    if (!checkMap[v.targetDomClass.n]) {
      checkMap[v.targetDomClass.n] = [];
    }
    // 存下表
    checkMap[v.targetDomClass.n].push({
      index: i,
      // Dom层id
      id: v.targetDomClass.index,
    });
  });
  // 检查是否有超过三个的
  for (const key in checkMap) {
    if (checkMap[key].length === 3) {
      // console.log("可以删除", checkMap[key]);
      // 删除数组
      hasBeenStored.splice(checkMap[key][0].index, 3);
      // 同步删除页面Dom
      setTimeout(() => {
        checkMap[key].forEach((v) => {
          var box = document.getElementById(v.id);
          box.parentNode.removeChild(box);
        });
        // 同步页面数据
        hasBeenStored.forEach((v, i) => {
          let left = startLeft + i * v.targetDomClass.width + "px";
          // 同步target
          setStyle(v.target, {
            left,
          });
          // 同步映射class数据
          v.targetDomClass.left = left;
        });
      }, 300);
    }
  }
  // 验证状态
  GameValidate();
}

window.onload = function () {
  // 生成卡片
  drawBlock(BlockNums);
  // 给收集盒子加边框
  setStyle(storageBox, {
    border: "10px solid rgb(15, 87, 255)",
  });
};

/*
 @utils methdos 方法
*/
// 设置样式
function setStyle(d, styleObject) {
  for (const key in styleObject) {
    d["style"][key] = styleObject[key];
  }
  d["style"]["transition"] = ".225s";
}

// 生成随机的坐标
function randomPosition(min, max) {
  return randomKey(min, max);
}

// 生成随机的数字 (min,max)
function randomKey(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min);
}

// 生成Block模块
function drawBlock(gloup) {
  // IMGS
  // 一共多少组
  let virtualArr = [];
  for (let index = 0; index < gloup; index++) {
    // 保存打乱的数组
    virtualArr.push(...IMGS.sort(randomSort));
  }
  // 生成实例化Block
  virtualArr.forEach((v, index) => {
    const vBlock = new Block(v, index);
    allBlock.push(vBlock);
  });
  // 为什么要分离,因为不用实例化多次
  createBlockToDocument();
}

// 创建Block模块到文档
function createBlockToDocument() {
  // 上面加入完成后，下面开始绘制
  allBlock.forEach((v) => {
    app.appendChild(v.draw());
  });
}

// 点击块事件
function clickBlock(target, targetDomClass) {
  if (gameOver) {
    alert("游戏结束");
    return;
  }
  if (targetDomClass.blockState) {
    // 点击以后设置为不可点击
    targetDomClass.blockState = false;
    // 将块插入到盒子中
    computedBoxPosition(target, targetDomClass);
    // 判断是否有可以消除的(已经存在三个一组了)
    checkBox();
  }
}

// 打乱数组
function randomSort(a, b) {
  return Math.random() > 0.5 ? -1 : 1;
}

// 验证输赢
function GameValidate() {
  // 如果消除完毕 还有七个表示游戏结束
  if (hasBeenStored.length === 7) {
    setTimeout(() => {
      alert("您G了");
    }, 225);
    gameOver = true;
  }

  // 消除后 两个数组全部为空 表示赢了
  if (!allBlock.length && !hasBeenStored.length) {
    setTimeout(() => {
      alert("您WIN了");
    }, 225);
    gameOver = true;
  }
}
