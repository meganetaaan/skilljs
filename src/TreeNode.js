'use strict'
import assert from 'assert'

class TreeNode {
  constructor () {
    this._children = []
    this._parent = null
  }

  get parent () {
    return this._parent
  }

  get children () {
    return this._children
  }

  appendChild (child, idx) {
    assert.ok(child)
    if (child.parent === this) {
      return
    } else if (child.parent != null) {
      child.parent.removeChild(child)
    }

    if (idx != null) {
      this._children.splice(idx, 0, child)
    } else {
      this._children.push(child)
    }
    child._parent = this
  }

  removeChild (child) {
    assert.ok(child)
    const idx = this._children.indexOf(child)
    if (idx != null) {
      this._children.splice(idx, 1)
      child._parent = null
    }
  }
}

export default TreeNode
