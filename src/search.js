import React from 'react';
import App from './App';

function Search () {

    

    return(
        <div className="search-pane">
      <form>
          <datalist id="search-res">
            <option value='Hydrogen'/>
            <option value='Helium'/>
            <option value='Lithium'/>
            <option value='Beryllium'/>
            <option value='Boron'/>
            <option value='Carbon'/>
            <option value='Nitrogen'/>
            <option value='Oxygen'/>
            <option value='Fluorine'/>
            <option value='Neon'/>
            <option value='Sodium'/>
            <option value='Magnesium'/>
            <option value='Aluminum'/>
            <option value='Silicon'/>
            <option value='Phosphorus'/>
            <option value='Sulfur'/>
            <option value='Chlorine'/>
            <option value='Argon'/>
            <option value='Potassium'/>
            <option value='Calcium'/>
            <option value='Scandium'/>
            <option value='Titanium'/>
            <option value='Vanadium'/>
            <option value='Chromium'/>
            <option value='Manganese'/>
            <option value='Iron'/>
            <option value='Cobalt'/>
            <option value='Nickel'/>
            <option value='Copper'/>
            <option value='Zinc'/>
            <option value='Gallium'/>
            <option value='Germanium'/>
            <option value='Arsenic'/>
            <option value='Selenium'/>
            <option value='Bromine'/>
            <option value='Krypton'/>
            <option value='Rubidium'/>
            <option value='Strontium'/>
            <option value='Yttrium'/>
            <option value='Zirconium'/>
            <option value='Niobium'/>
            <option value='Molybdenum'/>
            <option value='Technetium'/>
            <option value='Ruthenium'/>
            <option value='Rhodium'/>
            <option value='Palladium'/>
            <option value='Silver'/>
            <option value='Cadmium'/>
            <option value='Indium'/>
            <option value='Tin'/>
            <option value='Antimony'/>
            <option value='Tellurium'/>
            <option value='Iodine'/>
            <option value='Xenon'/>
            <option value='Cesium'/>
            <option value='Barium'/>
            <option value='Lanthanum'/>
            <option value='Cerium'/>
            <option value='Praseodymium'/>
            <option value='Neodymium'/>
            <option value='Promethium'/>
            <option value='Samarium'/>
            <option value='Europium'/>
            <option value='Gadolinium'/>
            <option value='Terbium'/>
            <option value='Dysprosium'/>
            <option value='Holmium'/>
            <option value='Erbium'/>
            <option value='Thulium'/>
            <option value='Ytterbium'/>
            <option value='Lutetium'/>
            <option value='Hafnium'/>
            <option value='Tantalum'/>
            <option value='Tungsten'/>
            <option value='Rhenium'/>
            <option value='Osmium'/>
            <option value='Iridium'/>
            <option value='Platinum'/>
            <option value='Gold'/>
            <option value='Mercury'/>
            <option value='Thallium'/>
            <option value='Lead'/>
            <option value='Bismuth'/>
            <option value='Polonium'/>
            <option value='Astatine'/>
            <option value='Radon'/>
            <option value='Francium'/>
            <option value='Radium'/>
            <option value='Actinium'/>
            <option value='Thorium'/>
            <option value='Protactinium'/>
            <option value='Uranium'/>
            <option value='Neptunium'/>
            <option value='Plutonium'/>
            <option value='Americium'/>
            <option value='Curium'/>
            <option value='Berkelium'/>
            <option value='Californium'/>
            <option value='Einsteinium'/>
            <option value='Fermium'/>
            <option value='Mendelevium'/>
            <option value='Nobelium'/>
            <option value='Lawrencium'/>
            <option value='Rutherfordium'/>
            <option value='Dubnium'/>
            <option value='Seaborgium'/>
            <option value='Bohrium'/>
            <option value='Hassium'/>
            <option value='Meitnerium'/>
            <option value='Darmstadtium'/>
            <option value='Roentgenium'/>
            <option value='Copernicium'/>
            <option value='Nihonium'/>
            <option value='Flerovium'/>
            <option value='Moscovium'/>
            <option value='Livermorium'/>
            <option value='Tennessine'/>
            <option value='Oganesson'/>
          </datalist>
        <input id="search-bar" list="search-res" type="text" defaultValue="Hydrogen"/>
        <button id="search-btn" type="button" onClick={App.search}>Search</button>
      </form>
      </div>
    )
};

export default Search;