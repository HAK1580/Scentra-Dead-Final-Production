import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product_info: [
{
    id: "1",
    image: "IMGS/Products/1.png",
    title: "Rosmerta White",
    price: 8499,
    oldprice: 6900,
    desc: "Inspired by White Musk"
  },
  {
    id: "2",
    image: "IMGS/Products/18.png",
    title: "Amber Dusk",
    price: 3400,
    oldprice: 4900,
    desc: "Inspired by Amber Oud"
  },
  {
    id: "3",
    image: "IMGS/Products/3.png",
    title: "Velvet Rose",
    price: 2500,
    oldprice: 7900,
    desc: "Inspired by Velvet Rose"
  },
  {
    id: "4",
    image: "IMGS/Products/4.png",
    title: "Citrus Aura",
    price: 1100,
    oldprice: 1900,
    desc: "Inspired by Fresh Citrus"
  },
  {
    id: "5",
    image: "IMGS/Products/5.png",
    title: "Noir Vanilla",
    price: 3200,
    oldprice: 5900,
    desc: "Inspired by Black Vanilla"
  },
  {
    id: "6",
    image: "IMGS/Products/6.png",
    title: "Sandal Essence",
    price: 3500,
    oldprice: 6900,
    desc: "Inspired by Sandalwood Essence"
  },
  {
    id: "7",
    image: "IMGS/Products/7.png",
    title: "Ocean Mist",
    price: 1200,
    oldprice: 1999,
    desc: "Inspired by Ocean Breeze"
  },
  {
    id: "8",
    image: "IMGS/Products/8.png",
    title: "Jasmine Whisper",
    price: 1500,
    oldprice: 2999,
    desc: "Inspired by Jasmine Bloom"
  },
  {
    id: "9",
    image: "IMGS/Products/9.png",
    title: "Leather Woods",
    price: 2500,
    oldprice: 3999,
    desc: "Inspired by Woody Leather"
  },
  {
    id: "10",
    image: "IMGS/Products/10.png",
    title: "Royal Oud",
    price: 5500,
    oldprice: 9999,
    desc: "Inspired by Royal Oud"
  },
  {
    id: "11",
    image: "IMGS/Products/11.png",
    title: "Golden Amber",
    price: 4200,
    oldprice: 7500,
    desc: "Inspired by Amber Gold"
  },
  {
    id: "12",
    image: "IMGS/Products/12.png",
    title: "Mystic Bloom",
    price: 2800,
    oldprice: 4500,
    desc: "Inspired by Floral Essence"
  },
  {
    id: "13",
    image: "IMGS/Products/13.png",
    title: "Cedar Noir",
    price: 3600,
    oldprice: 6200,
    desc: "Inspired by Dark Cedarwood"
  },
  {
    id: "14",
    image: "IMGS/Products/14.png",
    title: "Pure Blossom",
    price: 1900,
    oldprice: 3200,
    desc: "Inspired by Spring Blossoms"
  },
  {
    id: "15",
    image: "IMGS/Products/15.png",
    title: "Royal Saffron",
    price: 6300,
    oldprice: 10500,
    desc: "Inspired by Exotic Saffron"
  },
  {
    id: "16",
    image: "IMGS/Products/16.png",
    title: "Velour Oud",
    price: 4800,
    oldprice: 8200,
    desc: "Inspired by Deep Oud"
  },
  {
    id: "17",
    image: "IMGS/Products/17.png",
    title: "Luxe Patchouli",
    price: 3900,
    oldprice: 6700,
    desc: "Inspired by Patchouli Woods"
  },
  {
    id: "18",
    image: "IMGS/Products/18.png",
    title: "Black Shore",
    price: 9900,
    oldprice: 6700,
    desc: "Inspired by Asrchouli Woods"
  },
  {
    id: "19",
    image: "IMGS/Products/19.png",
    title: "Crimson Rose",
    price: 2200,
    oldprice: 3800,
    desc: "Inspired by Fresh Red Roses"
  },
  {
    id: "20",
    image: "IMGS/Products/20.png",
    title: "Silver Mist",
    price: 2700,
    oldprice: 4400,
    desc: "Inspired by Morning Dew"
  },
  {
    id: "21",
    image: "IMGS/Products/21.png",
    title: "Midnight Luxe",
    price: 5200,
    oldprice: 9000,
    desc: "Inspired by Night Oud"
  },
  {
    id: "22",
    image: "IMGS/Products/22.png",
    title: "Lotus Dream",
    price: 2900,
    oldprice: 4600,
    desc: "Inspired by Lotus Blossom"
  }
],
 best_seller:[
{
    id: "1",
    image: "IMGS/Products/1.png",
    title: "Rosmerta White",
    price: 8499,
    oldprice: 6900,
    desc: "Inspired by White Musk"
  },
  {
    id: "2",
    image: "IMGS/Products/18.png",
    title: "Amber Dusk",
    price: 3400,
    oldprice: 4900,
    desc: "Inspired by Amber Oud"
  },
  {
    id: "3",
    image: "IMGS/Products/3.png",
    title: "Velvet Rose",
    price: 2500,
    oldprice: 7900,
    desc: "Inspired by Velvet Rose"
  },
  {
    id: "4",
    image: "IMGS/Products/4.png",
    title: "Citrus Aura",
    price: 1100,
    oldprice: 1900,
    desc: "Inspired by Fresh Citrus"
  },
  {
    id: "5",
    image: "IMGS/Products/5.png",
    title: "Noir Vanilla",
    price: 3200,
    oldprice: 5900,
    desc: "Inspired by Black Vanilla"
  },
] ,
new_arrival:[
  {
    id: "14",
    image: "IMGS/Products/14.png",
    title: "Pure Blossom",
    price: 1900,
    oldprice: 3200,
    desc: "Inspired by Spring Blossoms"
  },
  {
    id: "11",
    image: "IMGS/Products/11.png",
    title: "Golden Amber",
    price: 4200,
    oldprice: 7500,
    desc: "Inspired by Amber Gold"
  },
  {
    id: "13",
    image: "IMGS/Products/13.png",
    title: "Cedar Noir",
    price: 3600,
    oldprice: 6200,
    desc: "Inspired by Dark Cedarwood"
  },
  {
    id: "12",
    image: "IMGS/Products/12.png",
    title: "Mystic Bloom",
    price: 2800,
    oldprice: 4500,
    desc: "Inspired by Floral Essence"
  },
  {
    id: "15",
    image: "IMGS/Products/15.png",
    title: "Royal Saffron",
    price: 6300,
    oldprice: 10500,
    desc: "Inspired by Exotic Saffron"
  },
  {
    id: "16",
    image: "IMGS/Products/16.png",
    title: "Velour Oud",
    price: 4800,
    oldprice: 8200,
    desc: "Inspired by Deep Oud"
  },
  {
    id: "17",
    image: "IMGS/Products/17.png",
    title: "Luxe Patchouli",
    price: 3900,
    oldprice: 6700,
    desc: "Inspired by Patchouli Woods"
  },
  
  
],
weekly_deals:[
  {
    id: "17",
    image: "IMGS/Products/17.png",
    title: "Luxe Patchouli",
    price: 3900,
    oldprice: 6700,
    desc: "Inspired by Patchouli Woods"
  },
  {
    id: "21",
    image: "IMGS/Products/21.png",
    title: "Midnight Luxe",
    price: 5200,
    oldprice: 9000,
    desc: "Inspired by Night Oud"
  },
  {
    id: "18",
    image: "IMGS/Products/18.png",
    title: "Black Shore",
    price: 9900,
    oldprice: 6700,
    desc: "Inspired by Asrchouli Woods"
  },
  {
    id: "20",
    image: "IMGS/Products/20.png",
    title: "Silver Mist",
    price: 2700,
    oldprice: 4400,
    desc: "Inspired by Morning Dew"
  },
  {
    id: "19",
    image: "IMGS/Products/19.png",
    title: "Crimson Rose",
    price: 2200,
    oldprice: 3800,
    desc: "Inspired by Fresh Red Roses"
  },
  {
    id: "22",
    image: "IMGS/Products/22.png",
    title: "Lotus Dream",
    price: 2900,
    oldprice: 4600,
    desc: "Inspired by Lotus Blossom"
  }
]

};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    


  },
});

export const { } = productSlice.actions;
export default productSlice.reducer;
