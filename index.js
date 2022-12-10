function fibsRec(num, prev = 0, current = 1, array = Array.from([0])) {
  /**
   * Array.from() to pass the value of [] which would be an objet into an array
   */
  return num == 1 ? array : fibsRec(num - 1, current, current + prev, array.concat(current));
}

console.log(fibsRec(8));
