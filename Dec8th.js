function validTime(str) {
  //  write code here.
  let time = str.split(':');
  let hours = parseInt(time[0]);
  let minutes = parseInt(time[1]);
  if (hours > 24 || hours < 0 || minutes > 60 || minutes < 0) {
    return false;
  }
  return true;
}

/**
 * Test Suite
 */
describe('validTime()', () => {
  it('returns true for valid time', () => {
    // arrange
    const str = '13:58';

    // act
    const result = validTime(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(true);
  });

  it('returns false when invalid hours', () => {
    // arrange
    const str = '25:51';

    // act
    const result = validTime(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(false);
  });

  it('returns false when invalid minutes', () => {
    // arrange
    const str = '02:76';

    // act
    const result = validTime(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(false);
  });
});
