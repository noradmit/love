const heart = document.getElementById('heart');
const text = document.getElementById('text');

heart.addEventListener('click', () => {
  text.textContent = "Я тебя люблю 💖";
  heart.style.display = 'none';
  startHearts();
});

function startHearts() {
  for (let i = 0; i < 30; i++) {
    const heartElem = document.createElement('div');
    heartElem.textContent = '💖';
    heartElem.className = 'heart-fall';

    // случайная позиция по ширине экрана
    heartElem.style.left = Math.random() * window.innerWidth + 'px';

    // адаптивный размер сердечка
    heartElem.style.fontSize = (5 + Math.random() * 5) + "vw";

    // случайная длительность падения
    heartElem.style.animationDuration = (2 + Math.random() * 2) + 's';

    document.body.appendChild(heartElem);

    // удаляем сердечко после анимации
    setTimeout(() => {
      heartElem.remove();
    }, 4000);
  }
}
