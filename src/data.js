import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const categories = [
    {"rustag": "Все"},
    {"rustag": "Фрукты"},
    {"rustag": "Овощи"},
    {"rustag": "Животные"},
    {"rustag": "Насекомые"},
    {"rustag": "Мебель"},
  ];

  export const sidebarData = [
    {
      title: "Главная",
      path: "/english-cards",
      icon: <AiIcons.AiFillHome />
    },
    {
      title: "Добавить карточку",
      path: "/list",
      icon: <AiIcons.AiFillDatabase/>
    },
    {
      title: "Тренировка",
      path: "/cards",
      icon: <AiIcons.AiFillCopy />
    },
    {
      title: "Поиск по тегам",
      path: "/tags",
      icon: <AiIcons.AiFillFilter />
    },
    {
      title: "Проверь себя",
      path: "/exam",
      icon: <AiIcons.AiFillTrophy />
    }
  ]