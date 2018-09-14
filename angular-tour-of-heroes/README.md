# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


# Criando o projeto pelo angular cli
```
ng new angular-tour-of-heroes
```

# Criando um novo componente
```
ng g c heroes
```
- O comando **ng g c heroes** vai criar uma nova pasta para o componente e registralo sozinho no arquivo **app.module.ts**
- Repare que no arquivo hero.component.ts tem um método **ngOnInit()** que pertence o **lifecicle** do Angular
- Podemos criar um atributo no arquivo **.ts** e fazer o **databinding** com o HTML

**heroes.component.ts**
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Windstorm';

  constructor() { }

  ngOnInit() {
  }

}
```
**heroes.component.html**
```
{{ hero }}
```



