'use strict'
/* global describe, it, beforeEach */
import assert from 'assert'
import TreeNode from '../src/TreeNode'

describe('TreeNode', () => {
  it('should be constructed', () => {
    const treeNode = new TreeNode()
    assert.ok(treeNode)
  })
  it('should set default properties', () => {
    const treeNode = new TreeNode()
    assert(Array.isArray(treeNode.children) && treeNode.children.length === 0)
    assert(treeNode.parent == null)
  })
  describe('appendChild', () => {
    let treeNode1
    let treeNode2
    let treeNode3
    let treeNode4
    beforeEach(() => {
      treeNode1 = new TreeNode()
      treeNode2 = new TreeNode()
      treeNode3 = new TreeNode()
      treeNode4 = new TreeNode()
    })
    it('should append a child', () => {
      treeNode1.appendChild(treeNode2)
      assert(treeNode1.children.length === 1 && treeNode1.children[0] === treeNode2)
      assert(treeNode2.parent === treeNode1)
    })
    it('should insert a child', () => {
      treeNode1.appendChild(treeNode2)
      treeNode1.appendChild(treeNode3)
      treeNode1.appendChild(treeNode4, 1)
      assert(treeNode1.children.length === 3 && treeNode1.children[1] === treeNode4)
      assert(treeNode4.parent === treeNode1)
    })
  })
  describe('removeChild', () => {
    let treeNode1
    let treeNode2
    let treeNode3
    let treeNode4
    beforeEach(() => {
      treeNode1 = new TreeNode()
      treeNode2 = new TreeNode()
      treeNode3 = new TreeNode()
      treeNode4 = new TreeNode()
      treeNode1.appendChild(treeNode2)
      treeNode1.appendChild(treeNode3)
      treeNode1.appendChild(treeNode4)
    })
    it('should remove a Child', () => {
      treeNode1.removeChild(treeNode2)
      assert(treeNode1.children.length === 2)
      assert(treeNode1.children.indexOf(treeNode2) === -1)
      assert(treeNode2.parent === null)
    })
  })
})
