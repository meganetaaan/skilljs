'use strict'
import Skill from './Skill'
import assert from 'assert'

// TODO: consider multi inheritance or mix-in way
class SkillTree {
  constructor (arg = {}) {
    this._skill = new Skill(arg)
    this._children = []
    this._parent = null
  }
  get id () {
    return this._skill.id
  }
  get level () {
    return this._skill.level
  }
  incrementLevel () {
    this._skill.incrementLevel()
  }
  decrementLevel () {
    this._skill.decrementLevel()
  }
  get name () {
    return this._skill.name
  }
  set name (name) {
    this._skill.name = name
  }
  get description () {
    return this._skill.description
  }
  set description (desc) {
    this._skill.description = desc
  }
  get isAchievable () {
    return this._skill.isAchievable
  }
  set isAchievable (f) {
    this._skill.isAchievable = f
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

export default SkillTree
