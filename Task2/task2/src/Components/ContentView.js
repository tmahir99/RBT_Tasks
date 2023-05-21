import React from 'react';
import './Style.css';
import safran from '../images/safran.png'

const ImageView = () => {
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <td colSpan="3" className="header"></td>
          </tr>
          <tr>
            <td colSpan={1} className="left-section">
            </td>
            <td colSpan={2} className="right-section"></td>
          </tr>
          <tr>
            <td rowSpan={2} colSpan={1} className="spacer">
                    <h1>Začini</h1>
                    <p>Zanimljivo je na koji nacin su zacini uticali na tokove civilizacije.
                        Koriceni su u narodonoj medicini, ishrani, proizvodnji parfema...
                        Danas su u upotrebi mnogobrojni zacini, a samo neki od njih su:
                    </p>
                    <ul className="mainlist">
                        <li>
                            biber
                            <ul>
                                <li>beli</li>
                                <li>crni</li>
                                <li>zeleni</li>
                            </ul>
                        </li>
                        <li>safran</li>
                        <li>kurkuma</li>
                        <li>kardamon</li>
                    </ul>
                    <p>Prvi zacini kojima se trgovala su <b><i>biber</i></b> i <b><i>cimet</i></b>, a 
                    vreme za koje se podatak vezuje je cak 2000 godina pre nove ere.</p>
                    <pre className="link"><a href='https://sh.wikipedia.org/wiki/Za%C4%8Din#Začini_i_njihova_upotreba' target='_blank'>skok na tabelu sa podacima o proizvodnji</a></pre>
            </td>
            <td rowSpan={2} colSpan={1} style={{width:'50px'}}></td>
            <td colSpan={2} rowSpan={1} className="image-section">
                <img className='r1img' src={safran} alt='safran'></img>
            </td>
            </tr>
            <tr>
            <td colSpan={2} rowSpan={1} className="content-section">
                <p>Proizvodnja zacina po zemljama <sup>*</sup></p>
                <table className='innerTable'>
                    <tbody>
                        <tr>
                            <td>Indija</td>
                            <td>Banglades</td>
                            <td>Turska</td>
                            <td>Kina</td>
                            <td>Pakistan</td>
                        </tr>
                        <tr>
                            <td>70%</td>
                            <td>9%</td>
                            <td>5.7%</td>
                            <td>5.5%</td>
                            <td>3%</td>
                        </tr>
                    </tbody>
                </table>
                <p>izvor informacija: 
        <a
          href="www.wikipedia.com"
          className="wikipedia-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>
      </p>
      <p> <sup>*</sup> -- podaci se odnose na period 2009.- 2010. godina</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ImageView;
