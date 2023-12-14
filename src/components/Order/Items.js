import img1 from '../../assets/img/dozenMixed.webp';
import img2 from '../../assets/img/dozen1.webp';
import img3 from '../../assets/img/dozen2.webp';
import img4 from '../../assets/img/cronut.webp';
import img5 from '../../assets/img/sncream.webp';
import img6 from '../../assets/img/afritter.webp';
import img7 from '../../assets/img/cinroll.webp';
import img8 from '../../assets/img/spinach.webp';
import img9 from '../../assets/img/sroll.webp';
import img10 from '../../assets/img/hec.webp';
import img11 from '../../assets/img/bec.webp';
import img12 from '../../assets/img/sec.webp';
import img13 from '../../assets/img/sprinkle.webp';
import img14 from '../../assets/img/cronutholes.webp';

const items = [
    {
        id: 1,
        title: 'Mixed Dozen Donuts',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fcard-special.png?alt=media&token=2c24e1bb-04b0-4fdf-aae0-c9adc2de0e54',
        imageUrl: img1,
        imageAlt: 'Product shot of boxed assorted donuts',
        tag: 'Donut Box',
        formattedPrice: '$15.50',
    },
    {
        id: 2,
        title: 'Glazed Dozen Box',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fcard-classics.png?alt=media&token=7426b89f-4fab-4e03-b1a0-08b0e593f508',
        imageUrl: img2,
        imageAlt: 'Product shot of boxed dozen Glazed Donuts',
        tag: 'Donut Box',
        formattedPrice: '$11.80',
    },
    {
        id: 3,
        title: 'Glazed & Chocolate Dozen Box',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fglchoc-card.png?alt=media&token=b579afaa-1990-4c58-b68b-2dee24f964da',
        imageUrl: img3,
        imageAlt: 'Product shot of boxed dozen Glazed Donuts',
        tag: 'Donut Box',
        formattedPrice: '$13.00',
    },
    {
        id: 4,
        title: 'Cronut',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fcard-cronut.png?alt=media&token=2af1f7f1-5a6e-4a69-8efb-e61887d7ca9a',
        imageUrl: img4,
        imageAlt: 'Product shot of Cronut',
        tag: 'Specialty Item',
        formattedPrice: '$3.29',
    },
    {
        id: 5,
        title: 'Fresh Strawberries and Cream Croissant',
        imageUrl: img5,
        imageAlt: 'Product shot of Fresh Strawberries and Cream Croissant',
        tag: 'Specialty Item',
        formattedPrice: '$3.29',
    },
    {
        id: 6,
        title: 'Apple Fritter',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fafritter-png.png?alt=media&token=4c9fb0f6-f282-4967-8136-6daa3d146139',
        imageUrl: img6,
        imageAlt: 'Product shot of Apple Fritter',
        tag: 'Specialty Item',
        formattedPrice: '$2.49',
    },
    {
        id: 7,
        title: 'Cinnamon Roll',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fcinroll-card.png?alt=media&token=efd78dda-9d84-41d7-b7e7-0ffbe0096e5a',
        imageUrl: img7,
        imageAlt: 'Product shot of Cinnamon Roll',
        tag: 'Specialty Item',
        formattedPrice: '$2.29',
    },
    {
        id: 8,
        title: 'Spinach Bistro',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fspb-card.png?alt=media&token=ea81e6cc-52ce-4f8a-8b16-f5ce6d37cb2a',
        imageUrl: img8,
        imageAlt: 'Spinach Bistro',
        tag: 'Specialty Item',
        formattedPrice: '$3.29',
    },
    {
        id: 9,
        title: 'Croissant Sausage Roll with Bacon',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fcroibacon-card.png?alt=media&token=b6683e9d-b92d-47d8-b9b0-b33e5d9b5279',
        imageUrl: img9,
        imageAlt: 'Croissant Sausage Roll with Bacon',
        tag: 'Sausage Roll',
        formattedPrice: '$1.69',
    },
    {
        id: 10,
        title: 'Croissant Ham, Egg, and Cheese Sandwich',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fswich-card.jpg?alt=media&token=29ed3801-645e-47de-8806-4135558a5fd0',
        imageUrl: img10,
        imageAlt: 'Product shot of Breakfast Sandwich',
        tag: 'Breakfast Good',
        formattedPrice: '$4.89',
    },
    {
        id: 11,
        title: 'Croissant Bacon, Egg, and Cheese Sandwich',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2FBEC-card.png?alt=media&token=c1e8b206-a273-438d-b3f2-9b59a29fafd1',
        imageUrl: img11,
        imageAlt: 'Product shot of Breakfast Sandwich',
        tag: 'Breakfast Good',
        formattedPrice: '$4.89',
    },
    {
        id: 12,
        title: 'Croissant Sausage, Egg, and Cheese Sandwich',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2FSEC-card.png?alt=media&token=d4e39082-dec7-4ef2-a51b-3fdd9b40c4ce',
        imageUrl: img12,
        imageAlt: 'Product shot of Breakfast Sandwich',
        tag: 'Breakfast Good',
        formattedPrice: '$4.89',
    },
    {
        id: 13,
        title: 'Sprinkle Donut',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fsprinklewh-card.png?alt=media&token=431160a7-6dd9-48ef-ab98-52028531353b',
        imageUrl: img13,
        imageAlt: 'Product shot of Sprinkle Donut',
        tag: 'Donut',
        formattedPrice: '$1.39',
    },
    {
        id: 14,
        title: 'Cronut Holes',
        // imageUrl: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fcrohole-card.png?alt=media&token=f92b54ad-2090-4d92-a748-7e52e9ad1fbf',
        imageUrl: img14,
        imageAlt: 'Product shot of Cronut Holes',
        tag: 'Donut Holes',
        formattedPrice: '$6.00',
    },
];

export default items;
