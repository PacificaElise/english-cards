import * as AiIcons from 'react-icons/ai';

export const categories = [
    {"rustag": "Все"},
    {"rustag": "Фрукты"},
    {"rustag": "Овощи"},
    {"rustag": "Животные"},
    {"rustag": "Насекомые"},
    {"rustag": "Мебель"},
  ];

export const Items = [
  {
    id: 'a',
    text: "Главная",
    path: "/english-cards",
    icon: <AiIcons.AiFillHome />
  },
  {
    id: 'b',
    text: "Добавить карточку",
    path: "/list",
    icon: <AiIcons.AiFillDatabase/>
  },
  {      
    id: 'c',
    text: "Тренировка",
    path: "/cards",
    icon: <AiIcons.AiFillCopy />
  },
  {
    id: 'd',
    text: "Поиск по тегам",
    path: "/tags",
    icon: <AiIcons.AiFillFilter />
  },
  {
    id: 'e',
    text: "Проверь себя",
    path: "/exam",
    icon: <AiIcons.AiFillTrophy />
  }
];
