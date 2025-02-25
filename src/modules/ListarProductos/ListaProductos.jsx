import React from 'react'
import { Card } from './components/Card/Card'
import { Formulario } from '../FormularioInteractivo/Formulario';

const productos = [
  { 
    id: 1, 
    nombre: "Laptop", 
    precio: 1200, 
    descripcion: "Potente laptop ideal para trabajo y gaming.",
    img: "https://static.vecteezy.com/ti/vecteur-libre/p1/4141669-aucune-photo-ou-image-blanche-icone-chargement-images-ou-image-manquante-marque-image-non-disponible-ou-image-coming-soon-sign-simple-nature-silhouette-in-frame-illustrationle-isolee-vectoriel.jpg" 
  },
  { 
    id: 2, 
    nombre: "Mouse", 
    precio: 25, 
    descripcion: "Mouse ergonómico con precisión óptica.",
    img: "https://static.vecteezy.com/ti/vecteur-libre/p1/4141669-aucune-photo-ou-image-blanche-icone-chargement-images-ou-image-manquante-marque-image-non-disponible-ou-image-coming-soon-sign-simple-nature-silhouette-in-frame-illustrationle-isolee-vectoriel.jpg" 
  },
  { 
    id: 3, 
    nombre: "Teclado", 
    precio: 45, 
    descripcion: "Teclado mecánico retroiluminado para mayor comodidad.",
    img: "https://static.vecteezy.com/ti/vecteur-libre/p1/4141669-aucune-photo-ou-image-blanche-icone-chargement-images-ou-image-manquante-marque-image-non-disponible-ou-image-coming-soon-sign-simple-nature-silhouette-in-frame-illustrationle-isolee-vectoriel.jpg" 
  }
];

export const ListaProductos = () => {
  return (
    <div className='flex flex-col justify-center gap-y-4'>
      <Formulario />
      <Card products={productos}/>
    </div>
  )
}
