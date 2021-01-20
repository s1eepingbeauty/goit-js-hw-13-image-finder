//файл apiService.js с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API

//URL-строка запроса: URL-строка запроса:
//https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
// 19951456-e393dc841832362ddd9551c23

// Pixabay API поддерживает пагинацию, пусть в ответе приходит по 12 объектов,
// установлено в параметре per_page. По умолчанию параметр page равен 1.
// При каждом последующем запросе page увеличивается на 1,
// а при поиске по новому ключевому слову необходимо сбрасывать его значение в 1.

// Тебе интересны следующие свойства:

// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок

const apiKey = "19951456-e393dc841832362ddd9551c23";
const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=${apiKey}`;

async function apiService(searchQuery, page) {
    return fetch(`${url}&q=${encodeURIComponent(searchQuery)}&page=${page}`,
    ).then(response => response.json())
        .then(data => data.hits)
}

export default apiService;