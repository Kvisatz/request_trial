-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 27 2022 г., 22:52
-- Версия сервера: 10.5.11-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `trial_web11_teamwork`
--

-- --------------------------------------------------------

--
-- Структура таблицы `big_categories`
--

CREATE TABLE `big_categories` (
  `id` int(11) NOT NULL,
  `name_eng` varchar(50) NOT NULL,
  `name_rus` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `big_categories`
--

INSERT INTO `big_categories` (`id`, `name_eng`, `name_rus`) VALUES
(1, 'Cameras & Photography', 'Камеры и фотоаппараты'),
(2, 'Laptop & Computer', 'Лэптопы и компьютеры'),
(3, 'Electronics', 'Электроника');

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `sup_categ_id` int(11) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `sup_categ_id`, `image`) VALUES
(1, 'Acer Aspire', 6, '13.jpg'),
(2, 'iPhone x10', 4, '1.jpg'),
(3, 'Asus x550', 8, '10.jpg'),
(4, 'Samsung S20', 8, '1bg.jpg'),
(5, 'Grey Headphones', 10, '2.jpg '),
(6, 'Teal Headphones', 10, '2bg.jpg'),
(7, 'MacBook air', 4, '10bg.jpg'),
(8, 'Dell i1', 5, '3.jpg'),
(9, 'Dell i2', 5, '3bg.jpg'),
(10, 'Sony x1', 7, '4.jpg'),
(11, 'Sony A6', 7, '4bg.jpg'),
(12, 'Superblack Speaker v1', 9, '12.bg.jpg'),
(13, 'Handbag', 1, '5.jpg'),
(14, 'Blouse white', 2, '6.jpg'),
(15, 'Classic speaker', 9, '12.jpg'),
(16, 'Clouthes', 3, '11.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `sup_categories`
--

CREATE TABLE `sup_categories` (
  `id` int(11) NOT NULL,
  `name_eng` varchar(50) NOT NULL,
  `name_rus` varchar(50) NOT NULL,
  `big_categ_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sup_categories`
--

INSERT INTO `sup_categories` (`id`, `name_eng`, `name_rus`, `big_categ_id`) VALUES
(1, 'Handbags', 'Сумки', 1),
(2, 'Blouses and T-shirts', 'Блузы и футболки', 1),
(3, 'Clouthes', 'Одежда', 1),
(4, 'Apple', 'Apple', 2),
(5, 'Dell', 'Dell', 2),
(6, 'HP', 'HP', 2),
(7, 'Sony', 'Sony', 2),
(8, 'Mobile', 'Мобильные телефоны', 3),
(9, 'Speaker', 'Колонки', 3),
(10, 'Headphone', 'Наушники', 3);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `big_categories`
--
ALTER TABLE `big_categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sup_categ_id` (`sup_categ_id`);

--
-- Индексы таблицы `sup_categories`
--
ALTER TABLE `sup_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `big_categ_id` (`big_categ_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `big_categories`
--
ALTER TABLE `big_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `sup_categories`
--
ALTER TABLE `sup_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`sup_categ_id`) REFERENCES `sup_categories` (`id`);

--
-- Ограничения внешнего ключа таблицы `sup_categories`
--
ALTER TABLE `sup_categories`
  ADD CONSTRAINT `sup_categories_ibfk_1` FOREIGN KEY (`big_categ_id`) REFERENCES `big_categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
