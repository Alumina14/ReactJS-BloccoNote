import React, { useState } from "react";
import NotaService from "../service/NotaService";

const AggiungiNota = () => {
    const statoNotaIniziale = {
        id: null,
        content: ""
    };

    // setto stato iniziale

    const [nota, setNota] = useState(statoNotaIniziale);
    const [inserita, setInserita] = useState(false);

    // gestisco il cambio valore

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNota({ ...nota, [name]: value });
    }

    // salvo valore nel json

    const salvaNota = () => {
        let data = {
            content: nota.content
        };

        NotaService.create(data).then(response => {
            setNota({
                id: response.data.id,
                content: response.data.content
            });
            setInserita(true);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    };

    // aggiorno lo stato iniziale

    const nuovaNota = () => {
        setNota(statoNotaIniziale);
        setInserita(false);
    };

    return (
        <div className="submit-form">
            {inserita ?
                (<div>
                    <h4>Nota inserita correttamente.</h4>
                    <button className="btn btn-success" onClick={nuovaNota}>Aggiungi una nuova nota</button>
                </div>) :
                (<div>
                    <div className="form-group">
                        <label htmlFor="content">Contenuto</label>
                        <input type="text" className="form-control" id="content" required value={nota.content} onChange={handleInputChange} name="content" />
                    </div>
                    <button onClick={salvaNota} className="btn btn-success">Aggiungi</button>
                </div>)}
        </div>
    )
}

export default AggiungiNota;