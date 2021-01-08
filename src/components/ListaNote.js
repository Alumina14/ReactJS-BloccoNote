import React, { useState, useEffect } from "react";
import NotaService from "../service/NotaService";
import { Link } from "react-router-dom";

const ListaNote = () => {

    const [note, setNote] = useState([]);
    const [notaCorrente, setNotaCorrente] = useState(null);
    const [indexCorrente, setIndexCorrente] = useState(-1);

    useEffect(() => {
        prendiNote();
    }, []);

    const prendiNote = () => {
        NotaService.getAll().then(response => {
            setNote(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    };

    const aggiornaLista = () => {
        prendiNote();
        setNotaCorrente(null);
        setIndexCorrente(-1);
    };

    const setNotaAttiva = (nota, index) => {
        setNotaCorrente(nota);
        setIndexCorrente(index);
    };
    console.log(note);

    return (
        <div>
            <div>
                <h4>Lista Note</h4>
                <ul>
                    {note.data && note.data.map((nota, index) => (
                        <li className={"list-group-item lista " + (index === indexCorrente ? "active" : "")}
                            onClick={() => setNotaAttiva(nota, index)} key={index}>{nota.content}</li>
                    ))}
                </ul>
            </div>
            <div className="col-md-6">
                {notaCorrente ? (
                    <div>
                        <h4>Nota</h4>
                        <div>
                            <label>
                                <strong>Contenuto:</strong>
                            </label>{" "}
                            {notaCorrente.content}
                        </div>
                        <Link
                            to={"/tutorials/" + notaCorrente.id}
                            className="badge badge-warning"
                        >
                            modifica
            </Link>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Clicca su una nota per visualizzarla</p>
                        </div>
                    )}
            </div>
        </div>

    )
}

export default ListaNote;