"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNodeLike = (obj) => typeof obj === 'object' && typeof obj.type === 'string';
exports.helper = {
    find: (nodePath, t, name, types = []) => {
        return NodePathHelper.findByNodePath(nodePath, t, name, types);
    }
};
class NodePathHelper {
    constructor(nodePaths, t) {
        this.nodePaths = nodePaths;
        this.t = t;
    }
    static findByNodePath(nodePath, t, name, types = []) {
        return (new NodePathHelper([nodePath], t)).find(name, types);
    }
    filter(cb) {
        const paths = this.nodePaths.filter(p => {
            const newHelper = new NodePathHelper([p], this.t);
            const get = (name) => newHelper.find(name);
            return cb(p, get);
        });
        return new NodePathHelper(paths, this.t);
    }
    find(name, types = []) {
        const [s, ...names] = name.split('.');
        const _find = (p, s) => {
            if (Array.isArray(p)) {
                if (s === '*') {
                    return p;
                }
                else {
                    return [p[s]];
                }
            }
            if (s === '*') {
                return Object.keys(p.node).map(key => p.get(key));
            }
            return [p.get(s)];
        };
        let paths = [];
        this.nodePaths.forEach(path => {
            _find(path, s).forEach(p => paths.push(p));
        });
        if (types.length > 0 && types[0]) {
            paths = paths.filter(p => typeof p === types[0] || p.type === types[0]);
        }
        const newHelper = new NodePathHelper(paths, this.t);
        if (paths.length > 0 && names.length > 0) {
            return newHelper.find(names.join('.'), types.slice(1));
        }
        else {
            return newHelper;
        }
    }
    getPaths() {
        return this.nodePaths;
    }
}
exports.NodePathHelper = NodePathHelper;
//# sourceMappingURL=index.js.map