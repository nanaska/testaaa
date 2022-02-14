import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
    const submitTelegram = () => {
      var name = values.username
      var email = values.email
      var needs = values.needs
      var token = "5176710730:AAHp06mFlyekBqT7zISV4H6OpFjz877j4HI"
      var chat_id = "-774235403"
      console.log(name,email,needs,token)
      fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${name},%0A${email},%0A${needs}`)
    }
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Введите пожалуйста ваши данные
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Как вас зовут</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Введите ваше имя'
            value={values.username}
            onChange={handleChange}
          />
         {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Ваши контактные данные</label>
          <input
            className='form-input'
            
            name='email'
            placeholder='Введите любые ваши контакты, чтобы мы могли связаться с вами'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Введите что вы хотите купить</label>
          <input
            className='form-input'
            type='text'
            name='needs'
            placeholder='Ваше желание'
            value={values.needs}
            onChange={handleChange}
          />
          {errors.needs && <p>{errors.needs}</p>}
        </div>
        <button onClick={submitTelegram} className='form-input-btn' type='submit'>
          Отправить
        </button>
        
      </form>
    </div>
  );
};

export default FormSignup;
