// рекурсия

// описание каталога товаров
// задача: добавить узлы

const favorites = ['id-6', 'id-17'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      nme: 'Food',
      nodes: [
        {
          id: 'id-6',
          name: 'Drinks',
          nodes: []
        }
      ]
    },
    {
      id: 'id-17',
      name: 'Vehicles',
      nodes: []
    }
  ]
}

// eslint-disable-next-line no-shadow
export const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    // в узле создаем новое поддерево
    // через map двигаемся по дочерним элементам. и уже тут идет рекурсия (работа с дочерним узлом точно такая же как и с верхним)
    // суть: внутри ф-ции вызываем ее же
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};

const result = markFavorites(tree, favorites); 
console.log(result);