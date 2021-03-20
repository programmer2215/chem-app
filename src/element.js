import React from 'react';

const Element1 = (results) => {

    const result_length = Object.keys(results.results).length;



    const data = results.results;

    return(
        <div id="results-container">
            <div class="section">
                
                <h2 >Atomic Mass:  {data.atomicMass}</h2>
                <h2 >Atomic Number:  {data.atomicNumber}</h2>
                <h2 >Atomic Radius:  {data.atomicRadius}</h2>
                <h2 >Boiling Point:  {data.boilingPoint}</h2>
                <h2 >Bonding Type:  {data.bondingType}</h2>
                <h2 >CpkHex Color:  {data.cpkHexColor}</h2>
                <h2 >Density:  {data.density}</h2>
                <h2 >Electron Affinity:  {data.electronAffinity}</h2>
                <h2 >Electronegativity:  {data.electronegativity}</h2>
                <h2 id="ec">Electronic Configuration: <br></br> {data.electronicConfiguration}</h2>
            </div>

            <div class="section">
                
                <h2 >Group Block:  {data.groupBlock}</h2>
                <h2 >ion Radius:  {data.ionRadius}</h2>
                <h2 >ionization Energy:  {data.ionizationEnergy}</h2>
                <h2 >melting Point:  {data.meltingPoint}</h2>
                <h2 >name:  {data.name}</h2>
                <h2 >oxidation States:  {data.oxidationStates}</h2>
                <h2 >standard State:  {data.standardState}</h2>
                <h2 >symbol:  {data.symbol}</h2>
                <h2 >van Del Waals Radius:  {data.vanDelWaalsRadius}</h2>
                <h2 >year Discovered:  {data.yearDiscovered}</h2>
            </div>
        </div>
    )
}

export default Element1;