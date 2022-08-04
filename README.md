# SIELCON Aplicación Web

La aplicación Web esta desarrollada en [Angular 11.0.5](https://angular.io/) y hace uso del template [Black Dashboard PRO Angular](https://demos.creative-tim.com/black-dashboard-pro-angular/#/dashboard). Click aquí para acceder a su [documentación](https://demos.creative-tim.com/black-dashboard-pro-angular/#/dashboard).

## Principales librerías utilizadas:

| Nombre                                                                      | Descripción                     |
| --------------------------------------------------------------------------- | ------------------------------- |
| [Boostrap](https://getbootstrap.com/)                                       | Manejo de Estilos               |
| [Chart.js](https://www.chartjs.org/docs/latest/)                            | Gráficos                        |
| [chartjs-plugin-datalabels](https://chartjs-plugin-datalabels.netlify.app/) | Manejo de etiquetas de gráficos |
| [ngx-datatable](https://swimlane.gitbook.io/ngx-datatable/)                 | Tablas dinámicas                |
| [SweetAlert2](https://sweetalert2.github.io/)                               | Alertas customizadas            |
| [Moment.js](https://momentjs.com/)                                          | Manejo del dato tipo Date       |
| [ngx-socket-io](https://www.npmjs.com/package/ngx-socket-io)                | Cliente WebSocket               |

## Primeros pasos

El proyecto requiere de la instalación de Angular en forma local.

```sh
npm install -g @angular/cli
```

Una vez clonado el repositorio, se deben instalar las dependencias.

```sh
cd sielcon-bdcasino-web
npm install
```

Por último se levanta el proyecto, por defecto, en http://localhost:4200/.

```sh
ng serve -o
```
