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
  data: [
    {
      cover: "1978_For_You.jpg",
      album: "For You",
      year: "1978",
      description: "For You is the debut studio album by American singer-songwriter Prince. For You reached No. 163 on the Billboard 200 and No. 21 on the Billboard Soul chart. \"Soft and Wet\", the album's lead single, became a minor hit on the Billboard Hot 100, peaking at No. 92."
    },
    {
      cover: "1979_Prince.jpg",
      album: "Prince",
      year: "1979",
      description: "Prince is the self-titled second studio album by American musician Prince. It was released on October 19, 1979 by Warner Bros. Records. Overall, Prince was regarded as more diverse than For You (1978), and performed better critically and commercially. Reviewing in Christgau's Record Guide: Rock Albums of the Seventies (1981), Robert Christgau wrote: \"This boy is going to be a big star, and he deserves it\". Prince peaked at 22 on the Billboard 200 and number three on the Billboard R&B Chart. The album contained three Billboard Hot Black Singles hits: \"Why You Wanna Treat Me So Bad?\", \"Sexy Dancer\" and \"I Wanna Be Your Lover\"."
    },
    {
      cover: "1980_Dirty_Mind.jpg",
      album: "Dirty Mind",
      year: "1980",
      description: "Dirty Mind has been considered by critics to be his most creative and boldest album, setting the standard for his artistic direction in the partisans years. A fusion of post-disco, new wave, funk and dance, Dirty Mind has more punk sounds than Prince's previous albums. Prince’s high and feminine vocals, along with his androgynous image during the album's era, has been recognized for bringing attention to gaydar. Controversially, the album's theme is fueled by explicit topics including oral sex, threesome, incest and ejaculation, which has been credited for opening the doors for sexually explicit albums in the coming years."
    },
    {
      cover: "1981_Controversy.jpg",
      album: "Controversy",
      year: "1981",
      description: "Controversy reached number three on the Billboard R&B Albums chart and was certified Platinum by the Recording Industry Association of America (RIAA). It was voted the eighth best album of the year in the 1981 Pazz & Jop, an annual critics poll run by The Village Voice. This was the first of his albums to associate Prince with the color purple as well as the first to use sensational spelling in his song titles."
    },
    {
      cover: "1982_1999.jpg",
      album: "1999",
      year: "1982",
      description: "1999 received widespread acclaim from critics, and was seen as Prince's breakthrough album. On March 24, 1999, 1999 was certified quadruple platinum by RIAA. 1999 has been ranked as one of the greatest albums of all time by several publications and organizations. The music videos for both \"1999\" and \"Little Red Corvette\" received heavy rotation on MTV, making Prince one of the first black artists to be in heavy rotation on the television channel. According to the Rolling Stone Album Guide (2004), \"1999 may be Prince's most influential album: Its synth-and-drum machine-heavy arrangements codified the Minneapolis sound that loomed over mid-'80s R&B and pop, not to mention the next two decades' worth of electro, house, and techno.\"  It is also included on Rolling Stone\'s 500 Greatest Albums of All Time.  In 2008, the album was inducted into the Grammy Hall of Fame."
    },
    {
      cover: "1984_Purple_Rain.jpg",
      album: "Purple Rain",
      year: "1984",
      description: "Purple Rain was musically denser than Prince's previous albums, emphasizing full band performances, and multiple layers of guitars, keyboards, electronic synthesizer effects, drum machines, and other instruments. Purple Rain became Prince's first album to reach number one on the Billboard 200. The album spent 24 consecutive weeks atop on the Billboard 200 and was present on the chart for a total of 122 weeks. \"When Doves Cry\" and \"Let's Go Crazy\" reached number one on the Billboard Hot 100. In May 1996, the album was certified 13x Platinum by RIAA. Its total sales stand at 25 million copies worldwide, making it one of the best-selling albums of all time. Rolling Stone ranked the album number eight on its list of the 500 Greatest Albums of All Time. It was inducted into the Grammy Hall of Fame and added to the Library of Congress' National Recording Registry list of sound recordings that \"are culturally, historically, or aesthetically important\"."
    },
    {
      cover: "1985_Around_the_World_in_a_Day.jpg",
      album: "Around the World in a Day",
      year: "1985",
      description: "Departing somewhat from the commercial sound of his previous release, the massively successful Purple Rain (1984), the album instead saw Prince experimenting with psychedelic styles and more opulent textures. Around the World in a Day was released to notably mixed reception after the success of Purple Rain, though it nonetheless sold relatively well and became Prince and the Revolution's second number-one album on the Billboard 200. Two of its four singles reached the top 10 of the Billboard Hot 100: \"Raspberry Beret\" and \"Pop Life\"."
    },
    {
      cover: "1986_Parade.jpg",
      album: "Parade",
      year: "1986",
      description: "Parade eschews the guitar and rock elements of Prince's 1984 album Purple Rain in favor of the psychedelic pop style he explored on Around the World in a Day (1985), austerely produced funk, and soundtrack compositions. After the critical disappointment of his 1985 album Around the World in a Day, Parade was released to acclaim from music critics. \"Kiss\" reached number one on the Billboard Hot 100. Parade was certified Platinum by RIAA in June 1986. Parade was named one of the best albums of 1986 by The Village Voice and NME magazine, who named it their Album of the Year."
    },
    {
      cover: "1987_Sign_o_the_Times.jpg",
      album: "Sign `o` the Times",
      year: "1987",
      description: "Though not as commercially successful as Purple Rain, Sign o' the Times was Prince's most acclaimed album, being voted 1987's best album in the Pazz & Jop critics poll. Included in many lists of the greatest albums of all time, it has been appraised by many critics as Prince's best album, ahead of Purple Rain. Writing for The Rolling Stone Album Guide (2004), Michaelangelo Matos regarded it as \"the most complete example of [Prince's] artistry's breadth, and arguably the finest album of the 1980s\". In 2017, the album was inducted into the Grammy Hall of Fame."
    },
    {
      cover: "1988_Lovesexy.jpg",
      album: "Lovesexy",
      year: "1988",
      description: "Receiving mixed reviews, Lovesexy reached number 11 on the Billboard 200, his first album since 1981's Controversy not to crack the top-10. It spawned three singles; \"Alphabet St.\" became a worldwide top-10 hit in the spring of 1988, whereas the follow-up singles \"Glam Slam\" and \"I Wish U Heaven\" failed to reach the Billboard Hot 100."
    },
    {
      cover: "1989_Batman.jpg",
      album: "Batman",
      year: "1989",
      description: "Batman is the eleventh studio album by American recording artist Prince and the soundtrack album to the 1989 film Batman. The album stayed at number one on the Billboard 200 for six consecutive weeks, being his first number one album since Around the World in a Day, while its lead single, \"Batdance\", became his first number one song since \"Kiss\". It is certified double platinum by RIAA."
    },
    {
      cover: "1990_Graffiti_Bridge.jpg",
      album: "Graffiti Bridge",
      year: "1990",
      description: "The album was much better received in sales than the film. It reached number 6 in the United States and was his third consecutive chart-topper (following Lovesexy and Batman) on the UK Albums Chart. Nearly every song on the record was written by Prince despite the handful of artists performing, including Tevin Campbell, Mavis Staples, and the Time."
    },
    {
      cover: "1991_Diamonds_&_Pearls.jpg",
      album: "Diamonds & Pearls",
      year: "1991",
      description: "Diamonds and Pearls contains a hybrid of music styles, from the funk of \"Daddy Pop\", \"Jughead\", and first single \"Gett Off\", to some of the more mainstream pop/rock songs Prince had recorded in some time, such as \"Cream\", \"Money Don't Matter 2 Night\" and the title song."
    },
    {
      cover: "1992_Love_Symbol.jpg",
      album: "[Love Symbol]",
      year: "1992",
      description: "This album was originally conceived as a \"fantasy rock soap opera\" with various spoken segues throughout (with its storyline becoming the basis for the direct-to-video film 3 Chains o' Gold), and contains elements of R&B, pop, soul, funk, and rock styles. Its first two singles, \"Sexy MF\" and \"My Name Is Prince\", achieved modest success on the US pop chart."
    },
    {
      cover: "1994_Come.jpg",
      album: "Come",
      year: "1994",
      description: "The album would be Prince's final Warner Bros. album under his name. For the remainder of his contract with the company, his name would be represented by the \"Love Symbol\", and he would be referred to as \"The Artist Formerly Known as Prince\". Most of the songs from the Come album were recorded in early 1993 during a highly prolific time for Prince."
    },
    {
      cover: "1995_The_Gold_Experience.jpg",
      album: "The Gold Experience",
      year: "1995",
      description: "The Gold Experience sold 500,000 copies in the United States and peaked at number six on the Billboard 200, failing to meet the record label's commercial expectations. According to biographer Jason Draper, it may have undersold because Prince was losing touch with younger listeners and also because his contractual dispute with Warner Bros. Nonetheless, The Gold Experience was a success with critics. Melody Maker called it Prince's best record in years, while Vibe said it was his best since Sign o' the Times in 1987."
    },
    {
      cover: "1996_Chaos_&_Disorder.jpg",
      album: "Chaos & Disorder",
      year: "1996",
      description: "Prince refused to promote the album, still engaged in his fight against his Warner Bros. contract, and it was released simply to fulfill his contractual obligations. A re-appraisal of the album after Prince's death lauded it as \"a rocker with moments of some of Prince's finest guitar playing.\" Another described it as a \"tightly-focused, grunge-oriented rock-funk collection\" where \"the grit and punch of the musicianship is what gives the album its overall raw edge\"."
    },
    {
      cover: "1996_Emancipation.jpg",
      album: "Emancipation",
      year: "1996",
      description: "It was released on November 19, 1996, by NPG Records and EMI Records as a triple album. Emancipation is something of a concept album, celebrating his release from Warner Bros. as well as his marriage to Mayte Garcia, who became his wife on Valentine's Jour earlier that year. With his newfound liberty, Prince experimented more openly with varying genres, including house and blues. He also freely commented on his fame and dealings with Warner Bros, while also returning slightly to the \"computer\" theme he explored a decade earlier."
    },
  ]
};

