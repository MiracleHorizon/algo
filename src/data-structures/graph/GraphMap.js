import { QueueMap } from '@structures/queue/QueueMap.js'

export class GraphMap {
  constructor(verticesCount) {
    this._verticesCount = verticesCount
    this._adjacencyList = new Map()
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, [])
  }

  addEdge(from, to) {
    this._adjacencyList.get(from).push(to)
    this._adjacencyList.get(to).push(from)
  }

  print() {
    const vertices = this._adjacencyList.keys()

    for (const vertex of vertices) {
      const vertexRel = this._adjacencyList.get(vertex)
      let concatenated = ''

      for (const rel of vertexRel) {
        concatenated += rel + ' '
      }

      console.log(vertex + ' -> ' + concatenated)
    }
  }

  bfs(from) {
    const visited = new Set()
    const queue = new QueueMap()

    visited.add(from)
    queue.enqueue(from)

    while (!queue.isEmpty) {
      const firstQueueElement = queue.dequeue()
      const nodes = this._adjacencyList.get(firstQueueElement)

      for (const node of nodes) {
        if (!visited.has(node)) {
          visited.add(node)
          queue.enqueue(node)
        }
      }
    }
  }

  dfs(from) {
    const visited = new Set()

    this._handleDFS(from, visited)
  }

  _handleDFS(vertex, visited) {
    visited.add(vertex)

    const nodes = this._adjacencyList.get(vertex)

    for (const node of nodes) {
      if (!visited.has(node)) {
        this._handleDFS(node, visited)
      }
    }
  }
}
