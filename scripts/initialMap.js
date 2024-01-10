export function init() {
    // Создаем выпадающую панель с поисковыми подсказками и прикрепляем ее к HTML-элементу по его id.
    var suggestView1 = new ymaps.suggest('departure-city');
    var suggestView2 = new ymaps.suggest('arrival-city');
document.addEventListener('error',(err)=> console.error(err))
    // Задаем собственный провайдер поисковых подсказок и максимальное количество результатов.
    // var suggestView2 = new ymaps.SuggestView('suggest2', { provider: provider, results: 3 });
}
