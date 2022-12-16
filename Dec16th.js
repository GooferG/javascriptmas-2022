function insertDashes(arr) {
  // write code here
  const words = arr.split(' ');
  console.log(words);
  const lettersDashed = words.map((word) => word.split('').join('-'));
  return lettersDashed.join(' ');
}

/**
 * Test Suite
 */
describe('insertDashes()', () => {
  it('insert dashes in between chars', () => {
    // arrange
    const value = 'aba caba';

    // act
    const result = insertDashes(value);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe('a-b-a c-a-b-a');
  });
});
