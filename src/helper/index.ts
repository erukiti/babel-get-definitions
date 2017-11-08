export const isNodeLike = (obj) => typeof obj === 'object' && typeof obj.type === 'string'

interface Node {
    type: string
    [props: string]: any
}

interface NodePath {
    type: string
    node: Node
    get(string): NodePathHolder
}

type NodePathHolder = NodePath | Array<NodePath>

export const helper = {
    find: (nodePath: NodePath, t, name: string, types = []) => {
        return NodePathHelper.findByNodePath(nodePath, t, name, types)
    }
}

export class NodePathHelper {
    nodePaths: Array<NodePathHolder>
    t

    constructor(nodePaths: Array<NodePathHolder>, t) {
        this.nodePaths = nodePaths
        this.t = t
    }

    static findByNodePath(nodePath: NodePath, t, name: string, types = []) {
        return (new NodePathHelper([nodePath], t)).find(name, types)
    }

    filter(cb) {
        const paths = this.nodePaths.filter(p => {
            const newHelper = new NodePathHelper([p], this.t)
            const get = (name: string) => newHelper.find(name)
            return cb(p, get)
        })
        return new NodePathHelper(paths, this.t)
    }

    find(name: string, types = []) {
        const [s, ...names] = name.split('.')

        const _find = (p: NodePathHolder, s: string): Array<NodePathHolder> => {
            if (Array.isArray(p)) {
                if (s === '*') {
                    return p
                } else {
                    return [p[s]]
                }
            }

            if (s === '*') {
                return Object.keys(p.node).map(key => p.get(key))
            }

            return [p.get(s)]
        }

        let paths = []
        this.nodePaths.forEach(path => {
            _find(path, s).forEach(p => paths.push(p))
        })
        if (types.length > 0 && types[0]) {
            paths = paths.filter(p => typeof p === types[0] || p.type === types[0])
        }

        const newHelper = new NodePathHelper(paths, this.t)

        if (paths.length > 0 && names.length > 0) {
            return newHelper.find(names.join('.'), types.slice(1))
        } else {
            return newHelper
        }

    }

    getPaths() {
        return this.nodePaths
    }
}
