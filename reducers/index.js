// import { configureStore } from '@reduxjs/toolkit';

// import surveyFormData from './surveyFormData';

// const store = configureStore({
//   reducer: { surveyFormData: surveyFormData.reducer },
// });

// export default store;
import { combineReducers } from 'redux';
import surveyFormData from './surveyFormData';
import spinnerVisible from './spinnerVisible';

const surveyCombinedReducers = combineReducers({
    surveyFormData,
    spinnerVisible
});

export default surveyCombinedReducers;