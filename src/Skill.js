'use strict'

const DEFAULT = {
  level: 0,
  name: '',
  description: ''
}

const seq = (function () {
  let i = 0
  const f = () => i++
  return f
})()

class Skill {
  constructor (arg) {
    const param = Object.assign({}, DEFAULT, arg)
    this._id = param.id != null ? param.id : seq()
    this.level = param.level
    this.name = param.name
    this.description = param.description
  }

  get id () {
    return this._id
  }
}

export default Skill
