// pages/Home.js
import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
function Home() {
    const hotels = [
        {
            image: '/src/assets/hompton-by-the-beach.jpg',
            title: 'Hompton By The Beach Penang',
            description: 'Hompton by the Beach Penang is a 4-star hotel along the strategic Tanjung Tokong seafront that embodies both business and pleasure, offering travellers a home away from home. At Hompton, we set ourselves apart by offering guests an unforgettable experience that reminisce the irreplaceable comfort of home, upped with attentive service and a panoramic vista of the calm turquoise sea.',
        },
        {
            image: '/src/assets/bertam-resort-water-park.jpg',
            title: 'Bertam Resort and Water Park',
            description: 'Integrated 5-Star Resort in Penang. Experience luxury at the resort, featuring a 15-rides waterpark, convention center, and spa. Opened in March 2023, state-of-the-art facilities include Malaysia largest indoor pool suites, duplex level premium suites, 14 meeting rooms, 270-degree LED screen in our pillar-less ballroom, seating up to 1,250 guests. ',
        },
        {
            image: '/src/assets/angsana-teluk-bahang.jpg',
            title: 'Angsana Teluk Bahang, Penang',
            description: 'Angsana Teluk Bahang, Penang, part of Banyan Group is the first Angsana brand in Malaysia. An independent, global hospitality company with purpose. The vibrant resort located on idyllic Teluk Bahang beach, open on 10 October 2020. The resort offers 231 unobstructed sea view rooms and suites with contemporary Peranakan-inspired interior designs, complete with modern amenities and colorful tapestries by internationally acclaimed designer Omar Khan. The resort is located just a stone throw away from some of the top attractions in Penang such as Tropical Spice Garden, Penang Batik Factory, Entopia by Penang Butterfly Farm, ESCAPE theme park Penang, Penang National Park, Monkey Beach and more.',
        },
        {
            image: '/src/assets/bayview-beach-resort.jpg',
            title: 'Bayview Beach Resort',
            description: 'At Bayview Beach Resort Penang, a tropical garden filled with slender palms is all that separates you from the long stretch of enticing white sand at Batu Ferringhi beach. Painted fishing boats ply the waters of the Straits of Malacca as they have done for centuries, creating a scenic backdrop for your Penang holiday. Adventurous guests can try parasailing and jet-skiing at our Watersports Centre, while the garden massage hut offers a romantic option for honeymooning couples.',
        },
    ];
    const highlights = [
        {
            title: "1. Night Market",
            description: "Pasar Malam or night markets happen weekly to serve the needs of the neighbouring communities. Street vendors set up their stalls along roads around 6.30pm on a particular day of the week, usually near a densely populated residential area. Everyday household items and clothing are sold at affordable prices next to mouth-watering street food.",
            image: "/src/assets/nightmarket.jpg",
        },
        {
            title: "2. Fruits",
            description: "Penang boasts a wide variety of tropical fruits, thanks to its warm, humid climate, which provides an ideal environment for cultivating a diverse range of fruits throughout the year. From the pungent yet beloved durian, often referred to as the King of Fruits, to the sweet and tangy mangosteen, known as the Queen of Fruits, the island offers an extensive selection of flavors and textures. Other popular fruits like rambutan, langsat, papaya, pineapple, and starfruit, along with many others, are commonly enjoyed by locals and visitors alike.",
            image: "/src/assets/fruit.jpeg",
        },
        {
            title: "3. Culture",
            description: "Penang is a vibrant melting pot of cultures, making it one of Malaysia's most unique states. The island's rich cultural diversity is a blend of Malay, Chinese, Indian, and various other ethnic groups, each contributing their own traditions, customs, and languages. This harmonious coexistence is reflected in the architecture, festivals, food, and daily life. The streets of Penang are a living testament to its multicultural history, with temples, mosques, and churches standing side by side.",
            image: "/src/assets/culture.jpg",
        },
        {
            title: "4. History",
            description: "Penang has a rich history, shaped by its strategic location along the Strait of Malacca. It was founded by Captain Francis Light in 1786 as a British colony, quickly becoming an important trading hub. Over the years, various ethnic communities, including Malays, Chinese, and Indians, settled on the island, contributing to its diverse culture. Today, Penang blends its colonial heritage with modern development, with its historical sites, especially in George Town, reflecting its unique past.",
            image: "/src/assets/history.jpg",
        },
    ];
    return <div style={{ marginTop: "20px" }}>
        <div style={{ margin: "0 auto", width: "1200px", height: "600px" }}>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: "550px" }}
                        className="d-block w-100"
                        src="/src/assets/penang1.jpg"
                        alt="First image"
                    />
                    <Carousel.Caption>
                        <h3>Welcome To Penang!</h3>
    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     style={{ height: "550px" }}
                        className="d-block w-100"
                        src="/src/assets/penang.jpg"
                        alt="Second image"
                    />
                    <Carousel.Caption>
                        <h3>Welcome To Penang!</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     style={{ height: "550px" }}
                        className="d-block w-100"
                        src="/src/assets/peanng3.png"
                        alt="Third image"
                    />
                    <Carousel.Caption>
                        <h3>Welcome To Penang!</h3>
                     
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <div>
        
            <section>
                <h2>Tourist Spot</h2>
                <div className="scenic-container">
                    <div className="scenic-card">
                        <img src="/src/assets/penanghill.jpeg" alt="景点1" />
                        <h3>Penang Hill</h3>
                        <p>Penang Hill is a hill resort comprising a group of peaks on Penang Island, Malaysia. It is located in Air Itam, 6 kilometres (3.7 mi) west of the city centre of George Town. Penang Hill is also known by the Malay name Bukit Bendera, which actually refers to Flagstaff Hill, the most developed peak. Penang Hill covers a number of hills, with the highest point at Western Hill which is 833 metres (2,733 ft) above sea level. The hill stands out prominently from the lowlands as a hilly and forested area. It was used as a retreat during the British colonial period, and is now a popular tourist destination in Penang.</p>
                    </div>
                    <div className="scenic-card">
                        <img src="/src/assets/kekloksi.jpeg" alt="景点2" />
                        <h3>Kek Lok Si</h3>
                        <p>
                            Built since the year 1891, Kek Lok Si Temple situated in the island of Penang, Malaysia, is one of the largest and finest temples complexes in Southeast Asia</p>
                        <p>With millions of magnificent images of Buddha and hundreds of beautiful meaningful carvings, sculptures and murals in the interior and exterior of the temple halls, pagodas and archways, Kek Lok Si Temple is not just a center for Chinese culture and Buddha teaching, but also an unique heritage treasures that have Mahayana Buddhism and traditional Chinese rituals blend into a harmonious whole, in temple architecture and daily activities of worshipers.</p>
                    </div>
                    <div className="scenic-card">
                        <img src="/src/assets/street art.jpg" alt="景点3" />
                        <h3>Penang Street Art</h3>
                        <p>The Street Art of George Town in Penang is one of the most attractive things of this UNESCO World Heritage Town. Penang street art gallery is beautified with a splash of colours on streetside murals, captivating steel sculptures, wall painting and commercial art. In 2012, Municipal Corporation decided to create a plethora of art depicting the rich history of Penang's George Town on its streets. Filled with imaginations and vivid art along the Muntri Street, Weld Quay, Lebuh Leith, Armenian Street, Ah Quee Street, Penang Art Street Gallery is splashed with these beautiful artworks and caricatures just with bottles of spray paint in the hands of painters like Ernest Zacharevic, Baba Chuah, and many others.</p>
                    </div>
                    <div className="scenic-card">
                        <img src="/src/assets/batu-ferringhi-beach.jpg" alt="景点4" />
                        <h3>Batu Ferringhi Beach</h3>
                        <p>Batu Ferringhi Beach is one of Penang’s most popular and vibrant coastal destinations, known for its stunning stretches of golden sand, clear blue waters, and vibrant atmosphere. Located on the northern coast of Penang Island, Batu Ferringhi offers a perfect blend of relaxation and adventure for both locals and tourists.</p>
                    </div>
                </div>
            </section>
        </div>
      
        <section>
            <h2>Food and Beverages</h2>
            <div className="food-container">
                <div className="food-card">
                    <img src="/src/assets/Char_kway_teow.jpg" alt="火锅" />
                    <h3>Char kway teow</h3>
                    <p>
                    Char kway teow s a stir-fried rice noodle dish from Maritime Southeast Asia of southern Chinese origin.It is made from flat rice noodles,stir-fried over very high heat with garlic, light and dark soy sauce, chili paste, whole prawns, shelled blood cockles, chopped Chinese chives, slices of Chinese sausage, and bean sprouts
                    </p>
                </div>
                <div className="food-card">
                    <img src="/src/assets/Nyonya_Laksa.jpg" alt="小面" />
                    <h3>Laksa</h3>
                    <p>
                    Penang Laksa (Laksa Pulau Pinang), also known as Asam Laksa, a specialty of the Malaysian island of Penang. The soup is made with mackerel and its main distinguishing feature is the asam or tamarind which gives the soup a sour and appetizing taste. The fish is poached and then flaked. Other ingredients that give Penang Laksa its distinctive flavour include mint, pineapple slices and otak udang.
                    </p>
                </div>
                <div className="food-card">
                    <img src="/src/assets/Chendol.jpg" alt="豆花" />
                    <h3>Cendol</h3>
                    <p>
                    Penang cendol is a beloved traditional dessert that holds a special place in the hearts of locals and visitors alike. Known for its refreshing and sweet taste, it is a perfect treat to beat the tropical heat of Penang. This dessert features shaved ice drenched in creamy coconut milk, palm sugar syrup (gula Melaka), and green jelly-like strands made from rice flour, often referred to as "cendol."
                    </p>
                </div>
                <div className="food-card">
                    <img src="/src/assets/Penang-style_Hokkien_mee.jpg" alt="山城啤酒" />
                    <h3>Penang Hokkien Mee</h3>
                    <p>
                    Penang Hokkien Mee, also known as Penang Prawn Mee, is a flavorful and hearty noodle soup that has been a staple in the local food scene for generations. The dish is beloved for its rich, savory broth made from a combination of prawns, pork bones, and aromatic spices, which gives it a unique and deep umami flavor. It is typically served with a choice of yellow noodles and rice vermicelli, along with fresh prawns, boiled egg, and slices of pork or chicken.
                    </p>
                </div>
            </div>
            <div className="categories">
                <div className="category">
                    <h3 className="category-title">Signature Food</h3>
                    <div className="card-container">
                        <div className="card">
                            <img src="/src/assets/currymee.jpeg" alt="重庆火锅" />
                            <h4>White Curry Mee</h4>
                            <p>Spicy, flavorful, coconut-based noodles.</p>
                        </div>
                        <div className="card">
                            <img src="/src/assets/roticanai.jpg" alt="重庆小面" />
                            <h4>Roti Canai</h4>
                            <p>
                            Crispy, flaky, savory flatbread.</p>
                        </div>
                        <div className="card">
                            <img src="/src/assets/nasikandar.jpg" alt="烤鱼" />
                            <h4>Nasi Kandar</h4>
                            <p>Malaysian dish featuring steamed rice served with a variety of flavorful curries, meats, and vegetables.</p>
                        </div>
                    </div>
                </div>

                <div className="category">
                    <h3 className="category-title">Signature Drink</h3>
                    <div className="card-container">
                        <div className="card">
                            <img src="/src/assets/tarik.jpeg" alt="山城啤酒" />
                            <h4>Teh Tarik</h4>
                            <p>This traditional Malaysian tea is made by pulling hot tea and condensed milk through a vigorous pouring motion, creating a frothy and smooth texture.</p>
                        </div>
                        <div className="card">
                            <img src="/src/assets/coffee.jpeg" alt="盖碗茶" />
                            <h4>Penang White Coffee</h4>
                            <p>A smooth and aromatic coffee made from beans roasted with palm oil margarine, then brewed with milk and sugar.。</p>
                        </div>
                        <div className="card">
                            <img src="/src/assets/bandung.jpeg" alt="酸梅汤" />
                            <h4>Air Bandung</h4>
                            <p>a sweet, pink beverage made from rose syrup and evaporated milk</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="hotels-container">
            <h2 className="hotels-title">Hotel Recommendation</h2>
            {hotels.map((hotel, index) => (
                <div className="hotel-item" key={index}>
                    <img src={hotel.image} alt={hotel.title} className="hotel-image" />
                    <div className="hotel-text">
                        <h3 className="hotel-title">{hotel.title}</h3>
                        <p className="hotel-description">{hotel.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <div>
            <h2 style={{ textAlign: "center", margin: "20px 0" }}>Others Attractive Thing About Penang</h2>
            {highlights.map((highlight, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "20px",
                        padding: "10px",
                        borderBottom: "1px solid #ddd",
                    }}
                >
                    <img
                        src={highlight.image}
                        alt={highlight.title}
                        style={{
                            width: "20%",
                            height: "200px",
                            marginRight: "20px",
                            borderRadius: "10px",
                        }}
                    />
                    <div style={{ width: "60%" }}>
                        <h3 style={{ fontSize: "1.5em", color: "#333", marginBottom: "10px" }}>
                            {highlight.title}
                        </h3>
                        <p style={{ fontSize: "1em", color: "#666" }}>{highlight.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Home;
