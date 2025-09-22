import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: false,
  searchOpen: false,
  heroOpen: false,
  cartOpen:false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: state => { state.menuOpen = !state.menuOpen },
    toggleSearch: state => { state.searchOpen = !state.searchOpen },
    toggleHero: state => { state.heroOpen = !state.heroOpen },
    closeAll: state => {
      state.menuOpen = false;
      state.searchOpen = false;
      state.heroOpen = false;
    },
    toggleCart:(state)=>{ state.cartOpen=!state.cartOpen },
    setCart:(state,action)=>{
      state.cartOpen=action.payload
    }

  },
});

export const {setCart ,toggleMenu,toggleSearch,toggleCart,toggleHero,closeAll } = uiSlice.actions;
export default uiSlice.reducer;
