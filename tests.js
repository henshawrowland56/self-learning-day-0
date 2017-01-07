  'use strict';
   var findMinMax = require('MinMax');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [1, 2] for [2,1]', function () {
        expect(findMinMax([2,1])).toEqual([1, 2]);
      });

      it('should return [25, 100] for [100,100,25]', function () {
        expect(findMinMax([100, 100, 25])).toEqual([25, 100]);
      });

      it('should return [20, 78] for [56,33,45,37,77,20,74,78]', function () {
        expect(findMinMax([56, 33, 45, 37, 77, 20, 74, 78])).toEqual([20, 78]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [7, 98] for [7, 98, 8, 68, 2]', function () {
        expect(findMinMax([7, 98, 8, 68, 2])).toEqual([7, 98]);
      });

      it('should return [1000] for [1000]', function () {
        expect(findMinMax([1000])).toEqual([1000]);
      });


      it('should return [10, 20] for [11, 13, 18, 20, 19, 10, 11, 14]', function () {
        expect(findMinMax([11, 13, 18, 20, 19, 10, 11, 14])).toEqual([10, 20]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });

  });

