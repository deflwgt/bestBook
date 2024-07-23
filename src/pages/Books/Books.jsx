/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import './Book.css'
import logo from '../../assets/logo.png'
import Home from '../Home/Home'
import card_img1 from "../../assets/cards/card1.jpg";
import card_img2 from "../../assets/cards/card2.jpg";
import card_img3 from "../../assets/cards/card3.jpg";
import card_img4 from "../../assets/cards/card4.jpg";
import card_img5 from "../../assets/cards/card5.jpg";
import card_img6 from "../../assets/cards/card6.jpg";
import card_img7 from "../../assets/cards/card7.jpg";
const articles = [
  {
    id: 1 ,
    image: card_img1,
    name: "The Strange Library",
    content:"An Innocent Quest for Knowledge Leads to Unsettling Discoveries | Chapter 1A young boy, the protagonist of Haruki Murakami's The Strange Library,embarks on what seems like an innocuous quest for knowledge when he decides to visit his local library. His objective is simple yet peculiar for someone his age: he wants to learn about tax collection in the Ottoman Empire. As he steps into the library, an unexpected journey begins, punctuated by an eerie and unsettling atmosphere.The library, initially a mundane and familiar place, soon takes on a mysterious vibe as the boy walks through its doors. He approaches the librarian, a somewhat stern and unyielding figure, and requests books on his desired subject. The librarian, instead of directly helping the boy, directs him to room 107, a place he has never heard of before. The boy, with a mix of curiosity and obedience, follows the guidance, descending into the bowels of the library.Room 107 is unlike any other part of the library — dark and cavernous, it exudes a sense of foreboding. Here, the ambiance shifts dramatically, and the boy's journey begins to take on an almost nightmarish quality. As he navigates this peculiar space, he meets the old man, a grim and somewhat sinister figure who leads him further into the depths of the library. " 
  },
  {
    id: 2 ,
    image: card_img2,
    name: "Norwegian Wood",
    content:"As his plane arrives at Hamburg Airport, Toru Watanabe hears the Beatles' song Norwegian Wood played over the speakers, bringing back an intense and painful memory, a scene from 18 years ago in 1969 when he was 19 years old. As he walks through a large empty meadow with Naoko, a girl he loved, she tells him a story about a mysterious well hidden in the grasses into which people had occasionally fallen into and died in. Naoko says that she isn't afraid that Toru would fall in and knows that she too would be safe so long as she stayed with him; they share this intimacy, but when Toru suggests to Naoko that she relax herself, Naoko is hurt and explains that she can't relax because she is doing all she can to not fall apart. However, as the two walk into a forest they reconcile and Naoko asks two wishes of Toru: that he know how much she appreciates his coming to visit her, and that he remember her. Toru earnestly promises at the time, but then later remarks on how the passing of time made his memory fade of her—though it also allowed him to write about her."
  },
  {
    id: 3 ,
    image: card_img3,
    name: "Kafka on the Shore",
    content:"Kafka on the Shore (海辺のカフカ, Umibe no Kafuka) is a 2002 novel by Japanese author Haruki Murakami. Its 2005 English translation was among The 10 Best Books of 2005 from The New York Times and received the World Fantasy Award for 2006. The book tells the stories of the young Kafka Tamura, a bookish 15-year-old boy who runs away from his Oedipal curse, and Satoru Nakata, an old, disabled man with the uncanny ability to talk to cats. The book incorporates themes of music as a communicative conduit, metaphysics, dreams, fate, and the subconscioussAfter the release of the book, Murakami allowed for questions about the novel to be sent in, and responded to many of them. The novel was generally well-received, with positive reviews from John Updike and The New York Times."
  },
  {
    id: 4 ,
    image: card_img4,
    name: "The Wind-Up Bird Chronicle",
    content:"The Wind-Up Bird Chronicle (ねじまき鳥クロニクル, Nejimakidori Kuronikuru) is a novel published in 1994–1995 by Japanese author Haruki Murakami. The American translation and its British adaptation, dubbed the only official translations (English), are by Jay Rubin and were first published in 1997. For this novel, Murakami received the Yomiuri Literary Award, which was awarded to him by one of his harshest former critics, Kenzaburō Ōe."
  },
  {
    id: 5 ,
    image: card_img5,
    name: "1Q84",
    content:"1Q84 (いちきゅうはちよん, Ichi-Kyū-Hachi-Yon, stylized in the Japanese cover as ichi-kew-hachi-yon is a novel written by Japanese writer Haruki Murakami, first published in three volumes in Japan in 2009–10.[1] It covers a fictionalized year of 1984 in parallel with a real one. The novel is a story of how a woman named Aomame begins to notice strange changes occurring in the world. She is quickly caught up in a plot involving Sakigake, a religious cult, and her childhood love, Tengo, and embarks on a journey to discover what is real .The novel's first printing sold out on the day it was released and sales reached a million within a month.[2] The English-language edition of all three volumes, with the first two volumes translated by Jay Rubin and the third by Philip Gabriel, was released in North America and the United Kingdom on October 25, 2011.[3][4][5][6] An excerpt from the novel appeared in the September 5, 2011 issue of The New Yorker magazine as Town of Cats."
  },
  {
    id: 6 ,
    image: card_img6,
    name: "Hard-Boiled Wonderland and the End of the World",
    content:"Hard-Boiled Wonderland and the End of the World (世界の終りとハードボイルド・ワンダーランド, Sekai no Owari to Hādo-Boirudo Wandārando) is a 1985 novel by Japanese author Haruki Murakami. It was awarded the Tanizaki Prize in 1985. The English translation by Alfred Birnbaum was released in 1991. A strange and dreamlike novel, its chapters alternate between two narratives—Hard-Boiled Wonderland (the cyberpunk, science fiction part) and The End of the World (the surreal, virtual fantasy part)."
  },
  {
    id: 7 ,
    image: card_img7,
    name: "MEN without WOMEN",
    content:"Men Without Women (Japanese: 女のいない男たち, Hepburn: Onna no inai otokotachi) is a 2014 collection of short stories by Japanese author Haruki Murakami, translated and published in English in 2017. The stories are about men who have lost women in their lives, usually to other men or death.[5][6] The collection shares its title with Ernest Hemingway's second short story collection."
  },
  
];

const Books = () => {
  return (
    <>
    <div className='aboutUs'>
    <Link to="/">
      <img src={logo} className='logo' alt="" />
      </Link>
      <h1> Top recommend ! </h1>
    </div>

        <header className='header'>
        <h1>The book for you ! </h1>
        </header>

<main className='main'>
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.name} />
            <h2>{article.name}</h2>
            <p>{article.content}</p>
          </div>
        ))}
</main>
    </>
   
  )
}

export default Books
