// Si el usuario hace scroll infinito o cambia filtros, puedes duplicar elementos.

// Necesitas evitar re-render masivo y duplicados.
// entrada :
// Entrada:
const page1 = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" }
];

const page2 = [
  { id: 2, name: "Mouse v2" },   // repetido pero actualizado
  { id: 3, name: "Keyboard" }
];

const page3 = [
  { id: 3, name: "Keyboard" },   // repetido exacto
  { id: 4, name: "Monitor" }
]; 
salidas:
[
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse v2" },
  { id: 3, name: "Keyboard" },
  { id: 4, name: "Monitor" }
]

const uniqueData = [...page1, ...page2, ...page3];
const result = Object.values(
    uniqueData.reduce((acc, curr) => {
        if (!acc[curr.id]) {
            acc[curr.id] = curr
        } else {
            if (acc[curr.id].name !== curr.name) {
                acc[curr.id] = curr
            }
        }
        return acc
    }, {})
)


console.log(uniqueData)
console.log(result)


