export const availablePathFindingAlgorithms = [
  {
    value: 'astar',
    label: 'A* Search',
    description: 'A* Search is 𝐰𝐞𝐢𝐠𝐡𝐭𝐞𝐝 and 𝐠𝐮𝐚𝐫𝐚𝐧𝐭𝐞𝐞𝐬 the shortest path!',
    isWeight: true
  },
  {
    value: 'dijkstra',
    label: "Dijkstra's Search",
    description:
      "Dijkstra's Algorithm is 𝐰𝐞𝐢𝐠𝐡𝐭𝐞𝐝 and 𝐠𝐮𝐚𝐫𝐚𝐧𝐭𝐞𝐞𝐬 the shortest path!",
    isWeight: true
  },
  {
    value: 'bfs',
    label: 'Breadth-first Search',
    description:
      'Breath-first Search is 𝐮𝐧𝐰𝐞𝐢𝐠𝐡𝐭𝐞𝐝 and 𝐠𝐮𝐚𝐫𝐚𝐧𝐭𝐞𝐞𝐬 the shortest path!',
    isWeight: false
  },
  {
    value: 'dfs',
    label: 'Depth-first Search',
    description:
      'Depth-first Search is 𝐮𝐧𝐰𝐞𝐢𝐠𝐡𝐭𝐞𝐝 and 𝐝𝐨𝐞𝐬 𝐧𝐨𝐭 𝐠𝐮𝐚𝐫𝐚𝐧𝐭𝐞𝐞 the shortest path!',
    isWeight: false
  }
];

export const PATHFINDING_ALGORITHMS_API_URL =
  'https://localhost:44370/api/pathfinding';

export const SORTING_ALGORITHMS_API_URL =
  'https://localhost:44370/api/sortingAlgorithms';
