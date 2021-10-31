// Часы
setInterval(function () {
  (date = new Date()),
    (h = date.getHours()),
    (m = date.getMinutes()),
    (s = date.getSeconds()),
    (h = h < 10 ? "0" + h : h),
    (m = m < 10 ? "0" + m : m),
    (s = s < 10 ? "0" + s : s),
    (document.getElementById("clock").innerHTML = h + ":" + m);
}, 1000);

// При даблклике "Мой компьютер" открывается окно
document.querySelector(".myComp").addEventListener("dblclick", function () {
  document.querySelector(".myComp-window").classList.add("myComp-window-vis");
});

// document.querySelector(".myComp").dblclick = function () {
//   document.querySelector(".myComp-window").classList.add("myComp-window-vis");
// };

// document.querySelector(".window__btn").addEventListener("click", function () {
//   document.querySelector(".window__btn").classList.toggle("press-btn-push");
// });
// console.log(
//   `X - ${getBoundingClientRect().left} Y - ${getBoundingClientRect().top}`
// );
// Перемещение окна

const move = document.querySelector(".window__footer");
// const myWindow = document.querySelector(".window");
console.log(move);
move.onmousedown = function (event) {
  let shiftX = event.clientX - move.getBoundingClientRect().left;
  let shiftY = event.clientY - move.getBoundingClientRect().top;

  move.style.position = "absolute";
  move.style.zIndex = 1000;
  document.body.append(move);

  moveAt(event.pageX, event.pageY);

  // переносит мяч на координаты (pageX, pageY),
  // дополнительно учитывая изначальный сдвиг относительно указателя мыши
  function moveAt(pageX, pageY) {
    move.style.left = pageX - shiftX + "px";
    move.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // передвигаем мяч при событии mousemove
  document.addEventListener("mousemove", onMouseMove);

  // отпустить мяч, удалить ненужные обработчики
  move.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    move.onmouseup = null;
  };
};

move.ondragstart = function () {
  return false;
};

// Кнопка закрытия окна
document.querySelector(".window__close").onclick = function () {
  document
    .querySelector(".myComp-window")
    .classList.remove("myComp-window-vis");
};

// Нажатие "Пуск"

document
  .querySelector(".press-btn-start")
  .addEventListener("click", function () {
    document
      .querySelector(".press-btn-start")
      .classList.toggle("press-btn-push");
  });

document.querySelector(".footer__start").addEventListener("click", function () {
  document
    .querySelector(".window__start")
    .classList.toggle("window__start-hidden");
});
