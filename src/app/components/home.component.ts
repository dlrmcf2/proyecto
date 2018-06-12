import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: '../views/home.html'
})
export class HomeComponent{
    public titulo: string;

    
    constructor(

		private router: Router
    ) {
        this.titulo = "Bienvenido a Concesionario Rodríguez, la mejor web para encontrar tu coche ideal al mejor precio.";
    }
    ngOnInit () {
        console.log('Se ha cargado home.component.ts');
    }
    entrar(){
        if (sessionStorage.getItem('puede') === 's'){
            sessionStorage.setItem('btn','c');
            this.router.navigate(['/crear-producto']);
        } else {
            sessionStorage.setItem('btn','l');
            this.router.navigate(['/login']);
        }
    }
}
