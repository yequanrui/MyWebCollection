var documentWidth = $(window).width();
if (documentWidth > 500) {
  documentWidth = 500;
}
var gridContainerWidth = 0.92 * documentWidth;
var cellWidth = 0.18 * documentWidth;
var cellSpace = 0.04 * documentWidth;
function my2048(dom) {
  this.dom = dom;
  this.score = 0;
  this.grid = 'grid-cell';
  this.number = 'number-cell';
  this.board = new Array();
  this.hasConflicted = new Array();
  this.ismove = true;
}
my2048.prototype.init = function () {
  // 初始化棋盘
  this.initCell();
  // 随机生成2个number-cell
  this.generateOneNumber();
  this.generateOneNumber();
  // 初始化分数
  this.score = 0;
  $('#score').text('0');
};
// 初始化棋盘
my2048.prototype.initCell = function () {
  var _t = this;
  _t.dom.css({
    width: gridContainerWidth,
    height: gridContainerWidth,
  });
  _t.dom.html('');
  for (var i = 0; i < 4; i++) {
    _t.board[i] = new Array();
    _t.hasConflicted[i] = new Array();
    for (var j = 0; j < 4; j++) {
      _t.dom.append(`<div class="${_t.grid}" id="${_t.grid}-${i}-${j}"></div>`);
      $(`#${_t.grid}-${i}-${j}`).css({
        width: cellWidth,
        height: cellWidth,
        top: _t.getPosTop(i, j),
        left: _t.getPosLeft(i, j),
      });
      _t.board[i][j] = 0;
      _t.hasConflicted[i][j] = false;
    }
  }
  _t.updateNumber();
};
// 更新Number
my2048.prototype.updateNumber = function () {
  var _t = this;
  $(`.${_t.number}`).remove();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      _t.dom.append(`<div class="${_t.number}" id="${_t.number}-${i}-${j}"></div>`);
      if (_t.board[i][j] === 0) {
        $(`#${_t.number}-${i}-${j}`).css({
          width: 0,
          height: 0,
          lineHeight: `${cellWidth}px`,
          top: _t.getPosTop(i, j) + cellWidth / 2,
          left: _t.getPosLeft(i, j) + cellWidth / 2,
        });
      } else {
        $(`#${_t.number}-${i}-${j}`).css({
          width: cellWidth,
          height: cellWidth,
          lineHeight: `${cellWidth}px`,
          top: _t.getPosTop(i, j),
          left: _t.getPosLeft(i, j),
          'background-color': _t.getNumberBgColor(_t.board[i][j]),
          color: _t.getNumberColor(_t.board[i][j]),
          'font-size': `${_t.getNumberFontSize(_t.board[i][j])}px`,
        });
        $(`#${_t.number}-${i}-${j}`).text(_t.board[i][j]);
      }
      _t.hasConflicted[i][j] = false;
    }
  }
};
// 随机生成一个number-cell
my2048.prototype.generateOneNumber = function () {
  var _t = this;
  var randA = new Array();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (_t.board[i][j] === 0) {
        randA.push({ x: i, y: j });
      }
    }
  }
  if (randA.length == 0) {
    return false;
  }
  // 随机一个位置
  var random = parseInt(Math.floor(Math.random() * randA.length));
  var x = randA[random].x;
  var y = randA[random].y;
  // 随机数字
  var randNumber = Math.random() < 0.5 ? 2 : 4;
  // 在随机位置显示随机数字
  _t.board[x][y] = randNumber;
  _t.showNumberAnimation(x, y, randNumber);
};
// 获取Number顶部距离
my2048.prototype.getPosTop = function (i, j) {
  return cellSpace + i * (cellWidth + cellSpace);
};
// 获取Number左边距离
my2048.prototype.getPosLeft = function (i, j) {
  return cellSpace + j * (cellWidth + cellSpace);
};
// 获取Number背景颜色
var numBgMap = {
  2: '#f2f5fc',
  4: '#e9edfa',
  8: '#beccfa',
  16: '#96adfa',
  32: '#7693f5',
  64: '#5e7ce0',
  128: '#526ecc',
  256: '#465eb8',
  512: '#3c51a6',
  1024: '#344899',
  2048: '#2a3c85',
  4096: '#0f297a',
  8192: '#031e64',
};
my2048.prototype.getNumberBgColor = function (number) {
  return numBgMap[number] || '#000';
};
// 获取等级
my2048.prototype.getGrade = function (number) {
  if (number <= 8) {
    return '吗的智障';
  } else if (number <= 64) {
    return '辣鸡';
  } else if (number <= 256) {
    return '一般般';
  } else if (number <= 512) {
    return '哎呦不错哦';
  } else if (number <= 1024) {
    return '好腻害';
  } else if (number <= 2048) {
    return '超神啊';
  } else if (number >= 4096) {
    return '成仙';
  }
};
// 获取字大小
my2048.prototype.getNumberFontSize = function (number) {
  return (number <= 64 ? 0.6 : number <= 512 ? 0.5 : 0.4) * cellWidth;
};
// 获取分数
my2048.prototype.getScore = function () {
  var _t = this;
  var max = 0;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (_t.board[i][j] !== 0 && _t.board[i][j] >= max) {
        max = _t.board[i][j];
      }
    }
  }
  return max;
};
// 获取Number前景颜色
my2048.prototype.getNumberColor = function (number) {
  return number <= 32 ? '#252b3a' : '#fff';
};
// number显示动画
my2048.prototype.showNumberAnimation = function (i, j, randNumber) {
  var _t = this;
  var numberCell = $(`#${_t.number}-${i}-${j}`);
  numberCell.css({
    'background-color': _t.getNumberBgColor(randNumber),
    color: _t.getNumberColor(randNumber),
  });
  numberCell.text(randNumber);
  numberCell.animate(
    {
      width: cellWidth,
      height: cellWidth,
      top: _t.getPosTop(i, j),
      left: _t.getPosLeft(i, j),
    },
    50
  );
};
// number移动动画
my2048.prototype.showMoveAnimation = function (fromx, fromy, tox, toy) {
  var _t = this;
  var number = $(`#${_t.number}-${fromx}-${fromy}`);
  number.animate({ top: _t.getPosTop(tox, toy), left: _t.getPosLeft(tox, toy) }, 200);
};
// 判断是否可向left移动
my2048.prototype.canMoveLeft = function () {
  var _t = this;
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      if (_t.board[i][j] !== 0 && (_t.board[i][j - 1] === 0 || _t.board[i][j - 1] === _t.board[i][j])) {
        return true;
      }
    }
  }
  return false;
};
// 判断是否可向right移动
my2048.prototype.canMoveRight = function () {
  var _t = this;
  for (var i = 0; i < 4; i++) {
    for (var j = 2; j >= 0; j--) {
      if (_t.board[i][j] !== 0 && (_t.board[i][j + 1] === 0 || _t.board[i][j + 1] === _t.board[i][j])) {
        return true;
      }
    }
  }
  return false;
};
// 判断是否可向up移动
my2048.prototype.canMoveUp = function () {
  var _t = this;
  for (var i = 1; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (_t.board[i][j] !== 0 && (_t.board[i - 1][j] === 0 || _t.board[i - 1][j] === _t.board[i][j])) {
        return true;
      }
    }
  }
  return false;
};
// 判断是否可向down移动
my2048.prototype.canMoveDown = function () {
  var _t = this;
  for (var i = 2; i >= 0; i--) {
    for (var j = 0; j < 4; j++) {
      if (_t.board[i][j] !== 0 && (_t.board[i + 1][j] === 0 || _t.board[i + 1][j] === _t.board[i][j])) {
        return true;
      }
    }
  }
  return false;
};
// 判断一行的某块旁边是否有障碍物
my2048.prototype.noBlockHorizontal = function (row, col1, col2) {
  var _t = this;
  for (var i = col1 + 1; i < col2; i++) {
    if (_t.board[row][i] !== 0) {
      return false;
    }
  }
  return true;
};
// 判断一列的某块旁边是否有障碍物
my2048.prototype.noBlockVertical = function (col, row1, row2) {
  var _t = this;
  for (var i = row1 + 1; i < row2; i++) {
    if (_t.board[i][col] !== 0) {
      return false;
    }
  }
  return true;
};
// left移动函数
my2048.prototype.moveLeft = function () {
  var _t = this;
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      if (_t.board[i][j] != 0) {
        for (var k = 0; k < j; k++) {
          if (_t.board[i][k] === 0 && _t.noBlockHorizontal(i, j, k)) {
            _t.showMoveAnimation(i, j, i, k);
            _t.board[i][k] = _t.board[i][j];
            _t.board[i][j] = 0;
            continue;
          } else if (_t.board[i][k] === _t.board[i][j] && _t.noBlockHorizontal(i, k, j) && !_t.hasConflicted[i][k]) {
            _t.showMoveAnimation(i, j, i, k);
            _t.board[i][k] += _t.board[i][j];
            _t.board[i][j] = 0;
            _t.hasConflicted[i][k] = true;
            $('#score').text(_t.getScore());
            continue;
          }
        }
      }
    }
  }
  setTimeout(function () {
    _t.updateNumber();
  }, 200);
  setTimeout(function () {
    _t.ismove = true;
  }, 250);
};
// right移动函数
my2048.prototype.moveRight = function () {
  var _t = this;
  for (var i = 0; i < 4; i++) {
    for (var j = 2; j >= 0; j--) {
      if (_t.board[i][j] !== 0) {
        for (var k = 3; k > j; k--) {
          if (_t.board[i][k] === 0 && _t.noBlockHorizontal(i, j, k)) {
            _t.showMoveAnimation(i, j, i, k);
            _t.board[i][k] = _t.board[i][j];
            _t.board[i][j] = 0;
            continue;
          } else if (_t.board[i][k] === _t.board[i][j] && _t.noBlockHorizontal(i, j, k) && !_t.hasConflicted[i][k]) {
            _t.showMoveAnimation(i, j, i, k);
            _t.board[i][k] += _t.board[i][j];
            _t.board[i][j] = 0;
            _t.hasConflicted[i][k] = true;
            $('#score').text(_t.getScore());
            continue;
          }
        }
      }
    }
  }
  setTimeout(function () {
    _t.updateNumber();
  }, 200);
  setTimeout(function () {
    _t.ismove = true;
  }, 250);
};
// up移动函数
my2048.prototype.moveUp = function () {
  var _t = this;
  for (var j = 0; j < 4; j++) {
    for (var i = 1; i < 4; i++) {
      if (_t.board[i][j] !== 0) {
        for (var k = 0; k < i; k++) {
          if (_t.board[k][j] === 0 && _t.noBlockVertical(j, k, i)) {
            _t.showMoveAnimation(i, j, k, j);
            _t.board[k][j] = _t.board[i][j];
            _t.board[i][j] = 0;
            continue;
          } else if (_t.board[k][j] === _t.board[i][j] && _t.noBlockVertical(j, k, i) && !_t.hasConflicted[k][j]) {
            _t.showMoveAnimation(i, j, k, j);
            _t.board[k][j] += _t.board[i][j];
            _t.board[i][j] = 0;
            _t.hasConflicted[k][j] = true;
            $('#score').text(_t.getScore());
            continue;
          }
        }
      }
    }
  }
  setTimeout(function () {
    _t.updateNumber();
  }, 200);
  setTimeout(function () {
    _t.ismove = true;
  }, 250);
};
// down移动函数
my2048.prototype.moveDown = function () {
  var _t = this;
  for (var j = 0; j < 4; j++) {
    for (var i = 2; i >= 0; i--) {
      if (_t.board[i][j] != 0) {
        for (var k = 3; k > i; k--) {
          if (_t.board[k][j] === 0 && _t.noBlockVertical(j, i, k)) {
            _t.showMoveAnimation(i, j, k, j);
            _t.board[k][j] = _t.board[i][j];
            _t.board[i][j] = 0;
            continue;
          } else if (_t.board[k][j] === _t.board[i][j] && _t.noBlockVertical(j, i, k) && !_t.hasConflicted[k][j]) {
            _t.showMoveAnimation(i, j, k, j);
            _t.board[k][j] += _t.board[i][j];
            _t.board[i][j] = 0;
            _t.hasConflicted[k][j] = true;
            $('#score').text(_t.getScore());
            continue;
          }
        }
      }
    }
  }
  setTimeout(function () {
    _t.updateNumber();
  }, 200);
  setTimeout(function () {
    _t.ismove = true;
  }, 250);
};
// GameOver
my2048.prototype.isgameover = function () {
  var _t = this;
  if (_t.nospace() && _t.nomove()) {
    _t.my2048Alert({
      title: _t.getScore(),
      subtitle: _t.getGrade(_t.getScore()),
    });
  }
};
// 2048Alert
my2048.prototype.my2048Alert = function (json) {
  var _t = this;
  for (var i in json) {
    if (i === 'title') {
      var title = json[i];
    } else if (i === 'subtitle') {
      var subtitle = json[i];
    }
  }
  if ($('#my2048Alert').length > 0) {
    $('.myAt-text-title').html('最高叠加分：<span>' + title + '</span>');
    $('.myAt-text-subtitle').html('等级判定：<span>' + subtitle + '！！！</span>');
    $('.myAt-text-close').on('click', function () {
      $('#my2048Alert').addClass('hide').removeClass('show');
      _t.init();
    });
    $('#my2048Alert').addClass('show').removeClass('hide');
  } else {
    var dom = $('<div id="my2048Alert">').addClass('hide');
    dom.html(
      '<div class="mask"></div>' +
        '<div class="myAt">' +
        '<div class="myAt-pic"></div>' +
        '<div class="myAt-text">' +
        '<div class="myAt-text-title">最高叠加分：<span>' +
        title +
        '</span></div>' +
        '<div class="myAt-text-subtitle">等级判定：<span>' +
        subtitle +
        '！！！</span></div>' +
        '<a href="#" class="myAt-text-close button">再来</a>' +
        '</div>' +
        '</div>'
    );
    $('body').append(dom);
    $('.myAt-text-close').on('click', function () {
      $('#my2048Alert').addClass('hide').removeClass('show');
      _t.init();
    });
    $('#my2048Alert').addClass('show').removeClass('hide');
  }
};
my2048.prototype.nospace = function () {
  var _t = this;
  for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) if (_t.board[i][j] == 0) return false;
  return true;
};
my2048.prototype.nomove = function () {
  var _t = this;
  if (_t.canMoveLeft() || _t.canMoveRight() || _t.canMoveUp() || _t.canMoveDown()) return false;
  return true;
};
// 键盘↑↓←→方向键事件
$(document).keydown(function (event) {
  event.preventDefault();
  switch (event.keyCode) {
    case 37: // left
      if (my2048.ismove && my2048.canMoveLeft()) {
        my2048.ismove = false;
        my2048.moveLeft();
        setTimeout(function () {
          my2048.generateOneNumber();
        }, 210);
        setTimeout(function () {
          my2048.isgameover();
        }, 250);
      }
      break;
    case 38: // up
      if (my2048.ismove && my2048.canMoveUp()) {
        my2048.ismove = false;
        my2048.moveUp();
        setTimeout(function () {
          my2048.generateOneNumber();
        }, 210);
        setTimeout(function () {
          my2048.isgameover();
        }, 250);
      }
      break;
    case 39: // right
      if (my2048.ismove && my2048.canMoveRight()) {
        my2048.ismove = false;
        my2048.moveRight();
        setTimeout(function () {
          my2048.generateOneNumber();
        }, 210);
        setTimeout(function () {
          my2048.isgameover();
        }, 250);
      }
      break;
    case 40: // down
      if (my2048.ismove && my2048.canMoveDown()) {
        my2048.ismove = false;
        my2048.moveDown();
        setTimeout(function () {
          my2048.generateOneNumber();
        }, 210);
        setTimeout(function () {
          my2048.isgameover();
        }, 250);
      }
      break;
    default: // default
      break;
  }
});
document.addEventListener('touchstart', function (event) {
  startX = event.touches[0].pageX;
  startY = event.touches[0].pageY;
});
document.addEventListener('touchmove', function (event) {
  event.preventDefault();
});
document.addEventListener('touchend', function (event) {
  endX = event.changedTouches[0].pageX;
  endY = event.changedTouches[0].pageY;
  var x = endX - startX;
  var y = endY - startY;
  if (Math.abs(x) < documentWidth * 0.3 && Math.abs(y) < documentWidth * 0.3) return;
  if (Math.abs(x) >= Math.abs(y)) {
    if (x > 0) {
      // right
      if (my2048.ismove && my2048.canMoveRight()) {
        my2048.ismove = false;
        my2048.moveRight();
        setTimeout(function () {
          my2048.generateOneNumber();
        }, 210);
        setTimeout(function () {
          my2048.isgameover();
        }, 250);
      }
    } else {
      // left
      if (my2048.ismove && my2048.canMoveLeft()) {
        my2048.ismove = false;
        my2048.moveLeft();
        setTimeout(function () {
          my2048.generateOneNumber();
        }, 210);
        setTimeout(function () {
          my2048.isgameover();
        }, 250);
      }
    }
  } else {
    if (y > 0) {
      // down
      if (my2048.ismove && my2048.canMoveDown()) {
        my2048.ismove = false;
        my2048.moveDown();
        setTimeout(function () {
          my2048.generateOneNumber();
        }, 210);
        setTimeout(function () {
          my2048.isgameover();
        }, 250);
      }
    } else {
      // up
      if (my2048.ismove && my2048.canMoveUp()) {
        my2048.ismove = false;
        my2048.moveUp();
        setTimeout(function () {
          my2048.generateOneNumber();
        }, 210);
        setTimeout(function () {
          my2048.isgameover();
        }, 250);
      }
    }
  }
});
