// import { v4 as uniqueId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('contact/changeFilter');

const actions = {
    changeFilter,
};

export default actions;


// export const addContact = createAction(
//     'contact/addContact',
//     function prepare(name, number) {
//         return {
//             payload: {
//                 id: uniqueId(),
//                 name,
//                 number,
//             },
//         };
//     },
// );

// export const deleteContact = createAction('contact/deleteContact');
// export const changeFilter = createAction('contact/changeFilter');