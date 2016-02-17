describe('Airport', function(){

  var airport;
  var plane;

    beforeEach(function(){
      airport = new Airport();
    });

    it('has no planes on creation', function(){
      expect(airport.planes()).toEqual([]);
    });

    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

});
