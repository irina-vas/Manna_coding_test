import moment from 'moment';
export const dateFormatter = (sec) => {
  return moment().startOf('hour').fromNow(); 
}