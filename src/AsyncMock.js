
const serv =  [{id: 1, producto: "Emprende", descripcion: "Programa destinado a asistirte en el armado de tu emprendimiento", precio : 9.99, detalle: "Obtenga una guia para conocer los requerimientos basicos segun el negocio que quiera emprender"},
{id: 2, producto: "Growth", descripcion: "Recibi asistencia para poder hacer crecer tu negocio existente", precio: 15.99, detalle: "Ideal para aquellos que buscan crecer su negocio actual y quieren identificar aquellos puntos de mejora necesarios"},
{id: 3, producto: "Financer", descripcion: "Recibi asistencia para optimizar tus finanzas, tanto personales como de tu negocio", precio: 19.99, detalle: "Sabes si realmente al final del mes ganaste mas"}];

export const getProducts = Promise = (resolve, reject) => {

        return new Promise((res, rej) = () => {
            setTimeout(()=> (resolve(serv)), 500)
        }


        )
      };

