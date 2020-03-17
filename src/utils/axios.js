import axios from 'axios';

export const getGene = value => {
    if (value.length < 1) {
        return;
    }

    axios(`http://52.83.65.62:4000/disease2gene/${value}`)
        .then(res => {
            const data = res.data;

        });
}