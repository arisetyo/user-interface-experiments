/**
 * Carousel stories
 */

import React from 'react';
import Carousel from './Carousel.js';

export default {
  component: Carousel,
  title: 'Components/Carousel',
  parameters: {
    docs: {
      description: {
        component:
          'Carousel Description',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Carousel props description',
      table: {
        defaultValue: {
          summary: 'Carousel props default value',
        },
      },
    },
  },
};

export const ExamplePrince = (args) => <Carousel {...args} />;
ExamplePrince.args = {
  title: "Prince - The Golden Years",
  data: [
    {
      position: 0,
      cover: "1978_For_You.png",
      album: "For You (1978)",
      description: "Funk"
    },
    {
      position: 1,
      cover: "1979_Prince.png",
      album: "Prince (1979)",
      description: "Funk 2"
    },
    {
      position: 2,
      cover: "1980_Dirty_Mind.png",
      album: "Dirty Mind (1980)",
      description: "Pop"
    },
    {
      position: 3,
      cover: "1981_Controversy.png",
      album: "Controversy (1981)",
      description: "Rock"
    },
    {
      position: 4,
      cover: "1982_1999.png",
      album: "1999 (1982)",
      description: "Rock"
    },
    {
      position: 5,
      cover: "1984_Purple_Rain.png",
      album: "Purple Rain (1984)",
      description: "Funk"
    },
    {
      position: 6,
      cover: "1985_Around_the_World_in_a_Day.png",
      album: "Around the World in a Day (1985)",
      description: "Funk"
    },
    {
      position: 7,
      cover: "1986_Parade.png",
      album: "Parade (1986)",
      description: "Funk 2"
    },
    {
      position: 8,
      cover: "1987_Sign_o_the_Times.png",
      album: "Sign `o` the Times (1987)",
      description: "Pop"
    },
    {
      position: 9,
      cover: "1988_Lovesexy.png",
      album: "Lovesexy (1988)",
      description: "Rock"
    },
    {
      position: 10,
      cover: "1989_Batman.png",
      album: "Batman (1989)",
      description: "Industrial"
    },
    {
      position: 11,
      cover: "1990_Graffiti_Bridge.png",
      album: "Graffiti Bridge (1989)",
      description: "Industrial"
    },
    {
      position: 12,
      cover: "1991_Diamonds_&_Pearls.png",
      album: "Diamonds & Pearls (1989)",
      description: "Industrial"
    },
    {
      position: 13,
      cover: "1992_Love_Symbol.png",
      album: "[Love Symbol] (1992)",
      description: "Funk"
    },
    {
      position: 14,
      cover: "1994_Come.png",
      album: "Come (1994)",
      description: "Funk 2"
    },
    {
      position: 15,
      cover: "1995_The_Gold_Experience.png",
      album: "The Gold Experience (1995)",
      description: "Pop"
    },
    {
      position: 16,
      cover: "1996_Chaos_&_Disorder.png",
      album: "Chaos & Disorder (1996)",
      description: "Rock"
    },
    {
      position: 17,
      cover: "1996_Emancipation.png",
      album: "Emancipation (1996)",
      description: "Funk"
    },
  ]
};

