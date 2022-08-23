describe("TodoList 테스트", () => {   //대주제
    it("1. TodoList 화면 접속", () => {
        cy.visit("/todoList");          // cypress.json 파일의 baseUrl + /todoList 경로로 접속
    });
    it("2. TodoList 입력", () => {
        cy.get('#inputTodoList').type("사이프레스 테스트하기");   //get = 쿼리셀렉터와 생각하면 됨.
    });
    it("3. TodoList 추가", () => {
        cy.get("#addTodoList").click();     //버튼 클릭
    });
    it("4. TodoList 입력 추가 반복", () => {
        for(let i=0; i<10; i++) {
            cy.get('#inputTodoList').type("사이프레스 테스트하기" + i);   //get = 쿼리셀렉터와 생각하면 됨.
            cy.get("#addTodoList").click();     //버튼 클릭
        }
    });

})