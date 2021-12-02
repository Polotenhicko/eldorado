if (window.innerWidth >= 1000) {
  document.querySelector('.property > .shooting-video > h3').textContent =
    'Сканер отпечатка в экране';

  document
    .querySelectorAll(
      '.property .acccessories-wrapper > .item:not(.addition) > p.description'
    )
    .forEach((element) => {
      element.textContent =
        'Для любителей роскоши, модель S10+ будет выпускаться в керамическом корпусе черного и белого цветов.';
    });
}

if (window.innerWidth >= 720) {
  document.querySelector(
    '.property > .accessories > .acccessories-wrapper > .item:nth-child(2) > p.description'
  ).textContent =
    'Обширный ассортимент чехлов лля каждой модели. Цветовая гамма, отличное качество, премиальные материалы и дополнительные возможности призваны удовлетворить даже самый притязательный вкус.';
}
