/* global describe, it */
'use strict'
import assert from 'assert'
import Skill from '../src/Skill'

describe('Skill', () => {
  it('can be constructed', () => {
    const skill = new Skill()
    assert(typeof skill !== 'undefined')
  })
  it('set default properties with w/empty ctor args ', () => {
    const skill = new Skill()
    assert(skill.id != null)
    assert(skill.level === 0)
    assert(skill.name === '')
    assert(skill.description === '')
  })
  it('can increment level', () => {
    const skill = new Skill()
    const lv = skill.level
    skill.level++
    assert(skill.level === lv + 1)
  })
})