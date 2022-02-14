export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Пожалуйста, скажите как вас зовут';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = 'Нам необходимы ваши контакты, чтобы с вами связаться';
  }
  if (!values.needs) {
    errors.password = 'Нужно ввести, что вы хотите';
  }
  return errors;
}
