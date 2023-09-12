import React from 'react';
import './ManageSurahs.css';
import { Surah } from "./Surah"

export default function ManageSurahs() {
    return (
        Surah.map(a => (
            <div className="main" key={a.SurahID}>
                <div className="SurahId">{a.SurahID}</div>
                <div className="SurahNameUr">{a.SurahNameU}</div>
                <div className="SurahNameE">{a.SurahNameE}</div>
                <div className="Nazool">Nuzool in {a.Nazool}</div>
                
                <details className='details'>
                    <summary>Introduction of surah</summary>
                    <div><br /></div>
                    <div className="SurahIntro">{a.SurahIntro}</div>
                    
                </details>
                
            </div>
        ))
    );
}