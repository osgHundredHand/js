describe("pow", function() {
    describe('예외처리', function(){
        describe('지수, 피지수가 String이 들어가면 예외발생. NaN을 리턴해야함',function(){
            it('2와 String을 pow하면 => NaN',function(){
                assert.isNaN(pow(2,'String'));
            });
            it('String과 String을 pow하면 => NaN', function(){
                assert.isNaN(pow('blaarlar','String'));
            });
        });
        describe('지수가 음수, 유리수이면 예외발생. NaN을 리턴해야함', function(){
            it("n이 음수일 때 결과는 NaN입니다.", function() {
                assert.isNaN(pow(2, -1));
            });
            
            it("n이 정수가 아닐 때 결과는 NaN입니다.", function() {
                assert.isNaN(pow(2, 1.5));
            });
        });
    });
    describe('x의 3승 (1 to 9)',function(){
        function multiTest(x){
            let mulThree = x*x*x;
            it(`${x}의 3승은 => ${mulThree}`, function() {
                assert.equal(pow(x, 3), mulThree); // assert.equal(a,b) => a, b이 일치하는지 판별
                assert.isNotNaN(pow(x, 3)); // assert.isNotNaN(a) => a의 값이 NaN이 아니면 pass
                //해당 코드는 assert 두개를 동시에 통과해야함(문법상 문제는 없으나..)
                //테스트는 명확한 입력값,출력값과 함께 여러 개의 it 블록으로 나눠 작성하는 것을 매우 권장함.
              });    
        }
        for(let i=1; i<=9; i++){
            multiTest(i);
        }
    });
  });