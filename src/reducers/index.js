import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const featureReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_FEATURE:
        // let addFeaturesArr = [action.payload];
        // if (state.car.features.length() > 0) {
        //     state.car.features.map(feature => {
        //         if (feature.id !== action.payload.id) {
        //             addFeaturesArr.push(feature);
        //         } else {
        //             addFeaturesArr
        //         }
        //     });
        // };

        return {
            ...state,
            additionalPrice: state.additionalPrice + action.payload.price,
            car: {
                ...state.car,
                features: [
                    ...state.car.features, 
                    action.payload
                ]
            }
        };
    case REMOVE_FEATURE:
        let removeFeaturesArr = [];
        state.car.features.map(feature => {
            if (feature.id !== action.payload.id) {
                console.log('src/reducers/index.js > featureReducer > REMOVE_FEATURE > feature: ', feature);
                return removeFeaturesArr.push(feature);
            }
        });
        return {
            ...state,
            additionalPrice: state.additionalPrice - action.payload.price,
            car: {
                ...state.car,
                features: removeFeaturesArr
            }
        };
    default:
      return state;
  }
};
