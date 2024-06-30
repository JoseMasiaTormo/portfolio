import React from 'react';
import './profDesc.css';

const TitlePD = () => {
    return <div className='bg-title-square' />
}

const DescriptionPD = () => {
    return <div className='bg-description-square'>
        <p> 
            Como desarrollador web, tengo experiencia en el Frontend y Backend. Disfruto profundamente del 
            proceso de desarrollo y tengo un fuerte compromiso con el aprendizaje continuo. Siempre estoy 
            motivado para ampliar mis conocimientos, ya que creo firmemente que nunca es tarde para adquirir
            nuevas habilidades, especialmente en el ámbito de la informática y la tecnología.
        </p>
    </div>
}

const ProfesionalDesc = () => {
  return <div className='pd-table'>
    <TitlePD />
    <DescriptionPD />
  </div>;
};

export default ProfesionalDesc;
