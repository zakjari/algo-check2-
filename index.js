// Tri par Insertion
// fonctionne de trille qui prend arr
function insertionSort(arr) {   
    // commence par le deuxieme element  
    for (let i = 1; i < arr.length; i++) {
        // sauvgarder les emelemts  dans le tableau
        let valeurActuelle = arr[i];
        // pour comparer les elements 
        let j = i - 1;

        //boucle while 
        while (j >= 0 && arr[j] > valeurActuelle) {
            // cest pour le deplacer le element le plus grands 
            arr[j + 1] = arr[j];
            //c pour decremente est le deplacer vers la gauche
            j--;
        }
        //plsce la valeur ctuelle dans le taleau a la bonne position 
        arr[j + 1] = valeurActuelle;
    }
    //returne le taleau trie 
    return arr;
}


let tableau = [5, 3, 8, 4, 2, 9, 11, 1,];
// affiche le tableau trie dann la console 
console.log("Tableau trié : " + insertionSort(tableau));

