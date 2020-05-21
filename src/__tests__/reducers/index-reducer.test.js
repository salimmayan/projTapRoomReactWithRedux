import rootReducer from "../../reducers/index";
import formToRenderReducer from "../../reducers/form-to-render-reducer";
import kegListReducer from "../../reducers/keg-list-reducer";

import { createStore } from "redux";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("TEST-1 (rootReducer): Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formToRender: false,
    });
  });

  test("TEST-2 (rootReducer): Check that initial state of ticketListReducer matches root reducer", () => {
    expect(store.getState().masterKegList).toEqual(
      kegListReducer(undefined, { type: null })
    );
  });

  test("TEST-3 (rootReducer): Check that initial state of formVisibleReducer matches root reducer", () => {
    expect(store.getState().formToRender).toEqual(
      formToRenderReducer(undefined, { type: null })
    );
  });



  test('TEST-4 (rootReducer): Check that initial state of kegListReducer matches root reducer', () => {
    const action = {
        type: 'ADD_KEG',
        kegName: 'Fanta',
        kegBrand: 'Pepsi Co',
        kegPrice: 10,
        kegFlavor: "Orangy",
        id: 10,
        pintQty: 15,
        alertMessage: "Almost Empty !",
        disableButton: "disableButton",
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });
  
  test('TEST-5 (rootReducer): Check that initial state of formToRenderReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formToRender).toEqual(formToRenderReducer(undefined, action));
  });


});