'use strict'

const DEFAULT = {
  level: 0,
  name: '',
  description: '',
  isAchievable: () => true
}

const seq = (function () {
  let i = 0
  const f = () => i++
  return f
})()

// TODO: distinguish definition and state
class Skill {
  constructor (arg) {
    const param = Object.assign({}, DEFAULT, arg)
    this._id = param.id != null ? param.id : seq()
    this._level = param.level
    this._name = param.name
    this._description = param.description
    this._isAchievable = param.isAchievable
  }

  get id () {
    return this._id
  }

  get level () {
    return this._level
  }

  get name () {
    return this._name
  }

  get description () {
    return this._description
  }

  set isAchievable (isAchievable) {
    if (typeof isAchievable === 'function') {
      this._isAchievable = isAchievable
    } else {
      throw new Error(`not function: ${isAchievable}`)
    }
  }

  get isAchievable () {
    return this._isAchievable
  }

  incrementLevel () {
    if (this._isAchievable()) {
      this._level++
    }
  }

  decrementLevel () {
    this._level--
  }
}

export default Skill
