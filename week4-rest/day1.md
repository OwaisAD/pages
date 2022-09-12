# Rest day 1: Startcode, 
### Start code
- Find on moodle and clone
- Adjust the project in 5 steps:
  1. Remove the .git folder and git init to your own repository
  2. Create a new dev database locally (eg. my_new_db)
  3. In Pom.xml do 4 things:
      1. Change name
      2. Change artifactId
      3. Change remote.server
      4. Change db.name (my_new_db)
  4. In .github/workflows/mavenworkflow.yml change:
    1. (if necessary) to name of your main branch: "main" or "master"
    2. the name of your test database (only if you changed it away from startcode_test)
  5. Rename the "RenameMe" entity, facade, Ressource classes or delete them and create your own 1: entities, 2: facades 3: Rest Ressource and 4: test classes
- Look at the utils.EMF_Creator.java file and understand how it produces the database connections we need and how it relates to the persistence.xml file.

### DTOs and GSON
1. Serialize a Person entity (Change from java object to text/json)
2. Make a PersonDTO to protect the Person Entity from exposure.
3. Serialize a Person with (many to many relation to) Address entity and produce the StackOverFlow error.
4. Solve the problem as a group exercise in class.
