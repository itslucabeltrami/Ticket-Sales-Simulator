PAC_DESAROLLO_BeltramiLuca
Lenguajes de marcas y sistemas de gestión de información

El objetivo de este proyecto es el de crear una web que simule la compra de una entrada
a un concierto, en particular el de Maneskin, y de una página de confirmación.

La compra de la entrada se simula en el documento 'index.html' y consta de un formulario
que el usuario tiene que rellenar para poder comprar unas entradas.
Al hacer clic sobre el botón de confirmación, el fichero 'script.js' controla que todos los
campos sean completos. Además, aunque no era necesario, controla también que estos datos
sean coherentes: no será posible elegir una fecha y una ciudad que no corresponden a los
datos mostrados en la tabla (Ejemplo: 24-03-2025 solo podrá ser acompañado por 'Milán').

Al enviarse los datos, estos se almacenan en sessionStorage.
Si la acción es positiva, se muestra la página de confirmación en la que el fichero 'script.js'
escribirá los datos insertados previamente en sus respectivos campos.
Si el usuario nota una imperfección, puede volver atrás, los datos serán guardados en los
campos correspondientes y podrán ser editados. Al hacer clic en el botón de confirmación se
repetirá el proceso explicado en precedencia.