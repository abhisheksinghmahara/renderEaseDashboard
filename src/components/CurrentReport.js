import React from "react";
import styles from "../styles.module.css";
import downloadSymbol from '../assets/downloadsymbol.svg';
import cautionSvg from '../assets/caution.svg';
import totalAssets from '../assets/totalAssets.svg';
import total3DView from '../assets/total3DView.svg';
import totalARViews from '../assets/totalARViews.svg';
import userEngagement from '../assets/userEngagement.svg';
import avgInteraction from '../assets/avgInteraction.svg';

const cardData = [
  {
    id: 1,
    imgSrc: totalAssets,
    altText: "Total Assets",
    num: 69,
    title: "Total Assets",
    showCaution: false,
  },
  {
    id: 2,
    imgSrc: total3DView,
    altText: "Total 3D Views",
    num: 39,
    title: "Total 3D Views",
    showCaution: false,
  },
  {
    id: 3,
    imgSrc: totalARViews,
    altText: "Total AR Views",
    num: 39,
    title: "Total AR Views",
    showCaution: true,
  },
  {
    id: 4,
    imgSrc: userEngagement,
    altText: "User Engagement",
    num: "26%",
    title: "User Engagement",
    showCaution: true,
  },
  {
    id: 5,
    imgSrc: avgInteraction,
    altText: "Avg. Interactions",
    num: 4,
    title: "Avg. Interactions",
    showCaution: true,
  },
];

const CurrentReport = () => {
  return (
    <div className={styles.currentReportandAnalyticsdiv}>
      <div className={styles.currentReportDiv}>
        Current Report :{" "}
        <span className={styles.organizationTxt}>
          Organization - Ben’s Products{" "}
        </span>
        <span>
          <button className={styles.downloadbtn}>
            <img src={downloadSymbol} alt="DownloadSymbol" />
            <span className={styles.downloadBtnTxt}>Download</span>
          </button>
        </span>
      </div>

      {/* Analytical Cards */}
      <div className={styles.analyticalCards}>
        {cardData.map((card) => (
          <div key={card.id} className={styles.card1}>
            <div className={styles.div1card1}>
              <div className={styles.div2card1}>
                <div className={styles.LogoCard1}>
                  <div className={styles.LogoofCards}>
                    <img src={card.imgSrc} alt={card.altText} />
                  </div>
                </div>
                <div className={styles.numTitlecard1}>
                  <div className={styles.numCard1}>{card.num}</div>
                  <div className={styles.titleCard1}>
                    {card.title}
                    {card.showCaution && (
                      <span>
                        <img src={cautionSvg} alt="Caution" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentReport;

// another Option for the same 

// const CurrentReport=()=>{
//     return(
// <div className={styles.currentReportandAnalyticsdiv}>
//           <div className={styles.currentReportDiv}>
//             Current Report :{" "}
//             <span className={styles.organizationTxt}>
//               Organization - Ben’s Products{" "}
//             </span>
//             <span>
//               <button className={styles.downloadbtn}>
//                 <img src={downloadSymbol} alt="DownloadSymbol"/>
//                 <span className={styles.downloadBtnTxt}>Download</span>
//               </button>
//             </span>
//           </div>
//           {/* analyticalCards  div*/}
//           <div className={styles.analyticalCards}>
             
//              {/* card1  */}
//             <div className={styles.card1}>
//               <div className={styles.div1card1}>
//                 <div className={styles.div2card1}>
//                   <div className={styles.LogoCard1}>
//                     <div className={styles.LogoofCards}>
//                     <img src={totalAssets} alt="totalAsset"/>
//                     </div>
//                   </div>
//                   <div className={styles.numTitlecard1}>
//                     <div className={styles.numCard1}>69</div>
//                     <div className={styles.titleCard1}>Total Assets</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* card2  */}
//             <div className={styles.card1}>
//               <div className={styles.div1card1}>
//                 <div className={styles.div2card1}>
//                   <div className={styles.LogoCard1}>
//                     <div className={styles.LogoofCards}>
//                     <img src={total3DView} alt="total3DView"/>
//                     </div>
//                   </div>
//                   <div className={styles.numTitlecard1}>
//                     <div className={styles.numCard1}>39</div>
//                     <div className={styles.titleCard1}>Total 3D Views</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* card3  */}
//             <div className={styles.card1}>
//               <div className={styles.div1card1}>
//                 <div className={styles.div2card1}>
//                   <div className={styles.LogoCard1}>
//                     <div className={styles.LogoofCards}>
//                     <img src={totalARViews} alt="totalARViews"/>
//                     </div>
//                   </div>
//                   <div className={styles.numTitlecard1}>
//                     <div className={styles.numCard1}>39</div>
//                     <div className={styles.titleCard1}>
//                       Total AR Views
//                       <span>
//                       <img src={cautionSvg} alt="cautionSvg"/>  
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* card4  */}
//             <div className={styles.card1}>
//               <div className={styles.div1card1}>
//                 <div className={styles.div2card1}>
//                   <div className={styles.LogoCard1}>
//                     <div className={styles.LogoofCards}>
//                     <img src={userEngagement} alt="userEngagement"/>
//                     </div>
//                   </div>
//                   <div className={styles.numTitlecard1}>
//                     <div className={styles.numCard1}>26%</div>
//                     <div className={styles.titleCard1}>
//                       User Engagement
//                       <span>
//                       <img src={cautionSvg} alt="cautionSvg"/>  
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* card5  */}
//             <div className={styles.card1}>
//               <div className={styles.div1card1}>
//                 <div className={styles.div2card1}>
//                   <div className={styles.LogoCard1}>
//                     <div className={styles.LogoofCards}>
//                     <img src={avgInteraction} alt="avgInteraction"/> 
//                     </div>
//                   </div>
//                   <div className={styles.numTitlecard1}>
//                     <div className={styles.numCard1}>4</div>
//                     <div className={styles.titleCard1}>
//                       Avg. Interactions
//                       <span>
//                       <img src={cautionSvg} alt="cautionSvg"/>  
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//     );
// }
