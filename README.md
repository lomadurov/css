# TurboExtensions
Расширенные возможности стилизации средствами CSS.

[![Build Status](https://travis-ci.com/turboext/css.svg?branch=master)](https://travis-ci.com/turboext/css)

# Прототипирование стилей
1. Установить расширенение [live editor for CSS](https://webextensions.org/) (или любое другое с похожими возможностями);
2. Зайти в браузере на турбо-страницу;
3. Написать CSS для нужных компонентов.

![](screencast.gif)

# DevServer
В качестве альтернативы можно использовать dev-server на базе node.js (8.x) & express.

Установка:
```
git clone https://github.com/turboext/css.git # или fork
cd css
yarn # или npm install
nvm use # если у вас установлен nvm
npm start
npm test # для локального запуска тестов
```

Использование:
* открыть http://localhost:3000 и выбрать адрес вашей турбо-страницы, например: `https://rozhdestvenskiy.ru/turbo/`, или `https://yandex.ru/turbo?text=https://rozhdestvenskiy.ru/`;
* внести изменения в `hosts/*/style.css`;
* обновить страницу.

# Ограничения
Ограничения указаны в [конфиге](stylelint.config.js) [stylelint](https://stylelint.io/):
* нельзя использовать пользовательские шрифты;
* нельзя использовать низкопроизводительную анимацию;
* нельзя использовать селекторы по имени тэга;
* нельзя использовать любые внешние ресурсы;
* размер CSS в gzip ограничен 21KB.

На code review могут быть указаны дополнительные требования к коду.

**Важно:** список ограничений может меняться со временем.

# Технические детали
* CSS код будет обработан с помощью [postcss](https://github.com/postcss/postcss). Настройки можно посмотреть в [конфигурационном файле](postcss.config.js).
* Минимальные версии поддерживаемых браузеров
    * android 4
    * iOS 9
    * IE 11
* Векторные изображения предпочтительнее растровых. Размер всех изображений должен быть оптимизирован до приемлемого уровня качества.
    * Для оптимизации SVG рекомендуется использовать  [svgo](https://www.npmjs.com/package/svgo) со следующими опциями: `svgo -p 2 --multipass --enable=removeDesc --enable=removeTitle --enable=sortAttrs --enable=removeViewBox --enable=removeStyleElement -i [PATH_TO_SVG]`.

# Внесение изменений в стили
1. Сделать fork репозитория;
1. Создать директорию `hosts/example.com`;
1. В директории должно быть несколько обязательных файлов — `HOSTS.yaml, OWNERS.yaml, style.css`.
    * `HOSTS.yaml` должен содержать список доменов для которых должны применяться текущие стили, например:
        ```yaml
        - https://www.rozhdestvenskiy.ru
        - https://rozhdestvenskiy.ru
        ```
    Протокол (http, https) обязателен. Фактически, это адрес сайта из https://webmaster.yandex.ru
    ![webmaster](webmaster-host.png)
    * `OWNERS.yaml` должен содержать список логинов на https://github.com кому разрешено править стили для текущего домена, например:
    ```yaml
    - sbmaxx
    ```
1. Закоммитить изменения и создать PR в основной репозиторий. Желательно в тексте коммита указывать адрес сайта;
1. В описании PR добавьте несколько ссылок на ваши турбо-страницы;
1. Дождитесь создания автоматической беты. Ссылка на неё появится в описании PR через некоторое время после создания PR, проверьте на ней свои изменения;
1. Дождаться прохождения линтеров;
1. Дождаться прохождения ревью;
1. Изменения будут доступы в течение часа после вливания PR в master ветку.

# Внесение изменений в инфраструктурную часть
1. [Создать issue](https://github.com/turboext/css/issues/new) с описанием сути изменений;
1. Сделать branch в формате `issues/<номер_issue>`;
1. Закоммитить изменения и создать PR в основной репозиторий;
1. Связать PR и issue (например, c помощью комментария).

# Поддержка разработчиков
https://turbosupport.slack.com, доступ по [приглашениям](https://yandex.ru/turbo?text=turbosupport-slack-access).
