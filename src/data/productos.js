import remeraRioNegro from '../images/remera_Rio_Negro.jpg';
import remeraBuenosAires from '../images/remera_Bs_As.jpg';
import remeraJujuy from '../images/remera_Jujuy.jpg';
import remeraCordoba from '../images/remera_Cordoba.jpg';
import remeraNeuquen from '../images/remera_Neuquen.jpg';
import remeraMisiones from '../images/remera_Misiones.jpg';
import remeraMendoza from '../images/remera_Mendoza.jpg';
import remeraLaPampa from '../images/remera_La_Pampa.jpg';
import remeraEntreRios from '../images/remera_Entre_Rios.jpg';
import remeraLaRioja from '../images/remera_La_Rioja.jpg';
import remeraCorrientes from '../images/remera_Corrientes.jpg';
import remeraChubut from '../images/remera_Chubut.jpg';
import remeraCatamarca from '../images/remera_Catamarca.jpg';
import remeraChaco from '../images/remera_Chaco.jpg';
import remeraFormosa from '../images/remera_Formosa.jpg';


// Características comunes a todas las remeras de la colección
const base = [
  '100% algodón peinado 24/1',
  'Estampa de fileteado porteño en serigrafía',
  'Corte unisex clásico',
  'Blanca con cuello redondo',
];

export const productos = [
  {
    id: 1,
    nombre: 'Remera Río Negro',
    categoria: 'Patagonia',
    precio: 28500,
    imagen: remeraRioNegro,
    descripcion: 'Fileteado en azul y dorado con flores rojas.',
    descripcionLarga:
      'Río Negro en letras fileteadas azules, volutas doradas y flores rojas. Edición premium con estampa de mayor tamaño.',
    caracteristicas: [...base, 'Edición premium: estampa grande'],
    stock: 15,
    destacado: true,
    etiqueta: 'Más vendido',
  },
  {
    id: 2,
    nombre: 'Remera Buenos Aires',
    categoria: 'Centro',
    precio: 24000,
    imagen: remeraBuenosAires,
    descripcion: 'El clásico porteño, con volutas doradas y flores.',
    descripcionLarga:
      'La remera que da origen a la colección: Buenos Aires en letras fileteadas con volutas doradas, flores y hojas, en el estilo de los viejos colectivos porteños.',
    caracteristicas: [...base, 'Diseño insignia de la colección'],
    stock: 20,
    destacado: true,
    etiqueta: 'Más vendido',
  },
  {
    id: 3,
    nombre: 'Remera Córdoba',
    categoria: 'Centro',
    precio: 22000,
    imagen: remeraCordoba,
    descripcion: 'Letras celestes con ornamentos dorados.',
    descripcionLarga:
      'Córdoba en letras fileteadas celestes y rojas, con ornamentos dorados y una cinta en la base. Un diseño alegre para llevar todos los días.',
    caracteristicas: base,
    stock: 8,
    destacado: true,
  },
  {
    id: 4,
    nombre: 'Remera Jujuy',
    categoria: 'NOA',
    precio: 22000,
    imagen: remeraJujuy,
    descripcion: 'Colores intensos inspirados en la Quebrada.',
    descripcionLarga:
      'Jujuy en letras fileteadas con flores y volutas en colores intensos, inspirados en los cerros de la Quebrada de Humahuaca.',
    caracteristicas: base,
    stock: 25,
    destacado: true,
    etiqueta: 'Nuevo',
  },
  {
    id: 5,
    nombre: 'Remera La Rioja',
    categoria: 'NOA',
    precio: 20000,
    imagen: remeraLaRioja,
    descripcion: 'Fileteado en tonos tierra y dorado.',
    descripcionLarga:
      'La Rioja en letras fileteadas con detalles en tonos colorado y dorado, que recuerdan los paisajes de Talampaya.',
    caracteristicas: base,
    stock: 12,
  },
  {
    id: 6,
    nombre: 'Remera Misiones',
    categoria: 'NEA',
    precio: 20000,
    imagen: remeraMisiones,
    descripcion: 'Flores y hojas en verdes de selva.',
    descripcionLarga:
      'Misiones en letras fileteadas rodeadas de flores y hojas en verdes intensos, un homenaje a la selva misionera.',
    caracteristicas: base,
    stock: 10,
    destacado: true,
  },
  {
    id: 7,
    nombre: 'Remera Chubut',
    categoria: 'Patagonia',
    precio: 20000,
    imagen: remeraChubut,
    descripcion: 'Azules patagónicos con volutas doradas.',
    descripcionLarga:
      'Chubut en letras fileteadas en azules que recuerdan el mar patagónico, con volutas doradas y flores.',
    caracteristicas: base,
    stock: 6,
  },
  {
    id: 8,
    nombre: 'Remera Corrientes',
    categoria: 'NEA',
    precio: 18500,
    imagen: remeraCorrientes,
    descripcion: 'Un diseño con ritmo de chamamé.',
    descripcionLarga:
      'Corrientes en letras fileteadas con flores y volutas en colores cálidos, con todo el ritmo del chamamé.',
    caracteristicas: base,
    stock: 18,
    etiqueta: 'Oferta',
  },
  {
    id: 9,
    nombre: 'Remera Catamarca',
    categoria: 'NOA',
    precio: 20000,
    imagen: remeraCatamarca,
    descripcion: 'Fileteado con detalles rojos y dorados.',
    descripcionLarga:
      'Catamarca en letras fileteadas con detalles rojos y celeste con flores y detalles dorados.',
    caracteristicas: base,
    stock: 14,
  },
  {
    id: 10,
    nombre: 'Remera Chaco',
    categoria: 'NEA',
    precio: 18500,
    imagen: remeraChaco,
    descripcion: 'Letras fileteadas con flores coloridas.',
    descripcionLarga:
      'Chaco en letras fileteadas con flores coloridas y volutas doradas.',
    caracteristicas: base,
    stock: 30,
    etiqueta: 'Oferta',
  },
  {
    id: 11,
    nombre: 'Remera Mendoza',
    categoria: 'Cuyo',
    precio: 24000,
    imagen: remeraMendoza,
    descripcion: 'Tonos vino y dorado, con mucha historia.',
    descripcionLarga:
      'Mendoza en letras fileteadas con tonos vino y celeste con flores, un homenaje a la tierra del sol y del buen vino.',
    caracteristicas: base,
    stock: 9,
    destacado: true,
  },
  {
    id: 12,
    nombre: 'Remera Formosa',
    categoria: 'NEA',
    precio: 18500,
    imagen: remeraFormosa,
    descripcion: 'Fileteado con flores del litoral.',
    descripcionLarga:
      'Formosa en letras fileteadas acompañadas de flores y hojas del litoral, en colores vivos.',
    caracteristicas: base,
    stock: 7,
  },
  {
    id: 13,
    nombre: 'Remera Entre Ríos',
    categoria: 'Centro',
    precio: 20000,
    imagen: remeraEntreRios,
    descripcion: 'Azules de río con detalles dorados.',
    descripcionLarga:
      'Entre Ríos en letras fileteadas en azules de río, con detalles dorados.',
    caracteristicas: base,
    stock: 22,
  },
  {
    id: 14,
    nombre: 'Remera Neuquén',
    categoria: 'Patagonia',
    precio: 22000,
    imagen: remeraNeuquen,
    descripcion: 'Azul profundo con volutas doradas. ¡Última unidad!',
    descripcionLarga:
      'Neuquén en letras fileteadas azul profundo, con volutas doradas, cinta celeste y flores rojas.',
    caracteristicas: base,
    stock: 1,
    destacado: true,
  },
  {
    id: 15,
    nombre: 'Remera La Pampa',
    categoria: 'Centro',
    precio: 20000,
    imagen: remeraLaPampa,
    descripcion: 'Dorados de campo con flores rojas.',
    descripcionLarga:
      'La Pampa en letras fileteadas con dorados que recuerdan los campos de trigo, y flores rojas.',
    caracteristicas: base,
    stock: 0,
  },
];

// Lista de categorías sin repetir, para el filtro del catálogo
export const categorias = [...new Set(productos.map((producto) => producto.categoria))];
