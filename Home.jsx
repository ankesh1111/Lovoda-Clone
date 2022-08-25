import Navbar from "../Components/Navbar";
import image from "../assets/image.png"
import { Link } from "react-router-dom";
import "./Home.css"
import {  FaFacebook,FaInstagramSquare, FaTiktok ,FaPinterestP} from "react-icons/fa";
import Footer from "../Components/Footer";

function Home(){


    return (
        <div>
            
             <Navbar/>

             {/* First Body */}

             <div>
                <div>
                    <img src={image} />
                </div>

                <br />
                <br />
                <br />
             </div>

             {/* Second body  */}

             <div id="container1">
                <div>
                <Link to="/cart">  <img 
                     src=" https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395" /></Link>
                    <p class="w2">Evermore Ear Cuff Earrings</p>
                    <p class="w1">$10.00</p>

                </div>
                <div>
                <Link to="/cart"> <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-2_1.jpg?v=1659450313" /></Link>
                   
                    <p class="w3">Wired Ear Cuff Earrings</p>
                    <p class="w1">$10.00</p>

                </div>
                <div>
                  
                <Link to="/cart">   <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-1_1.jpg?v=1659450226" /></Link>
                    <p class="w3">Fern Ear Cuff Earrings</p>
                    <p class="w1">$10.00</p>

                </div>
                <div>
                <Link to="/cart"><img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-1_1_823x.jpg?v=1659450051" /></Link>
                    <p class="w2">Blossom Ear Cuff Earrings</p>
                    <p class="w1">$10.00</p>

                </div>
             </div>
             <br />
             

             {/* --------------Third Body-------------------- */}


             <div id="container2">
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101108-3_1_823x.jpg?v=1659449973" />
                    <p class="w2">Barrel Stone Earrings</p>
                    <p class="w1">$18.00</p>

                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-2_1_823x.jpg?v=1659449908" />
                    <p class="w3">Ball Stud Earrings Gold</p>
                    <p class="w1">$12.00</p>

                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101106-G-1_1_823x.jpg?v=1659449836" />
                    <p class="w3">Classic Stone Stud Earrings</p>
                    <p class="w1">$12.00</p>

                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101105-1_1_823x.jpg?v=1659449763" />
                    <p class="w2">Acclaim Hoop Earrings</p>
                    <p class="w1">$20.00</p>

                </div>
             </div>
                  <br />
                  <br />

                  {/* ------------Heading ------------- */}

                  <div>
                    <h1>SHOP THE FEED</h1>
                    <p>Tag us on instagram @LovodaShop or #Lovoda</p>
                  </div>

                  <br />
                  <br />
                  <br />
                  
                  <p class="w4">Follow us on instagram @lovodaShop</p>
            <br />

         {/* Fouth Body section */}

         <div id="container3">
              <div>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/296817431_163686646176589_9025849763226676913_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=HGpB3Xc0rAAAX82ZdDT&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT-zpCUGQyMEYiYVLdYU5vINM5QGAiKc-cAW8P9Ak_HS2A&oe=63050D77&_nc_sid=b9f2ee" alt="" />
              </div>
              <div>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/292524868_710978926641964_7932405403123906811_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=bq9tp72oaPgAX9-wpcJ&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT-K1_2aiG3UBHA0-s6HTCoPbnyXc-HUCiDDZZKAjFKmjw&oe=63051189&_nc_sid=b9f2ee" />
              </div>
              <div>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/286870102_1070652883832328_5078147322534170043_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=RMHf9VpBvlYAX-r6U1j&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT9UrjbjrnNEf7AgPEAUNanR5fq_pDOGIO2ldH3PWyUeFA&oe=63050C4C&_nc_sid=b9f2ee" />
              </div>
              <div>
                <img  src="https://scontent.cdninstagram.com/v/t51.2885-15/300949023_798468481336632_4767080338575120330_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=cBN-dqwEMmMAX-mZTc9&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT9WruZCsIA_q0oY0gswdgrpJGW02aqEzaCNSyKaCO9WXw&oe=630575FB&_nc_sid=b9f2ee" />
              </div>
              <div>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/286632669_1734618116888586_6026357310411072155_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=IblHQgQBCEMAX_Zuxbd&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT8Ua8_hcGLpU38-FchhiwpH-m8Gv3n7Orri6_rZj6GhGg&oe=630599B5&_nc_sid=b9f2ee" />
              </div>
               <div>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/286298243_398974155499479_8698678661107104004_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=5VPDcHv-eJsAX_dPaUz&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT-ZX0Nd0GZS5wivJYbELOdInEUzVfdpR-Lyu_d1SvvjVg&oe=63051942&_nc_sid=b9f2ee" />
              </div>
              <div>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/285504612_2894217000871262_2042944149845897065_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=tqSkaSqAkgQAX-L5FbJ&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT-gipQSxMFVPofBBs-Wlv6jX8FQ5zyhGUBzGA9-mZ2T9w&oe=63050D35&_nc_sid=b9f2ee" />
              </div>
              <div>
                <img  src="https://scontent.cdninstagram.com/v/t51.2885-15/300949023_798468481336632_4767080338575120330_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=cBN-dqwEMmMAX-mZTc9&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT9WruZCsIA_q0oY0gswdgrpJGW02aqEzaCNSyKaCO9WXw&oe=630575FB&_nc_sid=b9f2ee" />
              </div>
        </div>

{/* SECOND */}


      <div id="container3">
              <div>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/285218666_2081961325319693_6730231299075407859_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=YakF6KNhQlYAX8o7BRQ&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT9P-s2HejjGpe2Tjje0Se2rh6c-PbEEr4LntOJ29tAdFQ&oe=63050C74&_nc_sid=b9f2ee" />
                
              </div>
              <div>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/285401021_552984419647108_3992250782296132999_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=xhE_7cayxRMAX_VbZ4Z&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT-VtIaq1N8y4QDTTnCzGmSvvLKIegEuLbfyIKS2-9vrCA&oe=63055B0D&_nc_sid=b9f2ee" />
              </div>
              <div>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/285100621_370858071774043_389166769621200107_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=koXgi3_bqTgAX-J13G-&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT-EBmCvNTgVeHqPHod5T6FE8jyPMSOMLkiXfJIGerl_Ew&oe=630509E1&_nc_sid=b9f2ee" />
              </div>
              <div>
                <img  src="https://scontent.cdninstagram.com/v/t51.2885-15/284728279_740278007407448_5057299864085407895_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=IN9ejmWPCFsAX_E-Py9&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT9qjgb3omPeMn6i7RPf0IXO_u_4fw1Z4ry5ePLdERx8BQ&oe=63050D36&_nc_sid=b9f2ee" />
              </div>
              <div>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/285218666_2081961325319693_6730231299075407859_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=YakF6KNhQlYAX8o7BRQ&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT9P-s2HejjGpe2Tjje0Se2rh6c-PbEEr4LntOJ29tAdFQ&oe=63050C74&_nc_sid=b9f2ee" />
              </div>
               <div>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/284539193_707715653774700_2611001269885991634_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=BOdUtmVmd-IAX8T23OM&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT_WoAInWoYvSh29yLD2REJAQbfdKVNxYQ7FCRTnjLAg0Q&oe=6305155E&_nc_sid=b9f2ee" />
              </div>
              <div>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/284289186_339103058332970_3046572654450733955_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=oSHfZIIo-rsAX-6vFGA&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT_BimYKAZfUIgYALVNXkAglyKIIwl2AONAYN2SprREAiw&oe=63059A8B&_nc_sid=b9f2ee" />
              </div>
              <div>
                <img  src="https://scontent.cdninstagram.com/v/t51.2885-15/283922296_388804979929625_6823421441872576207_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=bNKUWAoUUxsAX_AUvK1&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AT-r2jq4alYlb2KGXzjs1Mm4I0IJP3NSxhMfx0lps5iA2A&oe=63059A53&_nc_sid=b9f2ee" />
              </div>
        </div>

        
        {/*  FIVE BODY  */}

       <p><Link to="/image">  Load more</Link>
      </p>   
       
       <br />
       <br />
       <br />
       <br />
       <br />
       

       <hr />  

       {/*-----------------------FOOTER SECTION FIRST-1 --------------------------------------- */}

       <Footer/>


        </div>
    )
}

export default Home