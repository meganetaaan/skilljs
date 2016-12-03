/* global describe, it */
'use strict'
import assert from 'assert'
import Skill from '../src/Skill'

describe('Skill', () => {
  it('should be constructed', () => {
    const skill = new Skill()
    assert(typeof skill !== 'undefined')
  })
  it('should set default properties with empty ctor args ', () => {
    const skill = new Skill()
    assert(skill.id != null)
    assert(skill.level === 0)
    assert(skill.name === '')
    assert(skill.description === '')
  })
  it('should increment level', () => {
    const skill = new Skill()
    const lv = skill.level
    skill.incrementLevel()
    assert(skill.level === lv + 1)
  })
  it('should see isAchievable', () => {
    const skill = new Skill()
    skill.isAchievable = () => false
    assert(skill.isAchievable() === false)
    skill.incrementLevel()
    assert(skill.level === 0)
    skill.isAchievable = () => true
    skill.incrementLevel()
    assert(skill.level === 1)
  })
})
