import React from "react";

//importing BrowserRouter component
import { BrowserRouter as Router, Route, Switch
}} from 'react-router-dom';

//importing header function
import Header from "../header/header";

//importing footer function
import Footer from "../footer/footer"

//importing choose_role page
import Choose_role from "../choose role/choose role";

//importing student_page
import Student_page from "../student page/student page";

//Home function
function Home() {
    return (
        <div className="index" >

            {/* displaying header in home page */}
            <Header />

            {/* body */}
            <body>

                {/* displaying choose_role page in home page */}
                <Choose_role />

                {/* <p>
                Google was initially funded by an August 1998 investment of $100,000 from Andy Bechtolsheim,[20] co-founder of Sun Microsystems. This initial investment served as a motivation to incorporate the company to be able to use the funds.[39][40] Page and Brin initially approached David Cheriton for advice because he had a nearby office in Stanford, and they knew he had startup experience, having recently sold the company he co-founded, Granite Systems, to Cisco for $220 million. David arranged a meeting with Page and Brin and his Granite co-founder Andy Bechtolsheim. The meeting was set for 8 AM at the front porch of David's home in Palo Alto and it had to be brief because Andy had another meeting at Cisco, where he now worked after the acquisition, at 9 AM. Andy briefly tested a demo of the website, liked what he saw, and then went back to his car to grab the check. David Cheriton later also joined in with a $250,000 investment.[41][42]

Google received money from two other angel investors in 1998: Amazon.com founder Jeff Bezos, and entrepreneur Ram Shriram.[43] Page and Brin had first approached Shriram, who was a venture capitalist, for funding and counsel, and Shriram invested $250,000 in Google in February 1998. Shriram knew Bezos because Amazon had acquired Junglee, at which Shriram was the president. It was Shriram who told Bezos about Google. Bezos asked Shriram to meet Google's founders and they met 6 months after Shriram had made his investment when Bezos and his wife were in a vacation trip to the Bay Area. Google's initial funding round had already formally closed but Bezos' status as CEO of Amazon was enough to persuade Page and Brin to extend the round and accept his investment.[44][45]

Between these initial investors, friends, and family Google raised around $1,000,000, which is what allowed them to open up their original shop in Menlo Park, California.[46] Craig Silverstein, a fellow PhD student at Stanford, was hired as the first employee.[22][47][48]

After some additional, small investments through the end of 1998 to early 1999,[43] a new $25 million round of funding was announced on June 7, 1999,[49] with major investors including the venture capital firms Kleiner Perkins and Sequoia Capital.[40] Both firms were initially reticent about investing jointly in Google, as each wanted to retain a larger percentage of control over the company to themselves. Larry and Sergey however insisted in taking investments from both. Both venture companies finally agreed to investing jointly $12.5 million each due to their belief in Google's great potential and through mediation of earlier angel investors Ron Conway and Ram Shriram who had contacts in the venture companies.[50]

Google was initially funded by an August 1998 investment of $100,000 from Andy Bechtolsheim,[20] co-founder of Sun Microsystems. This initial investment served as a motivation to incorporate the company to be able to use the funds.[39][40] Page and Brin initially approached David Cheriton for advice because he had a nearby office in Stanford, and they knew he had startup experience, having recently sold the company he co-founded, Granite Systems, to Cisco for $220 million. David arranged a meeting with Page and Brin and his Granite co-founder Andy Bechtolsheim. The meeting was set for 8 AM at the front porch of David's home in Palo Alto and it had to be brief because Andy had another meeting at Cisco, where he now worked after the acquisition, at 9 AM. Andy briefly tested a demo of the website, liked what he saw, and then went back to his car to grab the check. David Cheriton later also joined in with a $250,000 investment.[41][42]

Google received money from two other angel investors in 1998: Amazon.com founder Jeff Bezos, and entrepreneur Ram Shriram.[43] Page and Brin had first approached Shriram, who was a venture capitalist, for funding and counsel, and Shriram invested $250,000 in Google in February 1998. Shriram knew Bezos because Amazon had acquired Junglee, at which Shriram was the president. It was Shriram who told Bezos about Google. Bezos asked Shriram to meet Google's founders and they met 6 months after Shriram had made his investment when Bezos and his wife were in a vacation trip to the Bay Area. Google's initial funding round had already formally closed but Bezos' status as CEO of Amazon was enough to persuade Page and Brin to extend the round and accept his investment.[44][45]

Between these initial investors, friends, and family Google raised around $1,000,000, which is what allowed them to open up their original shop in Menlo Park, California.[46] Craig Silverstein, a fellow PhD student at Stanford, was hired as the first employee.[22][47][48]

After some additional, small investments through the end of 1998 to early 1999,[43] a new $25 million round of funding was announced on June 7, 1999,[49] with major investors including the venture capital firms Kleiner Perkins and Sequoia Capital.[40] Both firms were initially reticent about investing jointly in Google, as each wanted to retain a larger percentage of control over the company to themselves. Larry and Sergey however insisted in taking investments from both. Both venture companies finally agreed to investing jointly $12.5 million each due to their belief in Google's great potential and through mediation of earlier angel investors Ron Conway and Ram Shriram who had contacts in the venture companies.[50]

Google was initially funded by an August 1998 investment of $100,000 from Andy Bechtolsheim,[20] co-founder of Sun Microsystems. This initial investment served as a motivation to incorporate the company to be able to use the funds.[39][40] Page and Brin initially approached David Cheriton for advice because he had a nearby office in Stanford, and they knew he had startup experience, having recently sold the company he co-founded, Granite Systems, to Cisco for $220 million. David arranged a meeting with Page and Brin and his Granite co-founder Andy Bechtolsheim. The meeting was set for 8 AM at the front porch of David's home in Palo Alto and it had to be brief because Andy had another meeting at Cisco, where he now worked after the acquisition, at 9 AM. Andy briefly tested a demo of the website, liked what he saw, and then went back to his car to grab the check. David Cheriton later also joined in with a $250,000 investment.[41][42]

Google received money from two other angel investors in 1998: Amazon.com founder Jeff Bezos, and entrepreneur Ram Shriram.[43] Page and Brin had first approached Shriram, who was a venture capitalist, for funding and counsel, and Shriram invested $250,000 in Google in February 1998. Shriram knew Bezos because Amazon had acquired Junglee, at which Shriram was the president. It was Shriram who told Bezos about Google. Bezos asked Shriram to meet Google's founders and they met 6 months after Shriram had made his investment when Bezos and his wife were in a vacation trip to the Bay Area. Google's initial funding round had already formally closed but Bezos' status as CEO of Amazon was enough to persuade Page and Brin to extend the round and accept his investment.[44][45]

Between these initial investors, friends, and family Google raised around $1,000,000, which is what allowed them to open up their original shop in Menlo Park, California.[46] Craig Silverstein, a fellow PhD student at Stanford, was hired as the first employee.[22][47][48]

After some additional, small investments through the end of 1998 to early 1999,[43] a new $25 million round of funding was announced on June 7, 1999,[49] with major investors including the venture capital firms Kleiner Perkins and Sequoia Capital.[40] Both firms were initially reticent about investing jointly in Google, as each wanted to retain a larger percentage of control over the company to themselves. Larry and Sergey however insisted in taking investments from both. Both venture companies finally agreed to investing jointly $12.5 million each due to their belief in Google's great potential and through mediation of earlier angel investors Ron Conway and Ram Shriram who had contacts in the venture companies.[50]

Google was initially funded by an August 1998 investment of $100,000 from Andy Bechtolsheim,[20] co-founder of Sun Microsystems. This initial investment served as a motivation to incorporate the company to be able to use the funds.[39][40] Page and Brin initially approached David Cheriton for advice because he had a nearby office in Stanford, and they knew he had startup experience, having recently sold the company he co-founded, Granite Systems, to Cisco for $220 million. David arranged a meeting with Page and Brin and his Granite co-founder Andy Bechtolsheim. The meeting was set for 8 AM at the front porch of David's home in Palo Alto and it had to be brief because Andy had another meeting at Cisco, where he now worked after the acquisition, at 9 AM. Andy briefly tested a demo of the website, liked what he saw, and then went back to his car to grab the check. David Cheriton later also joined in with a $250,000 investment.[41][42]

Google received money from two other angel investors in 1998: Amazon.com founder Jeff Bezos, and entrepreneur Ram Shriram.[43] Page and Brin had first approached Shriram, who was a venture capitalist, for funding and counsel, and Shriram invested $250,000 in Google in February 1998. Shriram knew Bezos because Amazon had acquired Junglee, at which Shriram was the president. It was Shriram who told Bezos about Google. Bezos asked Shriram to meet Google's founders and they met 6 months after Shriram had made his investment when Bezos and his wife were in a vacation trip to the Bay Area. Google's initial funding round had already formally closed but Bezos' status as CEO of Amazon was enough to persuade Page and Brin to extend the round and accept his investment.[44][45]

Between these initial investors, friends, and family Google raised around $1,000,000, which is what allowed them to open up their original shop in Menlo Park, California.[46] Craig Silverstein, a fellow PhD student at Stanford, was hired as the first employee.[22][47][48]

After some additional, small investments through the end of 1998 to early 1999,[43] a new $25 million round of funding was announced on June 7, 1999,[49] with major investors including the venture capital firms Kleiner Perkins and Sequoia Capital.[40] Both firms were initially reticent about investing jointly in Google, as each wanted to retain a larger percentage of control over the company to themselves. Larry and Sergey however insisted in taking investments from both. Both venture companies finally agreed to investing jointly $12.5 million each due to their belief in Google's great potential and through mediation of earlier angel investors Ron Conway and Ram Shriram who had contacts in the venture companies.[50]

Google was initially funded by an August 1998 investment of $100,000 from Andy Bechtolsheim,[20] co-founder of Sun Microsystems. This initial investment served as a motivation to incorporate the company to be able to use the funds.[39][40] Page and Brin initially approached David Cheriton for advice because he had a nearby office in Stanford, and they knew he had startup experience, having recently sold the company he co-founded, Granite Systems, to Cisco for $220 million. David arranged a meeting with Page and Brin and his Granite co-founder Andy Bechtolsheim. The meeting was set for 8 AM at the front porch of David's home in Palo Alto and it had to be brief because Andy had another meeting at Cisco, where he now worked after the acquisition, at 9 AM. Andy briefly tested a demo of the website, liked what he saw, and then went back to his car to grab the check. David Cheriton later also joined in with a $250,000 investment.[41][42]

Google received money from two other angel investors in 1998: Amazon.com founder Jeff Bezos, and entrepreneur Ram Shriram.[43] Page and Brin had first approached Shriram, who was a venture capitalist, for funding and counsel, and Shriram invested $250,000 in Google in February 1998. Shriram knew Bezos because Amazon had acquired Junglee, at which Shriram was the president. It was Shriram who told Bezos about Google. Bezos asked Shriram to meet Google's founders and they met 6 months after Shriram had made his investment when Bezos and his wife were in a vacation trip to the Bay Area. Google's initial funding round had already formally closed but Bezos' status as CEO of Amazon was enough to persuade Page and Brin to extend the round and accept his investment.[44][45]

Between these initial investors, friends, and family Google raised around $1,000,000, which is what allowed them to open up their original shop in Menlo Park, California.[46] Craig Silverstein, a fellow PhD student at Stanford, was hired as the first employee.[22][47][48]

After some additional, small investments through the end of 1998 to early 1999,[43] a new $25 million round of funding was announced on June 7, 1999,[49] with major investors including the venture capital firms Kleiner Perkins and Sequoia Capital.[40] Both firms were initially reticent about investing jointly in Google, as each wanted to retain a larger percentage of control over the company to themselves. Larry and Sergey however insisted in taking investments from both. Both venture companies finally agreed to investing jointly $12.5 million each due to their belief in Google's great potential and through mediation of earlier angel investors Ron Conway and Ram Shriram who had contacts in the venture companies.[50]

Google was initially funded by an August 1998 investment of $100,000 from Andy Bechtolsheim,[20] co-founder of Sun Microsystems. This initial investment served as a motivation to incorporate the company to be able to use the funds.[39][40] Page and Brin initially approached David Cheriton for advice because he had a nearby office in Stanford, and they knew he had startup experience, having recently sold the company he co-founded, Granite Systems, to Cisco for $220 million. David arranged a meeting with Page and Brin and his Granite co-founder Andy Bechtolsheim. The meeting was set for 8 AM at the front porch of David's home in Palo Alto and it had to be brief because Andy had another meeting at Cisco, where he now worked after the acquisition, at 9 AM. Andy briefly tested a demo of the website, liked what he saw, and then went back to his car to grab the check. David Cheriton later also joined in with a $250,000 investment.[41][42]

Google received money from two other angel investors in 1998: Amazon.com founder Jeff Bezos, and entrepreneur Ram Shriram.[43] Page and Brin had first approached Shriram, who was a venture capitalist, for funding and counsel, and Shriram invested $250,000 in Google in February 1998. Shriram knew Bezos because Amazon had acquired Junglee, at which Shriram was the president. It was Shriram who told Bezos about Google. Bezos asked Shriram to meet Google's founders and they met 6 months after Shriram had made his investment when Bezos and his wife were in a vacation trip to the Bay Area. Google's initial funding round had already formally closed but Bezos' status as CEO of Amazon was enough to persuade Page and Brin to extend the round and accept his investment.[44][45]

Between these initial investors, friends, and family Google raised around $1,000,000, which is what allowed them to open up their original shop in Menlo Park, California.[46] Craig Silverstein, a fellow PhD student at Stanford, was hired as the first employee.[22][47][48]

After some additional, small investments through the end of 1998 to early 1999,[43] a new $25 million round of funding was announced on June 7, 1999,[49] with major investors including the venture capital firms Kleiner Perkins and Sequoia Capital.[40] Both firms were initially reticent about investing jointly in Google, as each wanted to retain a larger percentage of control over the company to themselves. Larry and Sergey however insisted in taking investments from both. Both venture companies finally agreed to investing jointly $12.5 million each due to their belief in Google's great potential and through mediation of earlier angel investors Ron Conway and Ram Shriram who had contacts in the venture companies.[50]

                </p> */}
            </body>

            {/* displaying footer in home page */}
            <Footer />
        </div>
    );
}
export default Home;
