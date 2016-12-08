/* global describe, it, beforeEach */
'use strict'
import assert from 'assert'
import SkillTree from '../src/SkillTree'

describe('SkillTree', () => {
  it('should be constructed', () => {
    const skillTree = new SkillTree()
    assert.ok(skillTree)
  })
  it('shoud set default properties', () => {
    const skillTree = new SkillTree()
    assert(skillTree.id != null)
    assert(skillTree.level === 0)
    assert(skillTree.name === '')
    assert(skillTree.description === '')
  })
  it('should increment level', () => {
    const skill = new SkillTree()
    const lv = skill.level
    skill.incrementLevel()
    assert(skill.level === lv + 1)
  })
  it('should see isAchievable', () => {
    const skill = new SkillTree()
    skill.isAchievable = () => false
    assert(skill.isAchievable() === false)
    skill.incrementLevel()
    assert(skill.level === 0)
    skill.isAchievable = () => true
    skill.incrementLevel()
    assert(skill.level === 1)
  })
  describe('incrementLevel', () => {
    it('should not increment level if unachievable', () => {
      const st = new SkillTree({
        name: 'fire',
        description: 'fire magic'
      })
      const st2 = new SkillTree({
        name: 'fira',
        description: 'greater fire magic',
        isAchievable: () => { return st.level > 0 }
      })
      st.appendChild(st2)
      st2.incrementLevel()
      assert(st2.level === 0)

      st.incrementLevel()
      st2.incrementLevel()
      assert(st2.level === 1)
    })
  })
  describe('appendChild', () => {
    let skillNode1
    let skillNode2
    let skillNode3
    let skillNode4
    beforeEach(() => {
      skillNode1 = new SkillTree()
      skillNode2 = new SkillTree()
      skillNode3 = new SkillTree()
      skillNode4 = new SkillTree()
    })
    it('should append a child', () => {
      skillNode1.appendChild(skillNode2)
      assert(skillNode1.children.length === 1 && skillNode1.children[0] === skillNode2)
      assert(skillNode2.parent === skillNode1)
    })
    it('should insert a child', () => {
      skillNode1.appendChild(skillNode2)
      skillNode1.appendChild(skillNode3)
      skillNode1.appendChild(skillNode4, 1)
      assert(skillNode1.children.length === 3 && skillNode1.children[1] === skillNode4)
      assert(skillNode4.parent === skillNode1)
    })
  })
  describe('removeChild', () => {
    let skillNode1
    let skillNode2
    let skillNode3
    let skillNode4
    beforeEach(() => {
      skillNode1 = new SkillTree()
      skillNode2 = new SkillTree()
      skillNode3 = new SkillTree()
      skillNode4 = new SkillTree()
      skillNode1.appendChild(skillNode2)
      skillNode1.appendChild(skillNode3)
      skillNode1.appendChild(skillNode4)
    })
    it('should remove a Child', () => {
      skillNode1.removeChild(skillNode2)
      assert(skillNode1.children.length === 2)
      assert(skillNode1.children.indexOf(skillNode2) === -1)
      assert(skillNode2.parent === null)
    })
  })
})

