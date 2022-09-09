# JPA extended
1. [Document](https://docs.google.com/document/d/1YrsGp67ODMlHHbDClwyhpK8TGJNa-SSCszltG6kHtQY/edit?usp=sharing)
2. Parent - IdentificationCard
  - Play with the Parent Persists.All relationship to IdentificationCard
  - IdentificationCard created and updated dates
  - Exercise: Create new test class and test that remove parent will remove all IdentificationCards
3. Parent - Child
  - Look at ParentFacade create, update, delete
  - Exercise: 
    1. Create a new Entity: Address with a OneToMany from Address to Parent 
    2. Add fields like street, number, zip etc. 
    3. Add the proper addParent() and removeParent() methods to Address, that inforces the bi-directional relationship
    4. Create an AddressFacade with both create and delete methods to handle addresses with parent entities.
    5. Create a UnitTest to test both create and delete methods on the AddressFacade
4. Tool - Toy
  - delete in ToolFacadeTest
  - Exercise: Fix the Tool - Toy relationship so that when removing a Tool we will not remove its toys.
