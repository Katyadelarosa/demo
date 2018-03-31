import moment from 'moment';
import assert from 'assert';
import DateHelpers from './date';

describe('DateHelpers', () => {
  describe('formatDate', () => {
    it('should return formated date as String', () => {
      const date = new Date();
      const expected = moment(date).format('MM/DD/YYYY');
      const call = DateHelpers.formatDate(date);

      assert.equal(call, expected);
      assert.equal(typeof call, 'string');
    });
  });
});
