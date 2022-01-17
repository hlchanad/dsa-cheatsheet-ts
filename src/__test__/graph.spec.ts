import { bfs, dfs } from '../graph';

describe('dfs', () => {
    /* graph:
      1 ----- 2    4     6
        \   /        \     \
          3 ---------- 5     7
     */
    const adjList = [
        [],
        /* 1: */ [2, 3],
        /* 2: */ [1, 3],
        /* 3: */ [1, 2, 5],
        /* 4: */ [5],
        /* 5: */ [3, 4],
        /* 6: */ [7],
        /* 7: */ [6]
    ]

    it('throws error if invalid start/ target', () => {
        expect(() => dfs(adjList, -1, 1)).toThrow();
        expect(() => dfs(adjList, 1, adjList.length)).toThrow();
    })

    it('returns visited array if found', () => {
        expect(dfs(adjList, 1, 2)).toEqual([1, 3, 5, 4])
        expect(dfs(adjList, 1, 3)).toEqual([1]);
        expect(dfs(adjList, 1, 4)).toEqual([1, 3, 5]);
        expect(dfs(adjList, 1, 5)).toEqual([1, 3]);
        expect(dfs(adjList, 5, 1)).toEqual([5, 4, 3, 2]);
        expect(dfs(adjList, 5, 2)).toEqual([5, 4, 3])
        expect(dfs(adjList, 5, 3)).toEqual([5, 4]);
        expect(dfs(adjList, 5, 4)).toEqual([5]);
    });

    it('returns null if not found', () => {
        expect(dfs(adjList, 1, 6)).toBeNull();
        expect(dfs(adjList, 1, 7)).toBeNull();
        expect(dfs(adjList, 4, 6)).toBeNull();
        expect(dfs(adjList, 4, 7)).toBeNull();
    });
});

describe('bfs', () => {
    /* graph:
      1 ----- 2    4     6
        \   /        \     \
          3 ---------- 5     7
     */
    const adjList = [
        [],
        /* 1: */ [2, 3],
        /* 2: */ [1, 3],
        /* 3: */ [1, 2, 5],
        /* 4: */ [5],
        /* 5: */ [3, 4],
        /* 6: */ [7],
        /* 7: */ [6]
    ]

    it('throws error if invalid start/ target', () => {
        expect(() => bfs(adjList, -1, 1)).toThrow();
        expect(() => bfs(adjList, 1, adjList.length)).toThrow();
    })

    it('returns visited array if found', () => {
        expect(bfs(adjList, 1, 2)).toEqual([1])
        expect(bfs(adjList, 1, 3)).toEqual([1, 2]);
        expect(bfs(adjList, 1, 4)).toEqual([1, 2, 3, 5]);
        expect(bfs(adjList, 1, 5)).toEqual([1, 2, 3]);
        expect(bfs(adjList, 5, 1)).toEqual([5, 3, 4]);
        expect(bfs(adjList, 5, 2)).toEqual([5, 3, 4, 1])
        expect(bfs(adjList, 5, 3)).toEqual([5]);
        expect(bfs(adjList, 5, 4)).toEqual([5, 3]);
    });

    it('returns null if not found', () => {
        expect(bfs(adjList, 1, 6)).toBeNull();
        expect(bfs(adjList, 1, 7)).toBeNull();
        expect(bfs(adjList, 4, 6)).toBeNull();
        expect(bfs(adjList, 4, 7)).toBeNull();
    });
});
