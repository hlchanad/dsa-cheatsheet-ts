/**
 * @return path traversed
 */
export function dfs(adjList: number[][], start: number, target: number): number[] {
    if (!adjList[start] || !adjList[target]) {
        throw new Error('invalid start or target');
    }

    const stack: number[] = [];
    const visited: number[] = [];

    stack.push(...adjList[start]);
    visited.push(start);

    while (stack.length) {
        const current = stack.pop();

        if (visited.indexOf(current) >= 0) {
            continue;
        }

        if (current === target) {
            return visited;
        }

        stack.push(...adjList[current]);
        visited.push(current);
    }

    return null;
}

/**
 * @return path traversed
 */
export function bfs(adjList: number[][], start: number, target: number): number[] {
    if (!adjList[start] || !adjList[target]) {
        throw new Error('invalid start or target');
    }

    const queue: number[] = [];
    const visited: number[] = [];

    queue.push(...adjList[start]);
    visited.push(start);

    while (queue.length) {
        const current = queue.splice(0, 1)[0];

        if (visited.indexOf(current) >= 0) {
            continue;
        }

        if (current === target) {
            return visited;
        }

        queue.push(...adjList[current])
        visited.push(current);
    }

    return null;
}
