# Day 1 JPA basics
## ORM - What is it
Object Relational Mapping
1. To worlds colliding (object referece vs. foreign key relationship)
2. Stay in java, think in objects with references
3. Let the framework do the mapping (object fields to table collumn data)

## Code examples
- From Java object to Database tupple
```java
    //STEP 1: Register JDBC driver
    Class.forName(DB.driver);

    //STEP 2: Open a connection
    System.out.println("Connecting to database...");
    conn = DriverManager.getConnection(DB.url,DB.username,DB.password);

    //STEP 3: Execute a query
    System.out.println("Creating statement...");
    stmt = conn.createStatement();
    String sql;
    sql = "SELECT studentid, firstname, lastname, major FROM student";
    ResultSet rs = stmt.executeQuery(sql);

    //STEP 4: Extract data from result set
    while(rs.next()){
        //Retrieve by column name
        int id  = rs.getInt("studentid");
        String major = rs.getString("major");
        String first = rs.getString("firstname");
        String last = rs.getString("lastname");

        //STEP 5 create objects
        studentList.add(new Student(id, major, first, last))
    }
    //STEP 6: Clean-up environment
    rs.close();
    stmt.close();
    conn.close();

    //STEP 7: Return object collection
    return studentList;
```
### With JPA
```java
public List<Child> getAll() {
    EntityManager em = getEntityManager();
    try {
        TypedQuery<Student> query = em.createQuery("SELECT s FROM Student s", Student.class);
        List<Student> students = query.getResultList();
        return students;
    } finally {
        em.close();
    }
}
```

## Required objects
1. Persistence Unit (persistence.xml holding the database connection and other configuration)
2. EntityManagerFactory (from javax.persistence.EntityManagerFactory for )
3. Entity Class (Representing a database entry)
4. Entity Manager (For doing all the work)
5. Transaction for database modification operations
6. Query (or TypedQuery<>) to hold the query made by the entitymanager for requests to the database.
![](https://i.ytimg.com/vi/VVZKgOQgP0w/maxresdefault.jpg)

## Persistence Unit
Where we put our database connection configuration and schema-generation (create, drop-and-create, none)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<persistence version="2.1" xmlns="http://xmlns.jcp.org/xml/ns/persistence" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence http://xmlns.jcp.org/xml/ns/persistence/persistence_2_1.xsd">
    <persistence-unit name="pu" transaction-type="RESOURCE_LOCAL">
        <provider>org.eclipse.persistence.jpa.PersistenceProvider</provider>
        <!--    <class>entities.RenameMe</class>-->
        <exclude-unlisted-classes>false</exclude-unlisted-classes>
        <properties>
            <property name="javax.persistence.jdbc.driver" value="com.mysql.cj.jdbc.Driver"/>
            <property name="eclipselink.canonicalmodel.subpackage" value="xx345y657"/>
            <property name="javax.persistence.schema-generation.database.action" value="create"/>
            <property name="javax.persistence.jdbc.url" value="jdbc:mysql://localhost:3306/startcode?serverTimezone=UTC"/>
            <property name="javax.persistence.jdbc.user" value="dev"/>
            <property name="javax.persistence.jdbc.password" value="ax2"/>
        </properties>
    </persistence-unit>
</persistence>
```
## Minimum necessary annotations
- @Entity, 
- @NamedQuery, 
- @Id, 
- @Column(name = "id")
- @GeneratedValue(strategy = GenerationType.IDENTITY), 
- @ManyToOne, 
- @ManyToMany, 
- @OneToMany, 
- @OneToOne, 
- @JoinColumn(name = "parent_id", referencedColumnName = "id")

## Example of an Entity Class
```java
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@NamedQuery(name = "Parent.deleteAllRows", query = "DELETE from Parent")
public class Parent {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private Integer age;
    @OneToMany(mappedBy = "parent") 
    private Set<Child> children;
    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL) //ID cards are personal and exist only when a persen does (Identifying relationship)
    private Set<IdentificationCard> cards;

    public Parent() {}

    public Parent(String name, Integer age) {
        this.name = name;
        this.age = age;
        this.children = new HashSet<>();
        this.cards = new HashSet<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "age")
    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Parent parent = (Parent) o;

        if (id != parent.id) return false;
        if (name != null ? !name.equals(parent.name) : parent.name != null) return false;
        if (age != null ? !age.equals(parent.age) : parent.age != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (age != null ? age.hashCode() : 0);
        return result;
    }


    public Set<Child> getChildren() {
        return children;
    }

    public void setChildren(Set<Child> children) {
        this.children = children;
    }

    public void addChild(Child child) {
        this.children.add(child);
        child.setParent(this); //Child gets a parent when parent gets the child
    }

    public Set<IdentificationCard> getCards() {
        return cards;
    }

    public void setCards(Set<IdentificationCard> cards) {
        this.cards = cards;
    }

    public void addCard(IdentificationCard card) {
        this.cards.add(card);
        card.setParent(this);
    }

}

```

## Reserved words (BE AWARE HERE)
Solution: `@Column(name="\"open\"")` or give column and table another name.
Se full [list](https://doc.ispirer.com/sqlways/Output/SQLWays-1-205.html) here.

## Extra annotations:
- @PreUpdate and @PrePersist
```java 
@PreUpdate
public void onUpdate() {
    editted = LocalDateTime.now(ZoneId.of("GMT+02:00"));
}

@PrePersist
public void onPersist(){
    editted = LocalDateTime.now(ZoneId.of("GMT+02:00"));
    created = LocalDateTime.now(ZoneId.of("GMT+02:00"));
}
```
- @Temporal(TemporalType.TIMESTAMP) //Not necessary to annotate with @Temporal when using java.time.LocalDateTime; (translates to TIMESTAMP on mysql
- @Transient
For data in java objects that we do NOT wish to persist (like age calculated from birthday)
```java
@Transient
public boolean age() {
    return Period.between(birthDate, currentDate).getYears();
}
```

## Entity Manager Methods
1. em.find(Entity.class, id)
2. em.createQuery("SELECT e FROM EntityExample e")
3. em.getTransaction()
4. em.persist(e)
5. em.merge(e)
6. em.remove(e)
7. em.close()

## Example code (CRUD)
```java
public MyEntity create(MyEntity me){
   EntityManager em = getEntityManager();
   try {
       em.getTransaction().begin();
       em.persist(me);                        
       //alternative methods are: em.persist(me), em.merge(me), em.remove(me)
       em.getTransaction().commit();
   } finally {
       em.close();
   }
   return me; //me now has an id from the mysql server
}
````
and
```java
public List<MyEntity> getAll(){
   EntityManager em = emf.createEntityManager();
   TypedQuery<MyEntity> query = em.createQuery("SELECT m FROM MyEntity m", MyEntity.class);
   List<MyEntity> mes = query.getResultList();
   return mes;
}

public List<MyEntity> getByProperty(String name){
   EntityManager em = emf.createEntityManager();
   TypedQuery<MyEntity> query = em.createQuery("SELECT m FROM MyEntity m WHERE m.name = :name", MyEntity.class);
   query.setParameter("name", name);
   List<MyEntity> mes = query.getResultList();
   return mes;
}

public MyEntity getById(long id) {
    EntityManager em = emf.createEntityManager();
    MyEntity me = em.find(MyEntity.class, id);
    return me;
}
