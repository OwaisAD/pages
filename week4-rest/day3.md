# Day 3 Rest assured integration test
## Restassured
- POM dependencies
  - io.rest-assured
  - hamcrest-library
  - jersey-container-grizzly2-http
## Grizzly server
- How it works and why we need it

## Hamcrest
- Gerkin syntax
  - ```given() .contentType("application/json") .get("http://localhost:7777/api/xxx/count") .then()
    .assertThat() .statusCode(HttpStatus.OK_200.getStatusCode()) ```
  - [Hamcrest](https://chercher.tech/rest-assured/hamcrest-assertion-rest-assured)

## Start code with the rest-snippet branch
- Go through the examples in this demo code.
