import signUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
      res.forEach((r) => ({
        status: r.status,
        value: r.value === 'fillfulled' ? r.value : r.reason,
      }));
    });
}
