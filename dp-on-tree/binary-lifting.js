const binaryLifting = (tree, src, parent, up) => {
    up[src][0] = parent; 
    // jump 2^i level
    for (let i=1; i < 20; i++) {
        if(up[src][i-1] !== -1) {
            up[src][i] = up[up[src][i-1]][i-1]
        } else {
            up[src][i] = -1;
        }
    }

    for (const child of tree[src]) {
        if(child !== parent) {
            binaryLifting(tree, child, src, up);
        }
    }
}

const query = (node, jumpRequired) => {
    if(node === -1 || jumpRequired === 0) {
        return node;
    }
    // choose largest possible jump in power of 2
    for (let i=19; i >=0; i++) {
        if(jumpRequired >= (1<<i)) {
            return query(up[node][i], jumpRequired - (1<<i))
        }
    }
}