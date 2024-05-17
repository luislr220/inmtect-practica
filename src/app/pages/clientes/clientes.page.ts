import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  segmentoSeleccionado: string = 'administrar-clientes';
  terminoBusqueda: string = '';
  
  clientes: Array<{ nombre: string }> = [
    { nombre: 'Carlos, Ward' },
    { nombre: 'Johnny, Kelly' },
    { nombre: 'Martha, Long' },
    { nombre: 'Rachel, Williamson' },
    { nombre: 'Earl, Turner' },
    { nombre: 'Theresa, Peterson' },
    { nombre: 'Howard, Carr' },
    { nombre: 'Jacqueline, Barnes' },
    { nombre: 'Jane, Fowler' },
  ];

  constructor() {}

  ngOnInit() {}

  clientesFiltrados() {
    if (this.terminoBusqueda.trim() === '') {
      return this.clientes;
    }
    return this.clientes.filter((cliente) =>
      cliente.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }
}
