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
    text: <img src="https://img1.labirint.ru/rcimg/7b61a467af52d711146209c64e85ecb6/1920x1080/books57/562233/ph_1.jpg?1563956854" alt='logo' 
    style={{ height: '30px', borderRadius: '10px'}}></img>,
    path: "/english-cards",
    icon: <AiIcons.AiFillHome />
  },
  {
    id: 'b',
    text: "Главная",
    path: "/english-cards",
    icon: <AiIcons.AiFillHome />
  },
  {
    id: 'c',
    text: "Добавить карточку",
    path: "/list",
    icon: <AiIcons.AiFillDatabase/>
  },
  {      
    id: 'd',
    text: "Тренировка",
    path: "/cards",
    icon: <AiIcons.AiFillCopy />
  },
  {
    id: 'e',
    text: "Поиск по тегам",
    path: "/tags",
    icon: <AiIcons.AiFillFilter />
  },
  {
    id: 'f',
    text: "Проверь себя",
    path: "/exam",
    icon: <AiIcons.AiFillTrophy />
  }
];
