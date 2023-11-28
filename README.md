# To-Do List con Vue JS

Questa repo contiene una semplice todo list creata con Bootstrap e Vue. 

## Descrizione del codice

1- Ogni todo è un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo.
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no.

2- All'interno di una lista HTML verranno stampati tutti i todo. Se la proprietà del todo è uguale a true. il testo verrà visualizzato barrato.

3- Accanto ad ogni item c'è una "x": cliccando su di essa, il todo viene rimosso dalla lista.

4- Viene predisposto un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

5- Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista.

6- Cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
