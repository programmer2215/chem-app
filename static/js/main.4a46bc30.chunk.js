(this["webpackJsonpchem-app"]=this["webpackJsonpchem-app"]||[]).push([[0],{11:function(e,t,o){},13:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var i=o(1),n=o.n(i),j=o(4),s=o.n(j),c=(o(11),o(3)),u=o.n(c),a=o(5),l=o(6),b=(o(13),o(0)),x=function(e){Object.keys(e.results).length;var t=e.results;return Object(b.jsxs)("div",{id:"results-container",children:[Object(b.jsxs)("div",{class:"section",children:[Object(b.jsxs)("h2",{children:["Atomic Mass:  ",t.atomicMass]}),Object(b.jsxs)("h2",{children:["Atomic Number:  ",t.atomicNumber]}),Object(b.jsxs)("h2",{children:["Atomic Radius:  ",t.atomicRadius]}),Object(b.jsxs)("h2",{children:["Boiling Point:  ",t.boilingPoint]}),Object(b.jsxs)("h2",{children:["Bonding Type:  ",t.bondingType]}),Object(b.jsxs)("h2",{children:["CpkHex Color:  ",t.cpkHexColor]}),Object(b.jsxs)("h2",{children:["Density:  ",t.density]}),Object(b.jsxs)("h2",{children:["Electron Affinity:  ",t.electronAffinity]}),Object(b.jsxs)("h2",{children:["Electronegativity:  ",t.electronegativity]}),Object(b.jsxs)("h2",{id:"ec",children:["Electronic Configuration: ",Object(b.jsx)("br",{})," ",t.electronicConfiguration]})]}),Object(b.jsxs)("div",{class:"section",children:[Object(b.jsxs)("h2",{children:["Group Block:  ",t.groupBlock]}),Object(b.jsxs)("h2",{children:["ion Radius:  ",t.ionRadius]}),Object(b.jsxs)("h2",{children:["ionization Energy:  ",t.ionizationEnergy]}),Object(b.jsxs)("h2",{children:["melting Point:  ",t.meltingPoint]}),Object(b.jsxs)("h2",{children:["name:  ",t.name]}),Object(b.jsxs)("h2",{children:["oxidation States:  ",t.oxidationStates]}),Object(b.jsxs)("h2",{children:["standard State:  ",t.standardState]}),Object(b.jsxs)("h2",{children:["symbol:  ",t.symbol]}),Object(b.jsxs)("h2",{children:["van Del Waals Radius:  ",t.vanDelWaalsRadius]}),Object(b.jsxs)("h2",{children:["year Discovered:  ",t.yearDiscovered]})]})]})};var r=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),o=t[0],n=t[1],j=function(){var e=Object(a.a)(u.a.mark((function e(t){var o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://neelpatel05.pythonanywhere.com/element/atomicname?atomicname=".concat(t));case 2:return o=e.sent,e.next=5,o.json();case 5:i=e.sent,n(i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{id:"title",children:"Elemental Data"}),Object(b.jsx)("div",{className:"search-pane",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("datalist",{id:"search-res",children:[Object(b.jsx)("option",{value:"Hydrogen"}),Object(b.jsx)("option",{value:"Helium"}),Object(b.jsx)("option",{value:"Lithium"}),Object(b.jsx)("option",{value:"Beryllium"}),Object(b.jsx)("option",{value:"Boron"}),Object(b.jsx)("option",{value:"Carbon"}),Object(b.jsx)("option",{value:"Nitrogen"}),Object(b.jsx)("option",{value:"Oxygen"}),Object(b.jsx)("option",{value:"Fluorine"}),Object(b.jsx)("option",{value:"Neon"}),Object(b.jsx)("option",{value:"Sodium"}),Object(b.jsx)("option",{value:"Magnesium"}),Object(b.jsx)("option",{value:"Aluminum"}),Object(b.jsx)("option",{value:"Silicon"}),Object(b.jsx)("option",{value:"Phosphorus"}),Object(b.jsx)("option",{value:"Sulfur"}),Object(b.jsx)("option",{value:"Chlorine"}),Object(b.jsx)("option",{value:"Argon"}),Object(b.jsx)("option",{value:"Potassium"}),Object(b.jsx)("option",{value:"Calcium"}),Object(b.jsx)("option",{value:"Scandium"}),Object(b.jsx)("option",{value:"Titanium"}),Object(b.jsx)("option",{value:"Vanadium"}),Object(b.jsx)("option",{value:"Chromium"}),Object(b.jsx)("option",{value:"Manganese"}),Object(b.jsx)("option",{value:"Iron"}),Object(b.jsx)("option",{value:"Cobalt"}),Object(b.jsx)("option",{value:"Nickel"}),Object(b.jsx)("option",{value:"Copper"}),Object(b.jsx)("option",{value:"Zinc"}),Object(b.jsx)("option",{value:"Gallium"}),Object(b.jsx)("option",{value:"Germanium"}),Object(b.jsx)("option",{value:"Arsenic"}),Object(b.jsx)("option",{value:"Selenium"}),Object(b.jsx)("option",{value:"Bromine"}),Object(b.jsx)("option",{value:"Krypton"}),Object(b.jsx)("option",{value:"Rubidium"}),Object(b.jsx)("option",{value:"Strontium"}),Object(b.jsx)("option",{value:"Yttrium"}),Object(b.jsx)("option",{value:"Zirconium"}),Object(b.jsx)("option",{value:"Niobium"}),Object(b.jsx)("option",{value:"Molybdenum"}),Object(b.jsx)("option",{value:"Technetium"}),Object(b.jsx)("option",{value:"Ruthenium"}),Object(b.jsx)("option",{value:"Rhodium"}),Object(b.jsx)("option",{value:"Palladium"}),Object(b.jsx)("option",{value:"Silver"}),Object(b.jsx)("option",{value:"Cadmium"}),Object(b.jsx)("option",{value:"Indium"}),Object(b.jsx)("option",{value:"Tin"}),Object(b.jsx)("option",{value:"Antimony"}),Object(b.jsx)("option",{value:"Tellurium"}),Object(b.jsx)("option",{value:"Iodine"}),Object(b.jsx)("option",{value:"Xenon"}),Object(b.jsx)("option",{value:"Cesium"}),Object(b.jsx)("option",{value:"Barium"}),Object(b.jsx)("option",{value:"Lanthanum"}),Object(b.jsx)("option",{value:"Cerium"}),Object(b.jsx)("option",{value:"Praseodymium"}),Object(b.jsx)("option",{value:"Neodymium"}),Object(b.jsx)("option",{value:"Promethium"}),Object(b.jsx)("option",{value:"Samarium"}),Object(b.jsx)("option",{value:"Europium"}),Object(b.jsx)("option",{value:"Gadolinium"}),Object(b.jsx)("option",{value:"Terbium"}),Object(b.jsx)("option",{value:"Dysprosium"}),Object(b.jsx)("option",{value:"Holmium"}),Object(b.jsx)("option",{value:"Erbium"}),Object(b.jsx)("option",{value:"Thulium"}),Object(b.jsx)("option",{value:"Ytterbium"}),Object(b.jsx)("option",{value:"Lutetium"}),Object(b.jsx)("option",{value:"Hafnium"}),Object(b.jsx)("option",{value:"Tantalum"}),Object(b.jsx)("option",{value:"Tungsten"}),Object(b.jsx)("option",{value:"Rhenium"}),Object(b.jsx)("option",{value:"Osmium"}),Object(b.jsx)("option",{value:"Iridium"}),Object(b.jsx)("option",{value:"Platinum"}),Object(b.jsx)("option",{value:"Gold"}),Object(b.jsx)("option",{value:"Mercury"}),Object(b.jsx)("option",{value:"Thallium"}),Object(b.jsx)("option",{value:"Lead"}),Object(b.jsx)("option",{value:"Bismuth"}),Object(b.jsx)("option",{value:"Polonium"}),Object(b.jsx)("option",{value:"Astatine"}),Object(b.jsx)("option",{value:"Radon"}),Object(b.jsx)("option",{value:"Francium"}),Object(b.jsx)("option",{value:"Radium"}),Object(b.jsx)("option",{value:"Actinium"}),Object(b.jsx)("option",{value:"Thorium"}),Object(b.jsx)("option",{value:"Protactinium"}),Object(b.jsx)("option",{value:"Uranium"}),Object(b.jsx)("option",{value:"Neptunium"}),Object(b.jsx)("option",{value:"Plutonium"}),Object(b.jsx)("option",{value:"Americium"}),Object(b.jsx)("option",{value:"Curium"}),Object(b.jsx)("option",{value:"Berkelium"}),Object(b.jsx)("option",{value:"Californium"}),Object(b.jsx)("option",{value:"Einsteinium"}),Object(b.jsx)("option",{value:"Fermium"}),Object(b.jsx)("option",{value:"Mendelevium"}),Object(b.jsx)("option",{value:"Nobelium"}),Object(b.jsx)("option",{value:"Lawrencium"}),Object(b.jsx)("option",{value:"Rutherfordium"}),Object(b.jsx)("option",{value:"Dubnium"}),Object(b.jsx)("option",{value:"Seaborgium"}),Object(b.jsx)("option",{value:"Bohrium"}),Object(b.jsx)("option",{value:"Hassium"}),Object(b.jsx)("option",{value:"Meitnerium"}),Object(b.jsx)("option",{value:"Darmstadtium"}),Object(b.jsx)("option",{value:"Roentgenium"}),Object(b.jsx)("option",{value:"Copernicium"}),Object(b.jsx)("option",{value:"Nihonium"}),Object(b.jsx)("option",{value:"Flerovium"}),Object(b.jsx)("option",{value:"Moscovium"}),Object(b.jsx)("option",{value:"Livermorium"}),Object(b.jsx)("option",{value:"Tennessine"}),Object(b.jsx)("option",{value:"Oganesson"})]}),Object(b.jsx)("input",{id:"search-bar",list:"search-res",type:"text",defaultValue:"Hydrogen"}),Object(b.jsx)("button",{id:"search-btn",type:"button",onClick:function(){j(document.getElementById("search-bar").value)},children:"Search"})]})}),Object(b.jsx)(x,{results:o})]})},O=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,16)).then((function(t){var o=t.getCLS,i=t.getFID,n=t.getFCP,j=t.getLCP,s=t.getTTFB;o(e),i(e),n(e),j(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(r,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.4a46bc30.chunk.js.map