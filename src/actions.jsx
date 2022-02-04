//Action creators for react/redux - JS Calc App
import { OPERAND, EQUALS, CLEAR, DIGIT, BS, } from './constants'

function clickDigit(num) {
  return {
    type: DIGIT,
    num: num
  }
}

function clickOp(operand) {
  return {
    type: OPERAND,
    op: operand
  }
}

function equalIt(num) {
  return {
    type: EQUALS,
    num: num
  }
}

function clearIt() {
  return {
    type: CLEAR
  }
}

function bsIt() {
  return {
    type: BS
  }
}

function toggleKey(keyId) {
  let element = document.getElementById(keyId)
  element.classList.toggle('key-active')
  setTimeout(() => element.classList.toggle('key-active'), 150)
}
export { clickOp, equalIt, clearIt, clickDigit, bsIt, toggleKey }