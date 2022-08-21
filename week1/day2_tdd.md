# Flow 1 - Day 2: Test Driven Development

[Link to Moodle page](https://cphbusiness.mrooms.net/mod/book/view.php?id=500837&chapterid=10268)

## Learning objectives

After this day you are expected to:

- Explain about Test Driven Development methodology
- Explain about mocking and other test doubles
- Be trained in writing unit-tests before writing the code

## Vigtigste mål for dagen


## Didaktiske overvejelser og greb

### Rammefaktorer

### Læringsforudsætninger

På 2. semester har vi været igennem unit-test, men ikke som TDD. Vi har også rodet med integrationstest. Der kommer en opgave i integrationstest det torsdag. Så det nye er TDD metoden og ikke så meget unit-test.

### Læringsprocessen

Der er et stort opgavesæt. Læg vægt på at man skal forstå kravene for at kunne lave en ordentlig unit-test. Det svære i opgaven er at forstå opgaven - og så at kode arrays.

## Dagens indhold

### TDD som koncept

### TDD i praksis

### Tilføj til pom-fil for junit-5

```xml
 <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.8.1</version>
    <scope>test</scope>
</dependency>

<dependency>
    <groupId>org.hamcrest</groupId>
    <artifactId>hamcrest-parent</artifactId>
    <version>1.3</version>
    <scope>test</scope>
</dependency>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>2.22.0</version>
        </plugin>
    </plugins>
</build>
```

## Hvordan ved vi om de studerende har lært det de skal?

## Hvad skal de evt. gøre inden næste gang?

### Evaluering

Skal udfyldes efter undervisningen.


[Back](../../README.md)
