import React from 'react';
import Image from "next/image"

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Форма отправлена, скоро с вами свяжутся!</h1>
      <Image className='form-img-2' width={100} height={100}src='/pngwingcom.png' alt='success-image' />
    </div>
  );
};

export default FormSuccess;
