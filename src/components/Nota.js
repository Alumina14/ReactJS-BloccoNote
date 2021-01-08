import React, { useState, useEffect } from "react";
import NotaService from "../service/NotaService";

const Nota = props => {
    const statoNotaIniziale = {
        id: null,
        content: ""
    };

    const [notaCorrente, setNotaCorrente] = useState(statoNotaIniziale);
    const [messaggio, setMessaggio] = useState("");


    const getNota = id => {
        NotaService.get(id)
            .then(response => {
                setNotaCorrente(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getNota(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNotaCorrente({ ...notaCorrente, [name]: value });
    };


    const aggiornaNota = () => {
        NotaService.update(notaCorrente.id, notaCorrente)
            .then(response => {
                console.log(response.data);
                setMessaggio("La nota è stata aggiornata correttamente.");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const eliminaNota = () => {
        NotaService.remove(notaCorrente.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/note");
            })
            .catch(e => {
                console.log(e);
            });
    };


    return (
        <div>
            nota per id
        </div>
    )
}

export default Nota;